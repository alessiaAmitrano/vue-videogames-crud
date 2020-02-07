<template>
  <div id="app">
    <app-header>
      <!-- passing the content through a slot -->
      <span>GAMES.IO</span>
    </app-header>
    <app-main></app-main>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import Main from "./components/Main.vue";
export default {
  components: {
    "app-header": Header,
    "app-footer": Footer,
    "app-main": Main
  }
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}

body {
  margin: 0;
  padding: 0;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
