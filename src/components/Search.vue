<template>
  <article class="flex justify-between p-4 bg-white">
    <div class="flex w-3/4">
      <div class="flex space-x-3 border border-tableDarkP rounded-lg px-6">
        <button>
          <i class="bx bxs-filter-alt text-purple text-2xl"></i>
        </button>
        <button class="capitalize"> filter </button>
      </div>

      <div class="w-3/5 ml-6">
        <input
          type="search"
          placeholder="search users by name, emial or date"
          class="indent-4 w-full capitalize bg-searchInput text-sm h-12 rounded-lg outline-none"
        />
      </div>
    </div>

    <div class="">
      <button
        type="button"
        class="bg-purple uppercase text-white font-semibold py-3 px-6 rounded-lg"
      >
        pay dues
      </button>
    </div>
  </article>
</template>
<script>
export default {};
</script>
