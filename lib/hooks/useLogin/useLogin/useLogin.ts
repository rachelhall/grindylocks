import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/router";

export const useLogin = (email: string, password: string) => {
  const { query, push, reload } = useRouter();
  const url = `${process.env.API_URL}/user/token/`;

  const loginFn = async () => {
    try {
      const response = await axios.post(url, {
        email,
        password,
      });

      let loginSuccess;

      const { data } = response;

      if (data) {
        // setToken(data.token);
        loginSuccess = true;
      }
      return loginSuccess;
    } catch (error) {
      console.warn(error);
      return undefined;
    }
  };

  const { mutate: loginUserMutation } = useMutation(loginFn, {
    onSuccess: (data) => console.log(data),
  });
  return { loginUserMutation };
};
