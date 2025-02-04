import { createApp, reactive } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import HeroSection from './components/hero_section.vue';
import SingleProject from './components/single_project.vue';
import './style.css';

const globalState = reactive({
  projects: [
    { 
      image: '/src/assets/placeholder.jpg', 
      title: 'Cinema Backend Development', 
      slug: 'cinema-backend', 
      description: 'We created a fictional cinema with a simple CRUD backend using PHP.', 
      technologies: ['PHP', 'MySQL', 'Tailwind', 'JavaScript'], 
      liveLink: 'https://example.com/cinema-backend', 
      githubLink: 'https://example.com/cinema-backend',
      socialMedia: 'https://facebook.com/' 
    },
    { 
      image: '/src/assets/placeholder.jpg', 
      title: 'FiKon Website', 
      slug: 'fikon-website', 
      description: 'This project is for the Hungarian organization FiKon. We designed a new website and established a brand identity.', 
      technologies: ['Vue.js', 'Tailwind CSS', 'Firebase'], 
    },
    { 
      image: '/src/assets/placeholder.jpg', 
      title: 'Example', 
      slug: 'example', 
      description: 'This project is for the Example company. They are really nice, and they are not real, since this is just an example...', 
      technologies: ['Vue.js', 'Tailwind CSS', 'Firebase', 'Adobe PhotoShop', 'Adobe Illustrator', 'Figma'], 
      liveLink: 'https://example.com/cinema-backend'
    },
  ]
});

const routes = [
  { path: '/', component: HeroSection },
  { path: '/project/:slug', component: SingleProject },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);
app.provide('globalState', globalState);
app.use(router);
app.mount('#app');