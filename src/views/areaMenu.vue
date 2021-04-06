<template>
  <div class="color-background vh-100 container-fluid">
    <h1 class="color-primary-3 fs-1 p-3 text-center">Trafikinytt</h1>
    <div v-if="trafficMessages.length === 0">
      <p class="color-primary-1 text-center">
        Håll koll på vad som händer i trafiken. Välj region nedan för att få uppdateringar och information om
        trafikstörningar i närheten.
      </p>
    </div>
    <br />
    <nav class="change-size p-3 color3-background rounded position-relative start-50 translate-middle-x text-center">
      <select name="Region" id="Regions" @change="getTrafficMessages">
        <option value="placeholder">Select an area</option>
        <option value="all">Alla områden</option>
        <option v-for="area in trafficAreas" :key="area.name">
          {{ area.name }}
        </option>
      </select>
    </nav>
    <div class="rounded overflow-scroll m-2 h-50 flex-column" v-if="trafficMessages.length !== 0">
      <div class="message pb-5 mb-0" v-for="message in trafficMessages" :key="message">
        <p id="title">{{ message.title }}</p>
        <p id="category">{{ message.subcategory }}</p>
        <br />
        <p class="m-2" id="description">{{ message.description }}</p>
        <p id="date">{{ formatDate(message.createddate) }}</p>
      </div>
      <br />
    </div>
  </div>
</template>

<script>
import trafficFunctions from "../lib/trafficFunctions.js"

export default {
  data() {
    return {
      trafficMessages: [],
      trafficAreas: [],
    }
  },
  methods: {
    async getTrafficMessages(event) {
      this.trafficMessages = await trafficFunctions.fetchTrafficMessages(event)
      this.trafficMessages = this.trafficMessages.reverse()
    },
    formatDate(dateString) {
      return new Date(Number(JSON.stringify(dateString).slice(7, -8))).toLocaleString()
    },
  },
  async created() {
    this.trafficAreas = await trafficFunctions.fetchTrafficAreas()
  },
}
</script>

<style>
#Regions {
  width: 15rem;
  height: 2rem;
  font-size: large;
}
.message {
  border: solid lightblue;
  background-color: aliceblue;
}
#title {
  color: red;
  font-size: small;
  float: left;
  top: 0rem;
  margin: 0.2rem;
}
#category {
  color: green;
  font-size: small;
  float: right;
  top: 0rem;
  margin: 0.2rem;
}
#date {
  float: left;
  bottom: 0%;
  font-size: small;
  margin: 0.5rem;
}
@media (min-width: 768px) {
  .change-size {
    width: 40%;
  }
}
</style>
