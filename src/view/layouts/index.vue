<template>
  <div>
    <div>
      <v-head></v-head>
    </div>
    <div>
      <v-sidebar></v-sidebar>
    </div>
    <div>
      <router-view />
    </div>
  </div>
</template>

<script>
import vHead from "./header.vue";
import vSidebar from "./Sidebar.vue";
export default {
  components: {
    vHead,
    vSidebar
  }
};
</script>

<style>
</style>
