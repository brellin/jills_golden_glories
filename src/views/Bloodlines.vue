<template>
  <h1 v-html="heading" />
  <div class="sub-contain">
    <Bloodline v-for="bl of bloodlines" v-bind="bl" :key="bl._id" />
    <Bledit v-if="loggedIn" :submitFunc="submit" :add="true" />
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
      submit(bl) {
        if (
          bl.headerText &&
          bl.img &&
          bl.imgAlt &&
          bl.callName &&
          bl.bloodlink &&
          bl.additionalInfo
        )
          this.$store.dispatch("addBl", bl);
        // else alert("All fields must be filled out.");
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
  }
</style>
