<template>
  <header
    class="
      con
      py-8
      flex
      justify-between
      items-center
      shadow
      bg-light-elements
      dark:bg-dark-elements
      text-light-mode
      dark:text-dark-mode
    "
  >
    <router-link :to="{ name: 'Home' }" class="text-lg font-extrabold"
      >Where in the world?</router-link
    >
    <div>
      <input
        type="checkbox"
        id="dark_mode"
        @change="darkMode"
        class="hidden absolute"
      />
      <label for="dark_mode" class="cursor-pointer select-none">
        <i class="fas fa-moon"></i>
        <span class="ml-3 font-semibold">Dark Mode</span>
      </label>
    </div>
  </header>
</template>

<script>
export default {
  setup() {
    const darkMode = (event) => {
      document.body.classList.toggle("dark");

      if (document.body.classList.contains("bg-light")) {
        document.body.classList.replace("bg-light", "bg-dark");
        localStorage.setItem("dark__mode", true);
      } else {
        document.body.classList.replace("bg-dark", "bg-light");
        localStorage.setItem("dark__mode", false);
      }
    };

    return { darkMode };
  },
};
</script>

<style></style>
