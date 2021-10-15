<template>
  <footer>
    <div class="container">
      <div class="site-info">
        <p>Cherry Solutions 2021. All Rights Reserved</p>
      </div>
      <img
        class="footer-logo"
        src="../../../assets/logo/cherry-footer-logo.png"
        alt="Footer Logo"
      />
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style scoped>
.site-info {
  /* footer의 높이와 동일하게 설정 */
  height: 255px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
}
.site-info > p {
  margin-bottom: 20px;
  font-family: var(--font-noto-sans);
  font-size: 12px;
  font-weight: bold;
}

/* Footer Logo Position */
footer > .container {
  position: relative;
}
.footer-logo {
  position: absolute;
  bottom: 15px;
  right: 30px;
}
</style>
