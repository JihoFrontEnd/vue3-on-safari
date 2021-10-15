<template>
  <h1>Quant Simulation</h1>
  <hr />
  <div class="wrapper">
    <div class="image">
      <img src="@/assets/Simulation/logo.png" alt="Simulation Logo" />
    </div>
    <div class="info">
      <h2>{{ name }}</h2>
      <p>{{ description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    description: String,
  },
};
</script>

<style scoped>
h1 {
  color: var(--yellow);
  margin-top: 44px;
}

hr {
  border-style: solid;
  border-color: var(--yellow);
  border-top-width: 1px;
  margin: 30px 0;
}

.wrapper {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
}

.info {
  padding-left: 13px;
  font-family: var(--font-noto-sans);
}

.info > h2 {
  font-size: 20px;
  margin: 0;
}

.info > p {
  font-size: 14px;
  margin: 0;
}
</style>
