/*
Data used by linechart.vue component

author Adrian Book
*/
export const pandemicChartData = {
  type: "line",
  data: {
    labels: [],
    datasets: [],
  },
  options: {
    title: {
      display: true,
      text: "Antal omnämningar per vecka",
    },
    scales: {
      alignToPixels: true,
      xAxes: [{
        type: "time",
        distribution: "linear",
        ticks: {
          source: "labels"
        },
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 7,
          stepSize: 1,
        }
      }],
    },
  },
}

export default pandemicChartData
