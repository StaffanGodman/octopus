<template>
  <div class="color-background vh-100 container-fluid">
    <div class="row justify-content-start">
      <div class="col-md-2 light-background">
        <sidebar />
      </div>
      <div class="col-md-10 p-0">
        <h1 class="text-center color-primary-3 fs-1 p-3">Låt-Toppen</h1>
        <p class="color-primary-1 text-center">
          Sök på Låt-Toppen för att se vilken musik som är populärast på just din radiostation!
        </p>
        <div>
          <channelList></channelList>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ChannelList from "@/components/channelList"
import Sidebar from "../components/sidebar.vue"
export default {
  components: {
    ChannelList,
    Sidebar,
  },
  data() {
    return {}
  },

  methods: {},
}
</script>

<style></style>
