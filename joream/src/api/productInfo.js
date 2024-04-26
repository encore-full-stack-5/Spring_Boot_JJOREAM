import { api } from "../config/network";

export const getProductDetail = async (data) => {
  const res = await api("/products/" + data, "get");
  return res;
};
