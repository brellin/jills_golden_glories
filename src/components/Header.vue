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
    background-size: contain;
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

nav {
  width: 100%;
  @include flex($j: space-around);
  position: sticky;
  top: -1px;
  background: linear-gradient($blue, 80%, transparent);
  margin-top: -1px;
  transition: 0.2s ease;
  z-index: 2;

  @media (max-width: 800px) {
    margin: 75px 0 0;
    background: none;
    position: fixed;
    @include flex(column, flex-start, flex-start);
    width: auto;

    @for $i from 1 through 6 {
      div:nth-child(#{$i}) {
        transition-duration: #{"." + ($i + 3) + "s"};
      }
    }

    &.open div {
      transform: translateX(0);
    }
  }

  div {
    font-size: 1.5rem;
    padding: 15px 5%;
    transition: 0.2s ease;

    &:hover,
    &.active {
      font-size: 1.7rem;
      font-weight: bolder;
    }

    @media (max-width: 800px) {
      padding: 15px 2%;
      background: $blue;
      width: 50vw;
      text-align: center;
      transform: translateX(calc(-60vw));
      transition-duration: 0s;
      width: 50vw;
      margin-top: -1px;
      background: $blue;
    }

    a {
      color: $gold;
      text-decoration: none;
      font-family: "Little Star Story";
    }
  }
}
</style>
