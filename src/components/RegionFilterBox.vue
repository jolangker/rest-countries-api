<template>
  <div
    class="
      py-3
      px-4
      bg-light-elements
      dark:bg-dark-elements
      lg:w-60
      rounded
      flex
      justify-between
      items-center
      select-none
      shadow
    "
    role="button"
    @click="toggleMenu"
  >
    <span v-if="!regionFilter" class="text-sm font-semibold"
      >Filter by region</span
    >
    <span v-else class="text-sm font-semibold">{{ regionFilter }}</span>
    <i class="fas fa-angle-down transform"></i>
  </div>

  <div
    id="menu"
    class="
      hidden
      px-4
      py-2
      absolute
      bg-light-elements
      dark:bg-dark-elements
      rounded
      select-none
      text-base
      font-semibold
      shadow
    "
  >
    <div v-for="region in regions" :key="region">
      <input
        type="radio"
        :id="region.id"
        name="region"
        :value="region.value"
        class="hidden absolute"
        v-model="regionFilter"
        @change="sendRegionFilter"
        @click="hideMenu"
      />
      <label :for="region.id" class="py-2 inline-block w-full cursor-pointer">{{
        region.name
      }}</label>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
export default {
  emits: ["sendRegionFilter"],
  setup(props, { emit }) {
    const regions = [
      { name: "All", value: "", id: "region_All" },
      { name: "Africa", value: "Africa", id: "region_Africa" },
      { name: "America", value: "America", id: "region_America" },
      { name: "Asia", value: "Asia", id: "region_Asia" },
      { name: "Europe", value: "Europe", id: "region_Europe" },
      { name: "Oceania", value: "Oceania", id: "region_Oceania" },
    ];

    const regionFilter = ref("");

    const sendRegionFilter = (event) => {
      emit("sendRegionFilter", regionFilter.value);
    };

    const toggleMenu = () => {
      const menu = document.querySelector("#menu");
      const menuToggler = menu.previousElementSibling;

      menu.classList.toggle("hidden");
      menu.style.width = menuToggler.offsetWidth + "px";
      menu.style.left = menuToggler.offsetLeft + "px";
      menu.style.top = menuToggler.offsetTop + 55 + "px";
    };

    const hideMenu = () => {
      const menu = document.querySelector("#menu");
      menu.classList.add("hidden");
    };

    return { regions, regionFilter, sendRegionFilter, toggleMenu, hideMenu };
  },
};
</script>

<style></style>
