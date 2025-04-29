// utils/shopApi.ts
import axios from "@/lib/axios";

// GET shop details
export const getShopDetails = async () => {
  const res = await axios.get("/shop");
  return res.data;
};

export const updateStartDate = async (id: string, start_bill_date: string,month:string) => {
  const res = await axios.patch(`/shop/${id}`, {start_bill_date,month});
  return res.data;
};
export const updateEndDate = async (id: string, end_bill_date: string) => {
  const res = await axios.patch(`/shop/${id}`, {end_bill_date});
  return res.data;
};
