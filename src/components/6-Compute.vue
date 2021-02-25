<template>
  <div>
    <p>{{ getMessageByComputed }}</p>
    <p>{{ getMessageByMethod() }}</p>
    <button @click="clickButton">点击</button>
  </div>
</template>

<script>
export default {
  name: "Compute",
  data() {
    return {
      msg: "hello"
    };
  },
  computed: {
    getMessageByComputed() {
      console.info("this is computed");
      return this.msg + " compute";
    }
  },
  methods: {
    getMessageByMethod() {
      console.info("this is method");
      return this.msg + " method";
    },
    clickButton() {
      this.getMessageByComputed;
      this.getMessageByMethod();
    }
  }
};
</script>

<style></style>
