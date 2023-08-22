import { Navbar } from "../components/navbar";

const DashboardLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default DashboardLayout;
