import LoginForm from "../../components/LoginForm/LoginForm";
import React, { useEffect, useState } from "react";
import Text from "../../styleComponents/Text";

import "./LoginView.scss";



interface IProps {}

export const LoginView: React.FC<IProps> = (props) => {
  const {} = props;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const isInvalid = password === "" || email === "";

  const localAPI = `http://127.0.0.1:8000/api/`;

  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isLoggedIn = await login({ email, password });
    if (isLoggedIn) {
      navigate(FEED_VIEW_ROUTE);
    } else {
      setError("invalid credentials");
    }
  };

  const navigateToFeed = () => {};

  useEffect(() => {
    navigateToFeed();
  });

  return (
    <div className="LoginView">
      <div className="LoginView-header">
        <Text className="LoginView-logo" fontSize="large" fontWeight="bold">
          Skateparks
        </Text>
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
