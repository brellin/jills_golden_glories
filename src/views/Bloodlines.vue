<template>
  <h1 v-html="heading" />
  <div class="sub-contain">
    <Bloodline v-for="bl of bloodlines" v-bind="bl" :key="bl.callName" />
  </div>
</template>

<script>
  import { bloodlines, l } from "../assets/utils/data";
  import Bloodline from "@/components/Bloodline.vue";

  export default {
    name: "gg-bloodlines",
    data() {
      return {
        heading: `${l("B")}loodlines`,
        bloodlines,
      };
    },
    components: { Bloodline },
  };
</script>
