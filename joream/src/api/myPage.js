import { api } from "../config/network";

export const updateUser = async (formData) => {
  const res = await api("auths/info", "put", formData);
  return res;
};

export const getUser = async () => {
  const res = await api("auths/info", "get");
  return res;
};
