<template>
  <div id="app" class="container-fluid">
    <HelloI18n />
  </div>
</template>

<script>
import HelloI18n from "./components/HelloI18n.vue";

export default {
  name: "App",
  components: {
    HelloI18n,
  },
  created() {
    const locale = localStorage.getItem("locale");
    if (locale) {
      this.$i18n.locale = locale;
    }
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
