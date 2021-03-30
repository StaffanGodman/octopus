<template>
  <nav class="navbar navbar-expand-md navbar-dark bg-dark">
    <div class="container-fluid">
      <a class="btn d-none d-lg-inline color-primary-2" @click="$router.push('/')">Hem</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item d-md-none">
            <router-link to="/">Home</router-link>
          </li>
          <li class="nav-item d-md-none">
            <router-link to="/areaMenu">Trafikinytt</router-link>
          </li>
          <li class="nav-item d-md-none">
            <router-link to="/songMenu">Låttoppen</router-link>
          </li>
          <li class="nav-item d-none d-lg-inline mx-1">
            <router-link to="/">Såhär fungerar appen</router-link>
          </li>
          <li class="nav-item d-none d-lg-inline mx-1">
            <router-link to="/">Tester/Fakta</router-link>
          </li>
          <li class="nav-item mx-1">
            <router-link to="/about">Om oss</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Header",
}
</script>

<style scoped></style>
