<script setup lang="ts">
import { RouterView } from "vue-router";

// import layouts
import Navbar from "./layouts/Navbar.vue";
</script>

<template>
  <Navbar />

  <router-view />
</template>
