<template>
  <div class="game-detail">
    <div class="description-sec">
      <span style="display:block; font-weight:bold;">Description:</span>
      <span>{{gameItem.description}}</span>
    </div>
    <div class="image-sec">
      <img :src="image" alt />
      <span class="title">{{gameItem.name}}</span>
    </div>
  </div>
</template>

<script>
export default {
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
      image: require("../assets/imgs/" + this.gameItem.image)
    };
  },
  methods: {},
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