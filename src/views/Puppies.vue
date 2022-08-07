<template>
  <h1 v-html="heading" />
  <div class="sub-contain">
    <div title="Lady Liliana Rae" class="lily_pup"></div>

    <p>
      When you buy one of our puppies, you can rest assured that we raise each one with care.
      We use methods categorized as
      <i>Early Neurological Stimulation</i> (<a
        class="slide"
        :href="ens"
        target="_blank"
        rel="noopener noreferrer"
        title="AKC's Explanation of ENS"
        >ENS</a
      >) that stimulate neurological activity at a very young age, to ensure your puppy will be
      as great to you as Lily has been to us.
    </p>

    <p>
      The first days of life, starting with day 3, are when the puppies are rapidly growing and
      developing neurologically. By using ENS, we can have your puppy well on the way to being
      desensitized and socialized before you take them home.
    </p>
  </div>
  <h1 v-if="puppies.length">Puppy Pictures</h1>
  <div v-if="puppies.length" class="sub-contain">
    <Pup v-for="(pup, i) of puppies" v-bind="pup" :key="i" />
  </div>
</template>

<script>
  import { mapState } from "vuex";
  import { l, ext_links } from "../assets/utils/data";
  import Pup from "@/components/Pup/Pup.vue";
  export default {
    name: "gg-puppies",
    data() {
      return {
        ...ext_links,
        heading:
          window.innerWidth <= 800
            ? "Puppies"
            : `${l("E")}arly ${l("N")}eurological ${l("S")}timulation`,
      };
    },
    computed: mapState(["puppies"]),
    components: { Pup },
  };
</script>

<style lang="scss" scoped>
  div.lily_pup {
    $w: 1733px;
    $h: 1711px;
    width: 150px;
    height: scaleBg($w, 150px, $h);
    margin-top: 30px;
    margin-right: 15px;
    @include round-image-vignette;
    background: url("../assets/images/lily_baby_crop.jpg");
    background-size: contain;
  }
</style>
