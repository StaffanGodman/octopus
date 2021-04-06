
export const pandemicChartData = {
  type: 'line',
  data: {
    labels: [],
    datasets: [],
  },
  options: {
    title: {
      display: true,
      text: 'Antal omnämningar per vecka',
    },
    scales: {
      y: {
        min: 0,
        max: 7,
      },
    },
  },
}

export default pandemicChartData;
