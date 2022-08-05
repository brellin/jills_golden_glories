<template>
  <h1>Login</h1>
  <form @submit="submit">
    <FloatingInput id="username" inputName="Username" @handle-changes="handleChanges" />
    <FloatingInput
      id="password"
      inputName="Password"
      @handle-changes="handleChanges"
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
        const { status } = await login(this.user.username, this.user.password);
        if (status === 200) {
          this.$store.commit("login");
          this.$router.push("/puppyManager");
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
