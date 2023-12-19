<template>
  <header class="text-tableDarkP leading-loose border-b border-lightBlack">
    <h2 class="uppercase font-semibold tracking-widest">table heading</h2>
    <article class="md:flex justify-between space-y-2 md:space-y-0">
      <ul class="flex space-x-3 capitalize menu">
        <li class="active">all</li>
        <li class="cursor-pointer">paid</li>
        <li class="cursor-pointer">unpaid</li>
        <li class="cursor-pointer">overdue</li>
      </ul>
      <p
        >Total payable amount:
        <span class="text-purple font-bold">$900.00</span> USD
      </p>
    </article>
  </header>
</template>

<script>
export default {
  methods: {},
};
</script>
