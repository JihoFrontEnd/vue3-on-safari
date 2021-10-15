<template>
  <div class="card">
    <div class="image">
      <img
        alt="Thumnail image"
        :src="require(`@/assets/Strategy/thumnail-${number}.png`)"
      />
    </div>
    <div class="info">
      <h3 class="title">{{ item.name }}</h3>
      <p class="text">{{ item.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: { item: Object },
  computed: {
    number() {
      return (parseInt(this.item.id) % 3) + 1;
    },
  },
};
</script>

<style scoped>
.card {
  display: flex;
  padding: 15px 20px;
  align-items: flex-start;
  border: solid 1px var(--gray);
}

.card:hover {
  cursor: pointer;
}

.info {
  padding-left: 20px;
  font-family: var(--font-noto-sans);
}

h3.title {
  font-size: 14px;
}

p.text {
  font-size: 12px;
}
</style>
