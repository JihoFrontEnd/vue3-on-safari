<template>
  <div ref="chart"></div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";
import { createChart } from "lightweight-charts";

export default {
  data() {
    return {
      chartWidth: window.innerWidth,
      chartHeight: window.innerHeight,
    };
  },
  mounted() {
    const createdChart = createChart(this.$refs.chart, this.FORMAT.chart);
    const areaSeries = createdChart.addAreaSeries(this.FORMAT.series.area);
    const volumeSeries = createdChart.addHistogramSeries(
      this.FORMAT.series.volume
    );
    this.setDataToSeries(areaSeries, this.DATA.area);
    this.setDataToSeriesWithEachColor(
      volumeSeries,
      this.DATA.volume,
      "rgb(42, 163, 239)",
      "rgb(255, 102, 0)"
    );
    this.SET_CHART(createdChart);
  },
  computed: {
    ...mapGetters("chart", ["DATA", "FORMAT"]),
  },
  methods: {
    ...mapMutations("chart", ["SET_CHART"]),
    /** Series에 Data를 넣는다 */
    setDataToSeries(series, data) {
      series.setData(data);
    },
    /** Series에 각 Data의 value가 양수냐 음수냐에 따라 색상을 다르게 배정 */
    setDataToSeriesWithEachColor: (series, data, minusColor, plusColor) => {
      data.forEach(
        (tuple) => (tuple.color = tuple.value < 0 ? minusColor : plusColor)
      );
      series.setData(data);
    },
  },
};
</script>
