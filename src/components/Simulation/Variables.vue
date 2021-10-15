<template>
  <hr />
  <div class="common grid">
    <div class="item">
      <div class="label">
        <i class="fas fa-chart-line"></i>
        <h4>종목 선택</h4>
      </div>
      <div class="input">
        <select v-model="userInput.code">
          <option
            v-for="symbol of GET_SYMBOLS"
            :key="symbol.code"
            :value="symbol.code"
          >
            {{ symbol.name }}
          </option>
        </select>
      </div>
    </div>
    <div class="item">
      <div class="label">
        <i class="far fa-calendar-alt"></i>
        <h4>기간 설정</h4>
      </div>
      <div class="input">
        <input
          type="date"
          v-model="userInput.start_date"
          min="2000-01-01"
          :max="userInput.end_date"
        />
        <input
          type="date"
          v-model="userInput.end_date"
          :min="userInput.start_date"
          :max="formattedToday"
        />
      </div>
    </div>
    <div class="item">
      <div class="label">
        <i class="fas fa-won-sign"></i>
        <h4>투자 금액</h4>
      </div>
      <div class="input">
        <input type="number" v-model="userInput.init_amount" />
      </div>
    </div>
  </div>
  <hr />
  <div class="custom grid">
    <template v-for="variable of customInputs" :key="variable">
      <template v-if="variable.items.length > 1">
        <div class="item double">
          <template v-if="variable.items">
            <template v-for="item of variable.items" :key="item.title">
              <div class="label">
                <i :class="item.icon"></i>
                <h4>{{ item.title }}</h4>
              </div>
              <div class="input">
                <input :type="item.type" v-model="item.value" />
              </div>
            </template>
          </template>
        </div>
      </template>
      <template v-else>
        <div class="item" v-for="item of variable.items" :key="item.title">
          <div class="label">
            <i :class="item.icon"></i>
            <h4>{{ item.title }}</h4>
          </div>
          <div class="input">
            <input :type="item.type" v-model="item.value" />
          </div>
        </div>
      </template>
    </template>
    <div class="item button-wrpper">
      <input
        class="button submit"
        type="button"
        value="실행"
        v-on:click="run"
      />
      <input class="button cancel" type="button" value="중지" />
    </div>
  </div>
</template>

<script>
import { mapActions, mapMutations, mapGetters } from "vuex";

export default {
  data() {
    return {
      userInput: {
        strategy_id: "",
        code: "",
        init_amount: 1000000,
        start_date: "",
        end_date: "",
      },
      customInputs: {},
    };
  },
  created() {
    this.userInput.strategy_id = this.$route.params.id;
    // 전략 변수를 적용하기 위한 input 정보를 가져옵니다.
    this.customInputs = this.GET_VARIABLES(this.userInput.strategy_id);
    // UX를 위해 시뮬레이션 종료 날짜 기본값은 오늘 날짜로 설정합니다.
    this.userInput.end_date = this.formattedToday;
  },
  computed: {
    ...mapGetters("simulation", [
      "GET_SYMBOLS",
      "GET_VARIABLES",
      "IS_INITIAL_STAUTS",
    ]),
    formattedToday: () => {
      let today = new Date();
      let year = today.getFullYear();
      let month = ("0" + (today.getMonth() + 1)).slice(-2);
      let day = ("0" + today.getDate()).slice(-2);
      return [year, month, day].join("-");
    },
  },
  methods: {
    ...mapMutations("simulation", ["SET_INITIAL_STATUS"]),
    ...mapMutations("chart", ["SET_CHART_DATA"]),
    ...mapActions("simulation", ["RUN"]),
    async run() {
      this.SET_INITIAL_STATUS(false);
      this.SET_CHART_DATA(false);
      switch (this.userInput.strategy_id) {
        case "1":
          // this.userInput.strategy_info = {
          //   short_period: this.customInputs[0].items[0].value,
          //   long_period: this.customInputs[0].items[1].value,
          // };
          this.userInput = {
            ...this.userInput,
            short_period: this.customInputs[0].items[0].value,
            long_period: this.customInputs[0].items[1].value,
          };
          break;
        case "2":
          // this.userInput.strategy_info = {
          //   short_percent: this.customInputs[0].items[0].value,
          //   long_percent: this.customInputs[0].items[1].value,
          //   period: this.customInputs[1].items[0].value,
          // };
          this.userInput = {
            ...this.userInput,
            short_percent: this.customInputs[0].items[0].value,
            long_percent: this.customInputs[0].items[1].value,
            period: this.customInputs[1].items[0].value,
          };
          break;
      }
      await this.RUN(this.userInput);
    },
  },
};
</script>

<style scoped>
.grid {
  /* Layout */
  margin: 25px auto;
  /* Grid */
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}

.item {
  display: grid;
  grid-template-columns: 1fr 2fr;
}

.custom > .double {
  grid-template-columns: 1fr 2fr 1fr 2fr;
}

.item > div {
  display: flex;
  justify-content: stretch;
  align-items: center;
}

.label > h4 {
  margin: 0;
}

.button-wrpper {
  display: flex;
  justify-content: space-around;
  /* 전체 3열 중 3번 열에 배치한다. */
  grid-column: 3 / 3;
}

.button-wrpper > input[type="button"] {
  width: 45%;
  height: 35px;
  border: 0;
  border-radius: 7px;
}

input[type="button"].submit {
  background-color: var(--yellow);
}

input[type="button"].cancel {
  background-color: var(--red);
}

.input > input,
.input > select {
  height: 35px;
  width: 100%;
  margin: 0 3px;
  border: solid 1px black;
  border-radius: 7px;
  padding-left: 10px;
}

/* .input > select {
  justify-content: stretch;
  width: 100%;
}

.input > input {
  width: 100%;
} */

.custom > .item > .input > input {
  justify-content: stretch;
  width: 100%;
}

i {
  margin-right: 10px;
}
</style>
