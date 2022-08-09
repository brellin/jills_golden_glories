<template>
  <article class="pup">
    <template v-if="!editing">
      <div class="pup-head" v-if="loggedIn">
        <button class="spin" @click="edit" :title="`Edit '${title}'`">•••</button>
        <h2>{{ title }}</h2>
        <button class="spin" @click="deletePup" :title="`Delete '${title}'`">X</button>
      </div>
      <p>{{ sold ? "Sold" : "Available" }}</p>
    </template>
    <template v-else>
      <div class="pup-head" v-if="loggedIn">
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
      <button @click="editPup">Submit Changes</button>
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
      iAI() {
        this.activeImg = this.activeImg === this.pictures.length - 1 ? 0 : this.activeImg + 1;
      },
      dAI() {
        this.activeImg = this.activeImg === 0 ? this.pictures.length - 1 : this.activeImg - 1;
      },
      edit() {
        this.editing = !this.editing;
      },
      handleEdits(e) {
        this.edits[e.target.name] = e.target.value;
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
        this.edits = { title: this.title, sold: this.sold, imgs: [], pictures: [] };
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
      border-radius: 50px 50px 0 0;
      @include flex($j: space-around, $a: center);

      h2 {
        margin: 0;
        line-height: 1.5;
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
