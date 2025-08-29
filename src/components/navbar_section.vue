<template>
  <nav
    class="bg-zinc-900 text-accent py-4 px-6 lg:px-24 flex justify-between items-center sticky top-0 z-50"
  >
    <router-link to="/" class="text-md sm:text-xl font-bold">
      Simon Jobbágy
    </router-link>

    <div class="relative flex items-center gap-3">
      <button
        v-if="isOpenToWork"
        @click="toggleOpenToWorkInfo"
        class="text-xs sm:text-sm bg-zinc-800 border border-zinc-700 rounded-full px-3 py-1 text-yellow-400 font-semibold inline-flex items-center gap-2 hover:text-zinc-200 transition-all duration-300 ease-in-out relative"
      >
        <span class="relative flex h-2 w-2">
          <span
            class="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"
          ></span>
          <span
            class="relative inline-flex rounded-full h-2 w-2 bg-yellow-500"
          ></span>
        </span>
        Open to work
        <div
          v-if="showOpenToWorkInfo"
          class="absolute top-full mt-2 right-0 w-56 bg-zinc-700 text-zinc-300 text-sm p-3 rounded-md shadow-xl z-50 text-left"
        >
          <p class="mb-1">Email me at:</p>
          <a
            href="mailto:jobbagy.simon@gmail.com"
            class="text-accent break-all hover:text-zinc-200"
          >
            jobbagy.simon@gmail.com
          </a>
        </div>
      </button>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const showOpenToWorkInfo = ref(false);
const toggleOpenToWorkInfo = () => {
  showOpenToWorkInfo.value = !showOpenToWorkInfo.value;
};

const closeOnClickOutside = (event) => {
  if (!event.target.closest(".relative")) {
    showOpenToWorkInfo.value = false;
  }
};

onMounted(() => {
  document.addEventListener("click", closeOnClickOutside);
});

onUnmounted(() => {
  document.removeEventListener("click", closeOnClickOutside);
});

const isOpenToWork = ref(true);
</script>
