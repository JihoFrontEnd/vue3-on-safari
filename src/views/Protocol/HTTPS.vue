<template>
  <h3>HTTPS</h3>
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
  created() {
    axios
      .get("/api/md/symbol-list")
      .then((response) => (this.list = response.data.data));
  },
};
</script>

<style></style>
