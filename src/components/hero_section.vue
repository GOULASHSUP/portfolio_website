<template>
    <section class="flex flex-col items-center justify-center min-h-screen w-full bg-zinc-900 text-zinc-300 p-6">
      <div class="text-left w-full max-w-7xl">
        <div class="space-y-4">
          <div>
            <h1 
              class="text-3xl sm:text-6xl font-bold cursor-pointer hover:text-accent" 
              :class="{ 'text-accent': showOpen === 'about' }" 
              @click="toggleSection('about')"
            >
              About
            </h1>
            <transition name="fade">
              <div v-if="showOpen === 'about'" class="mt-4">
                <p class="text-lg">I am a passionate student developer from Hungary, but I am currently living in Denmark. I study at the EASV Academy on Web Development, and I like to work with 3D design on the side as a hobby.</p>
              </div>
            </transition>
          </div>
          
          <div>
            <h1 
              class="text-3xl sm:text-6xl font-bold cursor-pointer hover:text-accent" 
              :class="{ 'text-accent': showOpen === 'projects' }" 
              @click="toggleSection('projects')"
            >
              Projects
            </h1>
            <transition name="fade">
              <div v-if="showOpen === 'projects'" class="mt-4">
                <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div v-for="(project, index) in projects" :key="index" class="rounded-md shadow-sm bg-zinc-800">
                        <a href="#">
                            <img :src="project.image" class="rounded-t-md" alt="" />
                        </a>
                        <div class="p-5">
                            <a href="#">
                                <h5 class="mb-2 text-2xl font-bold tracking-tight text-zinc-300">{{ project.title }}</h5>
                            </a>
                            <p class="mb-3 font-normal text-zinc-400">{{ project.description }}</p>
                            <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-zinc-900 bg-accent hover:bg-yellow-500 rounded-md">
                                Read more
                                <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
              </div>
            </transition>
          </div>
          
          <div>
            <h1 
              class="text-3xl sm:text-6xl font-bold cursor-pointer hover:text-accent" 
              :class="{ 'text-accent': showOpen === 'contact' }" 
              @click="toggleSection('contact')"
            >
              Contact
            </h1>
            <transition name="fade">
              <div v-if="showOpen === 'contact'" class="mt-4">
                <ul class="text-lg space-y-2">
                  <li>Email: <a href="mailto:simon@example.com" class="text-blue-400 hover:underline">simon@example.com</a></li>
                  <li>Phone: <span class="text-gray-300">+45 123 456 789</span></li>
                  <li>LinkedIn: <a href="https://linkedin.com/in/simon" target="_blank" class="text-blue-400 hover:underline">linkedin.com/in/simon</a></li>
                  <li>GitHub: <a href="https://github.com/simon" target="_blank" class="text-blue-400 hover:underline">github.com/simon</a></li>
                </ul>
              </div>
            </transition>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const showOpen = ref(null);
  
  const toggleSection = (section) => {
    showOpen.value = showOpen.value === section ? null : section;
  };
  
  const projects = ref([
    { image: 'src/assets/placeholder.jpg', title: 'Project 1', description: 'This project is about a small example company that I worked with in 2023.'  },
    { image: 'src/assets/placeholder.jpg', title: 'Project 2', description: 'This project is about a small example organization that I helped in 2022.' },
    { image: 'src/assets/placeholder.jpg', title: 'Project 3', description: 'This project is about a small example organization that needed a new website.'  },
    { image: 'src/assets/placeholder.jpg', title: 'Project 4', description: 'This project is about a small example company that asked me for a specific case.'  },
    { image: 'src/assets/placeholder.jpg', title: 'Project 5', description: 'This project is about a small example company that I worked for in 2021.'  },
  ]);
  </script>
  
  <style scoped>
  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.3s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
  </style>