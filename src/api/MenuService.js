import axiosInstance from "@/config/http.config";
// import axios from 'axios';

const baseURL = process.env.VUE_APP_BASE_URL;

export function listarCuentasApi(token) {
  return axiosInstance.get(`${baseURL}/menu-navigation`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}
