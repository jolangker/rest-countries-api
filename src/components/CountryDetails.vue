<template>
  <div class="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-y-14 gap-x-32">
    <div class="p-2 rounded bg-light-elements dark:bg-dark-elements">
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
            <span
              v-for="curr in details.currencies"
              :key="curr"
              class="font-light"
              >{{ curr.name }}</span
            >
          </p>
          <p class="font-semibold">
            Languages:
            <span
              v-for="lang in details.languages"
              :key="lang"
              class="font-light"
              >{{ lang.name }},
            </span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    details: Object,
    required: true,
  },
  setup(props) {},
};
</script>

<style></style>
