import axios from "axios";

const API = axios.create({
  baseURL: "https://qtify-backend.labs.crio.do",
});

export default API;