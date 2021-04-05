<template>
  <Header />
  <div class="container-fluid p-0">
    <div class="row">
      <div class="col-md-2">
        <sidebar />
      </div>
      <div class="col-md-10">
        <router-view />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "./components/header.vue"
import Footer from "./components/myfooter.vue"
import Sidebar from "./components/sidebar.vue"

export default {
  name: "app",
  components: {
    Header,
    Footer,
    Sidebar,
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
