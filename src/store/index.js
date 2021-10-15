import { createStore } from "vuex";

import common from "./modules/common.js";
import user from "./modules/user.js";
import strategy from "./modules/strategy.js";
import simulation from "./modules/simulation.js";
import chart from "./modules/chart.js";

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: { common, user, strategy, simulation, chart },
});
