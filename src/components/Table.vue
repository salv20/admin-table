<template>
  <table class="w-full text-left px-8">
    <Tablehead />
    <Tablebody />
  </table>
</template>

<script>
import Tablebody from "./Tablebody.vue";
import Tablehead from "./Tablehead.vue";
export default {
  components: {
    Tablehead,
    Tablebody,
  },
};
</script>
