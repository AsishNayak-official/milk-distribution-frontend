import axios from "./axiosIndex.js";

export function getAllUsersDetails() {
  return axios.get("/users/get-all-users/");
}

export function updateUserInfo(shop_id, data = {}, user_id) {
  if (user_id) {
    return axios.patch(
      `/users/upsert-user/?shop_id=${shop_id}&user_id=${user_id}`,
      data
    );
  } else {
    return axios.patch(`/users/upsert-user/?shop_id=${shop_id}`, data);
  }
}
