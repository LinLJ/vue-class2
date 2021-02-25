<template>
  <div class="home">
    <Watcher />
  </div>
</template>

<script>
// @ is an alias to /src
//import DataLoad from "@/components/DataLoad.vue";
//import OrderEasy from "@/components/3-OrderEasy.vue";
//import Birthday from "@/components/4-Birthday.vue";
// import Destroy from "@/components/4-Destroy.vue";
// import Father from "@/components/5-Father.vue";
// import Compute from "@/components/6-Compute.vue";
import Watcher from "@/components/6-Watcher.vue";
export default {
  name: "Home",
  components: {
    Watcher
  }
};
</script>
