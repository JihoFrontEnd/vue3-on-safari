<template>
  <Banner></Banner>
  <List :strategyList="GET_STRATEGY_LIST" :gridGapSize="30"></List>
</template>

<script>
import { mapGetters } from "vuex";

import Banner from "@/components/Strategy/Banner.vue";
import List from "@/components/common/strategy-list/List.vue";

export default {
  components: { Banner, List },
  computed: {
    ...mapGetters("strategy", ["GET_STRATEGY_LIST"]),
  },
};
</script>

<style></style>
