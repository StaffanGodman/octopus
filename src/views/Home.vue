<template>
  <h1 class="color-primary-1 text-center m-2 font-monospace">Radiogeneratorn</h1>
  <div class="container-fluid vh-100 color-background color-background">
    <div class="container-fluid pt-2 w-100 p-0 m-0 d-md-none">
      <img class="img-fluid rounded mb-2" src="../assets/home-radio.jpg" alt="radio-image" />
    </div>
    <p class="text-center color-primary-1 h2 font-monospace ">Upptäck innehåll</p>
    <div class="container">
      <div id="appCarousel" class="carousel slide change-size mx-auto" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#appCarousel"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button type="button" data-bs-target="#appCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#appCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner rounded-3">
          <div class="carousel-item active">
            <router-link class=" link-light" to="/songMenu">
              <img src="../assets/headphones.png" class="d-block w-100" alt="Låttoppen" />
              <div class="carousel-caption color-primary-1 fw-bold">
                <h1>Låttoppen</h1>
                <p class="d-none d-md-inline">Vilka låtar spelas mest på radio just nu?</p>
              </div>
            </router-link>
          </div>
          <div class="carousel-item">
            <router-link to="/pandemikollen">
              <img src="../assets/corona.png" class="d-block w-100" alt="Pandemisnackisar" />
              <div class="carousel-caption fw-bold">
                <h1>Pandemisnackisar</h1>
                <p class="d-none d-md-inline">Pratas det om pandemin på radio?</p>
              </div>
            </router-link>
          </div>
          <div class="carousel-item">
            <router-link to="/areaMenu">
              <img src="../assets/cars.png" class="d-block w-100" alt="Trafiknytt" />
              <div class="carousel-caption color-primary-1 fw-bold">
                <h1>Trafikinytt</h1>
                <p class="d-none d-md-inline">Hur ser trafiken ut hos just dig?</p>
              </div>
            </router-link>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#appCarousel" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#appCarousel" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  </div>
</template>
<style scoped>
@media (min-width: 768px) {
  .change-size {
    width: 50%;
  }
}
</style>
