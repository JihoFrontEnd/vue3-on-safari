<template>
  <div class="top wrapper container">
    <div>
      <h1 class="title">Quant Simulation</h1>
    </div>
    <div class="image-wrapper">
      <img src="@/assets/Strategy/top.png" alt="상단 이미지" />
    </div>
  </div>
  <hr class="container" />
  <div class="banner wrapper container">
    <div class="image">
      <img src="@/assets/Strategy/banner.png" alt="배너 이미지" />
    </div>
  </div>
  <div class="sub-header container">
    <h2 class="title">Quant Simulation</h2>
    <p class="text">
      `체리 퀀트`에서 제공하는 무료 전략으로 약 200여개의 종목 3년치 데이터로
      백테스팅을 체험하실 수 있습니다.
    </p>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.wrapper {
  display: flex;
  justify-content: center;
  align-items: flex-end;
}

.top {
  justify-content: space-between;
}

.banner {
  margin-top: 10px;
  padding-top: 14px;
  background-color: var(--yellow);
}

.sub-header {
  text-align: center;
  margin-bottom: 90px;
}

hr {
  border: solid 1px var(--yellow);
}

.title,
.text {
  font-family: var(--font-noto-sans);
}

h1.title {
  font-family: var(--font-roboto);
  font-size: 32px;
  color: var(--yellow);
}
</style>
