<template>
  <div class="game-detail">
    <div class="description-sec">
      <keep-alive>
        <component :is="subComponentShown" @gameDesc="gameItem.description"></component>
      </keep-alive>
      <button class="btn btn-info" @click="changeComponent">Toggle User Panel</button>
    </div>
    <div class="image-sec">
      <img :src="image" alt />
      <span class="title">{{gameItem.name}}</span>
    </div>
  </div>
</template>

<script>
import GameDescription from "./GameDescription.vue";
import UserInputs from "./UserInputs.vue";

export default {
  components: {
    "app-user-input": UserInputs,
    "app-game-desc": GameDescription
  },
  props: {
    gameItem: {
      type: Object,
      default: function() {
        return {
          id: Number,
          console_id: Number,
          name: String,
          year: String,
          image: String,
          description: String
        };
      }
    }
  },
  data() {
    return {
      image: require("../assets/imgs/" + this.gameItem.image),
      subComponentShown: "app-game-desc"
    };
  },
  methods: {
    changeComponent() {
      this.subComponentShown =
        this.subComponentShown === "app-game-desc"
          ? "app-user-input"
          : "app-game-desc";
    }
  },
  updated() {
    this.image = require("../assets/imgs/" + this.gameItem.image);
  }
};
</script>

<style scoped>
.game-detail {
  width: 60%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
}

.description-sec,
.image-sec {
  width: 50%;
  padding: 4rem;
  font-size: 28px;
  text-align: left;
}
img {
  padding: 4rem;
  width: 100%;
}

.title {
  font-size: 30px;
  font-weight: bold;
}
</style>