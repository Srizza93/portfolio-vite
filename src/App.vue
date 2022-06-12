<template>
  <div class="app-sub">
    <navigation-bar />
    <router-view class="router-view"></router-view>
  </div>
</template>

<script setup>
import NavigationBar from "./components/NavigationBar.vue";
</script>

<style lang="stylus" scoped>
.app-sub
 display flex
 flex-direction column
 align-items center
 overflow hidden

.helloworld
 background-color red

.router-view
 width 100%
 max-width 750px
 padding 100px 60px

@media screen and (max-width 500px)
  .router-view
    padding 100px 10px
</style>

<style lang="stylus">
body
 margin 0
 min-height 100vh

*
 box-sizing border-box

#app
  font-family Inter, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #003

.open-button
 max-width 250px
 padding 15px 30px
 border-radius 15px
 background-color #3498db
 color white
 text-align center
 text-decoration none
 white-space nowrap
 font-weight bold
 cursor pointer

.open-button:hover
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
</style>
