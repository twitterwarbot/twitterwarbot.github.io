<template>
  <div class="container">
    <div class="card mb-3 mt-3 p-2 bg-warning">
      <div class="d-flex justify-content-center">
        <b
          >¿Se te ha ocurrido alguna idea?
          <a :href="`/${botType}`" target="_blank"
            >¡Aquí puedes sugerirla!</a
          ></b
        >
      </div>
    </div>
    <div
      id="weaponWrapper"
      class="d-flex flex-wrap justify-content-center mb-5"
    >
      <template v-for="weapon in require(`../assets/${botType}/weapons.json`)">
        <div v-bind:key="weapon" class="card d-inline text-center m-2 p-2">
          <div class="d-flex flex-column align-items-center">
            <img
              class="img-fluid img-small"
              :src="require(`../assets/${botType}/power.png`)"
              alt="power"
            />
            <div>{{ weapon }}</div>
          </div>
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
.img-small {
  width: 30px;
}
#weaponWrapper > div:nth-child(even) {
  background: rgb(197, 197, 197);
}
</style>
