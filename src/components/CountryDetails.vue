<template>
  <div class="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-y-14 gap-x-32">
    <div class="p-2 rounded shadow bg-light-elements dark:bg-dark-elements">
      <img
        :src="details.flag"
        :alt="details.name + ' Flag'"
        class="object-cover w-full h-full"
      />
    </div>
    <div>
      <h2 class="text-2xl font-extrabold">{{ details.name }}</h2>
      <div
        class="
          mt-5
          flex flex-col
          space-y-5
          lg:space-y-0 lg:flex-row lg:space-x-12 lg:items-start
        "
      >
        <div class="flex flex-col space-y-2">
          <p class="font-semibold">
            Native Name:
            <span class="font-light">{{ details.nativeName }}</span>
          </p>
          <p class="font-semibold">
            Population:
            <span class="font-light">{{
              details.population.toLocaleString()
            }}</span>
          </p>
          <p class="font-semibold">
            Region:
            <span class="font-light">{{ details.region }}</span>
          </p>
          <p class="font-semibold">
            Sub Region:
            <span class="font-light">{{ details.subregion }}</span>
          </p>
          <p class="font-semibold">
            Capital:
            <span class="font-light">{{ details.capital }}</span>
          </p>
        </div>
        <div class="flex flex-col space-y-2">
          <p class="font-semibold">
            Top Level Domain:
            <span class="font-light">{{
              details.topLevelDomain.join(", ")
            }}</span>
          </p>
          <p class="font-semibold">
            Currencies:
            <span class="font-light">{{ currencies.join(", ") }}</span>
          </p>
          <p class="font-semibold">
            Languages:
            <span class="font-light">{{ languages.join(", ") }}</span>
          </p>
        </div>
      </div>
      <div class="mt-8">
        <border-country
          v-if="details.borders.length"
          :borders="details.borders"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from "@vue/reactivity";
import BorderCountry from "../components/BorderCountry.vue";
export default {
  components: { BorderCountry },
  props: {
    details: Object,
  },
  setup(props) {
    const languages = reactive([]);
    const langs = props.details.languages;
    langs.forEach((lang) => {
      languages.push(lang.name);
    });

    const currencies = reactive([]);
    const currs = props.details.currencies;
    currs.forEach((curr) => {
      currencies.push(curr.name);
      const dat = curr;
    });

    return { languages, currencies };
  },
};
</script>

<style></style>
