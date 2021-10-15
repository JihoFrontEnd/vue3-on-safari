<template>
  <div class="header-wrapper">
    <header>
      <div class="nav-logo" ref="logo" @click="$router.push({ name: 'Home' })">
        <img
          src="@/assets/logo/cherry-quant-logo.png"
          alt="Cherry Quant Logo"
        />
      </div>
      <nav class="menu-wrapper">
        <div class="user-session-wrapper">
          <!-- 사용자가 로그인을 했을 경우 보여질 영역 -->
          <template v-if="USER_ID">
            <button
              class="button mypage"
              @click="
                $router.push({
                  name: 'MyPageMain',
                  params: { user_id: USER_ID },
                })
              "
            >
              Mypage
            </button>
            <button class="button login" @click="LOGOUT">Log Out</button>
          </template>
          <!-- 사용자가 로그인을 하지 않았을 경우 보여질 영역 -->
          <template v-else>
            <button
              class="button mypage"
              @click="$router.push({ name: 'Join' })"
            >
              Join Us
            </button>
            <button
              class="button login"
              @click="$router.push({ name: 'Login' })"
            >
              Log In
            </button>
          </template>
        </div>
        <div class="main-menu-wrapper">
          <router-link
            v-for="menu in menuList"
            :key="menu.name"
            :to="menu.link"
          >
            {{ menu.name }}
          </router-link>
          <a href="https://wikidocs.net/book/7089" target="_blank">
            Cherry Wiki
          </a>
        </div>
      </nav>
    </header>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      menuList: [
        {
          name: "Quant Simulation",
          link: { name: "Strategy" },
        },
        {
          name: "Blog",
          link: "",
        },
        {
          name: "Community",
          link: "",
        },
      ],
    };
  },
  computed: { ...mapGetters("user", ["USER_ID"]) },
  methods: { ...mapActions("user", ["LOGOUT"]) },
};
</script>

<style scoped>
.header-wrapper {
  background: #ffbd00;
  position: sticky;
  top: 0;
  /* Height는 JS로 처리하여 nav 높이 읽어서 조정할 예정 */
  height: 100px;
  /* Chart가 Navigation Bar를 가리는 현상으로 인해 조정 */
  /* Chart Library는 기본적으로 z-index 값이 1로 되어 있는 것으로 추정 */
  z-index: 2;
}

header {
  /* Fix Top */
  top: 0;
  left: 0;
  right: 0;
  /* Layout */
  height: 85px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  position: fixed;
  max-width: 1280px;
}

.nav-logo {
  cursor: pointer;
}

.user-session-wrapper {
  display: flex;
  justify-content: flex-end;
  margin: 10px 0;
}

/* Buttons */
.user-session-wrapper > button {
  margin: 0 8px;
  width: 100px;
  height: 28px;
  border-radius: 8px;
  border: 0;
  font-size: 14px;
}
button.button:hover {
  cursor: pointer;
}
.button.mypage {
  background-color: white;
  color: var(--yellow);
}
.button.login {
  background-color: black;
  color: white;
}

.main-menu-wrapper {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
.main-menu-wrapper > a {
  display: inline-block;
  color: black;
  margin: 0 5px;
  padding: 0 5px;
  font-weight: bold;
}
.main-menu-wrapper > a:hover {
  color: var(--red);
}
</style>
