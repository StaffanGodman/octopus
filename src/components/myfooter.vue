<template>
  <div class="container-fluid">
    <nav class="navbar color-background position-fixed p-2 bottom-0 end-0 start-0 d-md-none">
      <a class="navbar-brand" @click="$router.back(-1)"
        ><i class="bi bi-arrow-left-square-fill" style="font-size: 2rem; color: #159da3;"></i
      ></a>
      <router-link to="/">
        <i class="bi bi-house-door-fill" style="font-size: 2rem; color: #159da3;"></i>
      </router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Footer",
}
</script>
