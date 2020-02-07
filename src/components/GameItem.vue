<template>
  <!-- BootStrap Card -->
  <div class="card" :class="{'selected': isSelected}" style="width: 12rem;" v-if="gameItem">
    <img :src="imgSrc" class="card-img-top" alt="..." />
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
          image: String,
          description: String
        };
      }
    },
    isSelected: false
  },
  data() {
    return {
      imgSrc: require("../assets/imgs/" + this.gameItem.image)
    };
  },
  methods: {}
};
</script>