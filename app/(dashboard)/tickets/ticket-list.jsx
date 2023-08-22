import Link from "next/link";

const getTickets = async () => {
  // imitate delay
  await new Promise((resolve) => setTimeout(resolve, 3000));

  const response = await fetch("http://localhost:4000/tickets", {
    next: {
      revalidate: 0, // use 0 to opt out of using cache
    },
  });

  return response.json();
};

export const TicketList = async () => {
  const tickets = await getTickets();

  return (
    <>
      {tickets.map((ticket) => (
        <div key={ticket.id} className="card my-5">
          <Link key={ticket.id} href={`/tickets/${ticket.id}`}>
            <h3>{ticket.title}</h3>
            <p>{ticket.body.slice(0, 200)}</p>
            <div className={`pill ${ticket.priority}`}>
              {ticket.priority} priority
            </div>
          </Link>
        </div>
      ))}

      {tickets.length === 0 && (
        <p className="text-center">There are no open tickets, yay!</p>
      )}
    </>
  );
};