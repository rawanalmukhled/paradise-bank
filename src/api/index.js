import axios from "axios";
const BASEURL = "https://react-bank-project.eapi.joincoded.com";
const instance = axios.create({
  baseURL: BASEURL,
});
instance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
export { instance, BASEURL };
