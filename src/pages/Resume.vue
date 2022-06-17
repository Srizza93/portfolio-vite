<template>
  <div class="resume">
    <span class="header">Download my cv in your preferred language</span>
    <div class="cvs">
      <a
        class="cvs_cv"
        :href="cv.path"
        :download="cv.name"
        v-for="cv in cvs"
        :key="cv.id"
        :style="'background-color: ' + cv.col"
      >
        <img class="cvs_cv_flag" :src="getImageUrl(cv.img)" :alt="cv.alt" />
        <div class="cvs_cv_download">
          <span>Download</span>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Resume",
  data() {
    return {
      cvs: [
        {
          id: 1,
          name: "cv-fr",
          alt: "french-flag",
          img: "fr-flag.jpg",
          path: "https://srizza93.github.io/portfolio-vite/src/assets/cv-fr.pdf",
          col: "#002654",
        },
        {
          id: 2,
          name: "cv-eng",
          alt: "uk-flag",
          img: "uk-flag.jpg",
          path: "https://srizza93.github.io/portfolio-vite/src/assets/cv-eng.pdf",
          col: "#C8102E",
        },
        {
          id: 3,
          name: "cv-ita",
          alt: "ita-flag",
          img: "ita-flag.jpg",
          path: "https://srizza93.github.io/portfolio-vite/src/assets/cv-ita.pdf",
          col: "#008C45",
        },
      ],
    };
  },
  methods: {
    getImageUrl(pic) {
      return new URL(`../assets/${pic}`, import.meta.url).href;
    },
  },
};
</script>

<style lang="stylus" scoped>
.resume
 display flex
 flex-direction column
.header
 margin-bottom 50px
 font-size 75px
 font-weight bold
.cvs
 display flex
 flex-direction column
 align-items center
.cvs_cv
 position relative
 display flex
 flex-direction column
 align-items center
 padding 0 20px
 margin 30px 0
 border-radius 15px
 color white
 text-decoration none
 font-weight bold
 font-size 25px
.cvs_cv_flag
 width 250px
 height 160px

.cvs_cv_download
 position absolute
 top 5%
 display flex
 justify-content center
 align-items center
 width 90%
 height 90%
 background-color rgba(0,0,0,.7)
 opacity 0
 transition-duration 1s

.cvs_cv:hover .cvs_cv_download
 opacity 1

@media screen and (max-width 350px)
 .header
  font-size 35px
 .cvs_cv_flag
  width 150px
  height 95px
</style>
