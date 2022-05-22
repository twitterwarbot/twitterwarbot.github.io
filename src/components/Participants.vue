<template>
  <div class="container">
    <div class="card mb-3 mt-3 p-2 bg-warning">
      <div class="d-flex justify-content-center">
        <b>¿Se te ha ocurrido alguna idea? <a :href="`/${botType}`">¡Aquí puedes sugerirla!</a></b>
      </div>
    </div>
    <!-- <div class="text-center mt-5 mb-3">
      <div class="card">
        <img class="img-fluid" :src="require(`../assets/${botType}/map_preview.png`)" alt="map_preview" />
      </div>
    </div> -->
    <!-- <div class="card mb-3 p-2 bg-warning">
      <div class="d-flex justify-content-center">
        <b
          >¿Echas en falta a algún/a streamer?
          <a :href="`/${botType}`" target="_blank"
            >¡Aquí puedes sugerirlo/a!</a
          ></b
        >
      </div>
    </div> -->
    <div class="d-flex flex-wrap justify-content-center mb-5">
      <template v-for="participant in require(`../assets/${botType}/participants.json`)">
        <div v-bind:key="participant" class="card d-inline text-center m-1">
          <a :href="'//www.twitter.com/' + participant" target="_blank">
            <div class="d-flex flex-column align-items-center">
              <img class="img-fluid img-narrow" :src="require(`../assets/${botType}/avatars/${participant}.png`)" :alt="participant" />
              <div>{{ participant }}</div>
            </div></a
          >
        </div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: "participants",
  computed: {
    botType() {
      const type = new URLSearchParams(window.location.search).get("bot");
      if (["twitch", "paramo"].includes(type)) {
        return type;
      } else {
        window.location = "/";
        return null;
      }
    },
  },
  watch: {
    $route: {
      immediate: true,
      handler() {
        if (this.botType == "paramo") document.title = "Páramo Bot";
        else if (this.botType == "twitch") document.title = "Twitch War Bot";
      },
    },
  },
};
</script>
<style scoped>
.img-narrow {
  width: 100px;
}
</style>
