<template>
  <Header />
  <div class="container-fluid">
    <router-view />
  </div>
  <Footer />
</template>

<script>
import Header from "./components/header.vue"
import Footer from "./components/myfooter.vue"

export default {
  name: "app",
  components: {
    Header,
    Footer,
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
