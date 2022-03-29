<template>
  <h1 v-html="heading" />
</template>

<script>
import { l } from "../assets/utils/data";
export default {
  name: "gg-puppies",
  data() {
    return {
      heading: `${l("E")}arly ${l("N")}eurological ${l("S")}timulation`,
    };
  },
};
</script>

<style>
</style>