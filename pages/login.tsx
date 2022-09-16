import LoginForm from "../components/LoginForm";
import { NextPage } from "next";
import { FormEvent, useState } from "react";

const Login: NextPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {};
  return (
    <div>
      <p>login form</p>
      <LoginForm />
    </div>
  );
};
export default Login;
