<template>
    <nav class="bg-zinc-900 text-accent py-4 px-6 sm:px-12 flex justify-between items-center sticky top-0 z-50">
      <h1 class="text-md sm:text-xl font-bold">SIMON JOBBÁGY</h1>
      <div class="relative">
        <button @click="toggleCookieInfo" class="hover:text-white transition">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-cookie" viewBox="0 0 16 16">
                <path d="M6 7.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m4.5.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m-.5 3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>
                <path d="M8 0a7.96 7.96 0 0 0-4.075 1.114q-.245.102-.437.28A8 8 0 1 0 8 0m3.25 14.201a1.5 1.5 0 0 0-2.13.71A7 7 0 0 1 8 15a6.97 6.97 0 0 1-3.845-1.15 1.5 1.5 0 1 0-2.005-2.005A6.97 6.97 0 0 1 1 8c0-1.953.8-3.719 2.09-4.989a1.5 1.5 0 1 0 2.469-1.574A7 7 0 0 1 8 1c1.42 0 2.742.423 3.845 1.15a1.5 1.5 0 1 0 2.005 2.005A6.97 6.97 0 0 1 15 8c0 .596-.074 1.174-.214 1.727a1.5 1.5 0 1 0-1.025 2.25 7 7 0 0 1-2.51 2.224Z"/>
            </svg>
        </button>
        <div v-if="showCookieInfo" class="absolute right-0 mt-2 w-64 bg-zinc-700 text-zinc-300 text-sm p-3 rounded-md shadow-xl">
          <p>I don't use cookies on this site, because I already ate them all...</p>
        </div>
      </div>
    </nav>
  </template>
  
  <script setup>
  import { ref, onMounted, onUnmounted } from "vue";
  
  const showCookieInfo = ref(false);
  const toggleCookieInfo = () => {
    showCookieInfo.value = !showCookieInfo.value;
  };

  const closeOnClickOutside = (event) => {
    if (!event.target.closest(".relative")) {
      showCookieInfo.value = false;
    }
  };
  
  onMounted(() => {
    document.addEventListener("click", closeOnClickOutside);
  });
  
  onUnmounted(() => {
    document.removeEventListener("click", closeOnClickOutside);
  });
  </script>