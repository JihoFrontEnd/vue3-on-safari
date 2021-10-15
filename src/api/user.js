import axios from "axios";
import router from "../router";

const api = axios.create({
  baseURL: "localhost:8081/api",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  // 응답 코드가 500 미만일 때만 값을 반환한다.
  validateStatus: (status) => status < 500,
});

const commonErrorHandler = (error) => {
  // if (error.response) {
  //   console.log(error.response);
  // } else if (error.request) {
  //   console.log(error.request);
  // } else {
  //   console.log(error.message);
  // }
  console.log(error);
  return error;
};

// api.interceptors.request.use((config) => config, commonErrorHandler);
api.interceptors.response.use((response) => response, commonErrorHandler);

/** 회원가입 에러 코드 처리 메서드 */
const joinExceptionHandler = (response) => {
  switch (response.code) {
    case "INTERNAL_EXCEPTION":
      return response.message;
    default:
      break;
  }
};

export const login = async (userInput) => {
  try {
    return await api.post("/login", userInput);
  } catch (error) {
    return commonErrorHandler(error);
  }
};

export const auth = async () => {
  try {
    const token = localStorage.getItem("accessToken");
    const request = { headers: { Authorization: token } };
    const response = await api.get("/auth", request);
    return response;
  } catch (error) {
    return commonErrorHandler(error);
  }
};

export const signup = async (userInput) => {
  try {
    const response = await api.post("/signup", userInput);
    if (response.data.code) {
      joinExceptionHandler(response.data.code);
      router.go(0);
    }
    return response;
  } catch (error) {
    return commonErrorHandler(error);
  }
};

export const checkUserIdIsDuplicated = async (user_id) => {
  try {
    return await api.get(`/signup/check/${user_id}`);
  } catch (error) {
    return commonErrorHandler(error);
  }
};

export default { login, auth, signup, checkUserIdIsDuplicated };
