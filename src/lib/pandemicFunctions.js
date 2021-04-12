/*
Set of functions used by Pandemikollen.vue

author Adrian Book
*/
const WEEK_IN_MILLISECONDS = 604800000
const parsedEpisodes = []
const studioEtt = 1637

const pandemicFunctions = {
  //API-fetch-functions
  async fetchEpisodes(program) {
    try {
      let resp = await fetch(
        "https://api.sr.se/api/v2/episodes/index?format=json&fromdate=2019-11-01&todate=" +
          this.dateForApiFetchAndDisplay(new Date()) +
          "&pagination=false&programid=" +
          program
      )
      if (!resp.ok) {
        throw new Error(resp.status)
      }
      let json = await resp.json()
      return json.episodes
    } catch (error) {
      console.error(error)
    }
  },
  //data manipulation functions
  timeChartObjectArray(keyword) {
    let dataArray = []
    for (const episode of parsedEpisodes) {
      let hits = 0
      for (const description of episode.descriptions) {
        if (description.toLowerCase().includes(keyword)) {
          hits++
        }
      }
      dataArray.push({
        x: episode.date,
        y: hits,
      })
    }
    return dataArray
  },
  timeChartLabels() {
    let labels = []
    let month = null
    for (const episode of parsedEpisodes) {
      if (month === null) {
        month = episode.date
      }
      if (episode.date.getMonth() != month.getMonth()) {
        if (month != null) {
          labels.push(month)
        }
        month = episode.date
      }
    }
    return labels
  },
  async parseEpisodes() {
    let episodes = await this.fetchEpisodes(studioEtt)
    episodes = episodes.reverse()
    let controllDate = this.formatDateMilliseconds(episodes[0].publishdateutc)
    let episodeData = new this.episodeData(controllDate)
    for (const episode of episodes) {
      let description = String(episode.description)
      let startDate = this.formatDateMilliseconds(episode.publishdateutc)
      if (startDate - controllDate >= WEEK_IN_MILLISECONDS) {
        controllDate += WEEK_IN_MILLISECONDS
        parsedEpisodes.push(episodeData)
        episodeData = new this.episodeData(controllDate)
      }
      episodeData.descriptions.push(description)
    }
  },
  //utility functions
  episodeData(date) {
    this.date = new Date(date)
    this.descriptions = []
  },
  dateForApiFetchAndDisplay(date) {
    return String(`${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`)
  },
  formatDateMilliseconds(dateString) {
    return Number(JSON.stringify(dateString).slice(7, -3))
  },
}

export default pandemicFunctions

