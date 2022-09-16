import { useForm } from "react-hook-form";
import { useLogin } from "lib/hooks/useLogin/useLogin";
import { useState } from "react";
import Button from "../../styleComponents/Button";
import TextInput from "../../styleComponents/TextInput";
import axios from "axios";

interface IProps {}

const LoginForm: React.FC<IProps> = () => {
  const [email, setEmail] = useState("birdie@grindylocks.com");
  const [password, setPassword] = useState("Test1234");

  // const { register, handleSubmit, reset, errors, setError } = useForm();

  // const { loginUserMutation } = useLogin(email, password);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { data } = await axios(`${window.location.origin}/api/login`, {
      method: "post",
      data: { email, password },
    });
    console.log({ formResponse: data });
  };

  return (
    <div className="LoginForm">
      <form onSubmit={handleSubmit}>
        <TextInput
          label="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email"
          id="email"
          name="email"
        />
        <TextInput
          onChange={(e) => setPassword(e.target.value)}
          label="password"
          placeholder="password"
          id="password"
        />
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default LoginForm;
