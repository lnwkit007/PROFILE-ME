<template>
  <nav class="fixed w-full top-0 z-200 p-2">
    <div
      class="flex items-center justify-between mx-auto max-w-330 px-6 py-2 bg-white/5 border border-white/10 rounded-full backdrop-blur-lg"
    >
      <span
        class="jersey-10-regular flex gap-2 text-3xl sm:text-4xl cursor-pointer"
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
      </span>

      <button class="block sm:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          color="#7C7978"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-text-align-justify-icon lucide-text-align-justify"
        >
          <path d="M3 5h18" />
          <path d="M3 12h18" />
          <path d="M3 19h18" />
        </svg>
      </button>

      <ul class="hidden sm:flex gap-5 jersey-10-regular text-3xl">
        <li
          class="cursor-pointer bg-[linear-gradient(180deg,#E4E4E4_0%,#0C0503_90%)] bg-clip-text text-transparent"
        >
          About
        </li>
        <li
          class="cursor-pointer bg-[linear-gradient(180deg,#E4E4E4_0%,#0C0503_90%)] bg-clip-text text-transparent"
        >
          Stack
        </li>
        <li
          class="cursor-pointer bg-[linear-gradient(180deg,#E4E4E4_0%,#0C0503_90%)] bg-clip-text text-transparent"
        >
          Project
        </li>
        <li
          class="cursor-pointer bg-[linear-gradient(180deg,#E4E4E4_0%,#0C0503_90%)] bg-clip-text text-transparent"
        >
          Contact
        </li>
      </ul>
    </div>
  </nav>
</template>
