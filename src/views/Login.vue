<template>
  <h1>Login</h1>
  <form @submit="submit" autocomplete="off">
    <FloatingInput
      id="username"
      inputName="Username"
      @handle-changes="handleChanges"
      :value="user.username"
      autocomplete="off"
      autofocus
    />
    <FloatingInput
      id="password"
      inputName="Password"
      @handle-changes="handleChanges"
      :value="user.password"
      type="password"
    />
    <button>Submit</button>
  </form>
</template>

<script>
  import FloatingInput from "../components/FloatingInput.vue";
  export default {
    name: "gg-login",
    data() {
      return {
        user: {
          username: "",
          password: "",
        },
      };
    },
    methods: {
      handleChanges(e) {
        this.user[e.target.name] = e.target.value;
      },
      async submit(e) {
        e.preventDefault();
        this.$store.dispatch("login", this.user);
        this.user = { username: "", password: "" };
      },
    },
    components: { FloatingInput },
  };
</script>

<style lang="scss">
  form {
    @include card;
  }
</style>
