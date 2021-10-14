import axios from "axios";

const api = axios.create({
  baseURL: "https://api.hnpwa.com/v0/news",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export const getNews = async (pageNumber) => {
  try {
    return await api.get(`/${pageNumber}.json`);
  } catch (error) {
    console.error(error);
  }
};

export default { getNews };
