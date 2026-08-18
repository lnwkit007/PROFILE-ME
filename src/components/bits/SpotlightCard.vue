<template>
  <div
    ref="divRef"
    @mousemove="handleMouseMove"
    @focus="handleFocus"
    @blur="handleBlur"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
    :class="[
      'relative border-2 overflow-hidden border-[#352F2D]',
      className,
      borderRadius,
      padding,
    ]"
  >
    <div
      class="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 ease-in-out"
      :style="{
        opacity,
        background: `radial-gradient(circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 80%)`,
      }"
    />
    <div class="w-full h-full flex items-center justify-center">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, useTemplateRef } from "vue";

interface Position {
  x: number;
  y: number;
}

interface SpotlightCardProps {
  className?: string;
  spotlightColor?: string;
  borderRadius?: string;
  padding?: string;
}

const {
  className = "",
  spotlightColor = "rgba(255, 255, 255, 0.25)",
  borderRadius = "",
  padding = "",
} = defineProps<SpotlightCardProps>();

const divRef = useTemplateRef<HTMLDivElement>("divRef");
const isFocused = ref<boolean>(false);
const position = ref<Position>({ x: 0, y: 0 });
const opacity = ref<number>(0);

let rafId: number | null = null;
let cachedRect: DOMRect | null = null;

const handleMouseMove = (e: MouseEvent) => {
  if (!divRef.value || isFocused.value) return;

  if (rafId !== null) return;

  const clientX = e.clientX;
  const clientY = e.clientY;

  rafId = requestAnimationFrame(() => {
    rafId = null;
    if (!cachedRect && divRef.value) {
      cachedRect = divRef.value.getBoundingClientRect();
    }
    if (cachedRect) {
      position.value = { x: clientX - cachedRect.left, y: clientY - cachedRect.top };
    }
  });
};

const handleFocus = () => {
  isFocused.value = true;
  opacity.value = 0.6;
};

const handleBlur = () => {
  isFocused.value = false;
  opacity.value = 0;
};

const handleMouseEnter = () => {
  opacity.value = 0.6;
  if (divRef.value) {
    cachedRect = divRef.value.getBoundingClientRect();
  }
};

const handleMouseLeave = () => {
  opacity.value = 0;
  cachedRect = null;
  if (rafId !== null) {
    cancelAnimationFrame(rafId);
    rafId = null;
  }
};
</script>
