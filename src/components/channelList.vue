<template>
  <select name="Kanal" id="Channels" @change="channelChosen">
    <option value="placeholder">Välj kanal</option>
    <option v-for="channel in channels" :key="channel.name" v-bind:value="channel.id">
      {{ channel.name }}
    </option>
  </select>
  <div>
    <p id="song" v-for="song in list" :list="list" :key="song">
      {{ song.description }}<br />
      Times played: {{ song.plays }}
    </p>
  </div>
</template>

<script>
import songFunctions from "@/lib/songFunctions"

export default {
  name: "ChannelList",
  data() {
    return {
      channels: [],
      songlist: [],
      list: [],
    }
  },
  methods: {
    async channelChosen(event) {
      this.songlist = await songFunctions.fetchSongList(event.target.value)
      this.createList(this.songlist)
    },
    createList(songlist) {
      console.log(songlist)
      this.list = []
      for (let i = 0; i < songlist.length; i++) {
        let s = { description: songlist[i].description, plays: 1 }
        for (let i = 0; i < this.list.length; i++) {
          if (this.list[i].description === s.description) {
            console.log("splice")
            s.plays = this.list[i].plays + 1
            this.list.splice(i, 1)
          }
        }
        this.list.push(s)
      }
      this.list.sort(function(a, b) {
        return b.plays - a.plays
      })
      console.log(this.list)
    },
  },
  async created() {
    this.channels = await songFunctions.fetchChannels()
  },
}
</script>
