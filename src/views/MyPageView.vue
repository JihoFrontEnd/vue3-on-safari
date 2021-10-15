<template>
  <div class="container">
    <Banner></Banner>
    <div class="flex">
      <div>
        <Menu></Menu>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Banner from "@/components/MyPage/Banner.vue";
import Menu from "@/components/MyPage/Menu.vue";

export default {
  components: { Banner, Menu },
};
</script>

<style scoped>
.container {
  margin-top: 83px;
}
</style>
