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
              <div v-if="showOpen === 'about'" class="mt-4 grid grid-cols-1 lg:grid-cols-2 gap-6">
                <a
                  href="#"
                  class="relative block overflow-hidden rounded-md p-4 sm:p-6 lg:p-8 bg-zinc-800"
                >
                  <span
                    class="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-zinc-100 via-zinc-400 to-accent"
                  ></span>
                  
                  <div class="sm:flex sm:justify-between sm:gap-4">
                    <div>
                      <h3 class="text-lg font-bold text-zinc-300 sm:text-2xl">
                        Hi! My name is Simon.
                      </h3>
                      <p class="mt-1 text-sm font-medium text-zinc-400">Learn a little bit about me!</p>
                    </div>
                    <div class="hidden sm:block sm:shrink-0">
                      <img
                        alt=""
                        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8"
                        class="size-20 rounded-md object-cover shadow-sm"
                      />
                    </div>
                  </div>
                  
                  <div class="mt-4">
                    <p class="text-sm text-pretty text-zinc-400">
                      I am a passionate developer and designer from Hungary, living in Denmark. I graduated from Business Academy SouthWest (EASV) as a
                      multimedia designer in 2024, and I am currently studying Web Development. I really like 3D design and cars, so feel free to talk about those with me!
                    </p>
                  </div>
                  
                  <dl class="mt-6 flex gap-4 sm:gap-12">
                    <div class="flex flex-col-reverse">
                      <dt class="text-sm font-medium text-zinc-400">2022 – 2024</dt>
                      <dt class="text-sm font-medium text-zinc-400">Multimedia Design @EASV</dt>
                      <dd class="text-xs font-medium text-zinc-300">Degrees</dd>
                    </div>
                    <div class="flex flex-col-reverse">
                      <dt class="text-sm font-medium text-zinc-400">2024 – Present</dt>
                      <dt class="text-sm font-medium text-zinc-400">Web Development @EASV</dt>
                      <dd class="text-xs font-medium text-zinc-300">Current Education</dd>
                    </div>
                  </dl>
                </a>
                <div class="relative block overflow-hidden rounded-md p-4 sm:p-6 lg:p-8 bg-gradient-to-b from-zinc-800 via-zinc-900 to-zinc-900">
                  <h3 class="text-lg font-bold text-zinc-300 sm:text-2xl">
                    My Skills
                  </h3>
                  
                  <p class="mt-1 text-sm font-medium text-zinc-400">Tools & Technologies I work with:</p>
                  
                  <ul class="mt-4 space-y-2 text-sm text-zinc-400">
                    <li>Styling & Structure Essentials: <span class="text-accent">HTML, CSS, Tailwind</span></li>
                    <li>Frontend Development Stack: <span class="text-accent">JavaScript, TypeScript, Vue.js</span></li>
                    <li>Scripting: <span class="text-accent">PHP</span></li>
                    <li>Development: <span class="text-accent">Node.js, Express.js</span></li>
                    <li>Databases: <span class="text-accent">Firebase, MongoDB, MySQL</span></li>
                    <li>CMS: <span class="text-accent">WordPress</span></li>
                  </ul>
                </div>
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