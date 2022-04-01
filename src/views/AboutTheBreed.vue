<template>
  <h1 v-html="heading" />
  <p>
    Golden Retrievers were developed in Scotland in the late 1800s. Baron
    Tweedmouth bred together his 2 rare dogs. The original intent of the breed
    was to assist hunters in retrieving downed waterfowl. The parent breeds were
    the
    <a class="slide" href="${ ext_links.wavy }" target="_blank" rel="nofollow"
      >Curly Coated Retriever</a
    >
    and the
    <a class="slide" href="${ ext_links.tweed }" target="_blank" rel="nofollow"
      >Tweed Water Spaniel</a
    >
    (extinct). Golden Retrievers were fully recognized by The Kennel Club
    (Britain) in 1911 and the American Kennel Club in 1932.
  </p>
  <p>
    As time passed, the breed split into American and European versions. The
    European bloodline has a luxurious cream-colored coat, larger and blockier
    heads, and larger bone structures - which really set them apart from the
    American Goldens!
  </p>

  <h1>English and American Comparison</h1>

  <div class="agrVegr" style="clear: both">
    <a
      href="http://infographicplaza.com/american-golden-retriever-vs-english-cream-golden-retrievers/"
      target="_blank"
      rel="nofollow"
    >
      <img
        src="http://infographicplaza.com/wp-content/uploads/golden-retriever-infographic.jpg"
        title="American Golden Retriever Vs. English Cream Golden Retrievers"
        alt="American Golden Retriever Vs. English Cream Golden Retrievers"
        border="0"
      />
    </a>
  </div>
</template>

<script>
import { l } from "../assets/utils/data";
export default {
  name: "gg-about",
  data() {
    return {
      heading: `${l("H")}istory of the ${l("B")}reed`,
    };
  },
};
</script>

<style lang="scss" scoped>
div.agrVegr {
  width: fit-content;
  max-width: 80%;

  img {
    width: 100%;
  }
}
</style>