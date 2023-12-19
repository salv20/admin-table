<template>
  <section class="space-y-2 bg-white">
    <div
      class="flex justify-between capitalize font-bold md:text-lg bg-searchInput px-4"
    >
      <p class="h-fit">
        <input type="checkbox" name="" id="" class="h-4 w-5" />
      </p>
      <p class="h-fit opacity-0">
        <i class="bx bx-chevron-down-circle text-lg px-4" />
      </p>
      <p class="h-fit w-1/4">name</p>
      <p class="h-fit w-1/6">user status</p>
      <p class="h-fit w-1/6">payment Status</p>
      <p class="h-fit w-1/12">amount</p>
      <p class="h-fit w-1/12 opacity-0"> view more</p>
      <p class="h-fit text-2xl w-fit">
        <i class="bx bx-dots-vertical-rounded"></i>
      </p>
    </div>

    <article
      class="space-y-6"
      v-for="(user, index) of currentUsers.filter((user) =>
        user.name.toLowerCase().includes(searchValue.toLowerCase())
      )"
    >
      <div class="flex justify-between border-t-2 border-lightBlack p-4">
        <p class="h-fit">
          <input type="checkbox" name="" id="" class="h-4 w-5" />
        </p>
        <p class="h-fit">
          <i class="bx bx-chevron-down-circle text-lg px-4" />
        </p>
        <div class="h-fit w-1/4">
          <p class="capitalize">{{ user.name }}</p>
          <p>{{ user.email }}</p>
        </div>
        <div class="h-fit w-1/6 space-y-1">
          <p
            class="capitalize w-fit rounded-xl px-2"
            :class="
              user.userstatus.toLowerCase() === 'active'
                ? ' bg-gray text-purple'
                : ' bg-searchInput text-tableDarkP'
            "
          >
            <span>
              <i class="bx bxs-circle text-sm" />
            </span>
            {{ user.userstatus }}
          </p>
          <p class="text-tableDarkP">Last login {{ user.loginDate }}</p>
        </div>
        <div class="h-fit w-1/6">
          <p class="capitalize">{{ user.paymentStatus }}</p>
          <p> Paid on {{ user.paidDate }} </p>
        </div>
        <div class="h-fit w-1/12 uppercase">
          <p> ${{ user.amount }}</p>
          <p>usd</p>
        </div>
        <p class="h-fit w-1/12"> view more</p>
        <p class="h-fit text-2xl w-fit">
          <i class="bx bx-dots-vertical-rounded"></i>
        </p>
      </div>
      <div class="w-5/6 mx-auto space-y-4" v-if="isexpand">
        <div class="flex space-x-5 uppercase text-tableDarkP">
          <p class="w-1/6">date</p>
          <p class="w-1/2">user activity</p>
          <p class="w-3/4">details</p>
        </div>
        <aside v-if="user.detailDates">
          <div
            class="flex space-x-5 space-y-2"
            v-for="(date, index) of user.detailDates"
          >
            <p class="w-1/6">{{ date }}</p>
            <p class="w-1/2">{{ user.userActivity[index] }}</p>
            <p class="w-3/4">{{ user.userDetails[index] }}</p>
          </div>
        </aside>
        <aside class="uppercase text-tableDarkP text-center py-2" v-else>
          <h2>no records found</h2>
        </aside>
      </div>
    </article>
  </section>
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
      isexpand: false,
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

<style></style>
