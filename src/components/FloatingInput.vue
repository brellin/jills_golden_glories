<template>
  <div class="floating-input">
    <label :for="id" :class="focused && 'focused'">{{ inputName }}</label>
    <input
      :name="id"
      :type="type"
      :id="id"
      :autocomplete="autocomplete ? 'on' : 'off'"
      :value="this.value"
      @focus="inFocus"
      @blur="unFocus"
      @input="handleChange"
    />
  </div>
</template>

<script>
  export default {
    name: "gg-floating-input",
    props: {
      id: {
        required: true,
        type: String,
      },
      type: {
        required: false,
        type: String,
        default: "text",
      },
      inputName: {
        required: true,
        type: String,
      },
      autocomplete: {
        required: false,
        type: Boolean,
      },
      value: {
        required: true,
        type: String,
      },
    },
    data() {
      return {
        focused: false,
        field: this.value,
      };
    },
    methods: {
      inFocus() {
        this.focused = true;
      },
      unFocus() {
        if (!this.field) this.focused = false;
      },
      handleChange(e) {
        this.field = e.target.value;
        this.$emit("handle-changes", e);
      },
    },
  };
</script>

<style lang="scss" scoped>
  div.floating-input {
    margin-bottom: 2rem;
    background-color: white;
    border: 1px solid black;
    padding: 5px;
    border-radius: 5px;
    position: relative;

    label {
      position: absolute;
      transition: 0.3s ease;
      top: 5px;

      &.focused {
        font-size: 1.3rem;
        top: -10px;
        background: linear-gradient(transparent 58%, white 50%);
      }
    }

    input {
      background: none;
      border: none;
      font-size: 2rem;
      outline: none;
    }
  }
</style>
