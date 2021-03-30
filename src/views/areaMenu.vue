<template>
  <div class="color-background vh-100 container-fluid">
    <h1 class="color-primary-3 fs-1 p-3">Trafikinytt</h1>
    <div class="color-primary-1 text-center">
      <p id="information" v-if="trafficMessages.length === 0">
        Håll koll på vad som händer i trafiken. Välj region nedan för att få uppdateringar och information om
        trafikstörningar i närheten.
      </p>
    </div>
    <br />
    <select name="Region" id="Regions" @change="getTrafficMessages">
      <option value="placeholder">Select an area</option>
      <option value="all">Alla områden</option>
      <option v-for="area in trafficAreas" :key="area.name">
        {{ area.name }}
      </option>
    </select>
    <div class="messagespace" v-if="trafficMessages.length !== 0">
      <div class="message" v-for="message in trafficMessages" :key="message">
        <p id="title">{{ message.title }}</p>
        <p id="category">{{ message.subcategory }}</p>
        <br />
        <p id="description">{{ message.description }}</p>
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
img {
  width: 20rem;
}
#Regions {
  width: 15rem;
  height: 2rem;
  font-size: large;
}
.message {
  border: solid lightblue;
  background-color: aliceblue;
  padding: 0rem;
  margin: 0rem;
}
.messagespace {
  height: 25rem;
  display: flex;
  flex-direction: column;
  border: solid 1px rgb(185, 167, 167);
  margin: 2rem;
  overflow: scroll;
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
#desctription {
  float: left;
  margin: 0.5rem;
}
#date {
  float: left;
  bottom: 0%;
  font-size: small;
}
</style>
