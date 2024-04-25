import { api } from "../config/network";

export const signup = async (formData) => {
  const res = await api("auths/signup", "post", formData);
  return res;
};

export const login = async (formData) => {
  const res = await api("auths/login", "post", formData);
  return res;
};
