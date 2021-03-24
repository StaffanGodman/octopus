<template>
  <div>
    <h1>Låt-Toppen</h1>
    <br />

    <select name="Kanal" id="Channels" @change="getSongList">
      <option value="placeholder">Välj kanal</option>
      <option v-for="channel in channels"  :key="channel.name" v-bind:value="channel.id">
        {{ channel.name }}
      </option>
    </select>
    <div>
      <p v-for="song in songlist" :key="song">
        {{ song.description }}
      </p>
      <br />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      channels: [],
      songlist: [],
    }
  },

  methods: {
    async getChannels() {
      try {
        let resp = await fetch("https://api.sr.se/api/v2/channels?format=json&pagination=false")
        if (!resp.ok) {
          throw new Error(resp.status)
        }
        let json = await resp.json()
        this.channels = json.channels
      } catch (error) {
        console.error(error)
      }
    },
    async getSongList(event) {
      try {
        console.log("value:"+event.target.value)
        let resp = await fetch(
          "https://api.sr.se/api/v2/playlists/getplaylistbychannelid?id=" +
            event.target.value +
            "&startdatetime=2021-03-22&format=json&size=500"
        )
        if (!resp.ok) {
          throw new Error(resp.status)
        }
        let json = await resp.json()
        console.log(json)
        this.songlist = json.song
      } catch (error) {
        console.error(error)
      }
    },
  },
  created() {
    this.getChannels()
  },
}
</script>
