<template>
  <div
    class="menu"
    v-for="menu of menuList"
    :key="menu.id"
    :data-selected="selected(menu.id)"
  >
    <i :class="menu.icon"></i>
    <p class="menu-title">{{ menu.title }}</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      menuList: [
        {
          id: "",
          icon: "fas fa-cog",
          title: "회원 정보",
        },
        {
          id: "update",
          icon: "far fa-user-astronaut",
          title: "회원 정보 수정",
        },
        {
          id: "delete",
          icon: "",
          title: "회원 탈퇴",
        },
      ],
    };
  },
  computed: {
    ...mapGetters("user", ["USER_ID"]),
    routeLastParam() {
      let fullPath = this.$route.path;
      let path = fullPath.substring(fullPath.lastIndexOf("/") + 1);
      return path === this.USER_ID ? "" : path;
    },
  },
  methods: {
    selected(id) {
      return this.routeLastParam === id;
    },
  },
};
</script>

<style scoped>
.menu[data-selected="true"] > i {
  color: var(--yellow);
}
.menu-title {
  font-family: var(--font-noto-sans);
  font-size: 12px;
}
</style>
