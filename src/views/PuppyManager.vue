<template>
  <h1>Current Puppies</h1>
  <section class="currentPuppies">
    <Pup v-for="pup in puppies" v-bind="pup" :key="pup._id" />
  </section>

  <h1>Add a New Puppy</h1>
  <form class="newPuppy">
    <figure>
      <label for="puppy_uploader">Image:</label>
      <input
        type="file"
        accept="image/*"
        id="puppy_uploader"
        multiple
        disabled
      />
    </figure>

    <figure>
      <label for="sold">Sold:</label>

      <select id="sold" disabled>
        <option value="true">Yes</option>
        <option value="false" selected>No</option>
      </select>
    </figure>

    <figure>
      <label for="puppy_title">Title:</label>
      <input type="text" id="puppy_title" disabled />
    </figure>

    <button id="new_puppy" disabled>Submit</button>
  </form>
</template>

<script>
import axios from "../plugins/axios";
import Pup from "../components/Pup/Pup.vue";
export default {
  name: "gg-puppy-manager",
  data() {
    return {
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
};
</script>

<style lang="scss">
section.current_puppies {
  width: 100%;
}

form.newPuppy {
  @include card;
  width: 50%;
  padding: 15px 30px;

  figure {
    @include flex($j: baseline, $a: center);
    width: 100%;
    margin-bottom: 10px;
    padding: none;
    text-align: center;

    label {
      width: 75px;
      text-align: right;
      font-size: 2.5rem;
      font-family: "Little Star Story";
    }

    input,
    select {
      margin-left: 10px;
      font-size: 2rem;
    }

    img {
      max-width: 100%;
    }

    button {
      font-size: 2.5rem;
      font-family: "Little Star Story";
      cursor: pointer;
    }
  }
}
</style>
