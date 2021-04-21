import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "d0ce4cd8-d0d2-4152-99ad-f6e1407cb23f",
  },
});

export const UserAPI = {
  getUsers(currentPage = 1, pageCount = 10) {
    return instance
      .get(`users?page=${currentPage}&count=${pageCount}`)
      .then((responce) => {
        return responce.data;
      });
  },
  follow(userId) {
    return instance.post(`follow/${userId}`, {})
  },
  unfollow(userId) {
    return instance.delete(`follow/${userId}`);
  },
  getProfile (userId) {
  return  instance
      .get(`profile/` + userId);
  }
};
export const authAPI = {
me() {
  return instance
  .get(`auth/me`)
}
};
