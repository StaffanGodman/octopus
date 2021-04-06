<template>
  <nav class="nav flex-column position-relative top-0 start-0 min-size bg-light d-none d-md-inline ">
    <div class="d-grid gap-1">
      <button
        class="btn color1-background w-75 p-5 rounded-circle position-relative mt-1"
        type="button"
        @click="$router.push('/areaMenu')"
      >
        Trafik <br />
        nytt
      </button>
      <button
        class="btn color2-background w-75 p-5 rounded-circle position-relative start-0"
        type="button"
        @click="$router.push('/songMenu')"
      >
        Låt <br />
        toppen
      </button>
      <button
        class="btn color3-background w-75 p-5 rounded-circle position-relative start-0"
        type="button"
        @click="$router.push('/pandemikollen')"
      >
        Pandemi <br />
        kollen
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
