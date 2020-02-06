<template>
  <div class="main-container">
    <div class="consoles">
      <div v-for="(gConsole, index) in gameConsoles" :key="index">
        <app-console :gConsole="gConsole"></app-console>
      </div>
    </div>
  </div>
</template>

<script>
import GameConsole from "./GameConsole.vue";
import { eventBus } from "./../main";
export default {
  data() {
    return {
      gameConsoles: [],
      games: eventBus.games
    };
  },
  components: {
    "app-console": GameConsole
  },
  methods: {},
  mounted() {
    this.gameConsoles = eventBus.consoles;
  }
};
</script>

<style scoped>
.consoles {
  width: 100%;
  height: 850px;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-between;
  padding: 2rem;
  overflow: scroll;
}
</style>
