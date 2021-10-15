<template>
  <NavigationBar></NavigationBar>
  <div class="main-wrapper">
    <router-view></router-view>
  </div>
  <Footer></Footer>
</template>

<script>
import { mapActions } from "vuex";
import NavigationBar from "./components/common/navigation/NavigationBar.vue";
import Footer from "./components/common/footer/Footer.vue";

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
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");

/* CSS Common Variables */
:root {
  --yellow: rgba(255, 189, 0, 1);
  --gray: rgba(153, 153, 153, 1);
  --light-gray: rgba(238, 238, 238, 1);
  --red: rgba(236, 28, 36, 1);
  --font-roboto: "Roboto", sans-serif;
  --font-noto-sans: "Noto Sans", "Noto Sans KR", sans-serif;
}

html,
body {
  height: 100%;
}

body {
  padding: 0;
  margin: 0;
  font-family: var(--font-roboto);
}
#app {
  min-height: 100%;
}
.main-wrapper {
  min-height: calc(100vh - 285px);
}
footer {
  background-color: var(--yellow);
  margin-top: 30px;
  height: 255px;
}

/* HTML Tag Elements */
h1,
h2,
h3,
h4,
h5 {
  margin: 0;
}
a {
  text-decoration: none;
  color: inherit;
}
button {
  font-family: var(--font-roboto);
}
a:hover,
button:hover,
input[type="button"]:hover {
  cursor: pointer;
}
hr {
  margin: 0;
  border: 0;
  border-bottom: solid 1px var(--light-gray);
}

/* Layout */
.container {
  max-width: 1280px;
  margin: 0 auto;
}
.flex {
  display: flex;
}
.flex-xy-center {
  display: flex;
  justify-content: center;
  align-items: center;
}
.flex-x-center {
  display: flex;
  justify-content: center;
}
.flex-y-center {
  display: flex;
  align-items: center;
}
.flex-y-end {
  display: flex;
  align-items: flex-end;
}
.flex-space-around {
  display: flex;
  justify-content: space-around;
}
.flex-space-between {
  display: flex;
  justify-content: space-between;
}
.grid-2 {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 20px;
}
.grid-3 {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 20px;
}

/* Table */
table {
  border-collapse: collapse;
  border: 0;
}
th {
  text-align: left;
}
td {
  text-align: right;
}
</style>
