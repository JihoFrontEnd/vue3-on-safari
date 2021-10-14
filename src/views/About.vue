<template>
  <hr />
  <Flex></Flex>
  <hr />
  <DataFromJSON></DataFromJSON>
  <hr />
</template>

<script>
import Flex from "@/components/About/Flex.vue";
import DataFromJSON from "@/components/About/DataFromJSON.vue";

export default {
  components: { Flex, DataFromJSON },
};
</script>

<style>
.flex {
  display: flex;
  justify-content: space-around;
}
</style>
