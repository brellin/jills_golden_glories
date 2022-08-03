<template>
  <article>
    <button class="x" @click="deletePup">X</button>
    <button class="ellipsis">•••</button>
    <h3>{{ title }}</h3>
    <p>{{ sold ? "Sold" : "Not Sold" }}</p>
    <div
      v-for="{ url, title, public_id } in pictures"
      :key="public_id"
      class="pic-con-con"
    >
      <div class="pic-con">
        <div class="head-con">
          <button class="dimg" @click="deleteImage(public_id)">X</button>
        </div>
        <img :src="url" :alt="title" :title="title" />
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: "gg-pup",
  props: {
    _id: String,
    title: String,
    sold: Boolean,
    pictures: Array,
  },
  methods: {
    deleteImage(pid) {
      if (window.confirm(`Are you sure you want to delete this picture?`))
        console.log(`deleted ${pid}`);
      else alert(`You have chosen not to delete ${pid}.`);
    },
    deletePup() {
      if (window.confirm(`Are you sure you want to delete ${this.title}?`))
        console.log("deleted");
      else alert(`You have chosen not to delete ${this.title}.`);
    },
  },
};
</script>

<style lang="scss">
article {
  @include card;
  position: relative;

  img {
    max-width: 80%;
    width: auto;
    image-rendering: smooth;
  }

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

  div.pic-con-con {
    @include flex(column, flex-start, center);
    max-width: 100%;

    div.pic-con {
      position: relative;
      @include card;
      width: max-content;
      padding: 15px;

      div.head-con {
        @include flex($j: space-between);
        width: 100%;

        div {
          width: 40px;
        }

        button.dimg {
          @include spin-button;
        }
      }

      img {
        width: 100%;
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
