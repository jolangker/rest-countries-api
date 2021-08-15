<template>
  <main class="con py-10 text-light-mode dark:text-dark-mode">
    <div
      class="
        flex flex-col
        lg:flex-row lg:justify-between
        space-y-2
        lg:space-y-0
        mb-10
      "
    >
      <search-box @sendSearchValue="getSearchValue" />
      <region-filter-box @sendRegionFilter="getRegionFilter" />
    </div>

    <div v-if="!countries.length">
      <loading />
    </div>

    <div v-else>
      <div
        v-if="filteredCountries.length"
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20"
      >
        <country-list
          v-for="country in filteredCountries"
          :key="country"
          :country="country"
        />
      </div>
      <div v-else class="text-center text-lg font-semibold">
        No Countries Matching The Criteria
      </div>
    </div>
  </main>
</template>

<script>
import { computed, ref } from "@vue/reactivity";
import CountryList from "../components/CountryList.vue";
import SearchBox from "../components/SearchBox.vue";
import RegionFilterBox from "../components/RegionFilterBox.vue";
import Loading from "../components/Loading.vue";

export default {
  components: { CountryList, SearchBox, RegionFilterBox, Loading },
  setup() {
    const countries = ref([]);

    const fetchData = async () => {
      const res = await fetch("https://restcountries.eu/rest/v2/all");
      const data = await res.json();

      countries.value = data;
    };

    fetchData();

    const acceptSeacrhValue = ref("");
    const getSearchValue = (val) => {
      acceptSeacrhValue.value = val;
    };

    const acceptRegionFilter = ref("");
    const getRegionFilter = (val) => {
      acceptRegionFilter.value = val;
    };

    const filteredCountries = computed(() => {
      return countries.value.filter((country) => {
        return (
          country.name.includes(acceptSeacrhValue.value) &&
          country.region.includes(acceptRegionFilter.value)
        );
      });
    });

    return {
      countries,
      getSearchValue,
      getRegionFilter,
      filteredCountries,
    };
  },
};
</script>

<style></style>
