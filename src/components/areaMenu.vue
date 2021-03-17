<template>
  <div>
    <h1>Trafikinytt från p4</h1>
    <br />
    <p v-if="trafficMessages.length === 0">
      information om trafikstörningar runt om i landet
    </p>
    <img
      alt="Traffic sign"
      src="../assets/skylt.png"
      v-if="trafficMessages.length === 0"
    />
    <select name="Region" id="Regions" @change="getTrafficMessages">
      <option value="placeholder">Select an area</option>
      <option value="all">Alla områden</option>
      <option v-for="area in trafficAreas" :key="area.name">
        {{ area.name }}
      </option>
    </select>
    <div>
      <p v-for="message in trafficMessages" :key="message">
        {{ message.title }}
        {{ message.subcategory }}<br />
        {{ message.description }}
      </p>
      <br />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      trafficAreas: [],
      trafficMessages: [],
    };
  },

  methods: {
    async getTrafficAreas() {
      try {
        let resp = await fetch(
          "https://api.sr.se/api/v2/traffic/areas?format=json&pagination=false"
        );
        if (!resp.ok) {
          throw new Error(resp.status);
        }
        let json = await resp.json();
        this.trafficAreas = json.areas;
      } catch (error) {
        console.error(error);
      }
    },
    async getTrafficMessages(event) {
      if (event.target.value === "all") {
        try {
          let resp = await fetch(
            "https://api.sr.se/api/v2/traffic/messages?format=json"
          );
          if (!resp.ok) {
            throw new Error(resp.status);
          }
          let json = await resp.json();
          this.trafficMessages = json.messages;
        } catch (error) {
          console.error(error);
        }
      } else {
        try {
          let resp = await fetch(
            "https://api.sr.se/api/v2/traffic/messages?trafficareaname=" +
              event.target.value +
              "&format=json&pagination=false"
          );
          if (!resp.ok) {
            throw new Error(resp.status);
          }
          let json = await resp.json();
          this.trafficMessages = json.messages;
        } catch (error) {
          console.error(error);
        }
      }
    },
  },
  created() {
    this.getTrafficAreas();
  },
};
</script>

<style scoped>
img {
  width: 20rem;
}
p {
  border: solid lightblue;
  background-color: aliceblue;
}
</style>
