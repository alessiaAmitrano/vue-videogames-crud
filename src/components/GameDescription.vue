<template>
  <div>
    <span style="display:block; font-weight:bold;">Description:</span>
    <span v-if="gameDesc">{{gameDesc}}</span>
  </div>
</template>

<script>
export default {
  props: ["gameDesc"]
};
</script>

<style scoped>
</style>