<template>
  <tr class="border-t-2 bg-white" v-for="user of users">
    <td class=""><input type="checkbox" name="" id="" class="h-4 w-5" /></td>
    <td><i class="bx bx-chevron-down-circle text-lg px-4" /></td>
    <td class="leading-relaxed">
      <p class="capitalize">{{ user.name }}</p>
      <p>{{ user.email }}</p>
    </td>
    <td class="leading-relaxed py-2">
      <p class="capitalize">
        <span>
          <i class="bx bx-stop rounded-full" />
        </span>
        {{ user.userstatus }}
      </p>
      <p>Last login {{ user.date }}</p>
    </td>

    <td class="leading-relaxed">
      <p class="capitalize">
        <span>
          <i class="bx bx-stop rounded-full"></i>
        </span>
        {{ user.paymentStatus }}
      </p>
      <p>paid on {{ user.date }}</p>
    </td>

    <td class="uppercase leading-relaxed">
      <p> {{ user.amount }} </p>
      <p>usd</p>
    </td>
    <td><p>view more</p></td>
    <td> <i class="bx bx-dots-vertical-rounded text-2xl"></i> </td>
  </tr>
</template>

<script>
export default {
  computed: {
    users() {
      return this.$store.state.users;
    },
  },
};
</script>

<style></style>
