<template>
  <div id="app">
    <Navbar />
    <br />
    <br />
    <div class="container">
      <Errors v-if="error" :msg="error"/>
      <router-view />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Navbar from "./components/Navbar";
import Errors from "./components/Errors";

export default {
  computed: {
    ...mapGetters(["error"])
  },
  components: {
    Navbar,
    Errors
  },
};
</script>

<style>
</style>
