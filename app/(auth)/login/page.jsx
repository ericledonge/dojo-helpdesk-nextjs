"use client";

import { useState } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

import AuthForm from "../auth-form";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();

  const [error, setError] = useState("");

  const handleSubmit = async (e, email, password) => {
    e.preventDefault();
    setError("");

    const supabase = await createClientComponentClient();
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) setError(error.message);

    if (!error) router.push("/");
  };

  return (
    <main>
      <h2 className="text-center">Log in</h2>

      <AuthForm handleSubmit={handleSubmit} />

      {error && <div className="error">{error}</div>}
    </main>
  );
};

export default Login;
