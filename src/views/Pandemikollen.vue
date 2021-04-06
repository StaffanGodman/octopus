<template>
  <div>
    <h1>Pandemikollen</h1>
    <br />
    <div v-if="!showResults">
      <select name="Programs" id="Regions" @change="setProgram">
        <option value="placeholder">Välj ett program</option>
        <option v-for="program in newsPrograms" :value="program.id" :key="program.id">
          {{ program.name }}
        </option>
      </select>
      <br /><br />
      <p>{{ sicknessOfChoice }}</p>
      <select name="pandemicWords" @change="setSickness">
        <option v-for="word in choiceWords" :key="word" :value="word">
          {{ word }}
        </option>
      </select>
      <br /><br />
      <button class="submitbutton" @click="parseEpisodes">Hämta data :)</button>
    </div>
    <div v-if="showResults">
      <LineChart />
      <br />
      <button class="submitbutton" @click="newSearch">Ny sökning</button>
    </div>
  </div>
</template>

<script>
import pandemicFunctions from "../lib/pandemicFunctions.js"
import LineChart from "../components/linechart.vue"
import pandemicChartData from "../lib/pandemicChartData.js"


export default {
  components: {
    LineChart,
  },
  data() {
    return {
      programChoice: null,
      newsPrograms: [],
      keywords: [],
      sicknessOfChoice: null,
      showResults: false,
      choiceWords: ["corona", "pandemi", "vaccin"],
    }
  },
  methods: {
    newSearch() {
      this.keywords = null
      this.showResults = false
    },
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
    async getKeywords() {
      this.keywords = await pandemicFunctions.getKeywords()
    },
    async parseEpisodes() {
      if (this.sicknessOfChoice === null || this.programChoice === null) {
        return
      } else {
        await pandemicFunctions.parseEpisodes(this.sicknessOfChoice, this.programChoice)
        this.getKeywords
        this.addChartLabels(pandemicFunctions.getSicknesObjectDates())
        this.addChartDataset(pandemicFunctions.getSicknesObjectData())
        this.showResults = true
      }
    },
    addChartLabels(labels) {
      pandemicChartData.data.labels = labels
    },
    addChartDataset(dataset) {
      pandemicChartData.data.datasets.push({
        data: dataset,
        label: "Corona",
        borderColor: "#3cbf9f",
        fill: false
      })
    }
  },
  async created() {
    await pandemicFunctions.fetchNewsPrograms()
    this.newsPrograms = await pandemicFunctions.getNewsPrograms()
  },
}
</script>

<style>
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
