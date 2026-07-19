<script setup lang="ts">
import { ref } from "vue";

// import components
import Hero from "./components/Hero.vue";
import Navbar from "./components/Navbar.vue";
import ScrollVelocity from "./components/bits/ScrollVelocity.vue";
import AboutMe from "./components/AboutMe.vue";
import MyStack from "./components/MyStack.vue";
import Contact from "./components/Contact.vue";

const velocity = ref<number>(60);
</script>

<template>
  <Navbar />
  <Hero />
  <ScrollVelocity
    :texts="['FRONT-END', 'UX/UI DESIGNER']"
    :velocity="velocity"
    class="custom-scroll-text"
  />
  <AboutMe />
  <MyStack />
  <Contact />
</template>
