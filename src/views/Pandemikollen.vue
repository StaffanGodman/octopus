<template>
  <div class="color-background vh-100 container-fluid">
    <div class="row justify-content-start">
      <div class="col-md-2">
        <sidebar />
      </div>
      <div class="col-md-10 p-0">
        <h1 class="color-primary-3 fs-1 p-3 text-center" v-if="!showResults">Pandemikollen</h1>
        <br />
        <div v-if="!showResults">
          <p class="color-primary-1 text-center">
            Ta fram tabeller över hur ofta olika program har tagit upp olika pandemirelaterade ämnen det senaste året.
          </p>
          <br />
          <nav
            class="change-size p-3 color3-background rounded position-relative start-50 translate-middle-x text-center"
          >
            <select name="Programs" class="rolldown" @change="setProgram">
              <option value="placeholder">Välj ett program</option>
              <option v-for="program in newsPrograms" :value="program.id" :key="program.id">
                {{ program.name }}
              </option>
            </select>
            <br /><br />
            <select name="pandemicWords" class="rolldown" @change="setKeyword">
              <option value="placeholder">Välj ett sökord</option>
              <option v-for="word in choiceWords" :key="word" :value="word">
                {{ word }}
              </option>
            </select>
            <br /><br />
            <button class="submitbutton" @click="parseEpisodes">Hämta data</button>
          </nav>
          <br />
          <br />
          <br />
          <br />
        </div>
        <div v-if="showResults">
          <LineChart />
          <br />
          <!--
      <select name="pandemicWords" @change="addAdditionalDataset">
        <option value="placeholder">Välj ett sökord</option>
        <option v-for="word in choiceWords" :key="word" :value="word">
          {{ word }}
        </option>
      </select>
      <br />
      -->
          <button class="submitbutton" @click="newSearch">Ny sökning</button>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import pandemicFunctions from "../lib/pandemicFunctions.js"
import LineChart from "../components/linechart.vue"
import pandemicChartData from "../lib/pandemicChartData.js"
import Sidebar from "../components/sidebar.vue"

export default {
  components: {
    LineChart,
    Sidebar,
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
      /*this.showResults = false
      pandemicChartData.data.labels.pop()
      pandemicChartData.data.datasets = []
      this.programChoice = null
      this.keyword = null*/
      location.reload()
      return false
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
.rolldown {
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
