<template>
  <main class="w-11/12 mx-auto py-14">
    <Header />
    <section> </section>
  </main>
</template>

<script>
import Header from "./components/Header.vue";
export default {
  name: "App",
  components: {
    Header,
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
</style>
