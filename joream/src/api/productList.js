import { api } from "../config/network";

export const getAllProducts = async () => {
  const res = await api("products", "get");
  return res;
};
