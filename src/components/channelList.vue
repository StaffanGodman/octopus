<template>
  <div>
    <p v-if="this.list.length > 0">Topplistan idag i (placeholder)</p>
    <br />
    <div>
    <select name="Kanal" id="Channels" @change="channelChosen">
      <option value="placeholder">Välj kanal</option>
      <option v-for="channel in channels" :key="channel.name" v-bind:value="channel.id">
        {{ channel.name }}
      </option>
    </select>
    </div>
    <div class="rounded overflow-scroll m-2 h-50 flex-column" v-if="this.list.length > 0">
      <p class="bi-text-left colo>Låt</p>
      <div class="message pb-5" v-for="song in list" :list="list" :key="song">
        <p id="titleartist">{{ song.description }}</p>
        <br />
        <p id="timesplayed">Antal spelningar: {{ song.plays }}</p>
        <br />
      </div>
    </div>
  </div>
</template>

<script>
import songFunctions from "@/lib/songFunctions"

export default {
  name: "ChannelList",
  data() {
    return {
      channelname: "",
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
      this.list = []
      for (let i = 0; i < songlist.length; i++) {
        let s = { description: songlist[i].description, plays: 1 }
        for (let i = 0; i < this.list.length; i++) {
          if (this.list[i].description === s.description) {
            s.plays = this.list[i].plays + 1
            this.list.splice(i, 1)
          }
        }
        this.list.push(s)
      }
      this.list.sort(function(a, b) {
        return b.plays - a.plays
      })
    },
  },
  async created() {
    this.channels = await songFunctions.fetchChannels()
  },
}
</script>
<style>
#Channels {
  position: relative;
  margin-bottom: 1rem;
}
.message {
  border: solid lightblue;
  background-color: aliceblue;
}
#titleartist {
  float: left;
  margin: 0.5rem;
}
#timesplayed {
  float: right;
  margin: 0.5rem;
}
</style>
