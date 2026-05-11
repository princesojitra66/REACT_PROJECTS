import axios from "axios";

const API = axios.create({
  baseURL:
    "https://backend-auth-gdiz.onrender.com/api/auth",
});

export default API;