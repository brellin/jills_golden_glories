<template>
  <h1>Current Puppies</h1>
  <section class="currentPuppies">
    <Pup v-for="pup in puppies" v-bind="pup" :key="pup._id" />
  </section>

  <h1>Add a New Puppy</h1>
  <form class="newPuppy" @submit="addPup">
    <FloatingInput
      @handle-changes="handleNewPupChange"
      :value="newPup.title"
      name="title"
      inputName="Title"
      autocomplete
    />

    <input type="file" name="pictures" accept="image/*" @input="handleNewPupChange" multiple />

    <div class="upload-display">
      <img v-for="pic in newPup.imgs" :src="pic" :alt="pic" :key="pic" />
    </div>

    <button class="submit">Submit</button>
  </form>
</template>

<script>
  import Pup from "../components/Pup/Pup.vue";
  import FloatingInput from "../components/FloatingInput.vue";
  import { mapState } from "vuex";
  export default {
    name: "gg-puppy-manager",
    data() {
      return {
        newPup: {
          pictures: [],
          imgs: [],
          title: "",
        },
        loading: false,
      };
    },
    components: { Pup, FloatingInput },
    methods: {
      handleNewPupChange(e) {
        if (e.target.name === "pictures")
          for (const file of e.target.files) {
            this.newPup.pictures.push(file);
            this.newPup.imgs.push(URL.createObjectURL(file));
          }
        else this.newPup[e.target.name] = e.target.value;
      },
      addPup(e) {
        e.preventDefault();
        this.$store.dispatch("addPup", this.newPup);
        this.newPup = { pictures: [], imgs: [], title: "" };
      },
    },
    computed: mapState(["puppies"]),
  };
</script>

<style lang="scss">
  section.currentPuppies {
    width: 90%;
  }

  form.newPuppy {
    @include card;
    width: 90%;
    padding: 15px 30px;
    box-sizing: border-box;

    input[type="file"],
    select {
      font-family: "Little Star Story";
      font-size: 2rem;
      margin: 15px auto;
      text-align: center;
    }

    div.upload-display {
      @include flex(column, center, center);
      width: 100%;

      img {
        max-width: 100%;
      }
    }
  }
</style>
