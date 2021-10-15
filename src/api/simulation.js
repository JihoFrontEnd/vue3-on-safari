import axios from "axios";

const api = axios.create({
  // Flask - AWS Windows EC2
  baseURL: "http://3.36.78.50:5000",
  // Fast API - 경석 매니저님 로컬
  // baseURL: "http://10.10.77.207:8000",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export const run = async (variables) => {
  return await api.post("/simulation", variables);
};

export default { run };
