<template>
  <h1>Get News list using Axios</h1>
  <div>
    <ul>
      <li class="flex-between" v-for="article of NEWS" :key="article.id">
        <h3>{{ article.title }}</h3>
        <p class="author">
          <template v-if="article.user">
            {{ article.user }}
          </template>
          <template v-else>
            {{ article.domain }}
          </template>
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  created() {
    this.FETCH_NEWS(this.randomPageNumber)
      .then(() => console.log("fetch success!"))
      .catch((e) => console.error(e));
  },
  computed: {
    ...mapGetters(["NEWS"]),
    randomPageNumber: () => Math.floor(Math.random() * 10) + 1,
  },
  methods: { ...mapActions(["FETCH_NEWS"]) },
};
</script>

<style scoped>
h3 {
  text-align: left;
}
.author {
  font-family: var(--font-noto-sans);
}
</style>
