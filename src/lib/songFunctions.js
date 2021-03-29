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
  async fetchSongList(event) {
    try {
      let resp = await fetch(
        "https://api.sr.se/api/v2/playlists/getplaylistbychannelid?id=" +
          event.target.value +
          "&startdatetime=2021-03-22&format=json&size=500"
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
}
export default songFunctions
