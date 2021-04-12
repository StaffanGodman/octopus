<template>
  <div
    class="d-none d-md-flex mh-100 border border-3 rounded-top rounded-pill border-light p-2 mx-auto color5-background"
  >
    <nav class="nav">
      <button
        class="btn color1-background mw-100 mh-100 p-5 rounded-circle mx-auto text-wrap shadow border border-2 border-dark"
        type="button"
        @click="$router.push('/areaMenu')"
      >
        Trafik <br />
        nytt
      </button>
      <button
        class="btn color2-background mw-100 p-5 rounded-circle mt-2 mx-auto text-wrap shadow border border-2 border-dark"
        type="button"
        @click="$router.push('/songMenu')"
      >
        Låt <br />
        toppen
      </button>
      <button
        class="btn color3-background mw-100 p-5 rounded-circle mt-2 mx-auto text-wrap shadow border border-2 border-dark"
        type="button"
        @click="$router.push('/areaMenu')"
      >
        Pandemi <br />
        kollen
      </button>
    </nav>
  </div>
</template>

<script>
export default {
  name: "sidebar",
}
</script>

<style scoped></style>
