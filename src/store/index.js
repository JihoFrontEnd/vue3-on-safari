import { createStore } from "vuex";

import items from "../data/items.json";

export default createStore({
  state: { items },
  mutations: {},
  actions: {},
  getters: {
    ITEMS: (state) => state.items,
  },
});
