<template>
  <header :class="small && 'small'">
    <div class="imgs">
      <img src="../assets/images/logo.png" alt="Golden Glories Logo" />
      <img src="../assets/images/header.png" alt="Golden Glories Text" />
    </div>
  </header>
</template>

<script>
export default {
  name: "gg-header",
  data() {
    return {
      small: false,
    };
  },
  mounted() {
    if (this.notFirstVisit) this.small = true;
    else
      setTimeout(() => {
        this.small = true;
      }, 1000);
  },
};
</script>

<style lang="scss" scoped>
header {
  width: 100%;
  height: 100vh;
  background-image: url("../assets/images/lily_respond_crop.jpg");
  transition: 1s ease-out;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  background-position-y: 35%;
  image-rendering: smooth;
  margin: 0;
  z-index: 1;

  @media (max-width: 800px) {
    height: 30vh;
    background-position-y: -5%;
    background-size: 100%;
    background-attachment: scroll;

    &.small {
      height: 30vh;
    }
  }

  &.small {
    height: 50vh;

    @media (max-width: 800px) {
      height: 30vh;
    }

    div.imgs img {
      margin-top: 15px;

      &:nth-child(1) {
        margin-left: 15px;
        height: 7.5vw;
      }

      &:nth-child(2) {
        @media (max-width: 800px) {
          height: 20vw;
          margin-top: 25%;
        }
      }
    }
  }

  div.imgs {
    width: 100%;
    @include flex($j: flex-start, $a: flex-start);

    @media (max-width: 800px) {
      @include flex($j: flex-end, $a: flex-end);
      position: relative;
      bottom: 0;
    }

    img {
      margin-top: 25%;
      height: 20vw;
      filter: drop-shadow(7.5px 7.5px 4px black);
      image-rendering: smooth;
      transition: 1s ease-out;

      &:nth-child(1) {
        @media (max-width: 800px) {
          opacity: 0;
        }
      }
    }
  }
}
</style>
