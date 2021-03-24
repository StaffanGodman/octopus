let newsPrograms = []
let keywords = ["corona", "pandemi"]


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
        "http://api.sr.se/api/v2/episodes/index?format=json&fromdate=2020-03-01&todate=2021-03-01&programid=" + program
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
    console.log(episodes)
    console.log(sickness)
  },
  keyWords(corona, pandemi) {
    this.corona = corona
    this.pandemi = pandemi
  },
}

export default pandemicFunctions

