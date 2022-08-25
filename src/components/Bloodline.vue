<template>
  <article class="bloodline">
    <header v-if="loggedIn">
      <button class="spin" @click="edit">•••</button>
      <button class="spin" @click="deleteBl">X</button>
    </header>
    <template v-if="!editing">
      <h2 v-html="headerText" />
      <img :src="img.url" :alt="imgAlt" :title="imgAlt" />
      <a :href="bloodlink" target="_blank" rel="noopener noreferrer" class="slide">
        View {{ pluralName }} Pedigree
      </a>
      <p v-if="additionalInfo" v-html="additionalInfo" />
    </template>
    <Bledit v-if="editing" v-bind="this.$props" :submitFunc="submit" />
  </article>
</template>

<script>
  import Bledit from "./Bledit.vue";
  export default {
    name: "gg-bloodline",
    props: {
      callName: String,
      headerText: String,
      img: Object,
      imgAlt: String,
      bloodlink: String,
      additionalInfo: String,
      _id: String,
    },
    data() {
      return {
        editing: false,
      };
    },
    computed: {
      pluralName() {
        const callName = this.callName;
        return callName.charAt(callName.length - 1) !== "s"
          ? callName.slice(0, callName.length) + "'s"
          : callName + "'";
      },
      loggedIn() {
        return this.$store.state.loggedIn;
      },
    },
    methods: {
      edit() {
        this.editing = !this.editing;
      },
      deleteBl() {
        this.$store.dispatch("deleteBl", this._id);
      },
      handleChanges(e) {
        this.edits[e.target.name] = e.target.value;
      },
      submit(e, bl) {
        e.preventDefault();
        this.$store.dispatch("editBl", { id: this._id, bl });
        this.edit();
      },
    },
    components: { Bledit },
  };
</script>

<style lang="scss" scoped>
  article.bloodline {
    @include card;

    header {
      @include flex($j: space-between);
      width: 100%;
      padding: 0 5%;
      margin: none;
    }

    h2 {
      margin: 0 auto 25px;
      line-height: 1.5;
    }

    img {
      width: 80%;
    }

    a {
      margin-top: 15px;
    }

    p {
      width: max-content;
    }

    form.bledit {
      background: none;
      box-shadow: none;
      margin: 0;

      div.floating-input {
        width: 80%;
      }
    }
  }
</style>
