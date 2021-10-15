<template>
  <div class="container home-wrapper">
    <div class="banner">
      <img src="../assets/Home/banner-01.png" alt="Banner 01" />
    </div>
    <div class="banner">
      <img class="mt-90" src="../assets/Home/banner-02.png" alt="Banner 02" />
    </div>
    <div class="sticky banner">
      <img src="../assets/Home/banner-03.png" alt="Banner 03" />
    </div>
    <div class="sticky banner">
      <img src="../assets/Home/banner-04.png" alt="Banner 04" />
    </div>
    <div class="sticky banner">
      <img src="../assets/Home/banner-05.png" alt="Banner 05" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
};
</script>

<style scoped>
.home-wrapper {
  margin-bottom: 300px;
}

.banner {
  display: flex;
  align-items: center;
}

.banner > img {
  margin: 50px auto;
  margin-bottom: 0;
  max-width: 100%;
}

.sticky.banner > img {
  margin: 0 auto;
}

img.mt-90 {
  margin-top: 90px;
}
</style>
