import axios from "./axiosIndex.js";

export function getShopDetails() {
    return axios.get("/shop/get-shop-details");
  }
export function downloadBillData(shop_id) {
    return axios.get(`/shop/download/${shop_id}`,{responseType: "blob"});
  }
export function updateBillDate(shop_id,month,start_bill_date,end_bill_date) {
    return axios.patch(`/shop/update-shop-dates/${shop_id}`,{month,start_bill_date,end_bill_date});
  }