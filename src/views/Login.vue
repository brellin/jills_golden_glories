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
  import { login } from "@/assets/utils/requests";
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
        try {
          await login(this.user.username, this.user.password);
          this.$store.commit("login");
          this.$router.push("/puppyManager");
          this.user = { username: "", password: "" };
        } catch (err) {
          console.error(err);
          alert(err);
        }
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
