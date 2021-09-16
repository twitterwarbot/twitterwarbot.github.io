import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import Vue from "vue";

import TwitchForm from "./components/TwitchForm.vue";
import ParamoForm from "./components/ParamoForm.vue";
import ThankYou from "./components/ThankYou.vue";
import Participants from "./components/Participants.vue";
import Injures from "./components/Injures.vue";
import Powerups from "./components/Powerups.vue";
import Weapons from "./components/Weapons.vue";

Vue.config.productionTip = false;

const routes = {
  "/thanks": ThankYou,
  "/twitch": TwitchForm,
  "/paramo": ParamoForm,
  "/participants": Participants,
  "/injures": Injures,
  "/powerups": Powerups,
  "/weapons": Weapons,
};

new Vue({
  el: "#app",
  data: {
    currentRoute: window.location.pathname,
  },
  computed: {
    ViewComponent() {
      return routes[this.currentRoute] || ThankYou;
    },
  },
  render(h) {
    return h(this.ViewComponent);
  },
});
