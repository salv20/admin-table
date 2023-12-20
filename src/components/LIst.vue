<template>
  <section class="space-y-2 bg-white overflow-x-scroll">
    <table class="w-full">
      <div
        class="flex justify-between capitalize font-bold md:text-lg bg-searchInput px-4 space-x-4 md:space-x-2 pt-2"
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
        <p class="h-fit lg:w-fit opacity-0"> view more</p>
        <p class="h-fit text-2xl w-24 mx-1">
          <i class="bx bx-dots-vertical-rounded"></i>
        </p>
      </div>

      <article
        class="space-y-6"
        v-for="(user, index) of currentUsers.filter((user) =>
          user.name.toLowerCase().includes(searchValue.toLowerCase())
        )"
      >
        <div
          class="flex justify-between border-t-2 border-lightBlack p-4 user-container space-x-4 md:space-x-2"
        >
          <p class="h-fit">
            <input
              type="checkbox"
              name=""
              id=""
              class="h-4 w-5"
              :checked="user.paymentStatus === 'paid'"
            />
          </p>
          <p class="h-fit" @click="expandDetails">
            <i class="bx bx-chevron-down-circle text-lg px-4" />
            <i class="bx bx-chevron-up-circle text-lg px-4 hidden"></i>
          </p>
          <div class="h-fit w-1/4">
            <p class="capitalize">{{ user.name }} </p>
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
            <div v-if="user.paymentStatus.toLowerCase() === 'paid'">
              <p class="capitalize bg-lightGreen w-fit rounded-xl px-2">
                <span> <i class="bx bxs-circle text-sm text-green" /> </span>
                {{ user.paymentStatus }}
              </p>
              <p> Paid on {{ user.paidDate }} </p>
            </div>
            <div v-if="user.paymentStatus.toLowerCase() === 'overdue'">
              <p class="capitalize bg-red-400 px-1 w-fit rounded-xl">
                <span> <i class="bx bxs-circle text-sm text-red-900" /> </span>
                {{ user.paymentStatus }}
              </p>
              dued on {{ user.paidDate }}
            </div>
            <div v-if="user.paymentStatus.toLowerCase() === 'unpaid'">
              <p class="capitalize w-fit bg-lightOrange px-2 rounded-xl">
                <span> <i class="bx bxs-circle text-sm text-orange" /> </span>
                {{ user.paymentStatus }}
              </p>
              dues on {{ user.paidDate }}
            </div>
          </div>
          <div class="h-fit w-1/12 uppercase">
            <p> ${{ user.amount }}</p>
            <p>usd</p>
          </div>
          <div class="h-fit lg:w-fit view-container" @click="toggleView">
            <p> view more</p>
            <div class="font-semibold capitalize space-y-1 bg-white hidden">
              <p>edit</p>
              <p>view profile</p>
              <p class="text-green">activate user </p>
              <p class="text-red-600">delete</p>
            </div>
          </div>
          <div
            class="h-fit text-2xl w-24 mx-1 dots-container"
            :class="index"
            @click="toggleDots"
          >
            <i class="bx bx-dots-vertical-rounded"></i>
            <p class="text-sm hidden"
              >Lorem ipsum dolor, sit amet consectetur</p
            >
          </div>
        </div>

        <div class="w-5/6 mx-auto space-y-4 extension">
          <div class="flex space-x-5 uppercase text-tableDarkP">
            <p class="w-1/6">date</p>
            <p class="w-1/2">user activity</p>
            <p class="w-3/4">details</p>
          </div>
          <div v-if="user.detailDates">
            <div
              class="flex space-x-5 space-y-2"
              v-for="(date, index) of user.detailDates"
            >
              <p class="w-1/6 uppercase">{{ date }}</p>
              <p class="w-1/2">{{ user.userActivity[index] }}</p>
              <p class="w-3/4">{{ user.userDetails[index] }}</p>
            </div>
          </div>
          <div class="uppercase text-tableDarkP text-center py-2" v-else>
            <h2>no records found</h2>
          </div>
        </div>
      </article>
    </table>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  props: ["target", "searchValue", "sortTarget"],
  data() {
    return {
      price: [],
      total: null,
      currentUsers: [],
    };
  },

  methods: {
    expandDetails(e) {
      e.target
        .closest(".user-container")
        .nextSibling.classList.toggle("hidden");

      e.target.parentElement.children[0].classList.toggle("hidden");
      e.target.parentElement.children[1].classList.toggle("hidden");
    },
    toggleView(e) {
      const closest = e.target.closest(".view-container");
      if (closest) {
        closest.children[0].classList.toggle("hidden");
        closest.children[1].classList.toggle("hidden");
      }
    },
    toggleDots(e) {
      const closest = e.target.closest(".dots-container");
      if (closest) {
        closest.children[0].classList.toggle("hidden");
        closest.children[1].classList.toggle("hidden");
      }
    },
  },

  updated() {
    document
      .querySelectorAll(".extension")
      .forEach((ext) => ext.classList.add("hidden"));
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
    if (this.sortTarget) {
      const closest = this.sortTarget.closest(".sl");
      if (closest.classList.contains("default")) {
        this.currentUsers = this.users;
      } else if (closest.classList.contains("firstName")) {
        this.currentUsers = this.firstNameSort;
      } else if (closest.classList.contains("lastName")) {
        this.currentUsers = this.lastNameSort;
      } else if (closest.classList.contains("email")) {
        this.currentUsers = this.emailSort;
      }
    }
  },
  computed: {
    users() {
      return this.$store.state.users;
    },
    ...mapGetters([
      "paidUser",
      "unpaidUser",
      "overdueUser",
      "firstNameSort",
      "lastNameSort",
      "emailSort",
    ]),
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
    document
      .querySelectorAll(".extension")
      .forEach((ext) => ext.classList.add("hidden"));
  },
  beforeMount() {
    this.currentUsers = this.users;
  },
};
</script>
