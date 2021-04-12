<!--
vue component for displaying data from Pandemikollen.vue as a line chart

author Adrian Book
-->
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
  },
  mounted() {
    const ctx = document.getElementById("line-chart")
    new Chart(ctx, this.pandemicChartData)
  },
}
</script>
