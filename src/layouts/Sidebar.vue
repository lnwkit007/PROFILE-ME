<script setup lang="ts">
import { watch } from "vue";
import { RouterLink } from "vue-router";

// import Store
import { useOpenSidebarStore } from "../stores/openSidebarStore";
const SidebarStore = useOpenSidebarStore();

const hiddenSidebar = () => {
  SidebarStore.SwitchSidebar();
};

watch(
  () => SidebarStore.isOpenSidebar,
  (isOpen) => {
    if (isOpen) {
      document.body.classList.add("overflow-y-hidden");
    } else {
      document.body.classList.remove("overflow-y-hidden");
    }
  },
);

const menulists = [
  {
    name: "About",
    path: "/#about",
  },
  {
    name: "Stack",
    path: "/#stack",
  },
  {
    name: "Project",
    path: "/#project",
  },
  {
    name: "Contact",
    path: "/#contact",
  },
];
</script>

<template>
  <aside
    :class="[
      'fixed top-0 z-2001 h-screen w-full bg-white/5 border border-white/10 backdrop-blur-lg md:hidden',
      'transition-transform duration-300 ease-in-out',
      SidebarStore.isOpenSidebar ? 'translate-x-0' : 'translate-x-full',
    ]"
    aria-label="Mobile navigation"
    role="dialog"
    aria-modal="true"
    :aria-hidden="!SidebarStore.isOpenSidebar"
  >
    <div class="flex items-center justify-between border-b border-[#7C7978]">
      <RouterLink
        to="/#hero"
        class="jersey-10-regular flex gap-2 text-3xl cursor-pointer px-4"
        aria-label="PROFILE ME Home"
        @click="hiddenSidebar"
      >
        <p
          class="bg-[linear-gradient(180deg,#E4E4E4_0%,#0C0503_90%)] bg-clip-text text-transparent"
        >
          PROFILE
        </p>
        <p
          class="bg-[linear-gradient(180deg,#F55303_0%,#632701_90%)] bg-clip-text text-transparent"
        >
          ME
        </p>
      </RouterLink>

      <button
        class="flex items-center px-4 py-3 cursor-pointer"
        @click="hiddenSidebar"
        aria-label="Close navigation menu"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          color="#7C7978"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          aria-hidden="true"
          class="lucide lucide-x-icon lucide-x"
        >
          <path d="M18 6 6 18" />
          <path d="m6 6 12 12" />
        </svg>
      </button>
    </div>

    <ul class="flex flex-col jersey-10-regular text-center text-3xl">
      <li v-for="item in menulists" :key="item.name">
        <RouterLink
          :to="item.path"
          class="block py-2 cursor-pointer bg-[linear-gradient(180deg,#E4E4E4_0%,#0C0503_90%)] bg-clip-text text-transparent"
          @click="hiddenSidebar"
        >
          {{ item.name }}
        </RouterLink>
      </li>
    </ul>
  </aside>
</template>
