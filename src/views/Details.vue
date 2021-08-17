<template>
  <main class="con py-8 text-light-mode dark:text-dark-mode">
    <back-button />
    <div v-if="details.length">
      <country-details :details="details[0]" />
    </div>
    <div v-else>
      <loading />
    </div>
  </main>
</template>

<script>
import { ref } from "@vue/reactivity";
import BackButton from "../components/BackButton.vue";
import CountryDetails from "../components/CountryDetails.vue";
import Loading from "../components/Loading.vue";
export default {
  props: {
    name: {
      type: String,
    },
  },
  components: { BackButton, CountryDetails, Loading },
  setup(props) {
    const details = ref([]);

    const fetchData = async () => {
      const res = await fetch(
        `https://restcountries.eu/rest/v2/name/${props.name}`
      );
      const data = await res.json();

      details.value = data;
    };

    fetchData();

    return { details };
  },
};
</script>

<style></style>
