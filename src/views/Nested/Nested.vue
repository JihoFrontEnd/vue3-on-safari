<template>
  <h1>Nested</h1>
  <ul>
    <li>
      <router-link :to="{ name: 'Daughter' }">Daughter</router-link>
    </li>
    <li>
      <router-link :to="{ name: 'Son' }">Son</router-link>
    </li>
  </ul>
  <router-view></router-view>
</template>

<script>
export default {};
</script>

<style></style>
