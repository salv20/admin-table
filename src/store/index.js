import { createStore } from "vuex";

export default createStore({
  state: {
    users: [
      {
        name: "justin septimus",
        userstatus: "active",
        paymentStatus: "paid",
        amount: 200,
        email: "justin@gmail.com",
        loginDate: "14/april/2023",
        paidDate: "15/april/2023",
      },
      {
        name: "anika rhiek madsen",
        userstatus: "active",
        paymentStatus: "overdue",
        amount: 300,
        email: "anika@gmail.com",
        loginDate: "14/april/2023",
        paidDate: "15/april/2023",
      },
      {
        name: "miracle vaccaro",
        userstatus: "active",
        paymentStatus: "paid",
        amount: 250,
        email: "miracle@gmail.com",
        loginDate: "14/april/2023",
        paidDate: "15/april/2023",
      },
      {
        name: "erin levin",
        userstatus: "active",
        paymentStatus: "unpaid",
        amount: 200,
        email: "erin@gmail.com",
        loginDate: "14/april/2023",
        paidDate: "15/april/2023",
      },
      {
        name: "mira herwitz",
        userstatus: "inactive",
        paymentStatus: "paid",
        amount: 200,
        email: "mira@gmail.com",
        loginDate: "14/april/2023",
        paidDate: "15/april/2023",
      },
      {
        name: "jaxson siphron",
        userstatus: "inactive",
        paymentStatus: "paid",
        amount: 750,
        email: "jaxson@gmail.com",
        loginDate: "14/april/2023",
        paidDate: "15/april/2023",
      },
      {
        name: "mira levin",
        userstatus: "active",
        paymentStatus: "unpaid",
        amount: 200,
        email: "mira@gmail.com",
        loginDate: "14/april/2023",
        paidDate: "15/april/2023",
      },
      {
        name: "lincoln levin",
        userstatus: "active",
        paymentStatus: "paid",
        amount: 350,
        email: "lincoln@gmail.com",
        loginDate: "14/april/2023",
        paidDate: "15/april/2023",
      },
      {
        name: "philip saris",
        userstatus: "inactive",
        paymentStatus: "unpaid",
        amount: 200,
        email: "philip@gmail.com",
        loginDate: "14/april/2023",
        paidDate: "15/april/2023",
      },
      {
        name: "cheyenne ekstrom bothman",
        userstatus: "inactive",
        paymentStatus: "paid",
        amount: 150,
        email: "cheyenne@gmail.com",
        loginDate: "14/april/2023",
        paidDate: "15/april/2023",
      },
    ],
  },
  getters: {
    paidUser(state) {
      return state.users.filter(
        (user) => user.paymentStatus.toLowerCase() === "paid"
      );
    },
    unpaidUser(state) {
      return state.users.filter(
        (user) => user.paymentStatus.toLowerCase() === "unpaid"
      );
    },
    overdueUser(state) {
      return state.users.filter(
        (user) => user.paymentStatus.toLowerCase() === "overdue"
      );
    },
  },
  mutations: {},
  actions: {},
  modules: {},
});
