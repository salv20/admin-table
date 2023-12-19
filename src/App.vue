<template>
  <main class="w-11/12 mx-auto py-10 space-y-4">
    <Header />
    <section
      class="rounded-lg shadow-sm shadow-lightBlack border-2 border-transparent"
    >
      <Search />
      <article class="p-0.5 overflow-x-scroll">
        <TableVue />
        <Footer />
      </article>
    </section>
  </main>
</template>

<script>
import Footer from "./components/Footer.vue";
import Header from "./components/Header.vue";
import Search from "./components/Search.vue";
import TableVue from "./components/Table.vue";
Search;
export default {
  name: "App",
  components: {
    Header,
    Search,
    TableVue,
    Footer,
  },
};
</script>

<style>
#app {
  font-family: sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #f2f0f9;
}
.active {
  border-bottom: 2px solid #6d5bd0;
  padding: 0px 4px;
  color: #6d5bd0;
  font-weight: 700;
}
i {
  cursor: pointer;
}
</style>
