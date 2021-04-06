<template>
  <div class="container-fluid vh-100 color-background">
    <div class="container-fluid pt-2 w-100 p-0 m-0">
      <img class="img-fluid rounded" src="../assets/home-radio.jpg" alt="radio-image" />
    </div>
    <div class="d-md-none pt-2">
      <p class="text-center color-primary-1 pt-2 h2 d-md-none">Upptäck innehåll</p>
      <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <router-link class=" link-light" to="/songMenu">
              <img src="../assets/headphones.png" class="d-block w-100" alt="Låttoppen" />
              <div class="carousel-caption color-primary-1 fw-bold">
                <h1>Låttoppen</h1>
              </div>
            </router-link>
          </div>
          <div class="carousel-item">
            <router-link to="/pandemikollen">
              <img src="../assets/corona.png" class="d-block w-100" alt="Pandemisnackisar" />
              <div class="carousel-caption fw-bold">
                <h1>Pandemisnackisar</h1>
              </div>
            </router-link>
          </div>
          <div class="carousel-item">
            <router-link to="/areaMenu">
              <img src="../assets/cars.png" class="d-block w-100" alt="Trafiknytt" />
              <div class="carousel-caption color-primary-1 fw-bold">
                <h1>Trafikinytt</h1>
              </div>
            </router-link>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
