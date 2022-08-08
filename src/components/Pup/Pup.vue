<template>
  <article class="pup">
    <div class="pup-head">
      <button v-if="loggedIn" class="ellipsis" :title="`Edit '${title}'`">•••</button>
      <h2>{{ title }}</h2>
      <button v-if="loggedIn" class="x" @click="deletePup" :title="`Delete '${title}'`">
        X
      </button>
    </div>
    <p>{{ sold ? "Sold" : "Available" }}</p>
    <carousel :settings="settings">
      <slide v-for="(pic, i) in pictures" :key="i">
        <PupPic v-bind="pic" :id="_id" />
      </slide>
      <template #addons="{ slidesCount }">
        <navigation v-if="slidesCount > 1" />
        <pagination v-if="slidesCount > 1" />
      </template>
    </carousel>
  </article>
</template>

<script>
  import { mapState } from "vuex";
  import { Carousel, Slide, Navigation, Pagination } from "vue3-carousel";
  import "vue3-carousel/dist/carousel.css";
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
        settings: {
          itemsToShow: 1,
          wrapAround: true,
        },
      };
    },
    components: { PupPic, Navigation, Pagination, Slide, Carousel },
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
  article.pup {
    @include card;
    position: relative;

    div.pup-head {
      width: 100%;
      background-color: $blue;
      margin-top: -30px;
      padding: 0 5%;
      border-radius: 50px 50px 0 0;
      @include flex($j: space-evenly, $a: center);

      button.ellipsis {
        @include spin-button;
      }

      button.x {
        @include spin-button;
      }
    }

    section.carousel {
      width: 100%;

      button.carousel__next,
      button.carousel__prev {
        background-color: $gold;
        border: #00000099 2px solid;
        transition: 0.3s ease;
      }

      button.carousel__next {
        &:hover {
          transform: translate(50%, -50%) scale(1.3);
        }
      }

      button.carousel__prev {
        &:hover {
          transform: translate(-50%, -50%) scale(1.3);
        }
      }

      svg.carousel__icon {
        fill: black;
      }

      button.carousel__pagination-button {
        background-color: #{$gold}50;

        &--active {
          background-color: $gold;
        }
      }
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
