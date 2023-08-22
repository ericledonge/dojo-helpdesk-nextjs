"use client";

import AuthForm from "../auth-form";

const Login = () => {
  const handleSubmit = async (e, email, password) => {
    e.preventDefault();

    console.log(email, password);
  };

  return (
    <main>
      <h2 className="text-center">Log in</h2>

      <AuthForm handleSubmit={handleSubmit} />
    </main>
  );
};

export default Login;
