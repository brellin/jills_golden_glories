<template>
  <form class="bledit" @submit="(e) => submitFunc(e, bl)">
    <FloatingInput
      name="headerText"
      inputName="Title"
      @handle-changes="handleChanges"
      :value="bl.headerText"
      autocomplete="off"
    />
    <FloatingInput
      name="callName"
      inputName="Name"
      @handle-changes="handleChanges"
      :value="bl.callName"
      autocomplete="off"
    />
    <input type="file" name="img" accept="image/*" @input="handleImageChange" />
    <FloatingInput
      name="imgAlt"
      inputName="Photo Description"
      @handle-changes="handleChanges"
      :value="bl.imgAlt"
      autocomplete="off"
    />
    <FloatingInput
      name="bloodlink"
      inputName="Link to Pedigree"
      @handle-changes="handleChanges"
      :value="bl.bloodlink"
      autocomplete="off"
    />
    <FloatingInput
      name="additionalInfo"
      inputName="Additional Information (Optional)"
      @handle-changes="handleChanges"
      :value="bl.additionalInfo"
      autocomplete="off"
    />

    <button class="submit">Add Bloodline</button>
  </form>
</template>

<script>
  import FloatingInput from "./FloatingInput.vue";
  const emptyBloodline = {
    callName: "",
    headerText: "",
    imgAlt: "",
    bloodlink: "",
    additionalInfo: "",
    img: "",
  };
  export default {
    name: "gg-bleit",
    data() {
      return {
        bl: {
          callName: this.$props.callName,
          headerText: this.$props.headerText,
          imgAlt: this.$props.imgAlt,
          bloodlink: this.$props.bloodlink,
          additionalInfo: this.$props.additionalInfo,
          img: this.$props.img,
        },
      };
    },
    methods: {
      handleChanges(e) {
        this.bl[e.target.name] = e.target.value;
      },
      handleImageChange(e) {
        for (const file of e.target.files) {
          this.bl.img = file;
        }
      },
    },
    props: {
      submitFunc: Function,
      callName: { default: "", type: String },
      headerText: { default: "", type: String },
      imgAlt: { default: "", type: String },
      bloodlink: { default: "", type: String },
      additionalInfo: { default: "", type: String },
      img: Object,
    },
    components: { FloatingInput },
  };
</script>

<style lang="scss">
  form.bledit {
    div.floating-input {
      width: 80%;
    }

    button {
      margin: 15px auto;
      font-size: 2.5rem;
      font-family: "Little Star Story";
      cursor: pointer;
    }
  }
</style>
