import { IUser } from "lib/types/user";

export const setToken = (token: string) => {
  localStorage.setItem("token", token);
};

export const getToken = () => localStorage.getItem("token");

export const removeToken = () => {
  delete localStorage.token;
};

export const setUser = (user: IUser) => {
  localStorage.setItem("user", JSON.stringify(user));
};

export const getUser = () => {
  const user = localStorage.getItem("user");
  try {
    if (user) {
      return JSON.parse(user);
    } else {
      throw "There is no authenticated user";
    }
  } catch (e) {
    console.error(e);
  }
};
