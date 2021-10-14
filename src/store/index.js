import { createStore } from "vuex";

import items from "../data/items.json";
import { getNews } from "../api/news.js";

export default createStore({
  state: {
    items,
    news: [],
  },
  mutations: {
    SET_NEWS(state, news) {
      state.news = news;
    },
  },
  actions: {
    async FETCH_NEWS({ commit }, pageNumber) {
      const response = await getNews(pageNumber);
      commit("SET_NEWS", response.data);
      return response;
    },
  },
  getters: {
    ITEMS: (state) => state.items,
    NEWS: (state) => state.news,
  },
});
