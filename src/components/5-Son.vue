<template
  ><div>
    <h1>我是Son组件</h1>
    <p>{{ title }}</p>

    <button @click="num++">增加num值</button>
    <button @click="num--">减少num值</button>
    <p>当前num值:{{ num }}</p>
    <button @click="$emit('enlarge', num)">从子向父传值</button>
  </div></template
>

<script>
export default {
  name: "Son",
  props: {
    title: String
  },
  data() {
    return {
      num: 2
    };
  }
};
</script>

<style lang="scss">
button {
  margin-left: 30px;
}
</style>
