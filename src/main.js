import { createApp, reactive } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import HeroSection from './components/hero_section.vue';
import SingleProject from './components/single_project.vue';
import './style.css';

const globalState = reactive({
  projects: [
    { 
      image: '/src/assets/cinema-project.png', 
      title: 'Cinema Backend Development', 
      slug: 'cinema-backend', 
      description: 'During my first semester of Web Development, our team developed a dynamic website for a fictional cinema dedicated exclusively to screening Fast & Furious movies. We aimed for a sarcastic and funny tone throughout the site, since these movies (in our opinion) lack any kind of reasonable logic. The project focused on creating a minimalist yet functional frontend where users could: Browse daily screenings, explore a news section with articles, view a movie collection and learn more about the cinema.\n\nOne of the key features was a seat reservation system, which incorporated real-world booking constraints, ensuring users could only select available seats within logical limitations. To enhance the user experience, we integrated Stripe for test payments and developed a user profile system, allowing registered users to store their information for faster reservations, while guest users had to enter their details for each booking. Additionally, we implemented a contact form that forwarded messages directly to the owners via One.com’s webmail service.\n\nBackend & Admin Features\n\nFor the backend, we developed a CRUD-based content management system (CMS), allowing the cinema’s admins to: Manage movies, screenings, and news by adding, editing, or deleting content, update the “About Us” section dynamically, view and manage reservations, including generating invoices for customers.\n\nThe system was built using PHP with a MySQL database, ensuring efficient data management. For styling and responsiveness, we utilized Tailwind CSS, allowing for a clean and adaptable user interface. During the planning and development process we Used and followed the MVC (Model Controller View) model, and we had the chance to try ourselves out in the field of Object Oriented Programming as beginners',
      technologies: ['PHP', 'MySQL', 'Tailwind', 'JavaScript', 'MVC Model', 'OOP'], 
      githubLink: 'https://github.com/noravitkai/DWP-project', 
    },
    { 
      image: '/src/assets/fikon-project.png', 
      title: 'FiKon', 
      slug: 'fikon-branding-and-development', 
      description: 'FiKon (Fiatalok Konferenciája – Youth Conference) is a Hungarian non-profit organization dedicated to supporting university students in the field of Hungarian literature. Each year, they provide a platform for BA, MA, and PhD students to present their research at an annual academic conference, hosted by a Hungarian university. Following the event, FiKon helps participants check and publish their work, contributing to the academic community.\n\nProject Scope: Branding & Development\n\nOur team worked on two key aspects of the project: branding and web development. My primary focus was on branding—modernizing FiKon’s visual identity, creating engaging social media content, and researching their target audience to align the brand with its community. We conducted audience research and surveys to identify user needs and pain points, using these insights to develop a cohesive visual language. This included a new logo, social media templates, branded merchandise, and a redesigned website.\n\nWe also created a new Canva account for the organization owners, where we made the templates for the social media post, so they can edit and update them if needed.\n\nWebsite & Technical Implementation\n\nTo ensure FiKon’s organizers could easily manage content updates, we developed their new website using PHP and WordPress as the CMS. This allows them to modify event details and publish new content annually. JavaScript was used to enhance functionality, and Tailwind CSS was integrated for a modern and responsive design.', 
      technologies: ['PHP', 'Tailwind CSS', 'WordPress', 'JavaScript', 'Canva', 'PhotoShop', 'Illustrator'], 
      liveLink: 'https://fikon.hu/',
      socialMedia: 'https://www.facebook.com/fiatalok.konferenciaja'
    },
    { 
      image: '/src/assets/gg-project.png', 
      title: 'GG Beauty Salon', 
      slug: 'gg-beauty-salon', 
      description: 'As part of our third semester project in the Multimedia Design program, my teammate and I collaborated on developing a WordPress and PHP-based website for a beauty salon in Veszprém, Hungary. The project had two key areas: website development and branding. While I contributed to both, my primary focus was research-driven design decisions, while my teammate handled the technical development of the site.\n\nResearch & Strategy\n\nTo create a user-friendly and competitive website, we conducted extensive UX and UI research. Our process included:\n– Competitor Analysis: We analyzed the top beauty salons in Veszprém, identifying their strengths and weaknesses. This allowed us to develop a strategic plan to differentiate our client.\n– Brand Identity & Mood Board: Based on the research, we designed a comprehensive brand guide that defined the visual identity, color schemes, and typography. We worked closely with the client to ensure the brand aligned with their vision.\n– SEO Optimization: Using SEMRush, we conducted in-depth keyword research to improve the salon’s search engine visibility. These insights were applied throughout the website’s content, helping the salon gain a competitive edge online.\n\nWebsite Features & Development\n\nThe final website was designed to be modern, user-friendly, and conversion-focused, with:Intuitive Navigation – A structured menu highlighting all services in a clear, accessible way. Blog Integration – A content section where the salon owners can post articles about services and beauty tips, improving their SEO ranking. Dynamic Gallery – A customizable gallery showcasing their work, salon atmosphere, and client transformations. Responsive & SEO-Optimized Design – Ensuring smooth usability on all devices while implementing best practices for search visibility.\n\nThis project not only strengthened my skills in research-driven design and branding but also provided real-world experience in SEO, UX/UI research and design, analysis, and client collaboration.', 
      technologies: ['InDesign', 'Photoshop', 'Semrush', 'Google Ads', 'WordPress', 'Tailwind', 'Adobe XD'], 
      liveLink: 'https://www.ggszepsegstudio.hu/',
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