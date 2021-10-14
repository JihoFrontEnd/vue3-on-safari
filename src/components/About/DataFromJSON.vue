<template>
  <h1>Data from JSON with Vuex Store Getters</h1>
  <div class="flex">
    <div v-for="item of ITEMS" :key="item.id">
      <h2>{{ item.title }}</h2>
      <p>{{ item.description }}</p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: { ...mapGetters(["ITEMS"]) },
};
</script>
