import axios from "axios";

const httpClient = axios.create({
  headers: { "X-CSRF-Token": getCookie("CSRF-TOKEN") },
  withCredentials: true
});

export default httpClient;
