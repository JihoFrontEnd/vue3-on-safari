<template>
  <h2>Router Go</h2>
  <button @click="goBack">뒤로가기</button>
</template>

<script>
export default {
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>

<style></style>
