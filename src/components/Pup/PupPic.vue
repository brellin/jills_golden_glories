<template>
  <div class="pic-con">
    <div v-if="loggedIn" class="head-con">
      <div></div>
      <h3>{{ pid }}</h3>
      <button class="dimg" @click="deleteImage">X</button>
    </div>
    <img :src="url" :alt="title" :title="title" />
  </div>
</template>

<script>
  import { mapState } from "vuex";
  import { readPublicId } from "../../assets/utils/cloudinary";
  export default {
    name: "gg-pup-pic",
    props: {
      id: String,
      url: String,
      title: String,
      public_id: String,
      activeImg: Boolean,
    },
    methods: {
      deleteImage() {
        if (
          window.confirm(`Are you sure you want to delete ${readPublicId(this.public_id)}?`)
        ) {
          this.$store.dispatch("deletePic", { id: this.id, public_id: this.public_id });
        } else alert(`You have chosen not to delete ${readPublicId(this.public_id)}.`);
      },
    },
    computed: {
      pid() {
        return readPublicId(this.public_id);
      },
      ...mapState(["loggedIn"]),
    },
  };
</script>

<style lang="scss">
  div.pic-con {
    @include card;
    box-shadow: none;
    padding: 0 0 15px;
    background: $gold_input;
    border-radius: 5px;
    overflow: hidden;
    transition: 0.3s ease;

    div.head-con {
      @include flex($j: space-between, $a: center);
      width: 100%;
      background: $blue;
      padding: 15px;
      margin-bottom: 15px;

      h3 {
        margin: 10px;
        color: $gold;
        max-width: 70%;
        overflow: hidden;
      }

      div {
        width: 40px;
      }

      button.dimg {
        @include spin-button;
      }
    }

    img {
      width: 100%;
      border-radius: 0;
    }
  }
</style>
