<template>
  <h2>Protocol</h2>
  <ul>
    <li><router-link :to="{ name: 'HTTP' }">HTTP</router-link></li>
    <li><router-link :to="{ name: 'HTTPS' }">HTTPS</router-link></li>
  </ul>
  <router-view></router-view>
</template>

<script>
export default {

}
</script>

<style>

</style>