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
      description: 'During my first semester of Web Development, our team developed a dynamic website for a fictional cinema dedicated exclusively to screening Fast & Furious movies. We aimed for a sarcastic and funny tone throughout the site, since these movies (in our opinion) lack any kind of reasonable logic. The project focused on creating a minimalist yet functional frontend where users could: Browse daily screenings, explore a news section with articles, view a movie collection and learn more about the cinema.\n\nOne of the key features was a seat reservation system, which incorporated real-world booking constraints, ensuring users could only select available seats within logical limitations. To enhance the user experience, we integrated Stripe for test payments and developed a user profile system, allowing registered users to store their information for faster reservations, while guest users had to enter their details for each booking. Additionally, we implemented a contact form that forwarded messages directly to the owners via One.com’s webmail service.\n\nBackend & Admin Features\n\nFor the backend, we developed a CRUD-based content management system (CMS), allowing the cinema’s admins to: Manage movies, screenings, and news by adding, editing, or deleting content, update the “About Us” section dynamically, view and manage reservations, including generating invoices for customers.\n\nThe system was built using PHP with a MySQL database, ensuring efficient data management. For styling and responsiveness, we utilized Tailwind CSS, allowing for a clean and adaptable user interface. During the planning and development process we Used and followed the MVC (Model Controller View) model, and we had the chance to try ourselves out in the field of Object Oriented Programming as beginners',
      technologies: ['PHP', 'MySQL', 'Tailwind', 'JavaScript', 'MVC Model', 'OOP'], 
      liveLink: 'https://noravitkai.com/DWP-project/src/Views/frontend/home_page.php', 
      githubLink: 'https://github.com/noravitkai/DWP-project', 
    },
    { 
      image: '/src/assets/placeholder.jpg', 
      title: 'FiKon – Branding and Development', 
      slug: 'fikon-website', 
      description: 'This project is for the Hungarian organization FiKon (Fiatalok Konferenciája). We designed a new website and established a brand identity.', 
      technologies: ['Vue.js', 'Tailwind CSS', 'Firebase'], 
    },
    { 
      image: '/src/assets/placeholder.jpg', 
      title: 'Example', 
      slug: 'example', 
      description: 'This project is for the Example company. They are really nice, and they are not real, since this is just an example...', 
      technologies: ['Vue.js', 'Tailwind CSS', 'Firebase', 'Adobe PhotoShop', 'Adobe Illustrator', 'Figma'], 
      liveLink: 'https://example.com/cinema-backend',
      socialMedia: 'https://facebook.com/'
    },
    { 
      image: '/src/assets/placeholder.jpg', 
      title: 'Example Nr. 2', 
      slug: 'example 2', 
      description: 'This project is for another Example company. They are really nice, and they are not real, since this is just an example...', 
      technologies: ['Unity', 'Blender', 'C#'], 
      liveLink: 'https://example.com/example2',
      githubLink: 'https://example.com/cinema-backend'
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