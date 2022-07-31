<template>
  <h1>Puppy Manager</h1>

  <h1>Add a New Puppy</h1>

  <div class="new_puppy">
    <div>
      <label for="puppy_uploader">Image:</label>
      <input
        type="file"
        accept="image/*"
        id="puppy_uploader"
        multiple
        disabled
      />
    </div>

    <div>
      <label for="sold">Sold:</label>

      <select id="sold" disabled>
        <option value="true">Yes</option>
        <option value="false" selected>No</option>
      </select>
    </div>

    <div>
      <label for="puppy_title">Title:</label>
      <input type="text" id="puppy_title" disabled />
    </div>

    <button id="new_puppy" disabled>Submit</button>
  </div>
</template>

<script>
import axios from "../plugins/axios";
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
};
</script>

<style lang='scss'>
</style>
