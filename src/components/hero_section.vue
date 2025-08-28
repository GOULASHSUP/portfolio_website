<template>
    <section class="flex flex-col items-center justify-center min-h-screen w-full bg-zinc-900 text-zinc-300 p-6">
        <div class="text-left w-full max-w-7xl">
            <div class="space-y-4">
            <!-- About -->
            <div>
                <h1 
                    class="text-3xl sm:text-6xl font-bold cursor-pointer hover:text-accent transition-all duration-300 ease-in-out" 
                    :class="{ 'text-accent': showOpen === 'about' }" 
                    @click="toggleSection('about')"
                >
                About
                </h1>
                <transition name="fade">
                <div v-if="showOpen === 'about'" class="mt-4 grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div
                    class="relative block overflow-hidden rounded-md p-4 sm:p-6 lg:p-8 bg-zinc-800"
                    >
                    <span
                        class="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-zinc-800 via-zinc-700 to-accent"
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
                            src="/src/assets/profile.png"
                            class="size-20 rounded-md object-cover shadow-sm"
                        />
                        </div>
                    </div>
                    
                    <div class="mt-4">
                        <p class="text-sm text-pretty text-zinc-400">
                            I am a passionate developer and designer from Hungary, living in Denmark. I graduated from Business Academy SouthWest (EASV) as a
                            multimedia designer in 2024, and I am currently studying Web Development. I am also interested in 3D design and game development and I create 3D models in my free time.
                        </p>
                    </div>
                    
                    <dl class="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div class="flex flex-col-reverse">
                            <dt class="text-sm font-medium text-zinc-400">2022 – 2024</dt>
                            <div class="flex flex-col-reverse">
                                <dt class="text-sm font-medium text-zinc-400">
                                    <a 
                                        href="https://www.easv.dk/da/" 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        class="text-zinc-400 hover:text-accent transition duration-300 ease-in-out"
                                    >
                                        Multimedia Design @EASV
                                    </a>
                                </dt>
                                <dd class="text-xs font-medium text-zinc-300">Degrees</dd>
                            </div>
                        </div>
                        <div class="flex flex-col-reverse">
                            <dt class="text-sm font-medium text-zinc-400">2024 – Present</dt>
                            <div class="flex flex-col-reverse">
                                <dt class="text-sm font-medium text-accent flex items-center gap-2">
                                    <span class="inline-block w-2 h-2 rounded-full bg-accent animate-pulse"></span>
                                    <a 
                                        href="https://www.easv.dk/da/" 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        class="text-zinc-400 hover:text-accent transition duration-300 ease-in-out"
                                    >
                                        Web Development @EASV
                                    </a>
                                </dt>
                                <dd class="text-xs font-medium text-accent">Current Education</dd>
                            </div>
                        </div>
                        <div class="flex flex-col-reverse">
                            <dt class="text-sm font-medium text-zinc-400">2024 Jan - Mar</dt>
                            <div class="flex flex-col-reverse">
                                <dt class="text-sm font-medium text-zinc-400">
                                    <a 
                                        href="https://marketingpuzzle.hu/" 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        class="text-zinc-400 hover:text-accent transition duration-300 ease-in-out"
                                    >
                                        Intern @Marketing Puzzle
                                    </a>
                                </dt>
                                <dd class="text-xs font-medium text-zinc-300">Internship</dd>
                            </div>
                        </div>
                        <div class="flex flex-col-reverse">
                            <dt class="text-sm font-medium text-zinc-400">2025 Aug – Present</dt>
                            <div class="flex flex-col-reverse">
                                <dt class="text-sm font-medium text-accent flex items-center gap-2">
                                    <span class="inline-block w-2 h-2 rounded-full bg-accent animate-pulse"></span>
                                    <a 
                                        href="https://grumsendev.dk/" 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        class="text-zinc-400 hover:text-accent transition duration-300 ease-in-out"
                                    >
                                        Intern @Grumsen Development
                                    </a>
                                </dt>
                                <dd class="text-xs font-medium text-accent">Current Internship</dd>
                            </div>
                        </div>
                    </dl>
                    </div>
                    <div class="relative block overflow-hidden rounded-md p-4 sm:p-6 lg:p-8 bg-gradient-to-r from-zinc-800 via-zinc-900 to-zinc-900 space-y-8">
                        <div>
                            <h3 class="text-lg font-bold text-zinc-300 sm:text-2xl">
                                My Skills
                            </h3>
                            <p class="mt-1 text-sm font-medium text-zinc-400">Tools & Technologies I work with:</p>
                            <ul class="mt-4 space-y-2 text-sm text-zinc-400">
                                <li>Frontend Development: <span class="text-accent">HTML, CSS, Tailwind CSS, JavaScript, TypeScript, Vue.js</span></li>
                                <li>Backend Development: <span class="text-accent">PHP, Node.js, Express.js</span></li>
                                <li>UX/UI: <span class="text-accent">Figma, Adobe XD, Adobe Photoshop, Adobe Illustrator</span></li>
                                <li>Design Tools: <span class="text-accent">Adobe InDesign, Canva, Gimp, Photopea</span></li>
                                <li>Databases: <span class="text-accent">MySQL, MongoDB, Firebase</span></li>
                                <li>Content Management Systems: <span class="text-accent">WordPress</span></li>
                                <li>Game Development: <span class="text-accent">Unity, Blender, Meta Quest</span></li>
                            </ul>
                        </div>
                        <div>
                            <h3 class="text-lg font-bold text-zinc-300 sm:text-2xl">
                                Currently Learning
                            </h3>
                            
                            <p class="mt-1 text-sm font-medium text-zinc-400">Technologies and Concepts I'm currently exploring:</p>
                            <div class="mt-4 flex flex-wrap gap-3">
                                <div class="bg-zinc-700 text-accent text-sm font-semibold rounded-md px-3 py-1.5">
                                    Jira
                                </div>
                                <div class="bg-zinc-700 text-accent text-sm font-semibold rounded-md px-3 py-1.5">
                                    React
                                </div>
                                <div class="bg-zinc-700 text-accent text-sm font-semibold rounded-md px-3 py-1.5">
                                    Next.js
                                </div>
                                <div class="bg-zinc-700 text-accent text-sm font-semibold rounded-md px-3 py-1.5">
                                    Playwright
                                </div>
                                <div class="bg-zinc-700 text-accent text-sm font-semibold rounded-md px-3 py-1.5">
                                    CI/CD
                                </div>
                                <div class="bg-zinc-700 text-accent text-sm font-semibold rounded-md px-3 py-1.5">
                                    GitHub Actions
                                </div>
                                <div class="bg-zinc-700 text-accent text-sm font-semibold rounded-md px-3 py-1.5">
                                    Three.js
                                </div>
                                <div class="bg-zinc-700 text-accent text-sm font-semibold rounded-md px-3 py-1.5">
                                    WebGL
                                </div>
                                <div class="bg-zinc-700 text-accent text-sm font-semibold rounded-md px-3 py-1.5">
                                    AR/VR Development
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </transition>
            </div>
        <!-- Projects -->
            <div>
                <h1
                    class="text-3xl sm:text-6xl font-bold cursor-pointer hover:text-accent transition-all duration-300 ease-in-out"
                    :class="{ 'text-accent': showOpen === 'projects' }"
                    @click="toggleSection('projects')"
                >
                    Projects
                </h1>
                <transition name="fade">
                <div v-if="showOpen === 'projects'" class="mt-4">
                    <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <router-link
                            v-for="(project, index) in projects"
                            :key="index"
                            :to="'/project/' + project.slug"
                            class="relative rounded-md shadow-sm bg-zinc-800 group block"
                        >
                            <div v-if="project.status" 
                                class="absolute top-2 right-2 bg-accent text-zinc-900 text-xs font-bold rounded-md px-2 py-1 z-10">
                                {{ project.status }}
                            </div>
                            <div class="w-full aspect-[16/9] bg-zinc-700 rounded-t-md overflow-hidden">
                                <img
                                    :src="project.image"
                                    class="w-full h-full object-cover grayscale transition-all duration-300 ease-in-out group-hover:grayscale-0"
                                    alt=""
                                />
                            </div>
                            <div class="p-5">
                                <h5 class="mb-2 text-2xl font-bold tracking-tight text-zinc-300">{{ project.title }}</h5>
                                <p class="mb-3 font-normal text-zinc-400 line-clamp-2">{{ project.description }}</p>
                                <router-link
                                    :to="'/project/' + project.slug"
                                    @click.stop
                                    class="bg-zinc-700 hover:bg-accent hover:text-zinc-900 hover:shadow-xl hover:shadow-yellow-400/20 text-zinc-200 rounded-md inline-flex items-center px-4 py-2.5 transition-all duration-300 ease-in-out mt-4"
                                >
                                    Read more
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                        class="size-6 pl-2"
                                    >
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                    </svg>
                                </router-link>
                            </div>
                        </router-link>
                        <div
                            class="rounded-md shadow-sm bg-gradient-to-r from-zinc-800 via-zinc-900 to-zinc-900 flex flex-col items-center justify-center text-center p-6"
                        >
                            <h5 class="mb-2 sm:text-2xl text-xl font-semibold tracking-tight text-zinc-300">Your Project Comes Here!</h5>
                            <p class="mb-4 text-zinc-400">Have an idea you’d like to bring to life? Click the plus icon below and reach out to me with the details!</p>
                            <a
                                href="mailto:jobbagy.simon@gmail.com"
                                class="bg-zinc-700 hover:bg-accent hover:text-zinc-900 hover:shadow-xl hover:shadow-yellow-400/20 text-zinc-200 rounded-md inline-flex items-center px-4 py-2.5 transition-all duration-300 ease-in-out"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    class="size-6"
                                >
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
                </transition>
            </div>
        <!-- Contact info -->
            <div>
                <h1 
                    class="text-3xl sm:text-6xl font-bold cursor-pointer hover:text-accent transition-all duration-300 ease-in-out" 
                    :class="{ 'text-accent': showOpen === 'contact' }" 
                    @click="toggleSection('contact')"
                >
                    Contact
                </h1>
                <transition name="fade">
                <div v-if="showOpen === 'contact'" class="mt-4">
                    <div class="w-full p-4 text-left rounded-md sm:p-8 bg-gradient-to-r from-zinc-800 via-zinc-900 to-zinc-900">
                        <p class="mb-5 text-base text-zinc-200 sm:text-lg">
                        Feel free to reach out through any of the contact options below, or for more information about me, download my CV.
                        </p>
                        <div class="flex flex-col sm:flex-row gap-4">
                        <a href="mailto:jobbagy.simon@gmail.com" class="bg-zinc-700 hover:bg-accent hover:text-zinc-900 hover:shadow-xl hover:shadow-yellow-400/20 text-zinc-200 rounded-md inline-flex items-center px-4 py-2.5 transition-all duration-300 ease-in-out">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25" />
                            </svg>
                            <div class="ml-3">
                            <div class="mb-1 text-xs">Mail me:</div>
                            <div class="-mt-1 font-sans text-sm font-semibold">jobbagy.simon@gmail.com</div>
                            </div>
                        </a>
                        <a href="https://github.com/GOULASHSUP" target="_blank" class="bg-zinc-700 hover:bg-accent hover:text-zinc-900 hover:shadow-xl hover:shadow-yellow-400/20 text-zinc-200 rounded-md inline-flex items-center px-4 py-2.5 transition-all duration-300 ease-in-out">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m6.75 7.5 3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z" />
                            </svg>
                            <div class="ml-3">
                            <div class="mb-1 text-xs">Check out my:</div>
                            <div class="-mt-1 font-sans text-sm font-semibold">GitHub</div>
                            </div>
                        </a>
                        <a href="https://www.linkedin.com/in/simon-jobbágy/" target="_blank" class="bg-zinc-700 hover:bg-accent hover:text-zinc-900 hover:shadow-xl hover:shadow-yellow-400/20 text-zinc-200 rounded-md inline-flex items-center px-4 py-2.5 transition-all duration-300 ease-in-out">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
                            </svg>
                            <div class="ml-3">
                            <div class="mb-1 text-xs">Connect with me:</div>
                            <div class="-mt-1 font-sans text-sm font-semibold">LinkedIn</div>
                            </div>
                        </a>
                        <a href="/simon-jobbagy-cv.pdf" download="simon-jobbagy-cv.pdf" class="bg-zinc-700 hover:bg-accent hover:text-zinc-900 hover:shadow-xl hover:shadow-yellow-400/20 text-zinc-200 rounded-md inline-flex items-center px-4 py-2.5 transition-all duration-300 ease-in-out">
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
import { projects } from "@/projects.js";

const showOpen = ref(null);

const toggleSection = (section) => {
    showOpen.value = showOpen.value === section ? null : section;
};
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
    transition: opacity 0.3s;
}
.fade-enter, .fade-leave-to {
    opacity: 0;
}
</style>