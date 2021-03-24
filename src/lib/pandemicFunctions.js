let newsPrograms = []
let episodes = []
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
  async fetchEpisodes(event) {
    try {
      let resp = await fetch(
        "http://api.sr.se/api/v2/episodes/index?format=json&fromdate=2020-03-01&todate=2021-03-01&programid="+event.target.value)
        if (!resp.ok) {
        throw new Error(resp.status)
        }
        let json = await resp.json()
          episodes = json.episodes
          
    } catch (error) {
      console.error(error)
    }
  },
  parseEpisodes(sickness) {
    episodes = sickness
  },
  keyWords(corona, pandemi) {
    this.corona = corona
    this.pandemi = pandemi
  },
}

export default pandemicFunctions

