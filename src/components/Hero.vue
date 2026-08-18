<script setup lang="ts">
import { easeOut, motion } from "motion-v";
</script>

<template>
  <section
    class="hero relative w-full overflow-hidden flex justify-center sm:items-center"
    aria-label="Hero section"
  >
    <!-- ////////// Background Shadow ////////// -->
    <motion.div
      :initial="{
        opacity: 0,
      }"
      :animate="{
        opacity: 1,
      }"
      :transition="{
        duration: 1,
        ease: easeOut,
      }"
    >
      <img
        src="/image/hero/background-shadow-1.png"
        alt=""
        width="1440"
        height="900"
        decoding="async"
        class="absolute left-1/2 -bottom-25 -translate-x-1/2 z-0 w-full min-w-360 h-auto object-cover pointer-events-none"
      />
    </motion.div>

    <!-- ////////// My Name ////////// -->
    <motion.div
      :initial="{
        opacity: 0,
      }"
      :animate="{
        opacity: 1,
      }"
      :transition="{
        duration: 1,
        delay: 1.5,
        ease: easeOut,
      }"
    >
      <div class="mt-16 sm:mt-0">
        <h1
          class="ml-2 sm:ml-0 z-3 jersey-10-regular text-center text-[clamp(105px,35vw,185px)] sm:text-[225px] md:text-[275px] lg:text-[365px] xl:text-[425px] bg-[linear-gradient(180deg,#E4E4E4_0%,#0C0503_67%)] bg-clip-text text-transparent"
        >
          KITSADA
        </h1>
      </div>
    </motion.div>

    <!-- ////////// Image Me (LCP Element) ////////// -->
    <motion.div
      :initial="{
        opacity: 1,
      }"
      :animate="{
        opacity: 1,
      }"
    >
      <img
        src="/image/hero/kitsada.png"
        alt="Kitsada Ketrai - Full-Stack & Front-End Developer"
        width="630"
        height="740"
        fetchpriority="high"
        decoding="async"
        class="z-4 absolute bottom-0 left-1/2 -translate-x-1/2 w-[clamp(570px,35vw,630px)] min-h-118 sm:h-auto object-cover"
      />
    </motion.div>

    <!-- ////////// Background Shadow ////////// -->
    <motion.div
      :initial="{
        opacity: 0,
      }"
      :animate="{
        opacity: 1,
      }"
      :transition="{
        duration: 1,
        ease: easeOut,
      }"
    >
      <img
        src="/image/hero/background-shadow-2.png"
        alt=""
        width="1440"
        height="900"
        decoding="async"
        class="z-5 absolute -bottom-20 left-1/2 -translate-x-1/2 w-full min-w-360 h-auto object-cover pointer-events-none"
      />
    </motion.div>
  </section>
</template>
