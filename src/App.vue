<template>
  <div class="wrap">
    <Header />
    <div class="burger" @click="toggleIsOpen" />
    <nav :class="isOpen ? 'open' : ''">
      <router-link
        v-for="{ path, meta } in routes"
        :key="meta.name"
        :to="path"
        @click="close"
      >
        {{ meta.name }}
      </router-link>
    </nav>

    <router-view v-slot="{ Component, route }">
      <transition-group name="slide">
        <section class="routes" :key="route.path" @click="close">
          <component :is="Component" />
        </section>
      </transition-group>
    </router-view>
    <Footer />
  </div>
</template>

<script>
import { routes } from "./routes";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import "./assets/styles/nav.scss";
export default {
  name: "gg-wrap",
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      routes,
      isOpen: false,
    };
  },
  beforeUnmount() {
    localStorage.setItem("notFirstVisit", true);
  },
  methods: {
    toggleIsOpen() {
      this.isOpen = !this.isOpen;
    },
    close() {
      this.isOpen = false;
    },
  },
};
</script>

<style lang="scss" scoped>
div.wrap {
  width: 100%;
  font-size: 1.5rem;
  font-family: "Little Star Story", -apple-system, BlinkMacSystemFont,
    "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans",
    "Droid Sans", "Helvetica Neue", sans-serif;
  @include flex(column, flex-start, center);
  background-image: url("./assets/images/bg.jpg");
  background-size: 100px;
  background-attachment: fixed;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;

  section.routes {
    min-height: 37vh;
    margin: -50px auto 0;
    width: 100%;
    background: whitesmoke;
    padding: 100px 30px 15px;
    font-size: 2.5rem;
    overflow: hidden;
    @include flex(column, flex-start, center);

    @media (max-width: 800px) {
      padding: 100px 0 15px;
      width: 100%;
      min-height: 46.5vh;
    }
  }

  div.burger {
    z-index: 50;
    width: 0;
    height: 0;
    box-shadow: 2px 2px 5px black;
    background-color: $blue;
    border-radius: 50%;
    background-size: 30px 30px;
    background-repeat: no-repeat;
    background-position: 50%;
    position: fixed;
    top: 15px;
    left: 15px;

    @media (max-width: 800px) {
      width: 50px;
      height: 50px;
      background-image: linear-gradient(
        transparent 24%,
        $gold 27%,
        $gold 37%,
        transparent 40%,
        transparent 44%,
        $gold 47%,
        $gold 57%,
        transparent 60%,
        transparent 64%,
        $gold 67%,
        $gold 77%,
        transparent 80%
      );
      transition: 0.3s ease;
      cursor: pointer;
    }

    &:focus {
      width: 55px;
      height: 55px;
      margin-bottom: -5px;
    }
  }
}
</style>
