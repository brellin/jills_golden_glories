<template>
  <article class="bloodline">
    <h2 v-html="headerText" />
    <img :src="imgSrc" :alt="imgAlt" :title="imgAlt" />
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
      imgSrc: String,
      imgAlt: String,
      bloodlink: String,
      pluralName: String,
      additionalInfo: String,
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
