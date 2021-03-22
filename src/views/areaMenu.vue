<template>
  <div>
    <h1>Trafikinytt från p4</h1>
    <br />
    <p v-if="trafficMessages.length === 0">
      information om trafikstörningar runt om i landet
    </p>
    <img alt="Traffic sign" src="../assets/skylt.png" v-if="trafficMessages.length === 0" />
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
        <p id="description">{{ message.createddate }}</p>
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
      await trafficFunctions.fetchTrafficMessages(event)
      this.trafficMessages = await trafficFunctions.getTrafficMessages()
    },
  },
  async created() {
    await trafficFunctions.fetchTrafficAreas()
    this.trafficAreas = await trafficFunctions.getAreas()
  },
}
</script>

<style>
img {
  width: 20rem;
}
.message {
  border: solid lightblue;
  background-color: aliceblue;
  padding: 0rem;
  margin: 0rem;
}
.messagespace {
  display: flex;
  flex-direction: column;
  border: solid 1px rgb(185, 167, 167);
  margin: 2rem;
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
</style>
