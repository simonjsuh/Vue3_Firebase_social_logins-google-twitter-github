<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <SocialLogin msg="Social Login App for Vue.js"/>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import SocialLogin from './components/SocialLogin.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    SocialLogin
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
