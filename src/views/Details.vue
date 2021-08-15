<template>
  <main class="con py-8 text-light-mode dark:text-dark-mode">
    <back-button />
  </main>
</template>

<script>
import BackButton from "../components/BackButton.vue";
export default {
  props: {
    name: {
      type: String,
    },
  },
  components: { BackButton },
};
</script>

<style></style>
