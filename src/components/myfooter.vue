<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark position-fixed bottom-0 end-0 start-0 d-md-none">
    <div class="container-fluid">
      <a class="navbar-brand" @click="$router.back(-1)"
        ><i class="bi bi-arrow-left-square-fill" style="font-size: 2rem; color: cornflowerblue;"></i
      ></a>
      <router-link to="/">
        <i class="bi bi-house-door-fill" style="font-size: 2rem; color: cornflowerblue;"></i>
      </router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Footer",
}
</script>

<style scoped></style>
