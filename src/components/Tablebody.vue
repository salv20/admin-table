<template>
  <tr
    class="border-t-2 bg-white border-lightBlack"
    v-for="user of currentUsers.filter((user) =>
      user.name.toLowerCase().includes(searchValue.toLowerCase())
    )"
  >
    <td class="pl-4 px-4"
      ><input type="checkbox" name="" id="" class="h-4 w-5"
    /></td>
    <td><i class="bx bx-chevron-down-circle text-lg px-4" /></td>
    <td class="leading-relaxed">
      <p class="capitalize">{{ user.name }}</p>
      <p class="text-tableDarkP">{{ user.email }}</p>
    </td>
    <td class="leading-relaxed p-4">
      <p
        class="capitalize w-fit rounded-xl px-2"
        :class="
          user.userstatus.toLowerCase() === 'active'
            ? ' bg-gray text-purple'
            : ' bg-searchInput text-tableDarkP'
        "
      >
        <span>
          <i class="bx bxs-circle" />
        </span>
        {{ user.userstatus }}
      </p>
      <p class="text-tableDarkP">Last login {{ user.loginDate }}</p>
    </td>

    <td class="leading-relaxed px-4">
      <p class="capitalize w-fit">
        <span>
          <i class="bx bxs-circle text-tableDarkP" />
        </span>
        {{ user.paymentStatus }}
      </p>
      <p>Paid on {{ user.paidDate }}</p>
    </td>

    <td class="uppercase leading-relaxed px-4">
      <p> {{ user.amount }} </p>
      <p>usd</p>
    </td>
    <td><button class="text-lightBlack px-4"> view more</button></td>
    <td> <i class="bx bx-dots-vertical-rounded text-2xl mr-4"></i> </td>

    <!--  -->
  </tr>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  props: ["target", "searchValue"],
  data() {
    return {
      price: [],
      total: null,
      currentUsers: [],
    };
  },

  updated() {
    if (this.target) {
      if (this.target.contains("all")) {
        this.currentUsers = this.users;
      } else if (this.target.contains("paid")) {
        this.currentUsers = this.paidUser;
      } else if (this.target.contains("unpaid")) {
        this.currentUsers = this.unpaidUser;
      } else if (this.target.contains("overdue")) {
        this.currentUsers = this.overdueUser;
      }
    }
  },
  computed: {
    users() {
      return this.$store.state.users;
    },
    ...mapGetters(["paidUser", "unpaidUser", "overdueUser"]),
  },
  emits: ["total"],
  mounted() {
    this.unpaidUser.map((users) => this.price.push(users.amount));
    this.overdueUser.map((users) => this.price.push(users.amount));
    if (this.price.length) {
      const sum = this.price.reduce((sig, sum) => sig + sum);
      this.$emit("total", sum);
    } else {
      this.$emit("total", 0);
    }
  },
  beforeMount() {
    this.currentUsers = this.users;
  },
};
</script>
