<template>
  <div class="container-fluid m-0 p-0">
    <nav class="navbar navbar-expand-md navbar-dark change-background p-3 color-primary-1">
      <a class="btn d-none d-lg-inline color-primary-1 color-background" @click="$router.push('/')">Hem</a>
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
      <a @click="$router.push('/')">
        <img
          class="w-25 p-3 position-absolute top-0 start-50 translate-middle-x d-md-none"
          alt="Octopus logo"
          src="../assets/octologo.png"
        />
      </a>
       <a @click="$router.push('/')">
        <img
          class="p-3 position-absolute top-0 end-0 d-none d-md-inline-block"
          alt="Octopus logo"
          src="../assets/octologo-light.png"
        />
      </a>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mb-0 ">
          <li class="nav-item d-md-none m-1">
            <router-link class=" link-light" to="/">Home</router-link>
          </li>
          <li class="nav-item d-md-none m-1">
            <router-link class=" link-light" to="/areaMenu">Trafikinytt</router-link>
          </li>
          <li class="nav-item d-md-none m-1">
            <router-link class=" link-light" to="/songMenu">Låttoppen</router-link>
          </li>
          <li class="nav-item d-md-none m-1">
            <router-link class=" link-light" to="/pandemikollen">Pandemikollen</router-link>
          </li>
          <li class="nav-item dropdown d-md-none">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdownMenuLink"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Mer information
            </a>
            <ul class="dropdown-menu p-1" aria-labelledby="navbarDropdownMenuLink">
              <li><router-link class=" link-dark" to="/">Såhär fungerar appen</router-link></li>
              <li><router-link class=" link-dark" to="/">Tester/Fakta</router-link></li>
              <li><router-link class=" link-dark" to="/about">Om oss</router-link></li>
            </ul>
          </li>
          <li class="nav-item d-none d-md-inline mx-1 ps-4">
            <router-link class=" link-dark" to="/">Såhär fungerar appen</router-link>
          </li>
          <li class="nav-item d-none d-md-inline mx-1 px-4 ">
            <router-link class=" link-dark" to="/">Tester/Fakta</router-link>
          </li>
          <li class="nav-item mx-auto">
            <router-link class=" link-dark" to="/about">Om oss</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Header",
}
</script>

<style scoped>
.change-background {
  background-color: #2b2727;
}

@media (min-width: 768px) {
  .change-background {
    background-color: #ebebeb;
    border-bottom: solid 0.1rem #2b2727;
  }
}
</style>
