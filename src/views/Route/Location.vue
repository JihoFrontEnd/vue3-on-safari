<template>
  <h2>Location</h2>
  <button @click="reload">새로고침</button>
</template>

<script>
export default {
  methods: {
    reload() {
      location.replace(location.href);
    },
  },
};
</script>

<style></style>
