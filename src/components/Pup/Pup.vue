<template>
  <article class="pup">
    <template v-if="!editing">
      <div class="pup-head">
        <button class="spin" @click="edit" :title="`Edit '${title}'`" v-if="loggedIn">
          •••
        </button>
        <h2>{{ title }}</h2>
        <button class="spin" @click="deletePup" :title="`Delete '${title}'`" v-if="loggedIn">
          X
        </button>
      </div>
      <h3>
        Status: <span :class="sold ? 'sold' : ''">{{ sold ? "Sold" : "Available" }}</span>
      </h3>
    </template>

    <template v-else>
      <div class="pup-head">
        <button class="spin" @click="edit" :title="`Edit '${title}'`">•••</button>
        <input type="text" :value="edits.title" name="title" @input="handleEdits" />
        <button class="spin" @click="deletePup" :title="`Delete '${title}'`">X</button>
      </div>
      <select name="sold" :value="edits.sold" @input="handleEdits">
        <option :value="false">Available</option>
        <option :value="true">Sold</option>
      </select>
    </template>

    <carousel :settings="settings">
      <slide v-for="(pic, i) in pictures" :key="i">
        <PupPic v-bind="pic" :id="_id" />
      </slide>
      <template #addons="{ slidesCount }">
        <navigation v-if="slidesCount > 1" />
        <pagination v-if="slidesCount > 1" />
      </template>
    </carousel>
    <template v-if="editing">
      <input type="file" name="pictures" accept="image/*" @input="handlePicUpload" multiple />
      <div class="upload-display">
        <img v-for="pic in edits.imgs" :src="pic" :alt="pic" :key="pic" />
      </div>
      <button type="submit" @click="editPup">Submit Changes</button>
    </template>
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
        editing: false,
        edits: {
          title: this.title,
          sold: this.sold,
          imgs: [],
          pictures: [],
        },
      };
    },
    components: { PupPic, Navigation, Pagination, Slide, Carousel },
    methods: {
      deletePup() {
        if (window.confirm(`Are you sure you want to delete ${this.title}?`)) {
          this.$store.dispatch("deletePup", this._id);
        } else alert(`You have chosen not to delete ${this.title}.`);
      },
      edit() {
        this.editing = !this.editing;
      },
      handleEdits(e) {
        const val = e.target.name === "sold" ? e.target.value === "true" : e.target.value;
        this.edits[e.target.name] = val;
      },
      handlePicUpload(e) {
        for (const file of e.target.files) {
          this.edits.pictures.push(file);
          this.edits.imgs.push(URL.createObjectURL(file));
        }
      },
      editPup(e) {
        e.preventDefault();
        this.$store.dispatch("editPup", { id: this._id, edits: this.edits });
        this.edits = {
          title: this.edits.title,
          sold: this.edits.sold,
          imgs: [],
          pictures: [],
        };
        this.editing = false;
      },
    },
    computed: mapState(["loggedIn"]),
  };
</script>

<style lang="scss">
  article.pup {
    @include card;

    div.pup-head {
      width: 100%;
      background-color: $blue;
      margin-top: -30px;
      border-radius: 50px 50px 0 0;
      @include flex($j: space-around, $a: center);
      overflow: hidden;

      h2 {
        margin: 0;
        line-height: 1.5;
      }
    }

    h3 {
      color: black;

      span {
        color: green;

        &.sold {
          color: red;
        }
      }
    }

    select {
      background: $gold_input;
      border: 1px inset $gold_bg;
      outline: none;
      font-size: 5rem;
      text-align: center;
      margin: 10px 0;
      padding: 5px 10px;
      caret-color: $gold;

      option {
        background: $gold_input;
      }

      &:focus {
        outline: 2px solid $gold;
      }
    }

    input[type="text"] {
      max-width: 60%;
      background: $gold_input;
      border: 1px inset $gold_bg;
      outline: none;
      font-size: 5rem;
      text-align: center;
      margin: 10px 0;
      caret-color: $gold;
    }

    input[type="file"] {
      color: transparent;

      &::-webkit-file-upload-button {
        visibility: hidden;
      }

      &::before {
        content: "Browse for files";
        color: black;
        display: inline-block;
        background-color: $gold;
        border: 1px solid black;
        border-radius: 5px;
        padding: 5px 10px;
        outline: none;
        white-space: nowrap;
        -webkit-user-select: none;
        user-select: none;
        cursor: pointer;
        font-weight: 700;
        font-size: 1.5rem;
        margin-left: 60px;
        margin-bottom: 20px;
      }
    }

    button[type="submit"] {
      background-color: $gold;
      border: 1px solid black;
      border-radius: 5px;
      padding: 5px 10px;
      outline: none;
      font-weight: 700;
      font-size: 1.5rem;
      cursor: pointer;
      transition: 0.3s ease;

      &:hover {
        transform: scale(1.3);
      }
    }
  }
</style>
