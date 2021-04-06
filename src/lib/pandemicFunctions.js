let newsPrograms = []
//let keywords = [{ name: "corona", count: 0 }, { name: "pandemi", count: 0 }]
const WEEK_IN_MILLISECONDS = 604800000
let sicknessObjectList = []


const pandemicFunctions = {
  async getKeywords() {
    return sicknessObjectList
  },
  async getNewsPrograms() {
    return newsPrograms
  },
  async fetchNewsPrograms() {
    try {
      let resp = await fetch("https://api.sr.se/api/v2/programs/index?programcategoryid=68&pagination=false&format=json")
      if (!resp.ok) {
        throw new Error(resp.status)
      }
      let json = await resp.json()
      newsPrograms = json.programs
    } catch (error) {
      console.error(error)
    }
  },
  async fetchEpisodes(program) {
    try {
      let resp = await fetch(
        "https://api.sr.se/api/v2/episodes/index?format=json&fromdate=2020-03-01&todate=2021-03-01&pagination=false&programid=" + program
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
  async parseEpisodes(sickness, program) {
    let episodes = await this.fetchEpisodes(program)
    episodes = episodes.reverse()
    let sickString = String(sickness)
    let controllDate = this.formatDateMilliseconds(episodes[0].publishdateutc)
    let sicknessObject = null
    for (const episode of episodes) {
      let description = String(episode.description)
      let startDate = this.formatDateMilliseconds(episode.publishdateutc)
      if (sicknessObjectList.length === 0 || startDate - controllDate >= WEEK_IN_MILLISECONDS) {
        controllDate = startDate
        if (sicknessObject != null) {
          sicknessObjectList.push(sicknessObject)
        }
        sicknessObject = new this.sicknessObject(sickString, startDate)
      }
      if (description.toLowerCase().includes(sickString)) {
        sicknessObject.count++
      }
    }
  },
  sicknessObject(name, startDate) {
    this.name = name
    this.startDate = startDate
    this.displayDate = new Date(this.startDate).toDateString()
    this.count = 0
  },
  getSicknesObjectData() {
    let dataArray = []
    for (const obj of sicknessObjectList) {
      dataArray.push(obj.count)
    }
    console.log(dataArray)
    return dataArray
  },
  getSicknesObjectDates() {
    let dateArray = []
    for (const obj of sicknessObjectList) {
      dateArray.push(obj.displayDate)
    }
    return dateArray
  },
}

export default pandemicFunctions

