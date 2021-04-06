<template>
  <nav class="nav flex-column position-relative top-0 start-0  mt-5 pt-3 vh-100 bg-light d-none d-md-inline">
    <div class="d-grid gap-3 m-2">
      <button
        class="btn color1-background w-75 p-5 rounded-circle ms-2"
        type="button"
        @click="$router.push('/areaMenu')"
      >
        Trafikinytt
      </button>
      <button
        class="btn color2-background w-75 p-5 rounded-circle ms-2"
        type="button"
        @click="$router.push('/songMenu')"
      >
        Låttoppen
      </button>
      <button
        class="btn color3-background w-75 p-5 rounded-circle ms-2"
        type="button"
        @click="$router.push('/pandemikollen')"
      >
        Pandemikollen
      </button>
      <button class="btn color4-background w-75 p-5 rounded-circle ms-2" type="button" @click="$router.push('/about')">
        Om oss
      </button>
    </div>
  </nav>
</template>

<script>
export default {
  name: "sidebar",
}
</script>

<style scoped></style>
