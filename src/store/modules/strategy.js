import list from "../../data/strategy-list.json";

export default {
  namespaced: true,
  state: { list },
  getters: {
    GET_STRATEGY_LIST: (state) => state.list,
    GET_STRATEGY_BY_ID: (state) => (id) => {
      let strategy = state.list.find((s) => s.id === id);
      return strategy
        ? strategy
        : { id: 404, name: "NOT FOUND", description: "잘못된 접근입니다." };
    },
  },
};
