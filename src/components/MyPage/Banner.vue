<template>
  <div class="flex-space-between flex-y-end">
    <h1>My Page</h1>
    <div class="half-moon"></div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
h1 {
  font-family: var(--font-roboto);
  font-size: 32px;
  color: var(--yellow);
}
.half-moon {
  width: 208px;
  height: 77px;
  background-color: var(--yellow);
  border-top-left-radius: 104px 80px;
  border-top-right-radius: 104px 80px;
}
</style>
