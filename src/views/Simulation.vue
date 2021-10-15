<template>
  <div class="container">
    <div class="banner">
      <Banner
        :name="strategy.name"
        :description="strategy.description"
      ></Banner>
    </div>
    <div class="variables">
      <Variables></Variables>
    </div>
    <div class="result-and-strategy-list-wrapper">
      <template v-if="GET_STATUS.isInitial"></template>
      <div class="grid-2 result" v-else>
        <template v-if="GET_STATUS.isRunning"></template>
        <template v-else>
          <div class="item report">
            <Report></Report>
          </div>
          <div class="item chart">
            <Chart></Chart>
          </div>
        </template>
      </div>
      <hr />
      <div class="strategy-list">
        <StrategyList></StrategyList>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

import Banner from "@/components/Simulation/Banner.vue";
import Variables from "@/components/Simulation/Variables.vue";
import Report from "@/components/Simulation/Report.vue";
import Chart from "@/components/Simulation/Chart.vue";
import StrategyList from "@/components/Simulation/StrategyList.vue";

export default {
  components: { Banner, Variables, Report, Chart, StrategyList },
  data() {
    return {
      strategy: {},
    };
  },
  computed: {
    ...mapGetters("strategy", ["GET_STRATEGY_BY_ID"]),
    ...mapGetters("simulation", ["GET_STATUS"]),
  },
  created() {
    let id = this.$route.params.id;
    this.strategy = this.GET_STRATEGY_BY_ID(id);
    console.log(this.GET_STATUS.isInitial);
  },
  unmounted() {
    this.SET_INITIAL_STATUS(true);
  },
  methods: {
    ...mapMutations("simulation", ["SET_INITIAL_STATUS"]),
  },
};
</script>

<style scoped>
.variables {
  padding: 25px 30px;
}

.result-and-strategy-list-wrapper {
  padding: 84px 20px;
  padding-bottom: 57px;
  border: solid 1px var(--light-gray);
}

.chart {
  min-height: 285px;
}
</style>
