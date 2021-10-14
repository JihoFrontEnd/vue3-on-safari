<template>
  <hr />
  <Flex></Flex>
  <hr />
  <DataFromJSON></DataFromJSON>
  <hr />
  <AxiosNews></AxiosNews>
  <hr />
</template>

<script>
import Flex from "@/components/About/Flex.vue";
import DataFromJSON from "@/components/About/DataFromJSON.vue";
import AxiosNews from "@/components/About/AxiosGetNews.vue";

export default {
  components: { Flex, DataFromJSON, AxiosNews },
};
</script>

<style>
.flex {
  display: flex;
  justify-content: space-around;
}
.flex-between {
  display: flex;
  justify-content: space-between;
}
</style>
