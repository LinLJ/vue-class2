<template>
  <div>
    <input v-model="question" />
    <p>{{ answer }}</p>
  </div>
</template>

<script>
export default {
  name: "Watcher",
  data() {
    return {
      question: "",
      answer: "给我一个问题，我来回答你"
    };
  },
  watch: {
    question() {
      this.answer = "不好意思，不知道你问的问题的答案";
    }
  }
};
</script>

<style></style>
