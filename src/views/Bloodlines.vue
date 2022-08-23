<template>
  <h1 v-html="heading" />
  <div class="sub-contain" v-if="!loading">
    <Bloodline v-for="bl of bloodlines" v-bind="bl" :key="bl._id" />
  </div>
  <DotLoader v-else color="#ffcc00" />
</template>

<script>
  import axios from "../plugins/axios";
  import { l } from "../assets/utils/data";
  import Bloodline from "../components/Bloodline.vue";

  export default {
    name: "gg-bloodlines",
    data() {
      return {
        heading: `${l("B")}loodlines`,
        bloodlines: [],
        loading: true,
      };
    },
    async mounted() {
      const { data } = await axios.get("/bloodlines");
      this.bloodlines = data.sort((a, b) => (a._id < b._id ? -1 : a._id > b._id ? 1 : 0));
      this.loading = false;
    },
    components: { Bloodline },
  };
</script>
