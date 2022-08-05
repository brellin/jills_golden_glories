<template>
  <h1>Current Puppies</h1>
  <section class="currentPuppies">
    <Pup
      v-for="pup in puppies"
      v-bind="pup"
      :key="pup._id"
      @delete-pup="deletePup"
      @delete-pic="deletePic"
    />
  </section>

  <h1>Add a New Puppy</h1>
  <form class="newPuppy" @submit="addPup">
    <FloatingInput
      @handle-changes="handleNewPupChange"
      :value="this.newPup.title"
      id="title"
      inputName="Title"
      autocomplete
    />

    <input type="file" name="pictures" accept="image/*" @input="handleNewPupChange" multiple />

    <div class="upload-display">
      <img v-for="pic in this.newPup.imgs" :src="pic" :alt="pic" :key="pic" />
    </div>

    <button>Submit</button>
  </form>
</template>

<script>
  import axios from "../plugins/axios";
  import Pup from "../components/Pup/Pup.vue";
  import { postNewPuppy } from "@/assets/utils/requests";
  import FloatingInput from "@/components/FloatingInput.vue";
  export default {
    name: "gg-puppy-manager",
    data() {
      return {
        newPup: {
          pictures: [],
          imgs: [],
          title: "",
        },
        puppies: [],
        loading: false,
      };
    },
    beforeMount() {
      axios
        .get("puppies")
        .then(({ data }) => {
          console.log(data);
          this.puppies = data;
        })
        .catch(({ message }) => console.error(message));
    },
    components: {
      Pup,
      FloatingInput,
    },
    methods: {
      deletePic(id, public_id) {
        const newPups = this.puppies.slice();
        const pupMatch = newPups.findIndex((pup) => pup._id === id);
        newPups[pupMatch].pictures = newPups[pupMatch].pictures.filter(
          (pic) => pic.public_id !== public_id
        );
        this.puppies = newPups;
      },
      deletePup(id) {
        const newPups = this.puppies.slice();
        this.puppies = newPups.filter((pup) => pup._id !== id);
      },
      handleNewPupChange(e) {
        if (e.target.name === "pictures")
          for (const file of e.target.files) {
            this.newPup.pictures.push(file);
            this.newPup.imgs.push(URL.createObjectURL(file));
          }
        else this.newPup[e.target.name] = e.target.value;
      },
      async addPup(e) {
        e.preventDefault();
        console.log(this.newPup);
        const { status } = await postNewPuppy(this.newPup);
        console.log(status);
        this.newPup = { pictures: [], imgs: [], title: "" };
      },
    },
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

    button {
      margin: 15px auto;
      font-size: 2.5rem;
      font-family: "Little Star Story";
      cursor: pointer;
    }
  }
</style>
