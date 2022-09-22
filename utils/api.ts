import { create } from "apisauce";

interface ISignInParams {
  email: string;
  password: string;
}

const api = create({
  baseURL: "/api/",
  headers: {
    "Cache-Control": "no-cache",
  },
  timeout: 10000,
});

//////////////////////////////////
// Auth
/////////////////////////////////
const signInUser = async (params: ISignInParams) =>
  await api.post<{ data: any }>("user/token", params).then((res) => {
    return res;
  });
