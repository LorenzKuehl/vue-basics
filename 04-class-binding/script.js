Vue.createApp({
  data() {
    return {
      isActive: false,
      activeLetter: "A",
    };
  },
  methods: {
    setActiveLetter(letter) {
      this.activeLetter = letter;
    },
  },
}).mount("#app");
