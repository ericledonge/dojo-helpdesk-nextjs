"use client";

import AuthForm from "../auth-form";

const Signup = () => {
  const handleSubmit = async (e, email, password) => {
    e.preventDefault();

    console.log(email, password);
  };

  return (
    <main>
      <h2 className="text-center">Sign up</h2>

      <AuthForm handleSubmit={handleSubmit} />
    </main>
  );
};

export default Signup;
