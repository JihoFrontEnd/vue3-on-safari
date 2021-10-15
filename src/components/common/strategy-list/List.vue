<template>
  <div class="grid-3 list container" :style="`gap: ${gridGapSize}px;`">
    <div
      class="item"
      v-for="strategy of strategyList"
      :key="strategy.id"
      @click="$router.push({ name: 'Simulation', params: { id: strategy.id } })"
    >
      <Card :item="strategy"></Card>
    </div>
  </div>
</template>

<script>
import Card from "./Card.vue";

export default {
  components: { Card },
  props: {
    strategyList: Array,
    gridGapSize: Number,
  },
};
</script>
