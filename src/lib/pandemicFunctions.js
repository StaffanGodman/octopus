let newsPrograms = []
let keywords = [{name:"corona", count:0}, {name:"pandemi", count:0}]


const pandemicFunctions = {
  async getKeywords() {
    return keywords
  },
  async getNewsPrograms() {
    return newsPrograms
  },
  async fetchNewsPrograms() {
    try {
      let resp = await fetch("http://api.sr.se/api/v2/programs/index?programcategoryid=68&pagination=false&format=json")
      if (!resp.ok) {
        throw new Error(resp.status)
      }
      let json = await resp.json()
        newsPrograms  = json.programs
    } catch (error) {
      console.error(error)
    }
  },
  async fetchEpisodes(program) {
    try {
      let resp = await fetch(
        "http://api.sr.se/api/v2/episodes/index?format=json&fromdate=2020-03-01&todate=2021-03-01&pagination=true&programid=" + program
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
  async parseEpisodes(sickness, program) {
    let episodes = await this.fetchEpisodes(program)
    let sickString = String(sickness)
    for (const episode of episodes) {
      let startDate = Date(episode.publishdateutc)
      console.log(startDate)
      let description = String(episode.description)      
      if (description.toLowerCase().includes(sickString)) {
        for (const sickness of keywords) {
          if (sickness.name === sickString) {
            sickness.count ++
          }
        }
      }
    }
  },
  sicknessObject(name, startDate) {
    this.name = name
    this.startDate = startDate
    this.count = 0
  }
}

export default pandemicFunctions

