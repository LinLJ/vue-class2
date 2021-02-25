<template>
  <div>
    <h1>我是Father组件</h1>
    <Son title="我从Father传至Son1" />
    <Son @enlarge="addNumber" />
    <p>{{ sum }}</p>
  </div>
</template>

<script>
import Son from "./5-Son";
export default {
  components: {
    Son
  },
  data() {
    return {
      sum: 0
    };
  },
  methods: {
    addNumber(num) {
      this.sum += num;
    }
  }
};
</script>

<style></style>
