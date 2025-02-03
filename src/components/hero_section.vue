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
                    class="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-zinc-300 via-zinc-400 to-accent"
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
                <div class="w-full p-4 text-left rounded-md sm:p-8 bg-gradient-to-b from-zinc-800 via-zinc-900 to-zinc-900">
                  <p class="mb-5 text-base text-zinc-200 sm:text-lg">
                    Feel free to reach out through any of the contact options below or for more information about me, download my cv.
                  </p>
                  <div class="flex flex-col sm:flex-row gap-4">
                    <a href="mailto:your.email@example.com" class="bg-zinc-700 hover:bg-accent hover:text-zinc-900 hover:shadow-xl hover:shadow-yellow-400/20 text-zinc-200 rounded-md inline-flex items-center px-4 py-2.5">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25" />
                      </svg>
                      <div class="ml-3">
                        <div class="mb-1 text-xs">Mail me:</div>
                        <div class="-mt-1 font-sans text-sm font-semibold">jobbagy.simon@gmail.com</div>
                      </div>
                    </a>
                    <a href="https://github.com/GOULASHSUP" target="_blank" class="bg-zinc-700 hover:bg-accent hover:text-zinc-900 hover:shadow-xl hover:shadow-yellow-400/20 text-zinc-200 rounded-md inline-flex items-center px-4 py-2.5">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m6.75 7.5 3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z" />
                      </svg>
                      <div class="ml-3">
                        <div class="mb-1 text-xs">Check out my projects on:</div>
                        <div class="-mt-1 font-sans text-sm font-semibold">GitHub</div>
                      </div>
                    </a>
                    <a href="https://www.linkedin.com/in/simon-jobbágy/" target="_blank" class="bg-zinc-700 hover:bg-accent hover:text-zinc-900 hover:shadow-xl hover:shadow-yellow-400/20 text-zinc-200 rounded-md inline-flex items-center px-4 py-2.5">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
                      </svg>
                      <div class="ml-3">
                        <div class="mb-1 text-xs">Connect with me:</div>
                        <div class="-mt-1 font-sans text-sm font-semibold">LinkedIn</div>
                      </div>
                    </a>
                    <a href="/cv.pdf" download="cv.pdf" class="bg-zinc-700 hover:bg-accent hover:text-zinc-900 hover:shadow-xl hover:shadow-yellow-400/20 text-zinc-200 rounded-md inline-flex items-center px-4 py-2.5">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                      </svg>
                      <div class="ml-3">
                        <div class="mb-1 text-xs">More info about me:</div>
                        <div class="-mt-1 font-sans text-sm font-semibold">Download my CV</div>
                      </div>
                    </a>
                  </div>
                </div>
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