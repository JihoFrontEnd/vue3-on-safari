<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link :to="{ name: 'Chart' }">Chart</router-link>
  </div>
  <NavigationBar></NavigationBar>
  <router-view />
  <Footer></Footer>
</template>

<script>
import { mapActions } from "vuex";
import NavigationBar from "@/components/common/navigation/NavigationBar.vue";
import Footer from "@/components/common/footer/Footer.vue";

export default {
  components: { NavigationBar, Footer },
  created() {
    const token = localStorage.getItem("accessToken");
    if (token) {
      this.AUTH();
    }
  },
  methods: { ...mapActions("user", ["AUTH"]) },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap");

:root {
  --font-noto-sans: "Noto Sans", "Noto Sans KR", sans-serif;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.flex {
  display: flex;
  justify-content: space-around;
}
.flex-between {
  display: flex;
  justify-content: space-between;
}
</style>
