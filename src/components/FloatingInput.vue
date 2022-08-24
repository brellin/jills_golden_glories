<template>
  <div :class="`${this.$attrs.name} floating-input`">
    <label :for="this.$attrs.name" :class="focused && 'focused'">{{ inputName }}</label>
    <input
      v-bind="this.$attrs"
      :name="this.$attrs.name"
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
      inputName: {
        required: true,
        type: String,
      },
    },
    data() {
      return {
        focused: this.$attrs.value ? true : false,
      };
    },
    methods: {
      inFocus() {
        this.focused = true;
      },
      unFocus() {
        if (!this.$attrs.value) this.focused = false;
      },
      handleChange(e) {
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
      width: 100%;
    }
  }
</style>
