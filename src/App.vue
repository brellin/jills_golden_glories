<template>
  <div class="wrap">
    <Header />
    <nav>
      <div v-for="{ path, meta } in routes" :key="meta.name">
        <router-link :to="path">{{ meta.name }}</router-link>
      </div>
    </nav>

    <router-view v-slot="{ Component, route }">
      <transition-group name="slide">
        <section class="routes" :key="route.path">
          <component :is="Component" />
        </section>
      </transition-group>
    </router-view>
  </div>
</template>

<script>
import { routes } from "./routes";
import Header from "./components/Header.vue";
export default {
  name: "App",
  components: {
    Header,
  },
  data() {
    return {
      routes,
    };
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

    div.sub-contain {
      width: 80%;

      @media (max-width: 800px) {
        width: 100%;
      }

      div.bloodline {
        @include card;
      }
    }

    @media (max-width: 800px) {
      padding: 100px 0 15px;
      width: 100%;
      min-height: 46.5vh;
    }

    div.lily_about {
      $w: 1415px;
      $h: 2261px;
      width: 150px;
      height: scaleBg($w, 150px, $h);
      margin-top: 30px;
      margin-right: 15px;
      @include round-image-vignette;
      background: url("./assets/images/lily_smile_crop_1.jpg");
      background-size: contain;
    }

    div.lily_pup {
      $w: 1733px;
      $h: 1711px;
      width: 150px;
      height: scaleBg($w, 150px, $h);
      margin-top: 30px;
      margin-right: 15px;
      @include round-image-vignette;
      background: url("./assets/images/lily_baby_crop.jpg");
      background-size: contain;
    }

    div.slideshow {
      width: 100vw;
      margin-left: -15%;
      padding: 0 50px;
      @include flex($a: center, $j: space-between);
      height: 50vh;
      overflow: hidden;
      background: linear-gradient(
        transparent 15px,
        $gold_bg 55px,
        $gold_bg calc(100% - 55px),
        transparent calc(100% - 15px)
      );

      @media (max-width: 800px) {
        margin-left: 0;
      }

      button {
        z-index: 1;
        cursor: pointer;
        @include spin-button;
        border-radius: 5px;
        transition-duration: 0.3s;

        &:hover {
          @include transform(rotate(360deg));
          border-radius: 50%;
        }
      }

      div.pupDivCont {
        @include flex(column, space-between, center);
        height: 100%;

        div.slideThumbs {
          @include flex(row, center, flex-start);

          img.thumb {
            margin: 0;
            width: 50px;
            height: 50px;
            object-fit: cover;
            transition: 0.3s ease;
            cursor: pointer;
            border-radius: 5px;

            &:hover,
            &.active {
              transform: scale(1.1);
              border: 2px solid $gold;
            }
          }
        }

        div.slideImgs {
          @include flex(row, center, flex-end);
          z-index: 0;
          height: 100%;
          position: relative;

          @media (max-width: 800px) {
            height: calc(100% - 100px);
          }

          div {
            @include flex(column, flex-end, center);
            position: absolute;
            opacity: 0;
            height: 100%;
            text-align: center;
            transition: 0.3s ease;

            img.full {
              height: 70%;
              width: auto;
              margin-top: 0;

              @media (max-width: 800px) {
                max-width: 50vw;
                height: auto;
                max-height: 100%;
              }
            }

            &.visible {
              opacity: 1;
            }
          }
        }
      }
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
