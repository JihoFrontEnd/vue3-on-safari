import api from "../../api/user.js";

export default {
  namespaced: true,
  state: {
    loggedIn: false,
  },
  mutations: {
    SET_USER_SESSION(state, loggedInState) {
      state.loggedIn = loggedInState;
    },
  },
  actions: {
    async LOGIN({ commit, dispatch }, userInput) {
      const loginResponse = await api.login(userInput);
      if (loginResponse.status === 200) {
        const accessToken = loginResponse.headers.authorization;
        localStorage.setItem("accessToken", accessToken);
        commit("SET_USER_SESSION", true);
        return true;
      } else {
        alert("로그인에 실패했습니다.");
        dispatch("LOGOUT");
        return false;
      }
    },
    LOGOUT({ commit }) {
      localStorage.removeItem("accessToken");
      // GNB 값 버튼값 변경을 위해 페이지 새로고침
      location.replace(location.href);
      commit("SET_USER_SESSION", false);
    },
    async AUTH({ commit, dispatch }) {
      const authResoponse = await api.auth();
      if (authResoponse.status !== 200) {
        dispatch("LOGOUT");
      }
      commit("SET_USER_SESSION", true);
      return authResoponse;
    },
    async SIGNUP(context, userInput) {
      const signupResponse = await api.signup(userInput);
      return signupResponse.data.is_signuped;
    },
    async CHECK_USERID_IS_DUPLICATED(context, user_id) {
      const isDuplicated = await api.checkUserIdIsDuplicated(user_id);
      return isDuplicated.data;
    },
  },
  getters: {},
};
