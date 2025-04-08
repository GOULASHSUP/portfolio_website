<template>
    <section class="min-h-screen flex flex-col items-center justify-center bg-zinc-900 text-zinc-300 p-6">
        <div class="max-w-7xl w-full">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                <div class="order-2 lg:order-1">
                    <h1 class="sm:text-4xl text-2xl font-bold text-accent mb-4">
                        {{ project?.title || 'Project Not Found' }}
                    </h1>
                    <p class="sm:text-lg text-sm text-zinc-300 mb-6 max-w-5xl whitespace-pre-line">
                        {{ project?.description || 'This project does not exist.' }}
                    </p>
                    <div v-if="project?.status === 'In Progress'" class="my-6 p-2.5 px-4 bg-accent rounded-md shadow-md flex items-center gap-3">
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke-width="1.5" 
                            stroke="currentColor" 
                            class="size-6 text-zinc-900 hidden md:block"
                        >
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
                        </svg>
                        <p class="text-zinc-900 text-md">
                            This project is currently in progress. Some features may not be available yet.
                        </p>
                    </div>
                </div>
                <div class="order-1 lg:order-2 lg:sticky lg:top-24 self-start w-full">
                    <div class="w-full aspect-[16/10] bg-zinc-800 rounded-md shadow-md overflow-hidden">
                        <img v-if="project" :src="project.image" alt="Project image"
                            class="w-full h-full object-cover" />
                    </div>
                </div>
            </div>
            <div v-if="project?.technologies?.length">
                <h2 class="sm:text-2xl text-xl font-semibold text-zinc-200 mb-2">Technologies & Tools</h2>
                <div class="flex flex-wrap gap-2">
                    <span v-for="tech in project.technologies" :key="tech"
                        class="bg-zinc-700 text-zinc-300 px-2 py-1 rounded-md sm:text-sm text-xs">
                        {{ tech }}
                    </span>
                </div>
            </div>
            <div v-if="project?.liveLink || project?.githubLink || project?.socialMedia"
                class="mt-6 w-full p-4 text-left rounded-md sm:p-8 bg-gradient-to-r from-zinc-800 via-zinc-900 to-zinc-900">
                <h2 class="sm:text-2xl text-xl font-semibold text-zinc-200 mb-4">
                    Check out the project's details!
                </h2>
                <div class="flex flex-col sm:flex-row gap-4 justify-center sm:justify-start">
                    <a v-if="project?.liveLink" :href="project.liveLink" target="_blank"
                        class="bg-zinc-700 hover:bg-accent hover:text-zinc-900 hover:shadow-xl hover:shadow-yellow-400/20 text-zinc-200 rounded-md inline-flex items-center px-4 py-2.5 transition-all duration-300 ease-in-out">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 pr-2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                        </svg>
                        Live Site
                    </a>
                    <a v-if="project?.githubLink" :href="project.githubLink" target="_blank"
                        class="bg-zinc-700 hover:bg-accent hover:text-zinc-900 hover:shadow-xl hover:shadow-yellow-400/20 text-zinc-200 rounded-md inline-flex items-center px-4 py-2.5 transition-all duration-300 ease-in-out">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 pr-2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m6.75 7.5 3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z" />
                        </svg>
                        Project GitHub
                    </a>
                    <a v-if="project?.socialMedia" :href="project.socialMedia" target="_blank"
                        class="bg-zinc-700 hover:bg-accent hover:text-zinc-900 hover:shadow-xl hover:shadow-yellow-400/20 text-zinc-200 rounded-md inline-flex items-center px-4 py-2.5 transition-all duration-300 ease-in-out">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 pr-2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>
                        Client's Social Media
                    </a>
                    <a v-if="project?.prototype" :href="project.prototype" target="_blank"
                        class="bg-zinc-700 hover:bg-accent hover:text-zinc-900 hover:shadow-xl hover:shadow-yellow-400/20 text-zinc-200 rounded-md inline-flex items-center px-4 py-2.5 transition-all duration-300 ease-in-out">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 pr-2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z" />
                        </svg>
                        Prototype
                    </a>
                </div>
            </div>
            <div class="mt-6 flex justify-left sm:justify-start">
                <router-link to="/"
                    class="bg-zinc-700 hover:bg-accent hover:text-zinc-900 hover:shadow-xl hover:shadow-yellow-400/20 text-zinc-200 rounded-md inline-flex items-center px-4 py-2.5 transition-all duration-300 ease-in-out">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 pr-2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                    </svg>
                    Back to Home
                </router-link>
            </div>
        </div>
    </section>
</template>

<script setup>
import { computed, onMounted, nextTick } from 'vue';
import { useRoute, onBeforeRouteUpdate } from 'vue-router';
import { projects } from '@/projects.js';

const route = useRoute();
const project = computed(() => projects.find(p => p.slug === route.params.slug));

// Function to always scroll to the top when a project is accessed (Only after if the page is loaded)
const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

onMounted(async () => {
    await nextTick();
    scrollToTop();
});

onBeforeRouteUpdate(() => {
    scrollToTop();
});
</script>