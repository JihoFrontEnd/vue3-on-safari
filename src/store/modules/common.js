export default {
  namespaced: true,
  state: {
    error: {
      code: 404,
      message: "404 Not Found",
    },
  },
  mutations: {},
  actions: {},
  getters: {
    ERROR: (state) => state.error,
  },
};
