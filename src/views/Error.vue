<template>
  <div class="error-wrapper">
    <div>
      <img
        :src="require(`@/assets/Error/${ERROR.code}.png`)"
        :alt="ERROR.message"
      />
    </div>
  </div>
  <router-link :to="{ name: 'Home' }" class="go-back-home flex-x-center">
    <h4>메인페이지로 돌아가기</h4>
  </router-link>
  <a v-on:click="$router.go(-1)" class="go-back-home flex-x-center">
    <h4>이전페이지로 돌아가기</h4>
  </a>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: { ...mapGetters("common", ["ERROR"]) },
};
</script>

<style scoped>
.error-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 500px;
}
.go-back-home {
  color: var(--gray);
}
.go-back-home:hover {
  color: black;
}
</style>
