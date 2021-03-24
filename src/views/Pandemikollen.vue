<template>
  <div>
    <h1>Pandemikollen</h1>
    <!-- <p id="information" v-if="trafficMessages.length === 0">information om rapporteringen kring coronapandemins utveckling</p>
    <img alt="Traffic sign" src="../assets/skylt.png" v-if="trafficMessages.length === 0" /> -->
    <br />
    <select name="Programs" id="Regions" @change="getEpisodes">
      <option value="placeholder">Välj ett program</option>
      <option v-for="program in newsPrograms" :value="program.id" :key="program.id">
        {{ program.name }}
      </option>
    </select>
    <br /><br />
    <p>{{ keywords }}</p>
    <select name="pandemicWords" @change="printKW">
      <option v-for="word in keywords" :key="word">
        {{ word }}
      </option>
    </select>
  </div>
</template>

<script>
import pandemicFunctions from "../lib/pandemicFunctions.js"

export default {
  data() {
    return {
      programChoice: null,
      newsPrograms: [],
      trafficAreas: [],
      keywords: [],
      wordFrequency: null,
    }
  },
  methods: {
    async getEpisodes(event) {
      if (event.target.value === "placeholder") {
        return
      } else {
        pandemicFunctions.parseEpisodes(pandemicFunctions.fetchEpisodes(event))
      }
    },
    async getdfg(event) {
      await pandemicFunctions.fetchTrafficMessages(event)
      this.newsPrograms = await pandemicFunctions.getNewsPrograms()
    },
  },
  async created() {
    await pandemicFunctions.fetchNewsPrograms()
    this.newsPrograms = await pandemicFunctions.getNewsPrograms()
    this.keywords = await pandemicFunctions.getKeywords()
    console.log(this.keywords)
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
  height: 25rem;
  display: flex;
  flex-direction: column;
  border: solid 1px rgb(185, 167, 167);
  margin: 2rem;
  overflow: scroll;
}
#information {
  margin: 2rem;
  height: 2rem;
  border: solid lightblue;
  background-color: aliceblue;
  padding: 1rem;
  margin: 0rem;
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
