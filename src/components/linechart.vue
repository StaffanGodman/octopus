<template>
  <div>
    <canvas id="line-chart"></canvas>
  </div>
</template>

<script>
import Chart from "chart.js"
import pandemicChartData from "../lib/pandemicChartData.js"

export default {
  name: "LineChart",
  data() {
    return {
      pandemicChartData: pandemicChartData,
      chart: null,
    }
  },
  methods: {
    initiate(ctx) {
      this.chart = new Chart(ctx, this.pandemicChartData)
    },
    updateChart(data) {
      this.pandemicChartData.data.datasets.push(data)
      this.chart.update()
    },
  },
  mounted() {
    const ctx = document.getElementById("line-chart")
    this.initiate(ctx)
    //new Chart(ctx, this.pandemicChartData)
  },
}
</script>
