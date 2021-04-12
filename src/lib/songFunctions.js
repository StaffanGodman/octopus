const songFunctions = {
  async fetchChannels() {
    try {
      let resp = await fetch("https://api.sr.se/api/v2/channels?format=json&pagination=false")
      if (!resp.ok) {
        throw new Error(resp.status)
      }
      let json = await resp.json()
      return json.channels
    } catch (error) {
      console.error(error)
    }
  },
  async fetchSongList(id) {
    try {
      let resp = await fetch(
        "https://api.sr.se/api/v2/playlists/getplaylistbychannelid?id=" +
          id +
          "&startdatetime=" +
          this.getDate() +
          "&format=json&size=500"
      )
      if (!resp.ok) {
        throw new Error(resp.status)
      }
      let json = await resp.json()
      return json.song
    } catch (error) {
      console.error(error)
    }
  },
  getDate() {
    let date = new Date()
    let addZero = ""
    if (date.getMonth().valueOf() < 10) {
      addZero = "0"
    }
    return date.getFullYear().toString() + "-" + addZero + date.getMonth().toString() + "-" + date.getDate().toString()
  },
}
export default songFunctions
