<template>
  <article class="bloodline">
    <header></header>
    <h2 v-html="headerText" />
    <img :src="img.url" :alt="imgAlt" :title="imgAlt" />
    <a :href="bloodlink" target="_blank" rel="noopener noreferrer" class="slide">
      View {{ pluralName }} Pedigree
    </a>
    <p v-if="additionalInfo" v-html="additionalInfo" />
  </article>
</template>

<script>
  export default {
    name: "gg-bloodline",
    props: {
      callName: String,
      headerText: String,
      img: Object,
      imgAlt: String,
      bloodlink: String,
      additionalInfo: String,
    },
    computed: {
      pluralName() {
        const callName = this.callName;
        return callName.charAt(callName.length - 1) !== "s"
          ? callName.slice(0, callName.length) + "'s"
          : callName + "'";
      },
    },
  };
</script>

<style lang="scss" scoped>
  article.bloodline {
    @include card;

    img {
      width: 80%;
    }

    a {
      margin-top: 15px;
    }

    p {
      width: max-content;
    }
  }
</style>
