import React from "react";
import TextInput from "../../styleComponents/TextInput";
import Button from "../../styleComponents/Button/Button";

import "./LoginForm.scss";
import {
  FEED_VIEW_ROUTE,
  SIGNUP_VIEW_ROUTE,
} from "src/apps/SkateparksApp/skateparksAppRoutes";
import { Link } from "react-router-dom";

interface IProps {
  email: string;
  setEmail: (newValue: string) => void;
  password: string;
  setPassword: (newValue: string) => void;
  handleLogin: (e: React.FormEvent<HTMLFormElement>) => void;
}

export const LoginForm: React.FC<IProps> = (props) => {
  const { email, setEmail, password, setPassword, handleLogin } = props;

  return (
    <div className="LoginForm">
      <form className="LoginForm-form" onSubmit={(e) => handleLogin(e)}>
        <div className="LoginForm-inputContainer">
          <TextInput
            placeholder=" "
            inputWrapperClass="LoginForm-TextInput"
            labelContent="email, email, or phone number"
            value={email}
            onChange={(value) => {
              setEmail(value);
            }}
          />
        </div>
        <div className="LoginForm-inputContainer">
          <TextInput
            placeholder=" "
            inputWrapperClass="LoginForm-TextInput"
            labelContent="Password"
            type="password"
            value={password}
            onChange={(value) => {
              setPassword(value);
            }}
          />
        </div>
        <Button
          // linkTo={FEED_VIEW_ROUTE}
          className="LoginForm-Button-login"
          buttonSize="full"
        >
          Log In
        </Button>
        <a className="LoginForm-link">Forgot password?</a>
        <p className="LoginForm-signUp">
          Don't have an account?{" "}
          <Link to={SIGNUP_VIEW_ROUTE} className="LoginForm-link">
            Sign up
          </Link>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
