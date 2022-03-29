<template>
  <h1 v-html="heading" />

  <p>
    We enjoy breeding English Cream Golden Retrievers. When we got Lily, we
    didn’t know what a wonderful journey we had ahead of us. Lily is so fun,
    intelligent, attentive, and beautiful. We have trained her to be obedient,
    which serves very well when she is in action as a therapy dog. She gets the
    attention of everyone she encounters and so many people comment that they
    want her. Being around her is a joy and her offspring will do the same.
  </p>

  <div class="spacer home" />

  <p>
    We have learned that the English Cream Goldens are not only calm and gentle,
    but very trainable and observant. Lily loves to play hide and seek with her
    toys and surprises us with how quickly she can find them.
  </p>

  <p>
    Our place is on 3 acres of land in Tuscola, Texas, about 20 miles southwest
    of Abilene. If you have any questions, feel free to contact us. We would
    love to hear from you.
  </p>
</template>

<script>
import { l } from "../assets/utils/data";
export default {
  name: "gg-home",
  data() {
    return {
      heading: `${l("W")}elcome to ${l("G")}olden ${l("G")}lories!`,
    };
  },
};
</script>
