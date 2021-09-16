import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import Vue from 'vue'

import TwitchForm from "./components/TwitchForm.vue";
import ParamoForm from "./components/ParamoForm.vue";
import ThankYou from "./components/ThankYou.vue";
import Participants from "./components/Participants.vue";

Vue.config.productionTip = false

const routes = {
    '/thanks': ThankYou,
    '/twitch': TwitchForm,
    '/paramo': ParamoForm,
    '/participants': Participants,
}

new Vue({
    el: '#app',
    data: {
        currentRoute: window.location.pathname
    },
    computed: {
        ViewComponent() {
            return routes[this.currentRoute] || ThankYou
        }
    },
    render(h) {
        return h(this.ViewComponent)
    }
})