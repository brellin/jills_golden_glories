<template>
  <article>
    <button class="x" @click="deletePup">X</button>
    <button class="ellipsis">•••</button>
    <h2>{{ title }}</h2>
    <p>{{ sold ? "Sold" : "Not Sold" }}</p>
    <button class="navigate decrement" :disabled="pictures.length < 2" @click="dAI">
      {{ "<" }}
    </button>
    <div class="pic-con-con">
      <PupPic
        v-for="(pic, index) in pictures"
        v-bind="pic"
        @delete-pic="deletePic"
        :activeImg="activeImg === index"
        :id="_id"
        :key="pic.public_id"
      />
    </div>
    <button class="navigate increment" :disabled="pictures.length < 2" @click="iAI">
      {{ ">" }}
    </button>
  </article>
</template>

<script>
  import PupPic from "./PupPic.vue";
  import { deletePup as deletePupReq } from "@/assets/utils/requests";
  export default {
    name: "gg-pup",
    props: {
      _id: String,
      title: String,
      sold: Boolean,
      pictures: Array,
    },
    data() {
      return {
        activeImg: 0,
      };
    },
    components: { PupPic },
    methods: {
      async deletePup() {
        if (window.confirm(`Are you sure you want to delete ${this.title}?`)) {
          this.$store.dispatch("deletePup", this._id);
        } else alert(`You have chosen not to delete ${this.title}.`);
      },
      deletePic(pid) {
        this.$emit("delete-pic", this._id, pid);
      },
      iAI() {
        this.activeImg = this.activeImg === this.pictures.length - 1 ? 0 : this.activeImg + 1;
      },
      dAI() {
        this.activeImg = this.activeImg === 0 ? this.pictures.length - 1 : this.activeImg - 1;
      },
    },
  };
</script>

<style lang="scss">
  article {
    @include card;
    position: relative;

    button.ellipsis {
      @include spin-button;
      align-self: flex-end;
      position: absolute;
      top: 20px;
      right: 20px;
      z-index: 1;
    }

    button.x {
      @include spin-button;
      align-self: flex-end;
      position: absolute;
      top: 20px;
      left: 20px;
      z-index: 1;
    }

    button.navigate {
      position: absolute;
      border: none;
      color: $gold;
      text-shadow: 1px 1px black;
      font-size: 5rem;
      font-family: "Little Star Story";
      top: 50%;
      background: none;
      outline: none;
      cursor: pointer;

      &:disabled {
        color: gray;
        cursor: not-allowed;
      }

      &.increment {
        right: 5px;
      }

      &.decrement {
        left: 5px;
      }
    }
    div.pic-con-con {
      @include flex(row, center, center, nowrap);
      width: 100%;
    }

    input[type="text"],
    select {
      background: $gold_input;
      border: 1px inset $gold_bg;
      outline: none;
      font-size: 5rem;
      text-align: center;
      margin: 10px 0;
      caret-color: $gold;

      option {
        background: $gold_input;
      }

      &:focus {
        outline: 2px solid $gold;
      }
    }

    p {
      width: auto;
    }
  }
</style>
