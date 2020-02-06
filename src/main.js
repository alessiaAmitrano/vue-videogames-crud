import Vue from "vue";
import App from "./App.vue";
import { consoles, games } from "./data";

export const eventBus = new Vue({
  data: {
    consoles: consoles,
    games: games
  }
});

new Vue({
  el: "#app",
  render: h => h(App)
});
