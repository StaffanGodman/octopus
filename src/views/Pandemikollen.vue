<!--
Vue page displaying data concerning the current pandemic, fetched from the Sveriges Radio API

authors Adrian Book - JavaScript, Html, CSS + Bootstrap (minor tweaks),
        Björn Munthe - CSS + Bootstrap (main contributor)
-->

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
            Ta fram tabeller över hur ofta Studio Ett i P1 har tagit upp olika pandemirelaterade ämnen det senaste året.
          </p>
          <br />
          <nav
            class="change-size p-3 color3-background rounded position-relative start-50 translate-middle-x text-center"
          >
            <select name="pandemicWords" class="rolldown" @change="setKeyword">
              <option value="placeholder">Välj ett sökord</option>
              <option v-for="word in choiceWords" :key="word" :value="word">
                {{ word }}
              </option>
            </select>
          </nav>
        </div>
        <div id="displayrotate" v-if="showResults">
          <h1 class="color-primary-3 fs-1 p-3 text-center">Pandemikollen</h1>
          <LineChart />
          <br />
          <button class="submitbutton position-relative start-50 translate-middle-x" @click="newSearch">
            Ny sökning
          </button>
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
      keyword: null,
      showResults: false,
      choiceWords: ["corona", "pandemi", "vaccin", "antikroppar", "munskydd", "covid", "smittspridning"],
    }
  },
  methods: {
    newSearch() {
      location.reload()
      return false
    },
    setKeyword(event) {
      if (event.target.value === "placeholder") {
        return
      } else {
        this.keyword = event.target.value
        this.parseEpisodes()
      }
    },
    async parseEpisodes() {
      this.addChartLabels(pandemicFunctions.timeChartLabels())
      pandemicChartData.data.datasets.push(this.addChartDataset(this.keyword))
      this.showResults = true
    },
    addChartLabels(labels) {
      pandemicChartData.data.labels = labels
    },
    addChartDataset(keyword) {
      return {
        data: pandemicFunctions.timeChartObjectArray(keyword),
        label: keyword,
        borderColor: "#159da3",
        fill: false,
      }
    },
  },
  async created() {
    await pandemicFunctions.parseEpisodes()
  },
}
</script>

<style>
.rolldown {
  height: 2rem;
  font-size: large;
}
@media (min-width: 768px) {
  .change-size {
    width: 40%;
  }
}
@media (max-width: 768px) {
  #displayrotate {
    transform: rotate(90deg);
  }
}
</style>
