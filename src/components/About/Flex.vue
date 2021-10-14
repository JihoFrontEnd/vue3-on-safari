<template>
  <h1>CSS Flex Test</h1>
  <div class="flex">
    <div v-for="i in 5" :key="i">item {{ i }}</div>
  </div>
</template>
