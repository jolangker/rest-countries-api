<template>
  <h3 class="text-xl font-semibold">Border Country</h3>
  <div>
    <a
      v-for="border in bordersName"
      :key="border"
      :href="border"
      class="
        inline-block
        py-1
        px-4
        mt-2
        mx-1
        font-semibold
        rounded
        shadow
        bg-light-elements
        dark:bg-dark-elements
      "
    >
      {{ border }}
    </a>
  </div>
</template>

<script>
import { reactive } from "@vue/reactivity";
export default {
  props: {
    borders: Array,
  },
  setup(props) {
    const bordersCode = props.borders;
    const bordersName = reactive([]);

    const fetchBorders = async (code) => {
      const res = await fetch(`https://restcountries.eu/rest/v2/alpha/${code}`);
      const data = await res.json();
      bordersName.push(data.name);
    };

    bordersCode.forEach((element) => {
      fetchBorders(element);
    });

    return { bordersName };
  },
};
</script>

<style></style>
