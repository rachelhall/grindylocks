import { useForm } from "react-hook-form";
import axios from "axios";
import useUser from "lib/hooks/useUser";
import { ICreateAccount } from "lib/types/createAccount";
import { Button, Text, TextInput } from "styleComponents";
import fetchJson from "lib/fetchJson";

const SignUp: React.FC = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ICreateAccount>();

  const { mutateUser } = useUser({ redirectTo: "/account" });

  const onSubmit = async (data: ICreateAccount) => {
    const response = await axios.post("api/createAccount", data);
    await mutateUser(
      await axios.post("api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      })
    );
  };

  return (
    <div className="SignUp">
      <Text>Sign up</Text>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextInput
          label="email"
          required={true}
          type="email"
          register={register}
        />
        <TextInput
          label="password"
          required={true}
          type="password"
          register={register}
        />

        <TextInput
          label="name"
          required={true}
          type="text"
          register={register}
        />

        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default SignUp;
