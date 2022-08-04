<template>
  <div class="pic-con-con">
    <div class="pic-con">
      <div class="head-con">
        <div></div>
        <h3>{{ readPublicId(public_id) }}</h3>
        <button class="dimg" @click="deleteImage">X</button>
      </div>
      <img :src="url" :alt="title" :title="title" />
    </div>
  </div>
</template>

<script>
  import { deletePicture } from "../../assets/utils/requests";
  import { readPublicId } from "../../assets/utils/cloudinary";
  export default {
    name: "gg-pup-pic",
    props: {
      id: String,
      url: String,
      title: String,
      public_id: String,
    },
    methods: {
      async deleteImage() {
        if (window.confirm(`Are you sure you want to delete ${readPublicId(this.public_id)}?`)) {
          deletePicture(this.id, this.public_id);
          this.$emit("delete-pic", this.public_id);
        } else alert(`You have chosen not to delete ${readPublicId(this.public_id)}.`);
      },
      readPublicId,
    },
  };
</script>

<style lang="scss">
  div.pic-con-con {
    @include flex(column, flex-start, center);
    width: 100%;

    div.pic-con {
      position: relative;
      @include card;
      width: max-content;
      max-width: calc(100% - 100px);
      padding: 0 0 15px;
      background: $gold_input;
      border-radius: 5px;
      overflow: hidden;

      div.head-con {
        @include flex($j: space-between, $a: center);
        width: 100%;
        background: $blue;
        padding: 15px;
        margin-bottom: 15px;

        h3 {
          margin: 10px;
          color: $gold;
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
  }
</style>
