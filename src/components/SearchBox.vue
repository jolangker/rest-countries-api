<template>
  <div
    class="
      py-3
      px-4
      rounded
      flex
      w-full
      lg:w-96
      bg-light-elements
      dark:bg-dark-elements
      shadow
    "
  >
    <label for="search_country">
      <i class="fas fa-search"></i>
    </label>
    <input
      type="text"
      class="
        px-2
        font-semibold
        text-base
        bg-transparent
        w-full
        focus:outline-none
      "
      id="search_country"
      v-model="searchCountry"
      @keyup="sendSearchValue"
      placeholder="Search for a country..."
    />
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
export default {
  emits: ["sendSearchValue"],
  setup(props, { emit }) {
    const searchCountry = ref("");

    const sendSearchValue = (event) => {
      emit("sendSearchValue", searchCountry.value);
    };

    return { searchCountry, sendSearchValue };
  },
};
</script>

<style></style>
