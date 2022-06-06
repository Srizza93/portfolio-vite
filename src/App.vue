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
 padding 100px 60px

@media screen and (max-width 400px)
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
  color #2c3e50
</style>
