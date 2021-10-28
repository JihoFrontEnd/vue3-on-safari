<template>
  <h1>Route Test</h1>
  <ul>
    <li>
      <router-link :to="{ name: 'Location' }">Location</router-link>
    </li>
    <li>
      <router-link :to="{ name: 'RouterGo' }">RouterGo</router-link>
    </li>
  </ul>
  <router-view></router-view>
</template>

<script>
export default {};
</script>
