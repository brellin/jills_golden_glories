<template>
  <h1 v-html="heading" />
</template>

<script>
import { l } from "../assets/utils/data";
export default {
  name: "gg-about",
  data() {
    return {
      heading: `${l("H")}istory of the ${l("B")}reed`,
    };
  },
};
</script>

<style>
</style>