<template>
  <section
    class="min-h-screen flex flex-col items-center justify-center bg-zinc-900 text-zinc-300 p-6"
  >
    <div class="max-w-7xl w-full">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        <!-- Text content -->
        <div class="order-2 lg:order-1">
          <h1 class="sm:text-4xl text-2xl font-bold text-accent mb-4">
            {{ internship?.title || "Internship Not Found" }}
          </h1>
          <p
            class="sm:text-lg text-sm text-zinc-300 mb-6 max-w-5xl whitespace-pre-line"
          >
            {{ internship?.description || "This internship does not exist." }}
          </p>
          <div
            v-if="internship?.status === 'Current Internship'"
            class="my-6 p-2.5 px-4 bg-accent rounded-md shadow-md flex items-center gap-3"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6 text-zinc-900 hidden md:block"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
              />
            </svg>
            <p class="text-zinc-900 text-md">
              This is my current internship position. Some details may change
              over time.
            </p>
          </div>
        </div>

        <!-- Image -->
        <div class="order-1 lg:order-2 lg:sticky lg:top-24 self-start w-full">
          <div
            class="w-full aspect-[16/10] bg-zinc-800 rounded-md shadow-md overflow-hidden"
          >
            <img
              v-if="internship"
              :src="internship.image"
              alt="Internship image"
              class="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      <!-- Technologies -->
      <div v-if="internship?.technologies?.length">
        <h2 class="sm:text-2xl text-xl font-semibold text-zinc-200 mb-2">
          Technologies & Tools
        </h2>
        <div class="flex flex-wrap gap-2">
          <span
            v-for="tech in internship.technologies"
            :key="tech"
            class="bg-zinc-700 text-zinc-300 px-2 py-1 rounded-md sm:text-sm text-xs"
          >
            {{ tech }}
          </span>
        </div>
      </div>

      <!-- Links -->
      <div
        v-if="
          internship?.liveLink ||
          internship?.githubLink ||
          internship?.socialMedia ||
          internship?.prototype
        "
        class="mt-6 w-full p-4 text-left rounded-md sm:p-8 bg-gradient-to-r from-zinc-800 via-zinc-900 to-zinc-900"
      >
        <h2 class="sm:text-2xl text-xl font-semibold text-zinc-200 mb-4">
          Check out some details about this internship
        </h2>
        <div
          class="flex flex-col sm:flex-row gap-4 justify-center sm:justify-start"
        >
          <a
            v-if="internship?.liveLink"
            :href="internship.liveLink"
            target="_blank"
            class="bg-zinc-700 hover:bg-accent hover:text-zinc-900 hover:shadow-xl hover:shadow-yellow-400/20 text-zinc-200 rounded-md inline-flex items-center px-4 py-2.5 transition-all duration-300 ease-in-out"
          >
            Company Website
          </a>
        </div>
      </div>

      <!-- Back button -->
      <div class="mt-6 flex justify-left sm:justify-start">
        <router-link
          to="/"
          class="bg-zinc-700 hover:bg-accent hover:text-zinc-900 hover:shadow-xl hover:shadow-yellow-400/20 text-zinc-200 rounded-md inline-flex items-center px-4 py-2.5 transition-all duration-300 ease-in-out"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6 pr-2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
          Back to Home
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, onMounted, nextTick } from "vue";
import { useRoute, onBeforeRouteUpdate } from "vue-router";
import { internships } from "@/internships.js";

const route = useRoute();
const internship = computed(() =>
  internships.find((i) => i.slug === route.params.slug)
);

// Scroll to top when navigating
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

onMounted(async () => {
  await nextTick();
  scrollToTop();
});

onBeforeRouteUpdate(() => {
  scrollToTop();
});
</script>
