import LoginForm from "../../components/LoginForm/LoginForm";
import React, { useEffect, useState } from "react";

import styles from "./LoginView.module.scss";
import { Paragraph } from "../../src/styleComponents/Paragraph";

interface IProps {}

export const LoginView: React.FC<IProps> = (props) => {
  const {} = props;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const isInvalid = password === "" || email === "";

  const localAPI = `http://127.0.0.1:8000/api/`;

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // const isLoggedIn = await login({ email, password });
    // if (isLoggedIn) {
    //   navigate(FEED_VIEW_ROUTE);
    // } else {
    //   setError("invalid credentials");
    // }
  };

  const navigateToFeed = () => {};

  useEffect(() => {
    navigateToFeed();
  });

  return (
    <div className="LoginView">
      <div className="LoginView-header">
        <Paragraph>Skateparks</Paragraph>
      </div>
      <LoginForm
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        handleLogin={handleLogin}
      />
    </div>
  );
};

export default LoginView;
