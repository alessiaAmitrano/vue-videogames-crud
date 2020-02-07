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
          <app-game
            :gameItem="game"
            :selectGameFn="selectGame"
            :isSelected="selectedGame && game.id === selectedGame.id"
          ></app-game>
        </div>
      </div>
      <app-game-detail :gameItem="selectedGame" v-if="selectedGame"></app-game-detail>
    </div>
  </div>
</template>

<script>
import GameConsole from "./GameConsole.vue";
import GameItem from "./GameItem.vue";
import GameDetail from "./GameDetail.vue";
import { eventBus } from "./../main";

export default {
  data() {
    return {
      gameConsoles: [],
      games: [],
      selectedConsoleGames: [],
      selectedConsole: null,
      selectedGame: null
    };
  },
  components: {
    "app-console": GameConsole,
    "app-game": GameItem,
    "app-game-detail": GameDetail
  },
  methods: {
    selectConsole(selConsole) {
      this.selectedConsole = selConsole;
      this.selectedConsoleGames = this.loadGames(this.selectedConsole.id);
    },
    selectGame(game) {
      this.selectedGame = game;
    },
    loadGames(consoleId) {
      return this.games.filter(game => {
        return game.console_id === consoleId;
      });
    }
  },
  mounted() {
    this.gameConsoles = eventBus.consoles;
    this.games = eventBus.games;
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
