import { useState } from "react";
import Button from "../../styleComponents/Button";
import TextInput from "../../styleComponents/TextInput";
import { useRouter } from "next/router";
import useUser from "lib/hooks/useUser";
import fetchJson, { FetchError } from "lib/fetchJson";

interface IProps {}

const LoginForm: React.FC<IProps> = () => {
  const router = useRouter();

  const { mutateUser } = useUser({ redirectTo: "/account" });

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState();

  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      mutateUser(
        await fetchJson("api/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        })
      );
    } catch (error) {
      if (error instanceof FetchError) {
        setErrorMsg(error.data.message);
      } else {
        console.error("An unexpected error has occurred:", error);
      }
    }

    // router.push({ pathname: "/account", query: data });
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
