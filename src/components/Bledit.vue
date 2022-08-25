<template>
  <form class="bledit" @submit="handleSubmit">
    <h2 v-if="this.add">New Bloodline</h2>
    <FloatingInput
      name="headerText"
      inputName="Title"
      @handle-changes="handleChanges"
      :value="bl.headerText"
      :required="add"
      autocomplete="off"
    />
    <FloatingInput
      name="callName"
      inputName="Name"
      @handle-changes="handleChanges"
      :value="bl.callName"
      :required="add"
      autocomplete="off"
    />
    <input
      type="file"
      name="img"
      accept="image/*"
      :required="add"
      @input="handleImageChange"
    />
    <FloatingInput
      name="imgAlt"
      inputName="Photo Description"
      @handle-changes="handleChanges"
      :value="bl.imgAlt"
      :required="add"
      autocomplete="off"
    />
    <FloatingInput
      name="bloodlink"
      inputName="Link to Pedigree"
      @handle-changes="handleChanges"
      :value="bl.bloodlink"
      :required="add"
      autocomplete="off"
    />
    <FloatingInput
      name="additionalInfo"
      inputName="Additional Information (Optional)"
      @handle-changes="handleChanges"
      :value="bl.additionalInfo"
      :required="add"
      autocomplete="off"
    />

    <button class="submit">{{ this.add ? "Add" : "Edit" }} Bloodline</button>
  </form>
</template>

<script>
  import FloatingInput from "./FloatingInput.vue";
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
      handleSubmit(e) {
        e.preventDefault();
        this.submitFunc(this.bl);
        if (this.$props.add)
          this.bl = {
            callName: "",
            headerText: "",
            imgAlt: "",
            bloodlink: "",
            additionalInfo: "",
            img: "",
          };
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
      add: { default: false, type: Boolean },
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

    h2 {
      margin: 0 auto;
      line-height: 1.5;
    }
  }
</style>
