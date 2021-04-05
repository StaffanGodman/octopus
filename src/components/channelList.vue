<template>
  <select name="Kanal" id="Channels" @change="channelChosen">
    <option value="placeholder">Välj kanal</option>
    <option v-for="channel in channels" :key="channel.name" v-bind:value="channel.id">
      {{ channel.name }}
    </option>
  </select>
  <div>
    <p id="song" v-for="song in this.songlist" :songlist="songlist" :key="song">
      {{ song.description }}
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
    }
  },
  methods: {
    async channelChosen(event) {
      this.songlist = await songFunctions.fetchSongList(event.target.value)
    },
  },
  async created() {
    this.channels = await songFunctions.fetchChannels()
  },
}
</script>
