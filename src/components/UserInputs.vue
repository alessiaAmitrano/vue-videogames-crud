<template>
  <div>
    <div class="form-group">
      <span>
        <strong>Likes:</strong>
        {{likes}}
      </span>
      <button class="btn btn-info" @click="increaseLikes">Like!</button>
      <br />
      <textarea class="form-control" type="text" v-model="comment"></textarea>
      <button class="btn btn-primary" @click="addComment">Submit</button>
    </div>
    <div class="comments">
      <span>
        <strong>Comments:</strong>
      </span>
      <ul>
        <li v-for="(item, index) in comments" :key="index">
          <i>"{{item}}"</i>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    likes: Number,
    comments: Array
  },
  data: function() {
    return {
      comment: "Insert comment here!"
    };
  },
  methods: {
    increaseLikes() {
      this.$emit("increaseLikes");
    },
    addComment() {
      this.$emit("newComment", this.comment);
      this.comment = "Insert comment here!";
    }
  }
};
</script>

<style scoped>
.form-group {
  height: 400px;
  margin-bottom: 2rem;
}

button {
  float: right;
  margin-top: 1rem;
  margin-bottom: 2rem;
}

li {
  list-style: none;
  font-size: 25px;
}
</style>