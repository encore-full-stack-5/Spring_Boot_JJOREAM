import { api } from "../config/network";

export const signup = async (formData) => {
  const res = await api("auths/signup", "post", formData);
  return res;
};
