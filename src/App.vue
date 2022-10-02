<template>
  <router-view />
</template>

<script>
import { defineComponent } from "vue";
import { auth } from "src/boot/firebase";

export default defineComponent({
  name: "App",
  created() {
    auth.onAuthStateChanged((user) => {
      this.$store.commit("updateUser", user);
      if (user) {
        this.$store.dispatch("getCurrentUser", user);
      }
    });
    this.checkRoute();
  },
  methods: {
    checkRoute() {
      if (
        this.$route.name === "Login" ||
        this.$route.name === "Register" ||
        this.$route.name === "ForgotPassword"
      ) {
        return;
      }
    },
  },
  watch: {
    $route() {},
  },
});
</script>
