<template>
  <div>
    <button @click="destroyClock = !destroyClock">
      {{ destroyClock ? "开启" : "关闭" }}
    </button>
    <Birthday v-if="!destroyClock" />
  </div>
</template>

<script>
import Birthday from "./4-Birthday";
export default {
  components: {
    Birthday
  },
  name: "Destroy",
  data() {
    return {
      destroyClock: false
    };
  }
};
</script>
