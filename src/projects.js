import cinemaProject from "@/assets/cinema-project.png";
import fikonProject from "@/assets/fikon-project.png";
import tmtProject from "@/assets/tmt-project.png";
import vattenfallProject from "@/assets/vattenfall-project.png";
import ggProject from "@/assets/gg-project.png";
import kantenProject from "@/assets/kanten-project.png";

export const projects = [
  { 
    image: cinemaProject, 
    title: "Cinema Backend Development", 
    slug: "cinema-backend", 
    description: "During my first semester of Web Development, a classmate and I collaborated to develop a dynamic website for a fictional cinema dedicated exclusively to screening Fast & Furious movies. We aimed for a sarcastic and funny tone throughout the site, since these movies (in our opinion) prioritize entertainment over strict logic.\n\nOne of the key features was a seat reservation system, which incorporated real-world booking constraints, ensuring users could only select available seats within logical limitations. To enhance the user experience, we integrated Stripe for test payments and developed a user profile system, allowing registered users to store their information for faster reservations, while guest users had to enter their details for each booking.\n\nFor the backend, we developed a CRUD-based content management system (CMS), allowing the cinema’s admins to manage movies, screenings, news, and reservations. The system was built using PHP with a MySQL database, following the MVC pattern and object-oriented principles for better scalability and maintainability.",
    technologies: ["PHP", "MySQL", "Tailwind CSS", "JavaScript", "MVC Pattern", "OOP"], 
    githubLink: "https://github.com/noravitkai/DWP-project", 
  },
  { 
    image: fikonProject, 
    title: "FiKon – Branding & Development", 
    slug: "fikon-branding-and-development", 
    description: "FiKon (Fiatalok Konferenciája – Youth Conference) is a Hungarian non-profit organization supporting university students in the field of Hungarian Literary Studies. Each year, they provide a platform for BA, MA, and PhD students to present their research at an academic conference hosted by a Hungarian university.\n\nOur project focused on both branding and website development. I primarily worked on the branding, modernizing FiKon’s visual identity, creating engaging social media content, and researching their target audience. We conducted user research and surveys to align the branding with its community, developing a new logo, social media templates, branded merchandise, and a redesigned website.\n\nThe website was developed with PHP and WordPress as the CMS, allowing organizers to modify event details and publish content annually. Tailwind CSS was used for styling, and JavaScript enhanced interactivity.",
    technologies: ["PHP", "Tailwind CSS", "WordPress", "JavaScript", "Canva", "Photoshop", "Illustrator"], 
    liveLink: "https://fikon.hu/",
    socialMedia: "https://www.facebook.com/fiatalok.konferenciaja"
  },
  { 
    image: tmtProject, 
    title: "TMT – SoMe Management", 
    slug: "tmt-some-management", 
    description: "During my internship at Marketing Puzzle in 2024, I managed the social media presence of TMT (Több Mint Tüzép – More Than Building Materials). My role focused on content creation, strategy development, and analytics, helping to enhance brand visibility and engagement across multiple platforms.\n\nI designed and scheduled social media posts tailored to the brand’s identity, ensuring consistency in messaging and visuals. Using tools like Canva, Illustrator, and Photoshop, I developed engaging graphics and videos. Additionally, I managed content distribution across Facebook, Instagram, Pinterest, and LinkedIn, utilizing Metricool and Meta Business Suite to track engagement and optimize content strategies.",
    technologies: ["Canva", "Illustrator", "Photoshop", "Metricool", "Meta Business Suite"], 
    socialMedia: "https://www.facebook.com/tobbminttuzep"
  },
  { 
    image: vattenfallProject, 
    title: "Vattenfall – VR Demo", 
    slug: "vattenfall-vr-demo", 
    description: "As part of my Game Experiences class at EASV, I worked on a VR training demo for Vattenfall, a Swedish company specializing in sustainable electricity and heating. The project involved creating an interactive and immersive VR experience using Unity.\n\nI received a 3D model of the facility where the training would take place and optimized it for VR interaction. My responsibilities included building functional VR controllers, applying realistic materials, and developing additional assets to enhance the user experience. The final result was a fully walkable VR environment where trainees could explore and interact within a simulated training scenario.",
    technologies: ["Unity", "Unity Asset Store", "Blender", "VRTK", "C#"], 
  },
  { 
    image: ggProject, 
    title: "GG Beauty Salon", 
    slug: "gg-beauty-salon", 
    description: "For our third-semester project in the Multimedia Design program, my teammate and I developed a WordPress and PHP-based website for a beauty salon in Veszprém, Hungary. The project involved both website development and branding, with my primary focus being research-driven design decisions.\n\nWe conducted UX/UI research, performed a competitor analysis, and developed a brand identity guide based on our findings. Using SEMRush, we optimized the site for SEO to improve its visibility in local searches. The final website featured intuitive navigation, a blog section for beauty-related articles, a dynamic gallery, and a mobile-friendly layout.\n\nThis project strengthened my skills in research-driven design, branding, SEO, and user experience analysis.",
    technologies: ["InDesign", "Photoshop", "SEMRush", "Google Ads", "WordPress", "Tailwind CSS", "Adobe XD"], 
    liveLink: "https://www.ggszepsegstudio.hu/",
  },
  { 
    image: kantenProject, 
    title: "Kanten Nightclub Website", 
    slug: "kanten", 
    description: "In the second semester of Multimedia Design, our team created a digital presence for Kanten, a nightclub in Esbjerg, Denmark. Kanten hosts a wide range of music events with a diverse artist lineup.\n\nOur project included website development, branding, and digital marketing materials. We designed a modern website reflecting Kanten’s identity while following UX/UI best practices. We also created social media branding guidelines and physical promotional materials to enhance their brand presence.\n\nAlthough our proposal was not selected as the live site, the project provided valuable experience in user research, design thinking, and frontend development. The website was built using Vue.js for interactivity and Firebase for database management, ensuring dynamic content updates.",
    technologies: ["Photoshop", "Illustrator", "InDesign", "Vue.js", "Firebase"], 
    liveLink: "https://kanten-c95d9.web.app/",
    githubLink: "https://github.com/TLNRB/kanten"
  }
];