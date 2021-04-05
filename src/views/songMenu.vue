<template>
  <div>
    <h1>Låt-Toppen</h1>
    <channelList></channelList>
  </div>
</template>

<script>
import ChannelList from "@/components/channelList";
export default {
  components: { ChannelList },
  data() {
    return {}
  },

  methods: {
  },
}
</script>

<style>
#song {
  margin: .2em;
  padding: .2em;
  border-color: grey;
  border-style: solid;
}
</style>