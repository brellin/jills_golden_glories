<template>
  <h1>Current Puppies</h1>
  <section class="currentPuppies">
    <Pup v-for="pup in puppies" v-bind="pup" :key="pup._id" @delete-pup="deletePup" @delete-pic="deletePic" />
  </section>

  <h1>Add a New Puppy</h1>
  <form class="newPuppy" @submit="addPup">
    <input type="text" name="title" placeholder="Title" @input="handleNewPupChange" />

    <input type="file" name="pictures" accept="image/*" @input="handleNewPupChange" multiple />
    <img v-for="pic in this.newPup.imgs" :src="pic" :alt="pic" :key="pic" />

    <button>Submit</button>
  </form>
</template>

<script>
  import axios from "../plugins/axios";
  import Pup from "../components/Pup/Pup.vue";
  import { postNewPuppy } from "@/assets/utils/requests";
  export default {
    name: "gg-puppy-manager",
    data() {
      return {
        newPup: {
          pictures: [],
          imgs: [],
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
    },
    methods: {
      deletePic(id, public_id) {
        const newPups = this.puppies.slice();
        const pupMatch = newPups.findIndex((pup) => pup._id === id);
        newPups[pupMatch].pictures = newPups[pupMatch].pictures.filter((pic) => pic.public_id !== public_id);
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
        const { data } = await postNewPuppy(this.newPup);
        console.log(data);
        this.newPup = { pictures: [], imgs: [] };
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

    input,
    select {
      font-size: 2rem;
      margin: 15px auto;
      text-align: center;
    }

    img {
      max-width: 100%;
    }

    button {
      margin: 15px auto;
      font-size: 2.5rem;
      font-family: "Little Star Story";
      cursor: pointer;
    }
  }
</style>
