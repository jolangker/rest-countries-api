<template>
  <button
    class="
      py-1
      px-4
      font-semibold
      bg-light-elements
      dark:bg-dark-elements
      rounded
      flex
      items-center
    "
    @click="back"
  >
    <i class="fas fa-long-arrow-alt-left"></i>
    <span class="ml-2">Back</span>
  </button>
</template>

<script>
import { useRouter } from "vue-router";
export default {
  setup() {
    const router = useRouter();
    const back = () => {
      router.go(-1);
    };

    return { back };
  },
};
</script>

<style></style>
