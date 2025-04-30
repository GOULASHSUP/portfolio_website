import cinemaProject from "@/assets/cinema-project.png";
import fikonProject from "@/assets/fikon-project.png";
import tmtProject from "@/assets/tmt-project.png";
import vattenfallProject from "@/assets/vattenfall-project.png";
import ggProject from "@/assets/gg-project.png";
import kantenProject from "@/assets/kanten-project.png";
import underConstruction from "@/assets/under-construction.jpg";
import gatesnfencesProject from "@/assets/gatesnfences-project.png";
import linedProject from "@/assets/lined-project.png";

export const projects = [
{ 
    image: underConstruction, 
    title: "OnlyFails API and Frontend", 
    slug: "onlyfails-api", 
    description: "OnlyFails is a full-stack web application built with TypeScript, Express, MongoDB and Node, showcasing a fictional Museum of Failed Products. It allows users to explore, comment, and vote on infamous failed products from history. Admins can manage products, categories, and users, providing a dynamic and interactive experience for discovering the lessons behind some of the most notable product failures.\n\nThis project highlights my skills in building REST APIs, implementing authentication, handling CRUD operations, and creating a responsive frontend using modern technologies.\n\nIn the future, I plan to implement a simple React-based frontend where both admins and end-users can interact seamlessly with the API, enhancing the user experience and providing intuitive management tools.",
    technologies: ["TypeScript", "MongoDB", "Node", "Express", "REST API", "CI/CD", "GitHub Actions", "Playwright", "Postman", "Swagger"], 
    githubLink: "https://github.com/GOULASHSUP/only-fails-api", 
    status: 'In Progress'
},
{ 
    image: linedProject, 
    title: "Lined – Socket.io Mini-game", 
    slug: "lined-mini-game", 
    description: "In the second semester of my Web Development program at EASV, during the Web Technologies course, my teammate and I developed a small real-time application using Socket.IO.\n\nThe application is a collaborative storytelling game where each player takes turns adding a sentence (maximum 75 characters) to a shared story visible to all active users. To prevent inactive players from stalling the game, we introduced a 30-second real-time countdown timer. If a player doesn’t submit a sentence in time, their turn is automatically passed to the next user.\n\n-Frontend: Built with React, Next.js, and styled using Tailwind CSS\n-Backend: Node.js with Express and Socket.io\n-Deployment: Frontend hosted on Vercel, backend on Render\n\nAll game logic is handled in-memory on the server, with no database connection. This means the story is lost if the server restarts or the game is reset. In future versions, we plan to:\n\n-Add story export functionality so users will be able to save their creations\n-Implement robust error handling\n-Refactor the frontend using reusable UI components\n\nThis project was (and still is) a great opportunity to explore websockets, real-time web communication, and full-stack deployment in a fun and engaging way.\n\nIMPORTANT: This projects backend is hosted on Render.com with a free plan, which means it may take up to 50 seconds to wake up when you first access the site.",
    technologies: ["TypeScript", "React", "WebSockets", "Socket.io", "Next.js", "Express", "Vercel", "Render.com"], 
    githubLink: "https://github.com/noravitkai/shared-story", 
    liveLink: "https://lined-frontend.vercel.app/",
    status: 'In Progress'
},
{ 
    image: cinemaProject, 
    title: "Cinema Backend Development", 
    slug: "cinema-backend", 
    description: "During my first semester of Web Development, a classmate and I collaborated to develop a dynamic website for a fictional cinema dedicated exclusively to screening Fast & Furious movies. We aimed for a sarcastic and funny tone throughout the site, since these movies (in our opinion) prioritize entertainment over strict logic. The project focused on creating a minimalist yet functional frontend where users could: browse daily screenings, explore a news section with articles, view a movie collection and learn more about the cinema.\n\nOne of the key features was a seat reservation system, which incorporated real-world booking constraints, ensuring users could only select available seats within logical limitations. To enhance the user experience, we integrated Stripe for test payments and developed a user profile system, allowing registered users to store their information for faster reservations, while guest users had to enter their details for each booking. Additionally, we implemented a contact form that forwarded messages directly to the owners via One.com’s webmail service.\n\nFor the backend, we developed a CRUD-based content management system (CMS), allowing the cinema’s admins to: manage movies, screenings, and news by adding, editing, or deleting content, update the “About Us” section dynamically, view and manage reservations, including generating invoices for customers.\n\nThe system was built using PHP with a MySQL database, ensuring efficient data management. For styling and responsiveness, we utilized Tailwind CSS, allowing for a clean and adaptable user interface. During the planning and development process we used and followed the MVC (Model–Controller–View) pattern, and we had the chance to try ourselves out in the field of Object Oriented Programming as beginners.",
    technologies: ["PHP", "MySQL", "Tailwind CSS", "JavaScript", "MVC Pattern", "OOP"], 
    githubLink: "https://github.com/noravitkai/DWP-project", 
    status: ''
},
{ 
    image: fikonProject, 
    title: "FiKon – Branding & Development", 
    slug: "fikon-branding-and-development", 
    description: "FiKon (Fiatalok Konferenciája – Youth Conference) is a Hungarian non-profit organization dedicated to supporting university students in the field of Hungarian Literary Studies. Each year, they provide a platform for BA, MA, and PhD students to present their research at an annual academic conference, hosted by a Hungarian university. Following the event, FiKon helps participants publish their work, contributing to the academic community.\n\nProject Scope: Branding & Development\n\nIn 2024, our team worked on two key aspects of the project: branding and web development. My primary focus was on branding—modernizing FiKon’s visual identity, creating engaging social media content, and researching their target audience to align the brand with its community. We conducted audience research and surveys to identify user needs and pain points, using these insights to develop a cohesive visual language. This included a new logo, social media templates, branded merchandise, and a redesigned website.\n\nWe also set up a new Canva account for the organization’s owners and created social media post templates, allowing them to easily edit and update content as needed.\n\nWebsite & Technical Implementation\n\nTo ensure FiKon’s organizers could easily manage content updates, we developed their new website using PHP and WordPress as the CMS. This allows them to modify event details and publish new content annually. JavaScript was used to enhance functionality, and Tailwind CSS was integrated for a modern and responsive design.",
    technologies: ["PHP", "Tailwind CSS", "WordPress", "JavaScript", "Canva", "Photoshop", "Illustrator"], 
    liveLink: "https://fikon.hu/",
    socialMedia: "https://www.facebook.com/fiatalok.konferenciaja",
    status: ''
},
{ 
    image: tmtProject, 
    title: "TMT – SoMe Management", 
    slug: "tmt-some-management", 
    description: "During my internship at Marketing Puzzle in 2024, a Hungarian marketing agency, I was responsible for managing the social media presence of TMT (Több Mint Tüzép – More Than Building Materials). My role focused on content creation, strategy development, and analytics, helping to enhance brand visibility and engagement across multiple platforms.\n\nI designed and scheduled social media posts tailored to the brand’s identity, ensuring consistency in messaging and visuals. Using tools like Canva, Illustrator, and Photoshop, I developed engaging graphics and videos to align with marketing objectives. Additionally, I managed content distribution across Facebook, Instagram, Pinterest, and LinkedIn, utilizing Metricool and Meta Business Suite to track engagement, analyze performance, and optimize content strategies.\n\nThis experience deepened my understanding of digital marketing, content strategy, and audience engagement. I gained hands-on expertise in graphic design, copywriting, and data-driven decision-making, refining my ability to create and execute effective social media campaigns.",
    technologies: ["Canva", "Illustrator", "Photoshop", "Metricool", "Meta Business Suite"], 
    socialMedia: "https://www.facebook.com/tobbminttuzep",
    status: ''
},
{ 
    image: gatesnfencesProject, 
    title: "Gates & Fences – UX/UI Redesign", 
    slug: "gates-n-fences-redesign", 
    description: "As part of my Web Development education’s 1st semester in my UX/UI class, I undertook a comprehensive redesign of Gates n Fences’ outdated website with a strong focus on enhancing usability, aesthetics, accessibility, and overall user experience. The redesign process was structured around modern UX/UI principles aimed at providing a seamless and engaging experience for users. During the redesign process in Figma I focused on:\n\n- Minimalistic Design: Implementing a clean, uncluttered interface to promote clarity, improve readability, and direct user attention to essential elements.\n- Reducing Cognitive Load: Utilizing clear visual hierarchy, appropriate spacing, and familiar patterns to streamline navigation and prevent information overload.\n- Reusable Components: Designing modular UI elements such as buttons, cards, and navigation menus to ensure consistency, scalability, and maintainability throughout the site.\n- Clear Navigation: Establishing intuitive information architecture and logical user flow, enhancing accessibility and discoverability of content.\n- User-Centered Design: Crafting user-friendly interfaces through wireframes, prototypes, and usability testing to validate design decisions and enhance user satisfaction.\n\nI applied modern design principles such as simplicity, consistency, and visual balance, along with a modular approach to create a cohesive and adaptable interface. Leveraging typography, color theory, and spacing effectively, I enhanced the site’s visual hierarchy and overall aesthetics. The redesigned website now offers a smooth, intuitive user experience where visitors can effortlessly navigate and interact with content.",
    technologies: ["Figma", "Photoshop", "UX/UI", "Prototype"], 
    liveLink: "https://www.gatesnfences.com/",
    prototype: "https://www.figma.com/proto/7zYPDg1vIk9soPuPUcWThS/Gates-and-Fences?page-id=0%3A1&node-id=1-2&p=f&viewport=-1976%2C-4436%2C0.68&t=skCYFHwMg1phH2AT-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A2&show-proto-sidebar=1",
    status: ''
},
{ 
    image: vattenfallProject, 
    title: "Vattenfall – VR Demo", 
    slug: "vattenfall-vr-demo", 
    description: "Alongside my studies at EASV, I had the opportunity to work on an exciting side project through my Game Experiences class. I collaborated with Vattenfall, a Swedish company specializing in sustainable electricity and heating, to develop a VR training demo for their internal training materials.\n\nThe project involved creating an interactive and immersive VR experience in the Unity game engine, where users could navigate and complete tasks within a training environment. I received a 3D model of the facility where the training would take place and worked on enhancing its realism. My responsibilities included building functional VR controllers, optimizing materials, and developing additional assets to ensure a smooth and realistic experience.\n\nThe result was a walkable VR environment that allowed trainees to explore and interact with the space in a way that closely resembled real-life scenarios. This project gave me valuable hands-on experience in VR development, interactive design, and 3D asset optimization and creation, bridging the gap between technology and practical training solutions.",
    technologies: ["Unity", "Unity Asset Store", "Blender", "VRTK", "C#"], 
    status: ''
},
{ 
    image: ggProject, 
    title: "GG Beauty Salon", 
    slug: "gg-beauty-salon", 
    description: "As part of our third semester project in the Multimedia Design program, my teammate and I collaborated on developing a WordPress and PHP-based website for a beauty salon in Veszprém, Hungary. The project had two key areas: website development and branding. While I contributed to both, my primary focus was research-driven design decisions, while my teammate handled the technical development of the site.\n\nResearch & Strategy\n\nTo create a user-friendly and competitive website, we conducted extensive UX and UI research. Our process included:\n– Competitor Analysis: We analyzed the top beauty salons in Veszprém, identifying their strengths and weaknesses. This allowed us to develop a strategic plan to differentiate our client.\n– Brand Identity & Mood Board: Based on the research, we designed a comprehensive brand guide that defined the visual identity, color schemes, and typography. We worked closely with the client to ensure the brand aligned with their vision.\n– SEO Optimization: Using SEMRush, we conducted in-depth keyword research to improve the salon’s search engine visibility. These insights were applied throughout the website’s content, helping the salon gain a competitive edge online.\n\nWebsite Features & Development\n\nThe final website was designed to be modern, user-friendly, and conversion-focused, with:\n– Intuitive Navigation: A structured menu highlighting all services in a clear, accessible way.\n– Blog Integration: A content section where the salon owners can post articles about services and beauty tips, improving their SEO ranking.\n– Dynamic Gallery: A customizable gallery showcasing their work, salon atmosphere, and client transformations.\n– Responsive & SEO-Optimized Design: Ensuring smooth usability on all devices while implementing best practices for search visibility.\n\nThis project not only strengthened my skills in research-driven design and branding but also provided real-world experience in SEO, UX/UI research and design, analysis, and client collaboration.",
    technologies: ["InDesign", "Photoshop", "SEMRush", "Google Ads", "WordPress", "Tailwind CSS", "Adobe XD"], 
    liveLink: "https://www.ggszepsegstudio.hu/",
    status: ''
},
{ 
    image: kantenProject, 
    title: "Kanten Nightclub Website", 
    slug: "kanten", 
    description: " In the second semester of Multimedia Design, our team of four collaborated to create a comprehensive digital presence for Kanten, a nightclub in Esbjerg, Denmark. Kanten is known for hosting a diverse range of music events, featuring an extensive artist lineup catering to the city’s vibrant nightlife scene.\n\nOur project encompassed website development, branding, and digital marketing assets, including:\n– A modern website reflecting Kanten’s identity while incorporating contemporary UX/UI principles.\n– Social media guidelines and templates to maintain a consistent brand presence.\n– Physical promotional materials aligned with the club’s branding.\n\nAlthough our proposed design was ultimately not selected as their live site, the project provided us with valuable experience in user research, design thinking, and frontend development. We applied data-driven UX/UI methodologies, conducted audience research, and developed a site that effectively balanced aesthetics with functionality.\n\nThe website was built using Vue.js for the frontend and Firebase for database management, allowing for dynamic content updates and streamlined event organization.",
    technologies: ["Photoshop", "Illustrator", "InDesign", "Vue.js", "Firebase"], 
    liveLink: "https://kanten-c95d9.web.app/",
    githubLink: "https://github.com/TLNRB/kanten",
    status: ''
}
];