<template>
  <div class="container-fluid mh-100 color-background text-center p-3 d-md-flex mb-5">
    <div class="card m-3">
      <img src="../assets/cars.png" class="card-img-top" alt="Trafiknytt" />
      <div class="card-body">
        <h5 class="card-title">Trafiknytt</h5>
        <p class="card-text">
          Är du ute på vägarna i Sverige och vill ha de senaste trafiklägesrapporterna? Se efter själv och få den
          senaste trafikinformationen från P4 i SR.
        </p>
        <router-link class="btn btn-primary" to="/areaMenu">Till TrafikNytt</router-link>
      </div>
    </div>
    <div class="card m-3">
      <img src="../assets/headphones.png" class="card-img-top" alt="LåtToppen" />
      <div class="card-body">
        <h5 class="card-title">Låttoppen</h5>
        <p class="card-text">
          Är du intresserad av musik och vill ta reda på vilka artister och låtar som spelats mest i din region? klicka
          dig vidare och se efter själv!
        </p>
        <router-link class="btn btn-primary" to="/songMenu">Till Låttoppen</router-link>
      </div>
    </div>
    <div class="card m-3 ">
      <img src="../assets/corona.png" class="card-img-top" alt="Pandemikollen" />
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
</template>
