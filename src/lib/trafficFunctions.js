const trafficFunctions = {
  async fetchTrafficAreas() {
    try {
      let resp = await fetch("https://api.sr.se/api/v2/traffic/areas?format=json&pagination=false")
      if (!resp.ok) {
        throw new Error(resp.status)
      }
      let json = await resp.json()

      return json.areas
    } catch (error) {
      console.error(error)
    }
  },

  async fetchTrafficMessages(event) {
    if (event.target.value === "all") {
      try {
        let resp = await fetch("https://api.sr.se/api/v2/traffic/messages?format=json")
        if (!resp.ok) {
          throw new Error(resp.status)
        }
        let json = await resp.json()
        return json.messages
      } catch (error) {
        console.error(error)
      }
    } else {
      try {
        let resp = await fetch(
          "https://api.sr.se/api/v2/traffic/messages?trafficareaname=" +
            event.target.value +
            "&format=json&pagination=false"
        )
        if (!resp.ok) {
          throw new Error(resp.status)
        }
        let json = await resp.json()
        return json.messages
      } catch (error) {
        console.error(error)
      }
    }
  },
}

export default trafficFunctions
