<template>
  <h1 v-html="heading" />
</template>

<script>
import { l } from "../assets/utils/data";
export default {
  name: "gg-bloodlines",
  data() {
    return {
      heading: `${l("B")}loodlines`,
    };
  },
};
</script>

<style>
</style>