<template>
  <h1 class="foot">Buying a Puppy</h1>
  <div class="spacer footer">
    <div>
      <h2 class="num">1</h2>
      <h2>Get In Contact</h2>
      <p>
        Send us an
        <a
          href="mailto:jill@goldenglories.com"
          title="Email Golden Glories"
          class="slide"
          >email</a
        >
        or a message on
        <a
          href="https://facebook.com/JillsGoldenGlories"
          target="_blank"
          class="slide"
          >facebook</a
        >. We are happy to join with you in choosing your puppy!
      </p>
    </div>
    <div>
      <h2 class="num">2</h2>
      <h2>Place A Deposit</h2>
      <p>
        When you are ready, you can place a deposit via PayPal to reserve your
        puppy of choice.
      </p>
    </div>
    <div>
      <h2 class="num">3</h2>
      <h2>Schedule A Pickup</h2>
      <p>
        You can pick up your puppy once it reaches 8 weeks of age. At that
        point, we can schedule a pickup date and time!
      </p>
    </div>
  </div>
  <footer>
    <div class="extLinks">
      <div class="ext-link">
        <a
          href="https://facebook.com/JillsGoldenGlories"
          target="_blank"
          class="fastyle"
        >
          <i class="fab fa-facebook"></i>
          <span>Facebook</span>
        </a>
      </div>

      <div class="ext-link">
        <a href="https://akc.org" target="_blank">
          <img
            title="American Kennel Club"
            alt="American Kennel Club Logo"
            class="akc"
            src="../assets/images/akc.png"
          />
          <span>American Kennel Club</span>
        </a>
      </div>

      <div class="ext-link">
        <a href="https://therapydogs.com" target="_blank" class="atd">
          <img
            title="Alliance of Therapy Dogs"
            alt="Alliance of Therapy Dogs Logo"
            class="atd"
            src="../assets/images/ATD_logo.png"
          />

          <span>Alliance of Therapy Dogs</span>
        </a>
      </div>

      <div class="ext-link">
        <a href="https://grca.org" target="_blank">
          <img
            alt="Golden Retriever's Club of America Approval"
            title="Golden Retriever's Club of America"
            src="../assets/images/grca_crop.jpg"
          />

          <span>Golden Retriever's Club of America</span>
        </a>
      </div>

      <div class="ext-link">
        <a
          href="mailto:jill@goldenglories.com"
          title="Email Golden Glories"
          class="fastyle"
        >
          <i class="fas fa-at"></i>
          <span>Email</span>
        </a>
      </div>
    </div>
    <p>
      © 2021 Golden Glories. Website by
      <a href="https://willumstead.com" target="_blank">Will Umstead</a>.
    </p>
  </footer>
</template>

<script>
export default {
  name: "gg-footer",
};
</script>

<style lang='scss' scoped>
footer {
  width: 100%;
  padding: 50px 30px;
  background: linear-gradient(whitesmoke, transparent);
  @include flex(column, flex-start, center);

  a {
    text-decoration: none;
    color: $blue;

    &:hover {
      text-decoration: underline;
    }
  }

  @media (max-width: 800px) {
    width: 100%;
    padding: 5px 0;
  }

  p {
    text-align: center;
  }

  div.extLinks {
    @include flex($j: space-around);
    width: 100%;

    @media (max-width: 800px) {
      flex-wrap: wrap;
      flex-basis: 50%;
    }

    div.ext-link {
      @include flex(column, flex-start, center);
      margin-bottom: 50px;

      @media (max-width: 800px) {
        flex-basis: 50%;
        margin: 10px auto;
      }

      a {
        transition: 0.3s ease;
        height: 70px;
        @include flex(column, $a: center, $j: center);

        &.fastyle {
          font-size: 5rem;
          color: $blue;
          cursor: pointer;

          &:hover {
            text-decoration: none;
          }
        }

        &:hover {
          text-decoration: none;
          transform: scale(1.2);
          filter: hue-rotate(-20deg) brightness(2.5);
        }

        img {
          object-fit: contain;
          object-position: 50% 50%;
          height: 50px;
          width: 50px;
        }

        span {
          font-size: 1.5rem;

          @media (max-width: 800px) {
            display: none;
          }

          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
  }
}
</style>
