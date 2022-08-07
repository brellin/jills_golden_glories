<template>
  <article>
    <button v-if="loggedIn" class="x" @click="deletePup">X</button>
    <button v-if="loggedIn" class="ellipsis">•••</button>
    <h2>{{ title }}</h2>
    <p>{{ sold ? "Sold" : "Not Sold" }}</p>
    <div class="pic-con-con">
      <button class="navigate decrement" :disabled="pictures.length < 2" @click="dAI">
        {{ "<" }}
      </button>
      <PupPic
        v-for="(pic, index) in pictures"
        v-bind="pic"
        :activeImg="activeImg === index"
        :id="_id"
        :key="pic.public_id"
      />
      <button class="navigate increment" :disabled="pictures.length < 2" @click="iAI">
        {{ ">" }}
      </button>
    </div>
  </article>
</template>

<script>
  import { mapState } from "vuex";
  import PupPic from "./PupPic.vue";
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
      iAI() {
        this.activeImg = this.activeImg === this.pictures.length - 1 ? 0 : this.activeImg + 1;
      },
      dAI() {
        this.activeImg = this.activeImg === 0 ? this.pictures.length - 1 : this.activeImg - 1;
      },
    },
    computed: mapState(["loggedIn"]),
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
