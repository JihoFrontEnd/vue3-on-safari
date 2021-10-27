<template>
  <h3>HTTP</h3>
  <div v-for="item in list" :key="item">
    {{ item }}
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      list: [],
    };
  },
  async created() {
    const response = await axios.get("/flask/md/returns/W1");
    this.list = response.data;
  },
};
</script>

<style></style>
