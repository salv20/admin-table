<template>
  <main class="w-11/12 mx-auto py-10 space-y-4 relative">
    <Header :total="sum" @target="eventFunc" />
    <section
      class="rounded-lg shadow-sm shadow-lightBlack border-2 border-transparent"
    >
      <Search @searchInput="setSearch" @sorttarget="sorttargetFunc" />
      <LIst
        @total="getSum"
        :target="target"
        :searchValue="searchValue"
        :sortTarget="sorttarget"
      />
      <Footer />
    </section>
  </main>
</template>

<script>
import Footer from "./components/Footer.vue";
import Header from "./components/Header.vue";
import LIst from "./components/LIst.vue";
import Search from "./components/Search.vue";
import Tablebody from "./components/Tablebody.vue";
import Tablehead from "./components/Tablehead.vue";
Search;
export default {
  name: "App",
  components: {
    Header,
    Search,
    Footer,
    Tablehead,
    Tablebody,
    LIst,
  },
  data() {
    return {
      sum: null,
      target: null,
      searchValue: "",
      sorttarget: "",
    };
  },
  methods: {
    getSum(total) {
      this.sum = total;
    },
    eventFunc(event) {
      this.target = event.classList;
    },
    setSearch(search) {
      this.searchValue = search;
    },
    sorttargetFunc(target) {
      this.sorttarget = target;
    },
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
li.active {
  border-bottom: 2px solid #6d5bd0;
  padding: 0px 4px;
  color: #6d5bd0;
  font-weight: 700;
}
i,
li {
  cursor: pointer;
}
</style>
