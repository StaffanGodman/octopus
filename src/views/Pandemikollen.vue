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
      <p>{{ keyword }}</p>
      <select name="pandemicWords" @change="setKeyword">
        <option value="placeholder">Välj ett sökord</option>
        <option v-for="word in choiceWords" :key="word" :value="word">
          {{ word }}
        </option>
      </select>
      <br /><br />
      <button class="submitbutton" @click="parseEpisodes">Hämta data</button>
    </div>
    <div v-if="showResults">
      <LineChart />
      <br />
      <select name="pandemicWords" @change="addAdditionalDataset">
        <option value="placeholder">Välj ett sökord</option>
        <option v-for="word in choiceWords" :key="word" :value="word">
          {{ word }}
        </option>
      </select>
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
      keyword: null,
      showResults: false,
      choiceWords: ["corona", "pandemi", "vaccin", "antikroppar", "munskydd", "covid", "smittspridning"],
      colourSet: ["#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850", "#3cbf9f"],
    }
  },
  methods: {
    newSearch() {
      this.showResults = false
      pandemicChartData.data.labels.pop()
      pandemicChartData.data.datasets = []
      this.programChoice = null
      this.keyword = null
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
    setKeyword(event) {
      if (event.target.value === "placeholder") {
        return
      } else {
        this.keyword = event.target.value
      }
    },
    async parseEpisodes() {
      if (this.keyword === null || this.programChoice === null) {
        return
      } else {
        await pandemicFunctions.parseEpisodes(this.programChoice)
        this.getKeywords
        this.addChartLabels(pandemicFunctions.getSicknesObjectDates())
        pandemicChartData.data.datasets.push(this.addChartDataset(this.keyword))
        this.showResults = true
      }
    },
    addChartLabels(labels) {
      pandemicChartData.data.labels = labels
    },
    addChartDataset(keyword) {
      return {
        data: pandemicFunctions.getSicknesObjectData(keyword),
        label: keyword,
        borderColor: this.colourSet.pop(),
        fill: false,
      }
    },
    addAdditionalDataset(event) {
      if (event.target.value === "placeholder") {
        return
      } else {
        this.chart.data.datasets.push(this.addChartDataset(event.target.value))
       this.chart.update()
      }
    },
  },
  async created() {
    this.newsPrograms = await pandemicFunctions.fetchNewsPrograms()
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
