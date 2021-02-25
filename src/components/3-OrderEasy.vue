<template>
  <div>
    <h1>1.指令--绑定</h1>
    <a v-bind:href="taijiUrl">太极url</a>
    <br />
    <a :href="baiduUrl">百度url</a>

    <h1>2.指令--条件渲染</h1>

    <h2>2.1指令--条件渲染-if</h2>
    <p v-if="flag">我是v-if,你可以看见我</p>
    <p v-if="!flag">我是v-if，你看不见我我</p>
    <p v-else>我是v-else，你看的见我</p>

    <h2>2.2指令--条件渲染-show</h2>
    <p v-show="flag">我是v-show,你可以看见我</p>
    <p v-show="!flag">我是v-show，你看不见我我</p>

    <h1>3.指令-列表渲染</h1>
    <ul>
      <li v-for="item in items" v-bind:key="item.id">{{ item.name }}</li>
    </ul>

    <h1>4.指令--事件</h1>
    <button class="changeTest" v-on:click="changeFlag2">改变flag2</button>
    <p v-if="flag2">我是v-if,你可以看见我</p>
    <p v-if="!flag2">我是v-if，你看不见我我</p>

    <h1>5.指令-动态绑定</h1>
    <input v-model="msg" />
    <p>{{ msg }}</p>
  </div>
</template>

<script>
export default {
  name: "OrderEasy",
  data() {
    return {
      taijiUrl: "https://www.taiji.com.cn",
      baiduUrl: "https://www.baidu.com",
      flag: true,
      items: [
        { id: 1, name: "小明" },
        { id: 2, name: "小红" },
        { id: 3, name: "小刚" }
      ],
      flag2: true,
      msg: "Hello Model"
    };
  },
  methods: {
    changeFlag2() {
      this.flag2 = !this.flag2;
    }
  }
};
</script>
