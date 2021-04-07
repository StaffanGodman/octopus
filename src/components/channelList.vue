<template>
  <nav class="change-size p-3 color3-background rounded position-relative start-50 translate-middle-x text-center">
    <select class="w-75" name="Kanal" id="Channels" @change="channelChosen">
      <option value="placeholder">Välj kanal</option>
      <option v-for="channel in channels" :key="channel.name" v-bind:value="channel.id">
        {{ channel.name }}
      </option>
    </select>
  </nav>
  <div class="rounded m-2 h-50 flex-column" v-if="this.list.length > 0">
    <p class="color-primary-1">Topplistan 2021-04-05 för (placeholder)</p>
    <div class="d-flex justify-content-between p-0 message pb-6 mb-0" v-for="song in list" :list="list" :key="song">
      <div class="p-1">
      <p id="titleartist">{{ song.description }}</p>
      </div>
      <div class="p-1">
      <p class="" id="timesplayed">Spelningar: {{ song.plays }}</p>
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
      this.list.length = 5
    },
  },
  async created() {
    this.channels = await songFunctions.fetchChannels()
  },
}
</script>
<style>
#Channels {
  height: 2rem;
  font-size: large;
}
.message {
  font-size: small;
  border: solid lightblue;
  background-color: aliceblue;
}
#titleartist {
}
#timesplayed {
  white-space: nowrap;
}
@media (min-width: 768px) {
  .change-size {
    width: 40%;
  }
  .message {
    font-size: large;
  }
}
</style>
