<template>
  <div class="container-fluid vh-100 color-background color-background d-none d-md-inline">
    <h1 class="color-primary-1 text-center p-5  font-monospace">Radiogeneratorn</h1>
    <div class="row justify-content-start mh-100 px-5 ">
      <div class="col-md">
        <div class="card">
          <img class="card-img-top" src="../assets/cars.png" alt="Card image cap" />
          <div class="card-body">
            <h5 class="card-title">Trafiknytt</h5>
            <p class="card-text">
              Är du ute på vägarna i Sverige och vill ha de senaste trafiklägesrapporterna? Se efter själv och få den
              senaste trafikinformationen från P4 i SR.
            </p>
            <router-link class="btn btn-primary" to="/areaMenu">Till TrafikNytt</router-link>
          </div>
        </div>
      </div>
      <div class="col-md">
        <div class="card">
          <img class="card-img-top" src="../assets/headphones.png" alt="Card image cap" />
          <div class="card-body">
            <h5 class="card-title">Låttoppen</h5>
            <p class="card-text">
              Är du intresserad av musik och vill ta reda på vilka artister och låtar som spelats mest i din region?
              klicka dig vidare och se efter själv!
            </p>
            <router-link class="btn btn-primary" to="/songMenu">Till Låttoppen</router-link>
          </div>
        </div>
      </div>
      <div class="col-md">
        <div class="card">
          <img class="card-img-top" src="../assets/corona.png" alt="Card image cap" />
          <div class="card-body">
            <h5 class="card-title">Pandemikollen</h5>
            <p class="card-text">
              Hur har snacket kring virus, pandemier och smittsamma sjukdomar på radio gått före och efter Covid-19
              pandemin? Ta reda på och jämför statistik själv!
            </p>
           <router-link class="btn btn-primary" to="/pandemikollen">Till Pandemikollen</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="container-fluid vh-100 color-background color-background d-md-none">
    <div class="container-fluid pt-2 w-100 p-0 m-0 d-md-none">
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
