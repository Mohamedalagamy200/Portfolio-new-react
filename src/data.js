import profileImage from "./assets/images/profile.jpg";
import worldNewsLiveImage from "./assets/images/projects/world-news-live.png";
import miaImage from "./assets/images/projects/mia-ittalonni.png";
import nexaflowImage from "./assets/images/projects/nexaflow.png";
import focuslyImage from "./assets/images/projects/focusly.png";
import weatherAppImage from "./assets/images/projects/weather-app.png";
import paradiseNurseryImage from "./assets/images/projects/paradise-nursery.png";

export const profile = {
  name: "Mohamed Elagmy",
  fullName: "Mohamed Elsayed Elagmy",
  title: "Frontend / Full-Stack Web Developer",
  location: "Cairo, Egypt",
  email: "mohamedalagamy606@gmail.com",
  image: profileImage,
  github: "https://github.com/Mohamedalagamy200",
  linkedin: "https://www.linkedin.com/in/mohamed-el-sayed-al-ajmi/",
};

export const skills = [
  {
    title: "Frontend Development",
    items: [
      "React.js",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Bootstrap",
      "Tailwind CSS",
      "Responsive Design",
      "Flexbox",
      "Media Queries",
      "API Integration",
    ],
  },
  {
    title: "Backend Development",
    items: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "SQLite",
      "SQL",
      "CRUD",
      "Routing",
      "Client / Server Communication",
    ],
  },
  {
    title: "Computer Science",
    items: [
      "C++",
      "C#",
      "OOP",
      "Data Structures",
      "Algorithms",
      "Time Complexity",
      "Space Complexity",
      "Software Engineering Fundamentals",
      "System Analysis & Design",
      "Computer Networks",
      "Computer Architecture",
    ],
  },
  {
    title: "AI & Automation",
    items: [
      "Python",
      "n8n",
      "Research & Fact Verification",
      "Critical Thinking",
      "Technical Documentation",
      "Problem Solving",
      "Attention to Detail",
    ],
  },
  {
    title: "Cybersecurity & Networking",
    items: ["Network Security", "Cisco Networking", "IoT Fundamentals"],
  },
  {
    title: "Embedded Systems & IoT",
    items: [
      "Arduino",
      "ESP32",
      "C/C++",
      "Sensors",
      "Logic Design",
      "Circuit Analysis",
      "Hardware Logic",
      "Hardware / Software Integration",
    ],
  },
  {
    title: "Tools",
    items: ["Git", "GitHub", "VS Code", "Terminal", "PowerShell", "Bash"],
  },
];

export const learning = ["AI Agents", "n8n", "Cybersecurity"];

export const projects = [
  {
    id: "world-news-live",
    title: "World News Live",
    category: "React Web Application",
    status: "Live",
    year: "2026",
    description:
      "A modern, responsive global news app built with React and the Currents API — live news feed, category browsing, keyword search, article details, bookmarks, and light/dark themes.",
    technologies: ["React", "Vite", "JavaScript", "Currents API"],
    image: worldNewsLiveImage,
    github: "https://github.com/Mohamedalagamy200/ITI-Project-v0.1",
    live: "https://mohamedalagamy200.github.io/ITI-Project-v0.1/",
  },
  {
    id: "mia-ittalonni",
    title: "MIA ITTALONNI",
    category: "E-commerce Storefront",
    status: "Live",
    year: "2026",
    description:
      "A storefront website for a fashion brand — a responsive, visual multi-section site with product showcases and a clean, modern design.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
    image: miaImage,
    github: "https://github.com/Mohamedalagamy200/NTI-project",
    live: "https://mohamedalagamy200.github.io/NTI-project/#Home",
  },
  {
    id: "nexaflow",
    title: "NexaFlow",
    category: "SaaS Landing Page",
    status: "Live",
    year: "2026",
    description:
      "A modern landing page for a project management and team collaboration platform, with a full dashboard interface built in pure HTML and CSS.",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    image: nexaflowImage,
    github: "https://github.com/Mohamedalagamy200/Landing-Page-NexaFlow",
    live: "https://mohamedalagamy200.github.io/Landing-Page-NexaFlow/",
  },
  {
    id: "focusly",
    title: "Focusly",
    category: "Productivity Web App",
    status: "Live",
    year: "2026",
    description:
      "A responsive productivity dashboard for organizing tasks — create, edit, filter and complete tasks with priorities, categories and due dates, saved in the browser.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Tailwind CSS"],
    image: focuslyImage,
    github: "https://github.com/Mohamedalagamy200/Project-To-Do-List",
    live: "https://mohamedalagamy200.github.io/Project-To-Do-List/",
  },
  {
    id: "weather-app",
    title: "Weather App",
    category: "Weather Web App",
    status: "Live",
    year: "2026",
    description:
      "A weather dashboard that searches any city or uses your location — current conditions and a five-day forecast, in English or Arabic, Celsius or Fahrenheit.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Open-Meteo API"],
    image: weatherAppImage,
    github: "https://github.com/Mohamedalagamy200/Project-weather-app",
    live: "https://mohamedalagamy200.github.io/Project-weather-app/",
  },
  {
    id: "paradise-nursery",
    title: "Paradise Nursery",
    category: "React Shopping App",
    status: "Live",
    year: "2026",
    description:
      "A React and Redux Toolkit shopping app for a plant nursery — 18 plants in 3 categories, with a working cart, quantities, and totals.",
    technologies: ["React", "Redux Toolkit", "Vite", "GitHub Pages"],
    image: paradiseNurseryImage,
    github: "https://github.com/Mohamedalagamy200/paradise-nursery-shopping-app",
    live: "https://mohamedalagamy200.github.io/paradise-nursery-shopping-app/",
  },
];

export const experience = [
  {
    id: "saas-founder",
    role: "Founder & Product Owner",
    company: "Tutoring-Centre Management SaaS",
    type: "Self-employed",
    period: "Nov 2026 — Present",
    location: "Cairo, Egypt",
    description:
      "Designing and building a management system for tutoring centres covering attendance, monthly fees, schedules and dashboards.",
  },
];

export const certifications = [
  {
    id: "datacamp-ai-leadership",
    group: "DataCamp — AI Leadership Track",
    issuer: "DataCamp",
    year: "Nov 2026",
    items: [
      "Understanding AI",
      "Introduction to AI Agents",
      "Understanding Prompt Engineering",
      "Monetizing AI",
      "Responsible AI Practices",
      "Explainable AI (XAI) Concepts",
      "AI Security and Risk Management",
    ],
  },
  {
    id: "cisco-networking",
    group: "Cisco Networking Academy",
    issuer: "Cisco",
    year: "Aug 2026",
    items: [
      "Network Technician Career Path",
      "Network Support and Security",
      "Introduction to IoT and Digital Transformation",
      "Learner Achievement Award (Learn-A-Thon)",
    ],
  },
];

export const education = {
  degree: "B.Sc. in Computer Science",
  institution: "Future Academy",
  status: "Third Year Student — Expected 2028",
  coursework: [
    "Object-Oriented Programming",
    "Data Structures",
    "Structured Programming",
    "Database Management Systems (SQL)",
    "Logic Design",
    "Electronics",
    "CS Fundamentals",
    "Information Systems",
    "Discrete Mathematics",
    "Probability & Statistics",
    "Linear Algebra",
    "Calculus",
  ],
};
