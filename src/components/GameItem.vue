<template>
  <!-- BootStrap Card -->
  <div
    class="card"
    :class="{'selected': isSelected}"
    style="width: 12rem;"
    v-if="gameItem"
    @click="selectGameFn(gameItem)"
  >
    <img :src="image" class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">{{gameItem.name}}</h5>
      <p class="card-text">{{gameItem.year}}</p>
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
          likes: Number,
          comments: Array,
          image: String,
          description: String
        };
      }
    },
    isSelected: false,
    selectGameFn: Function
  },
  data() {
    return {
      image: require("../assets/imgs/" + this.gameItem.image)
    };
  },
  methods: {},
  updated() {
    this.image = require("../assets/imgs/" + this.gameItem.image);
  },
  beforeDestroy() {
    console.log("destroying...");
  }
};
</script>

<style scoped>
.card {
  margin: 1rem;
}
.selected {
  border: 3px solid #a7a4e0;
}
</style>