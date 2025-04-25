<template>
    <nav class="bg-zinc-900 text-accent py-4 px-6 lg:px-24 flex justify-between items-center sticky top-0 z-50">
        <router-link to="/" class="text-md sm:text-xl font-bold">
            Simon Jobbágy
        </router-link>

        <div class="relative flex items-center gap-3">
            <button @click="toggleCookieInfo" class="hover:text-white transition-all duration-300 ease-in-out">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-cookie" viewBox="0 0 16 16">
                    <path d="M6 7.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m4.5.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m-.5 3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>
                    <path d="M8 0a7.96 7.96 0 0 0-4.075 1.114q-.245.102-.437.28A8 8 0 1 0 8 0m3.25 14.201a1.5 1.5 0 0 0-2.13.71A7 7 0 0 1 8 15a6.97 6.97 0 0 1-3.845-1.15 1.5 1.5 0 1 0-2.005-2.005A6.97 6.97 0 0 1 1 8c0-1.953.8-3.719 2.09-4.989a1.5 1.5 0 1 0 2.469-1.574A7 7 0 0 1 8 1c1.42 0 2.742.423 3.845 1.15a1.5 1.5 0 1 0 2.005 2.005A6.97 6.97 0 0 1 15 8c0 .596-.074 1.174-.214 1.727a1.5 1.5 0 1 0-1.025 2.25 7 7 0 0 1-2.51 2.224Z"/>
                </svg>
            </button>
            <span v-if="isOpenToWork" class="text-xs sm:text-sm bg-zinc-800 border border-zinc-700 rounded-full px-3 py-1 text-yellow-400 font-semibold inline-flex items-center gap-2">
                <span class="relative flex h-2 w-2">
                    <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                    <span class="relative inline-flex rounded-full h-2 w-2 bg-yellow-500"></span>
                </span>
                Open to work
            </span>
            <div v-if="showCookieInfo" class="absolute right-0 top-full mt-2 w-64 bg-zinc-700 text-zinc-300 text-sm p-3 rounded-md shadow-xl">
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

const isOpenToWork = ref(true);
</script>