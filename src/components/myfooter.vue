<template>
  <div id="container">
    <button class="homebutton" @click="$router.push('/')"></button>
    <button class="backbutton" @click="$router.back(-1)"></button>
  </div>
</template>

<script>
export default {
  name: "footer",
}
</script>

<style scoped>
#container {
  background-color: #414141;
  box-shadow: 1px 1px 4px 0 rgba(0, 0, 0, 0.1);
  position: fixed;
  bottom: 0px;
  width: 100%;
  height: 3rem;
}

.homebutton {
  float: left;
  background-image: url("../assets/homeicon.png");
  background-size: cover;
  height: 2.5rem;
  width: 2.5rem;
  margin: 0.3rem;
}
.backbutton {
  float: right;
  background-image: url("../assets/backarrow.png");
  background-size: cover;
  height: 2.5rem;
  width: 2.5rem;
  margin: 0.3rem;
}
</style>
