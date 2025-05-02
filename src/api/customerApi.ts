import axios from "@/lib/axios";
import { UserInfo } from "@/lib/types";

// GET all customers
export const getCustomers = async () => {
  const res = await axios.get("/customers");
  return res.data;
};

// GET customer by ID
export const getCustomerById = async (id: string) => {
  const res = await axios.get(`/customers/${id}`);
  return res.data;
};

// POST new customer
export const createCustomer = async (data: UserInfo) => {
  const res = await axios.post("/customers", data);
  return res.data;
};

// PATCH update customer
export const updateCustomer = async (id: string, data: UserInfo) => {
  const res = await axios.patch(`/customers/${id}`, data);
  return res.data;
};

// DELETE customer
export const deleteCustomer = async (id: string) => {
  const res = await axios.delete(`/customers/${id}`);
  return res.data;
};
//clear customer

export const clearCustomers = async () =>{
  const res = await axios.get(`/truncate-customers`)
  return res.data
}