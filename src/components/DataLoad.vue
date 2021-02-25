<template>
  <div>
    <h1>{{ msg }}</h1>
    <!-- <input v-bind:vale="msg" @input="msg = $event.target.value" />
    <br />
    <input v-model="msg" /> -->
  </div>
</template>

<script>
export default {
  name: "DataLoad",
  data() {
    return {
      msg: "hello vue"
    };
  }
};
</script>
