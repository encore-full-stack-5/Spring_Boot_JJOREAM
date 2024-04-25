import { api } from "../config/network";

export const getAllProducts = async () => {
  const res = await api("products", "get");
  return res;
};

export const categoryProducts = async (data) => {
  const res = await api("products?category=" + data, "get");
  return res;
};

export const nameProducts = async (data) => {
  const res = await api("products?name=" + data, "get");
  return res;
};

export const brandProducts = async (data) => {
  const res = await api("brands/" + data, "get");
  return res;
};
