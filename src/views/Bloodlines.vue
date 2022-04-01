<template>
  <h1 v-html="heading" />
  <div class="sub-contain">
    <div
      class="bloodline"
      v-for="{
        callName,
        headerText,
        imgSrc,
        imgAlt,
        bloodlink,
        pluralName,
      } of bloodlines"
      :key="callName"
    >
      <h2 v-html="headerText" />
      <img :src="imgSrc" :alt="imgAlt" :title="imgAlt" />
      <a
        :href="bloodlink"
        target="_blank"
        rel="noopener noreferrer"
        class="slide"
      >
        View {{ pluralName }} Pedigree
      </a>
    </div>
    <!-- ${ this.bloodlines.map(bl => `<div class='bloodline'>
                    <h2>${ bl.headerText }</h2>
                    ${ bl.imgSrc ? `<img src="${ bl.imgSrc }" alt="${ bl.imgAlt }" />` : '' }
                    <a
                        href="${ bl.bloodlink }" 
                        target="_blank"
                        rel="noopener noreferrer"
                        class="slide"
                    >
                        View ${ bl.callName }'${ bl.callName[ bl.callName.length - 1 ] === 's' ? '' : 's' } pedigree
                    </a>
                    </div>`)
                .join('') } -->
  </div>
</template>

<script>
import { l, ext_links } from "../assets/utils/data";
import { dama, lilyLay, maks } from "../assets/images";
export default {
  name: "gg-bloodlines",
  data() {
    return {
      heading: `${l("B")}loodlines`,
      bloodlines: [
        {
          id: 1,
          callName: "Lily",
          pluralName: "Lily's",
          headerText: `${l("L")}ily (mother of puppies)`,
          bloodlink: ext_links.bloodlines.lily,
          imgSrc: lilyLay,
          imgAlt: "Lily laying down",
        },
        {
          id: 2,
          callName: "Dama",
          pluralName: "Dama's",
          headerText: `${l("L")}ily's ${l("M")}other`,
          bloodlink: ext_links.bloodlines.dama,
          imgSrc: dama,
          imgAlt: "Dama with her tail being held up",
        },
        {
          id: 3,
          callName: "Maks",
          pluralName: "Maks'",
          headerText: `${l("L")}ily's ${l("F")}ather`,
          bloodlink: ext_links.bloodlines.maks,
          imgSrc: maks,
          imgAlt: "Maks sitting pretty",
        },
        // {
        //   id: 4,
        //     callName: 'Cash',
        //     headerText: `${ l('C') }ash (father of puppies)`,
        //     bloodlink: ext_links.bloodlines.cash,
        //     imgSrc: '../../assets/images/cash_laying.jpg',
        //     imgAlt: 'Cash laying down'
        // },
        // {
        //   id: 5,
        //       callName: 'Majik Wonderboy',
        //     headerText: `${ l('C') }ash's ${ l('F') }ather`,
        //     bloodlink: ext_links.bloodlines.majik,
        //     imgSrc: '../../assets/images/majik_wonderboy.jpeg',
        //     imgAlt: 'Majik Wonderboy'
        // },
        // {
        //     id: 6,
        //     callName: 'Rus Pekos Glukoza',
        //     headerText: `${ l('C') }ash's ${ l('M') }other`,
        //     bloodlink: ext_links.bloodlines.rus,
        //     imgSrc: '',
        //     imgAlt: ''
        // },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
div.bloodline {
  @include card;

  img {
    width: 80%;
  }

  a {
    margin-top: 15px;
  }
}
</style>