<template>
  <div class="main-container">
    <div class="flex-container">
      <div class="consoles">
        <div v-for="(gConsole, index) in gameConsoles" :key="index">
          <app-console
            :gConsole="gConsole"
            :selectConsoleFn="selectConsole"
            :isSelected="selectedConsole && gConsole.id === selectedConsole.id"
          ></app-console>
        </div>
      </div>
      <div class="games" v-if="selectedConsoleGames.length > 0">
        <div v-for="(game, index) in selectedConsoleGames" :key="index">
          <app-game :gameItem="game"></app-game>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import GameConsole from "./GameConsole.vue";
import GameItem from "./GameItem.vue";
import { eventBus } from "./../main";
export default {
  data() {
    return {
      gameConsoles: [],
      selectedConsoleGames: [],
      selectedConsole: null
    };
  },
  components: {
    "app-console": GameConsole,
    "app-game": GameItem
  },
  methods: {
    selectConsole(selConsole) {
      this.selectedConsole = selConsole;
      console.log(this.selectedConsole);
      this.selectedConsoleGames = this.loadGames(this.selectedConsole.id);
    },
    loadGames(consoleId) {
      return eventBus.games.filter(game => {
        return game.console_id === consoleId;
      });
    }
  },
  mounted() {
    this.gameConsoles = eventBus.consoles;
  }
};
</script>

<style scoped>
.flex-container {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
}

.consoles,
.games {
  width: 20%;
  height: 850px;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  overflow: scroll;
}
</style>
