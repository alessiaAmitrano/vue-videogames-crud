import Vue from "vue";
import App from "./App.vue";
import { consoles, games } from "./data";

export const eventBus = new Vue({
  data: {
    consoles: consoles,
    games: games
  }
});

Vue.directive("warning", {
  bind(el, binding, vnode) {
    console.log("binding", binding);
    let delay = 0;
    if (binding.modifiers["delayed"]) {
      delay = 3000;
    }
    setTimeout(() => {
      if (binding.arg === "color") el.style.color = "red";
    }, delay);
  }
});

new Vue({
  el: "#app",
  render: h => h(App)
});
