import symbols from "../../data/symbols.json";
import variables from "../../data/variables.json";

import { run } from "../../api/simulation";

const callFromAnotherModule = { root: true };
const getKeyChangedJsonObject = (beforeData) => {
  let newData = beforeData.data;
  newData.forEach((tuple) => {
    tuple[beforeData.newKey] = tuple[beforeData.oldKey];
    delete tuple[beforeData.oldKey];
  });
  return newData;
};

export default {
  namespaced: true,
  state: {
    symbols,
    variables,
    status: {
      isRunning: false,
      isInitial: true,
    },
  },
  mutations: {
    SET_RUNNING_STATUS(state, status) {
      state.status.isRunning = status;
    },
    SET_INITIAL_STATUS(state, status) {
      state.status.isInitial = status;
    },
  },
  actions: {
    async RUN({ commit }, variables) {
      commit("SET_RUNNING_STATUS", true);
      let response = await run(variables);
      if (response.status !== 200) {
        commit("SET_RUNNING_STATUS", false);
        return;
      }
      let chartData = response.data.data;
      commit("chart/SET_REPORT_DATA", response.data, callFromAnotherModule);
      commit("chart/SET_CHART_DATA", chartData, callFromAnotherModule);
      let areaData = getKeyChangedJsonObject({
        data: JSON.parse(JSON.stringify(chartData)),
        oldKey: "holding_asset",
        newKey: "value",
      });
      let volumeData = getKeyChangedJsonObject({
        data: JSON.parse(JSON.stringify(chartData)),
        oldKey: "pnl",
        newKey: "value",
      });
      commit("chart/SET_AREA_DATA", areaData, callFromAnotherModule);
      commit("chart/SET_VOLUME_DATA", volumeData, callFromAnotherModule);
      commit("SET_RUNNING_STATUS", false);
    },
  },
  getters: {
    GET_SYMBOLS: (state) => state.symbols,
    GET_VARIABLES: (state) => (strategyId) => state.variables[strategyId],
    GET_STATUS: (state) => state.status,
    GET_SYMBOL_NAME_BY_CODE: (state) => (code) =>
      state.symbols.find((s) => s.code === code).name,
    IS_INITIAL_STAUTS: (state) => state.status.isInitial,
  },
};
