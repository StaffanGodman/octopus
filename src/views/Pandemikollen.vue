<template>
  <div>
    <h1>Pandemikollen</h1>
    <!-- <p id="information" v-if="trafficMessages.length === 0">information om rapporteringen kring coronapandemins utveckling</p>
    <img alt="Traffic sign" src="../assets/skylt.png" v-if="trafficMessages.length === 0" /> -->
    <br />
    <select name="Programs" id="Regions" @change="setProgram">
      <option value="placeholder">Välj ett program</option>
      <option v-for="program in newsPrograms" :value="program.id" :key="program.id">
        {{ program.name }}
      </option>
    </select>
    <br /><br />
    <p>{{ sicknessOfChoice }}</p>
    <select name="pandemicWords" @change="setSickness">
      <option v-for="word in keywords" :key="word">
        {{ word }}
      </option>
    </select>
    <br><br>
    <button class="submitbutton" @click="parseEpisodes">Hämta data :)</button>
  </div>
</template>

<script>
import pandemicFunctions from "../lib/pandemicFunctions.js"

export default {
  data() {
    return {
      programChoice: null,
      newsPrograms: [],
      keywords: [],
      sicknessOfChoice: null,
    }
  },
  methods: {
    async getEpisodes(event) {
      if (event.target.value === "placeholder") {
        return
      } else {
        pandemicFunctions.fetchEpisodes(event)
      }
    },
    setProgram(event) {
      this.programChoice = event.target.value
    },
    setSickness(event) {
      this.sicknessOfChoice = event.target.value
    },
    parseEpisodes() {
      if (this.sicknessOfChoice === null || this.programChoice === null) {
        return
      } else {
        pandemicFunctions.parseEpisodes(this.sicknessOfChoice, this.programChoice)
      }
    }
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
