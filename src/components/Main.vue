<template>
  <div class="main-container">
    <div class="consoles">
      <div v-for="(gConsole, index) in gameConsoles" :key="index">
        <app-console
          :gConsole="gConsole"
          :selectConsoleFn="selectConsole"
          :isSelected="selectedConsole && gConsole.id === selectedConsole.id"
        ></app-console>
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
      games: eventBus.games,
      selectedConsole: null
    };
  },
  components: {
    "app-console": GameConsole
  },
  methods: {
    selectConsole(selConsole) {
      this.selectedConsole = selConsole;
      console.log(this.selectedConsole);
    }
  },
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
