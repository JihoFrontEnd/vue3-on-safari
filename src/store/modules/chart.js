import chart from "../../data/chart.json";

export default {
  namespaced: true,
  state: { chart },
  mutations: {
    SET_CHART: (state, chart) => (state.chart.object = chart),
    SET_CHART_DATA: (state, data) => (state.chart.data.chart = data),
    SET_REPORT_DATA: (state, data) => (state.chart.data.report = data),
    SET_AREA_DATA: (state, data) => (state.chart.data.area = data),
    SET_VOLUME_DATA: (state, data) => (state.chart.data.volume = data),
  },
  actions: {},
  getters: {
    CHART: (state) => state.chart.object,
    DATA: (state) => state.chart.data,
    FORMAT: (state) => state.chart.format,
    REPORT: (state) => state.chart.data.report,
    GET_FULL_CHART_INFO: (state) => state.chart,
  },
};
