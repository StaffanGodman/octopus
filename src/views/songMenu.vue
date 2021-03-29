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
import songFunctions from "@/lib/songFunctions";

export default {
  data() {
    return {
      channels: [],
      songlist: [],
    }
  },

  methods: {
    async getSongList(event) {
      this.songlist = await songFunctions.fetchSongList(event)
    },
  },
    async created() {
    this.channels = await songFunctions.fetchChannels()
  },
}
</script>
