<template>
  <Header />
  <router-view />
</template>

<script>
import Header from "./components/Header.vue";
export default {
  components: { Header },
  setup() {
    const getMode = () => {
      if (localStorage.getItem("dark__mode") == "true") {
        document.body.classList.add("dark");
        document.body.classList.replace("bg-light", "bg-dark");
      } else {
        document.body.classList.remove("dark");
        document.body.classList.replace("bg-dark", "bg-light");
      }
    };

    window.onload = getMode();
  },
};
</script>

<style>
#app {
  max-width: 1440px;
  margin: auto;
}
</style>
