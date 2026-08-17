<script setup lang="ts">
import { RouterView } from "vue-router";

// import layouts
import Navbar from "./layouts/Navbar.vue";
import Sidebar from "./layouts/Sidebar.vue";
</script>

<template>
  <header>
    <Navbar />
    <Sidebar />
  </header>
  <main>
    <router-view />
  </main>
</template>
