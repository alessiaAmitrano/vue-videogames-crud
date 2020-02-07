<template>
  <!-- BootStrap Card -->
  <div
    class="card"
    :class="{'selected': isSelected}"
    style="width: 12rem;"
    v-if="gConsole"
    @click="selectConsoleFn(gConsole)"
  >
    <img :src="image" class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">{{gConsole.model}}</h5>
      <p class="card-text">{{gConsole.brand}} - {{gConsole.year}}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    gConsole: {
      type: Object,
      default: function() {
        return {
          id: Number,
          brand: String,
          model: String,
          year: String,
          image: String
        };
      }
    },
    isSelected: false,
    selectConsoleFn: Function
  },
  data() {
    return {
      image: require("../assets/imgs/" + this.gConsole.image)
    };
  },
  methods: {}
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