<template>
  <h1 v-html="heading" />
  <div class="sub-contain">
    <div
      class="bloodline"
      v-for="{
        callName,
        headerText,
        imgSrc,
        imgAlt,
        bloodlink,
        pluralName,
        additionalInfo,
      } of bloodlines"
      :key="callName"
    >
      <h2 v-html="headerText" />
      <img :src="imgSrc" :alt="imgAlt" :title="imgAlt" />
      <a :href="bloodlink" target="_blank" rel="noopener noreferrer" class="slide">
        View {{ pluralName }} Pedigree
      </a>
      <p v-if="additionalInfo" v-html="additionalInfo" />
    </div>
  </div>
</template>

<script>
  import { bloodlines, l } from "../assets/utils/data";

  export default {
    name: "gg-bloodlines",
    data() {
      return {
        heading: `${l("B")}loodlines`,
        bloodlines,
      };
    },
  };
</script>

<style lang="scss" scoped>
  div.bloodline {
    @include card;

    img {
      width: 80%;
    }

    a {
      margin-top: 15px;
    }
  }
</style>
