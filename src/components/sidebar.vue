<template>
  <nav class="nav flex-column position-relative top-0 start-0  mt-5 pt-3 vh-100 bg-light d-none d-md-inline">
    <div class="d-grid gap-3 m-2">
      <button class="btn btn-primary w-100 p-3 rounded-circle ms-2" type="button" @click="$router.push('/areaMenu')">
        Trafikinytt
      </button>
      <button class="btn btn-primary w-100 p-3 rounded-circle ms-2" type="button" @click="$router.push('/songMenu')">
        Låttoppen
      </button>
      <button
        class="btn btn-primary w-100 p-3 rounded-circle ms-2"
        type="button"
        @click="$router.push('/pandemikollen')"
      >
        Pandemikollen
      </button>
      <button class="btn btn-primary w-100 p-3 rounded-circle ms-2" type="button" @click="$router.push('/about')">
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
