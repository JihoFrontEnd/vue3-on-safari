<template>
  <div class="header">
    <div class="title">
      <h2>Algorithm List</h2>
    </div>
    <div class="button-group">
      <button class="button" v-on:click="prevPage" :disabled="isDisable.prev">
        <i class="fas fa-arrow-left"></i>
      </button>
      <button class="button" v-on:click="nextPage" :disabled="isDisable.next">
        <i class="fas fa-arrow-right"></i>
      </button>
    </div>
  </div>
  <List :strategyList="list" :gridGapSize="20"></List>
</template>

<script>
import { mapGetters } from "vuex";

import List from "@/components/common/strategy-list/List.vue";

export default {
  components: { List },
  data() {
    return {
      page: 1,
      isDisable: {
        prev: true,
        next: false,
      },
    };
  },
  computed: {
    ...mapGetters("strategy", ["GET_STRATEGY_LIST"]),
    list() {
      let startCardId = (this.page - 1) * 3;
      let endCardId = this.page * 3;
      return this.GET_STRATEGY_LIST.slice(startCardId, endCardId);
    },
  },
  methods: {
    prevPage() {
      if (!this.isDisable.prev) {
        this.page -= 1;
      }
      this.buttonDisableStateHandler();
    },
    nextPage() {
      if (!this.isDisable.next) {
        this.page += 1;
      }
      this.buttonDisableStateHandler();
    },
    buttonDisableStateHandler() {
      if (this.page < 2) {
        this.isDisable.prev = true;
      } else {
        this.isDisable.prev = false;
      }
      if (this.page >= this.GET_STRATEGY_LIST.length / 3) {
        this.isDisable.next = true;
      } else {
        this.isDisable.next = false;
      }
    },
  },
};
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.title > h2 {
  font-size: 22px;
}

.button {
  background-color: white;
  border: solid 1px var(--gray);
  border-radius: 30px;
  font-size: 30px;
  color: var(--gray);
  margin-left: 19px;
}

.button:hover {
  border-color: black;
  color: black;
}

.button:disabled {
  cursor: default;
  border-color: var(--light-gray);
  color: var(--light-gray);
}
</style>
