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
    description: "During my first semester of Web Development, a classmate and I collaborated to develop a dynamic website for a fictional cinema dedicated exclusively to screening Fast & Furious movies. We aimed for a sarcastic and funny tone throughout the site, since these movies (in our opinion) prioritize entertainment over strict logic. The project focused on creating a minimalist yet functional frontend where users could: browse daily screenings, explore a news section with articles, view a movie collection and learn more about the cinema.\n\nOne of the key features was a seat reservation system, which incorporated real-world booking constraints, ensuring users could only select available seats within logical limitations. To enhance the user experience, we integrated Stripe for test payments and developed a user profile system, allowing registered users to store their information for faster reservations, while guest users had to enter their details for each booking. Additionally, we implemented a contact form that forwarded messages directly to the owners via One.com’s webmail service.\n\nFor the backend, we developed a CRUD-based content management system (CMS), allowing the cinema’s admins to: manage movies, screenings, and news by adding, editing, or deleting content, update the “About Us” section dynamically, view and manage reservations, including generating invoices for customers.\n\nThe system was built using PHP with a MySQL database, ensuring efficient data management. For styling and responsiveness, we utilized Tailwind CSS, allowing for a clean and adaptable user interface. During the planning and development process we used and followed the MVC (Model–Controller–View) pattern, and we had the chance to try ourselves out in the field of Object Oriented Programming as beginners.",
    technologies: ["PHP", "MySQL", "Tailwind CSS", "JavaScript", "MVC Pattern", "OOP"], 
    githubLink: "https://github.com/noravitkai/DWP-project", 
  },
  { 
    image: fikonProject, 
    title: "FiKon – Branding & Development", 
    slug: "fikon-branding-and-development", 
    description: "FiKon (Fiatalok Konferenciája – Youth Conference) is a Hungarian non-profit organization dedicated to supporting university students in the field of Hungarian Literary Studies. Each year, they provide a platform for BA, MA, and PhD students to present their research at an annual academic conference, hosted by a Hungarian university. Following the event, FiKon helps participants publish their work, contributing to the academic community.\n\nProject Scope: Branding & Development\n\nIn 2024, our team worked on two key aspects of the project: branding and web development. My primary focus was on branding—modernizing FiKon’s visual identity, creating engaging social media content, and researching their target audience to align the brand with its community. We conducted audience research and surveys to identify user needs and pain points, using these insights to develop a cohesive visual language. This included a new logo, social media templates, branded merchandise, and a redesigned website.\n\nWe also set up a new Canva account for the organization’s owners and created social media post templates, allowing them to easily edit and update content as needed.\n\nWebsite & Technical Implementation\n\nTo ensure FiKon’s organizers could easily manage content updates, we developed their new website using PHP and WordPress as the CMS. This allows them to modify event details and publish new content annually. JavaScript was used to enhance functionality, and Tailwind CSS was integrated for a modern and responsive design.",
    technologies: ["PHP", "Tailwind CSS", "WordPress", "JavaScript", "Canva", "Photoshop", "Illustrator"], 
    liveLink: "https://fikon.hu/",
    socialMedia: "https://www.facebook.com/fiatalok.konferenciaja"
  },
  { 
    image: tmtProject, 
    title: "TMT – SoMe Management", 
    slug: "tmt-some-management", 
    description: "During my internship at Marketing Puzzle in 2024, a Hungarian marketing agency, I was responsible for managing the social media presence of TMT (Több Mint Tüzép – More Than Building Materials). My role focused on content creation, strategy development, and analytics, helping to enhance brand visibility and engagement across multiple platforms.\n\nI designed and scheduled social media posts tailored to the brand’s identity, ensuring consistency in messaging and visuals. Using tools like Canva, Illustrator, and Photoshop, I developed engaging graphics and videos to align with marketing objectives. Additionally, I managed content distribution across Facebook, Instagram, Pinterest, and LinkedIn, utilizing Metricool and Meta Business Suite to track engagement, analyze performance, and optimize content strategies.\n\nThis experience deepened my understanding of digital marketing, content strategy, and audience engagement. I gained hands-on expertise in graphic design, copywriting, and data-driven decision-making, refining my ability to create and execute effective social media campaigns.",
    technologies: ["Canva", "Illustrator", "Photoshop", "Metricool", "Meta Business Suite"], 
    socialMedia: "https://www.facebook.com/tobbminttuzep"
  },
  { 
    image: vattenfallProject, 
    title: "Vattenfall – VR Demo", 
    slug: "vattenfall-vr-demo", 
    description: "Alongside my studies at EASV, I had the opportunity to work on an exciting side project through my Game Experiences class. I collaborated with Vattenfall, a Swedish company specializing in sustainable electricity and heating, to develop a VR training demo for their internal training materials.\n\nThe project involved creating an interactive and immersive VR experience in the Unity game engine, where users could navigate and complete tasks within a training environment. I received a 3D model of the facility where the training would take place and worked on enhancing its realism. My responsibilities included building functional VR controllers, optimizing materials, and developing additional assets to ensure a smooth and realistic experience.\n\nThe result was a walkable VR environment that allowed trainees to explore and interact with the space in a way that closely resembled real-life scenarios. This project gave me valuable hands-on experience in VR development, interactive design, and 3D asset optimization and creation, bridging the gap between technology and practical training solutions.",
    technologies: ["Unity", "Unity Asset Store", "Blender", "VRTK", "C#"], 
  },
  { 
    image: ggProject, 
    title: "GG Beauty Salon", 
    slug: "gg-beauty-salon", 
    description: "As part of our third semester project in the Multimedia Design program, my teammate and I collaborated on developing a WordPress and PHP-based website for a beauty salon in Veszprém, Hungary. The project had two key areas: website development and branding. While I contributed to both, my primary focus was research-driven design decisions, while my teammate handled the technical development of the site.\n\nResearch & Strategy\n\nTo create a user-friendly and competitive website, we conducted extensive UX and UI research. Our process included:\n– Competitor Analysis: We analyzed the top beauty salons in Veszprém, identifying their strengths and weaknesses. This allowed us to develop a strategic plan to differentiate our client.\n– Brand Identity & Mood Board: Based on the research, we designed a comprehensive brand guide that defined the visual identity, color schemes, and typography. We worked closely with the client to ensure the brand aligned with their vision.\n– SEO Optimization: Using SEMRush, we conducted in-depth keyword research to improve the salon’s search engine visibility. These insights were applied throughout the website’s content, helping the salon gain a competitive edge online.\n\nWebsite Features & Development\n\nThe final website was designed to be modern, user-friendly, and conversion-focused, with:\n– Intuitive Navigation: A structured menu highlighting all services in a clear, accessible way.\n– Blog Integration: A content section where the salon owners can post articles about services and beauty tips, improving their SEO ranking.\n– Dynamic Gallery: A customizable gallery showcasing their work, salon atmosphere, and client transformations.\n– Responsive & SEO-Optimized Design: Ensuring smooth usability on all devices while implementing best practices for search visibility.\n\nThis project not only strengthened my skills in research-driven design and branding but also provided real-world experience in SEO, UX/UI research and design, analysis, and client collaboration.",
    technologies: ["InDesign", "Photoshop", "SEMRush", "Google Ads", "WordPress", "Tailwind CSS", "Adobe XD"], 
    liveLink: "https://www.ggszepsegstudio.hu/",
  },
  { 
    image: kantenProject, 
    title: "Kanten Nightclub Website", 
    slug: "kanten", 
    description: " In the second semester of Multimedia Design, our team of four collaborated to create a comprehensive digital presence for Kanten, a nightclub in Esbjerg, Denmark. Kanten is known for hosting a diverse range of music events, featuring an extensive artist lineup catering to the city’s vibrant nightlife scene.\n\nOur project encompassed website development, branding, and digital marketing assets, including:\n– A modern website reflecting Kanten’s identity while incorporating contemporary UX/UI principles.\n– Social media guidelines and templates to maintain a consistent brand presence.\n– Physical promotional materials aligned with the club’s branding.\n\nAlthough our proposed design was ultimately not selected as their live site, the project provided us with valuable experience in user research, design thinking, and frontend development. We applied data-driven UX/UI methodologies, conducted audience research, and developed a site that effectively balanced aesthetics with functionality.\n\nThe website was built using Vue.js for the frontend and Firebase for database management, allowing for dynamic content updates and streamlined event organization.",
    technologies: ["Photoshop", "Illustrator", "InDesign", "Vue.js", "Firebase"], 
    liveLink: "https://kanten-c95d9.web.app/",
    githubLink: "https://github.com/TLNRB/kanten"
  }
];