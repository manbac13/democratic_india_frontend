import axios from "axios";

const instance = axios.create({
  baseURL: "https://democratic-india-backend.vercel.app",
});

export default instance;
