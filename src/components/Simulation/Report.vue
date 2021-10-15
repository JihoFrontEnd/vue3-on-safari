<template>
  <div class="grid-2">
    <table class="table">
      <tr class="table-row" v-for="tuple in basicTable" :key="tuple.key">
        <th>{{ tuple.key }}</th>
        <td>{{ tuple.value }}</td>
      </tr>
    </table>
    <table class="table">
      <tr class="table-row" v-for="tuple in variablesTable" :key="tuple.key">
        <th>{{ tuple.key }}</th>
        <td>{{ tuple.value }}</td>
      </tr>
    </table>
  </div>
  <div class="grid-2">
    <table class="table">
      <tr class="table-row" v-for="tuple in resultTable1" :key="tuple.key">
        <th>{{ tuple.key }}</th>
        <td :style="`color: ${tuple.color}`">{{ tuple.value }}</td>
      </tr>
    </table>
    <table class="table">
      <tr class="table-row" v-for="tuple in resultTable2" :key="tuple.key">
        <th>{{ tuple.key }}</th>
        <td :style="`color: ${tuple.color}`">{{ tuple.value }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters("chart", ["REPORT"]),
    ...mapGetters("strategy", ["GET_STRATEGY_BY_ID"]),
    ...mapGetters("simulation", ["GET_SYMBOL_NAME_BY_CODE"]),
    id() {
      return this.$route.params.id;
    },
    basicTable() {
      return [
        {
          key: "종목",
          value: this.GET_SYMBOL_NAME_BY_CODE(this.REPORT.symbol_code),
        },
        {
          key: "전략",
          value: this.GET_STRATEGY_BY_ID(this.id).name,
        },
        {
          key: "기간",
          value: `${this.REPORT.start_date} ~ ${this.REPORT.end_date}`,
        },
      ];
    },
    variablesTable() {
      if (this.id == 1)
        return [
          {
            key: "단기 이동 평균 기간",
            value: `${this.REPORT.short_period} 일`,
          },
          {
            key: "장기 이동 평균 기간",
            value: `${this.REPORT.long_period} 일`,
          },
          {
            key: "",
            value: "",
          },
        ];
      else
        return [
          {
            key: "RSI 기간",
            value: `${this.REPORT.period} 일`,
          },
          {
            key: "매도 조건",
            value: `${this.REPORT.short_percent} %`,
          },
          {
            key: "매수 조건",
            value: `${this.REPORT.long_percent} %`,
          },
        ];
    },
    resultTable1() {
      return [
        {
          key: "수익률",
          value: this.getTotalValue(),
          color: this.setColorByPositiveOrNegativeValue(
            this.REPORT.cumulative_pnl / this.REPORT.init_amount
          ),
        },
        {
          key: "총 손익",
          value: this.insertCommaToMoney(this.REPORT.cumulative_pnl),
          color: this.setColorByPositiveOrNegativeValue(
            this.REPORT.cumulative_pnl
          ),
        },
        {
          key: "손실(MDD)",
          value: this.insertCommaToMoney(this.REPORT.mdd),
        },
        {
          key: "거래수",
          value: this.REPORT.total_trades_count,
        },
      ];
    },
    resultTable2() {
      return [
        {
          key: "투자원금",
          value: this.insertCommaToMoney(this.REPORT.init_amount),
        },
        {
          key: "총 자산",
          value: this.insertCommaToMoney(this.REPORT.final_holding_asset),
          color: this.setColorByPositiveOrNegativeValue(
            this.REPORT.final_holding_asset - this.REPORT.init_amount
          ),
        },
        {
          key: "손익비",
          value: this.REPORT.pnl_ratio.toFixed(2),
        },
        {
          key: "승률",
          value: this.ratioToPercentage(this.REPORT.winning_ratio),
        },
      ];
    },
  },
  methods: {
    getTotalValue() {
      let pnl = this.REPORT.cumulative_pnl;
      let amount = this.REPORT.init_amount;
      return `${this.insertCommaToMoney(((pnl / amount) * 100).toFixed(2))} %`;
    },
    insertCommaToMoney(money) {
      return money.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
    },
    ratioToPercentage(ratio) {
      return `${(ratio * 100).toFixed(2)} %`;
    },
    setColorByPositiveOrNegativeValue(value) {
      return value > 0 ? "rgb(255, 102, 0)" : "rgb(42, 163, 239)";
    },
  },
};
</script>

<style scoped>
table {
  margin-bottom: 38px;
}

tr {
  height: 36px;
}

th,
td {
  padding: 0;
  border-bottom: solid 1px var(--light-gray);
  font-family: var(--font-noto-sans);
  font-size: 12px;
}

th {
  color: var(--gray);
}
</style>
