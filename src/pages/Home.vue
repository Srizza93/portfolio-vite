<template>
  <div class="home">
    <div class="content">
      <div class="content_text">
        <span class="home_first-line">Hi, my name is</span>
        <span class="home_name">Simone Rizza</span>
        <p class="home_parag">
          Since my childhood I've been passionate about software development and
          IT, I fell in love with these disciplines which I would like to orient
          myself professionally. My constant desire for growth, with the skills
          acquired during my experiences in multiple European countries, and my
          tenacity, make me a person today experienced and determined to achieve
          his goals.
        </p>
      </div>
      <img class="content_img" alt="pencil" src="../assets/pencil.jpg" />
    </div>
    <router-link class="home_button" to="/portfolio"
      >Check out my projects</router-link
    >
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style lang="stylus" scoped>
.home
 display flex
 flex-direction column
 max-width 750px
 text-align left

.content
 display flex
 flex-direction row

.content_img, .content_text
 width 50%
 margin-bottom 50px

.content_text
 display flex
 flex-direction column
 padding-right 50px
 color #0f52ba

.content_img
 border-radius 50%
 object-fit cover

.home_first-line
 margin-bottom 30px

.home_name
 font-size 65px
 font-weight bold

.home_parag
 color #000033
 font-size 20px

.home_button
 width 100%
 max-width 250px
 padding 15px 30px
 border-radius 15px
 background-color #3498db
 color white
 text-align center
 text-decoration none
 white-space nowrap
 font-weight bold
 animation blink 1s linear infinite

@keyframes blink
 0% {
   outline none
 }
 50% {
   outline 3px solid #3498db
 }
 100% {
   outline-offset 5px
   outline transparent
 }

@media screen and (max-width 750px)
 .content
  flex-direction column
  align-items center

 .content_img, .content_text
  width 90%
  padding 0

@media screen and (max-width 400px)
 .home_name
   font-size 35px

 .home_parag
   font-size 16px
</style>
