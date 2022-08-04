<template>
  <article>
    <button class="x" @click="deletePup">X</button>
    <button class="ellipsis">•••</button>
    <h2>{{ title }}</h2>
    <p>{{ sold ? "Sold" : "Not Sold" }}</p>
    <PupPic
      v-for="pic in pictures"
      v-bind="pic"
      :id="_id"
      :key="pic.public_id"
    />
  </article>
</template>

<script>
import PupPic from "./PupPic.vue";
export default {
  name: "gg-pup",
  props: {
    _id: String,
    title: String,
    sold: Boolean,
    pictures: Array,
  },
  components: { PupPic },
  methods: {
    deletePup() {
      window.confirm(`Are you sure you want to delete ${this.title}?`)
        ? console.log("deleted")
        : alert(`You have chosen not to delete ${this.title}.`);
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
