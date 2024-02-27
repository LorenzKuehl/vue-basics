Vue.createApp({
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    incrementCounter() {
      this.count++;
      // Update the custom property value based on the count
      document.documentElement.style.setProperty("--counter", `${this.count}%`);
    },
    resetCounter() {
      this.count = 0;
      // Reset the custom property value
      document.documentElement.style.setProperty("--counter", `${this.count}%`);
    },
  },
}).mount("#app");
