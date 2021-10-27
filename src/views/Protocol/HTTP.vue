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
    const response = await axios.get("http://3.36.78.50:5000/flask/md/returns/W1");
    this.list = response.data;
  },
};
</script>

<style></style>
