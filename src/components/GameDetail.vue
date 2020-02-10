<template>
  <div class="game-detail">
    <div class="description-sec">
      <!-- <keep-alive>
        <component :is="subComponentShown" @newComment="gameItem.comments.push($event)">
        </component>
      </keep-alive>-->
      <app-game-desc v-if="!showUserInput">
        <span v-if="gameItem">{{gameItem.description}}</span>
      </app-game-desc>
      <app-user-input
        v-if="showUserInput"
        :likes="gameItem.likes"
        :comments="gameItem.comments"
        @newComment="gameItem.comments.push($event)"
        @increaseLikes="gameItem.likes++"
      ></app-user-input>
      <hr />
      <button class="btn btn-info" @click="toggleUserInput">Rate it!</button>
    </div>
    <div class="image-sec">
      <img :src="image" alt />
      <span class="title">{{gameItem.name}}</span>
      <span class="title">{{gameItem.year}}</span>
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
          likes: Number,
          comments: Array,
          image: String,
          description: String
        };
      }
    }
  },
  data() {
    return {
      image: require("../assets/imgs/" + this.gameItem.image),
      showUserInput: false
    };
  },
  methods: {
    toggleUserInput() {
      this.showUserInput = !this.showUserInput;
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
  display: block;
  margin: 0 auto;
  text-align: center;
}

button {
  float: right;
}
</style>