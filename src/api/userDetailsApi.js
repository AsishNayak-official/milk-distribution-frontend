import axios from "./axiosIndex.js";

export function getAllUsersDetails() {
  return axios.get("/users/get-all-users/");
}
export function updateBillDate(shop_id, user_id) {
  if (user_id)
    return axios.patch(
      `/users/upsert-user/?shop_id=${shop_id}&user_id=${user_id}`
    );
  else return axios.patch(`/users/upsert-user/?shop_id=${shop_id}`);
}
