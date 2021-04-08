const WEEK_IN_MILLISECONDS = 604800000
const parsedEpisodes = []


const pandemicFunctions = {
  async fetchNewsPrograms() {
    try {
      let resp = await fetch("https://api.sr.se/api/v2/programs/index?programcategoryid=68&pagination=false&format=json")
      if (!resp.ok) {
        throw new Error(resp.status)
      }
      let json = await resp.json()
      return json.programs
    } catch (error) {
      console.error(error)
    }
  },
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
  formatDateMilliseconds(dateString) {
    return Number(JSON.stringify(dateString).slice(7, -3))
  },
  getSicknesObjectData(keyword) {
    let dataArray = []
    for (const episode of parsedEpisodes) {
      let hits = 0
      for (const description of episode.descriptions) {
        if (description.toLowerCase().includes(keyword)) {
          hits++
        }
      }
      dataArray.push(hits)
    }
    return dataArray
  },
  getSicknesObjectDates() {
    let dateArray = []
    for (const episode of parsedEpisodes) {
      dateArray.push(this.dateForApiFetchAndDisplay(episode.date))
    }
    return dateArray
  },
  async parseEpisodes(program) {
    let episodes = await this.fetchEpisodes(program)
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
  episodeData(date) {
    this.date = new Date(date)
    this.descriptions = []
  },
  dateForApiFetchAndDisplay(date) {
    //let today = date
    return String(`${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`)
  }
}

export default pandemicFunctions

