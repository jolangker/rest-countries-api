<template>
  <router-link :to="{ name: 'Details', params: { name: country.name } }">
    <div
      class="
        rounded
        overflow-hidden
        bg-light-elements
        dark:bg-dark-elements
        shadow
      "
    >
      <div class="h-40">
        <img
          :src="country.flag"
          :alt="country.name + 'Flag'"
          class="object-cover w-full h-full"
        />
      </div>
      <div class="p-6">
        <h2 class="text-lg font-semibold mb-4">{{ country.name }}</h2>
        <p class="font-semibold">
          Population:
          <span class="font-light">{{
            country.population.toLocaleString()
          }}</span>
        </p>
        <p class="font-semibold">
          Region:
          <span class="font-light">{{ country.region }}</span>
        </p>
        <p class="font-semibold">
          Capital:
          <span class="font-light">{{ country.capital }}</span>
        </p>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    country: {
      type: Object,
    },
  },
};
</script>

<style></style>
