<template>
  <h1 v-html="heading" />
  <div class="sub-contain">
    <Bloodline v-for="bl of bloodlines" v-bind="bl" :key="bl._id" />
    <Bledit v-if="loggedIn" :submitFunc="submit" />
  </div>
</template>

<script>
  import { l } from "../assets/utils/data";
  import Bloodline from "../components/Bloodline.vue";
  import Bledit from "../components/Bledit.vue";

  export default {
    name: "gg-bloodlines",
    data() {
      return {
        heading: `${l("B")}loodlines`,
      };
    },
    methods: {
      submit(e, bl) {
        e.preventDefault();
        this.$store.dispatch("addBloodline", bl);
      },
    },
    components: { Bloodline, Bledit },
    computed: {
      loggedIn() {
        return this.$store.state.loggedIn;
      },
      bloodlines() {
        return this.$store.state.bloodlines;
      },
    },
  };
</script>

<style lang="scss">
  form.new-bloodline {
    @include flex(column, flex-start, center);

    h2 {
      margin: 0 auto;
      line-height: 1.5;
    }
  }
</style>
