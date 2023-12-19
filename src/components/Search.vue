<template>
  <article class="md:flex justify-between p-4 bg-white">
    <div class="flex md:w-3/4">
      <button
        class="flex h-fit px-2 md:px-6 rounded-lg border border-tableDarkP py-1"
      >
        <i class="bx bxs-filter-alt text-purple text-2xl"></i>
        <span class="capitalize pt-1"> filter</span>
      </button>

      <div class="w-full md:w-3/5 ml-6">
        <input
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
</template>
<script>
export default {};
</script>
