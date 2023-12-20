<template>
  <article class="md:flex justify-between p-4 bg-white">
    <div class="flex md:w-3/4">
      <button
        class="flex h-fit px-2 md:px-6 rounded-lg border border-tableDarkP py-1"
        @click="openSort"
      >
        <i class="bx bxs-filter-alt text-purple text-2xl"></i>
        <span class="capitalize pt-1"> filter</span>
      </button>

      <div class="w-full md:w-3/5 ml-6">
        <input
          v-model="searchValue"
          type="search"
          placeholder="search users by name, emial or date"
          class="indent-4 w-full capitalize bg-searchInput text-sm h-12 rounded-lg outline-none"
        />
      </div>
    </div>

    <div class="pt-2 md:pt-0 text-sm md:text-base">
      <button
        type="button"
        class="bg-purple uppercase text-white font-semibold py-2 md:py-3 px-6 rounded-lg"
      >
        pay dues
      </button>
    </div>
  </article>
  <article
    class="absolute capitalize font-semibold space-y-2 bg-white w-1/3 left-4 shadow-md mt-1 rounded-xl shadow-tableDarkP p-4 px-8"
    v-if="isOpen"
    @click="sortFunc"
  >
    <h1 class="text-slate-700">sort by</h1>
    <div class="space-y-1">
      <div class="flex justify-between cursor-pointer sl default">
        <p>default</p>
        <i class="bx bx-radio-circle-marked text-xl"></i>
      </div>
      <div class="flex justify-between cursor-pointer sl firstName">
        <p>first name</p>
        <i class="bx bx-radio-circle-marked text-xl"></i>
      </div>
      <div class="flex justify-between cursor-pointer sl lastName">
        <p>last name</p>
        <i class="bx bx-radio-circle-marked text-xl"></i>
      </div>
      <div class="flex justify-between cursor-pointer sl email">
        <p> email</p>
        <i class="bx bx-radio-circle-marked text-xl"></i>
      </div>
      <div class="flex justify-between cursor-pointer sl lastLog">
        <p> last login</p>
        <i class="bx bx-radio-circle-marked text-xl"></i>
      </div>
    </div>
    <!--  -->
    <h1 class="text-slate-700">users</h1>
    <div class="space-y-1">
      <div class="flex justify-between cursor-pointer sl all">
        <p>all</p>
        <i class="bx bx-radio-circle-marked text-xl"></i>
      </div>
      <div class="flex justify-between cursor-pointer sl active">
        <p>active</p>
        <i class="bx bx-radio-circle-marked text-xl"></i>
      </div>
      <div class="flex justify-between cursor-pointer sl inactive">
        <p>inactive</p>
        <i class="bx bx-radio-circle-marked text-xl"></i>
      </div>
    </div>
  </article>
</template>
<script>
export default {
  emits: ["searchInput", "sorttarget"],
  data() {
    return {
      searchValue: "",
      isOpen: false,
    };
  },
  updated() {
    this.$emit("searchInput", this.searchValue);
  },
  methods: {
    openSort() {
      this.isOpen = !this.isOpen;
    },
    sortFunc(e) {
      if (e.target.closest(".sl")) {
        this.isOpen = !this.isOpen;
        this.$emit("sorttarget", e.target);
      }
    },
  },
};
</script>
