<template>
  <div class="container-fluid d-none d-md-inline  border-1 rounded">
    <nav class="nav position-relative top-0 start-0 ">
      <div class="d-grid col-0 gap-1 mx-auto">
        <button
          class="btn color1-background w-75 p-5  rounded-circle mt-1"
          type="button"
          @click="$router.push('/areaMenu')"
        >
          Trafik <br />
          nytt
        </button>
        <button
          class="btn color2-background w-75 p-5 rounded-circle  start-0"
          type="button"
          @click="$router.push('/songMenu')"
        >
          Låt <br />
          toppen
        </button>
        <button
          class="btn color3-background w-75 p-5 rounded-circle start-0"
          type="button"
          @click="$router.push('/pandemikollen')"
        >
          Pandemi <br />
          kollen
        </button>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "sidebar",
}
</script>

<style scoped></style>
