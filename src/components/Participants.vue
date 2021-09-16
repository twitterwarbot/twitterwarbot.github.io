<template>
  <div class="container">
    <div class="text-center mt-5 mb-3">
      <div class="card">
        <img
          class="img-fluid"
          :src="require(`../assets/${botType}/map_preview.png`)"
          alt="paramo"
        />
      </div>
    </div>
    <div class="card mb-3 p-2 bg-warning">
      <div class="d-flex justify-content-center">
        <b
          >¿Echas en falta a algún/a streamer?
          <a :href="`/${botType}`" target="_blank"
            >¡Aquí puedes sugerirlo/a!</a
          ></b
        >
      </div>
    </div>
    <div class="d-flex flex-wrap justify-content-center mb-5">
      <template
        v-for="participant in require(`../assets/${botType}/participants.json`)"
      >
        <div v-bind:key="participant" class="card d-inline text-center m-1">
          <a :href="'//www.twitter.com/' + participant" target="_blank">
            <div class="d-flex flex-column align-items-center">
              <img
                class="img-fluid img-narrow"
                :src="require(`../assets/twitch/avatars/${participant}.png`)"
                alt="paramo"
              />
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
  beforeCreate: function () {
    document.body.className = "bg-dark";
  },
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
};
</script>
<style scoped>
.img-narrow {
  width: 100px;
}
</style>
