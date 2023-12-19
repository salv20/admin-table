<template>
  <header class="text-tableDarkP leading-loose border-b border-lightBlack">
    <h2 class="uppercase font-semibold tracking-widest">table heading</h2>
    <article
      class="md:flex justify-between space-y-2 md:space-y-0"
      @click="tagertObj"
    >
      <ul class="flex space-x-3 capitalize">
        <li class="list active all">all</li>
        <li class="list paid">paid</li>
        <li class="list unpaid">unpaid</li>
        <li class="list overdue">overdue</li>
      </ul>
      <p
        >Total payable amount:
        <span class="text-purple font-bold">${{ total }}.00</span> USD
      </p>
    </article>
  </header>
</template>

<script>
export default {
  props: ["total"],
  methods: {
    tagertObj(e) {
      if (e.target.classList.contains("list")) {
        document
          .querySelectorAll(".list")
          .forEach((li) => li.classList.remove("active"));
      }
      e.target.classList.add("active");

      this.$emit("target", e.target);
    },
  },
};
</script>
