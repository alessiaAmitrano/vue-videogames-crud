<template>
  <div>
    <span class="strong">Likes: {{likes}}</span>
    <button class="btn btn-info" @click="increaseLikes">Like!</button>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      likes: 0
    };
  },
  methods: {
    increaseLikes() {
      this.likes++;
    }
  }
};
</script>

<style scoped>
</style>