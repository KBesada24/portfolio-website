export const personalInfo = {
  name: "Kirollos M. Besada",
  title: "Full Stack Developer",
  subtitle: "Building scalable web applications with modern technologies",
  email: "besadakirollos@gmail.com",
  phone: "(646) 247-0165",
  location: "New York, NY",
  links: {
    linkedin: "https://linkedin.com/in/kirollos-besada",
    github: "https://github.com/KBesada24",
    portfolio: "https://kiroh-portfolio.vercel.app"
  },
  bio: "Passionate Full Stack Developer with proven experience leading development teams and building scalable web applications. Specialized in React, Next.js, and Node.js with a track record of improving system efficiency by 35% and leading teams of 12+ developers.",
};

export const skills = {
  frontend: [
    { name: "React.js", proficiency: 90, projects: ["TheraMotive CRM", "Sync Master"] },
    { name: "Next.js", proficiency: 95, projects: ["TheraMotive CRM", "Sync Master", "Portfolio"] },
    { name: "TypeScript", proficiency: 88, projects: ["TheraMotive CRM", "Sync Master"] },
    { name: "JavaScript", proficiency: 92, projects: ["All Projects", "CodePath Teaching"] },
    { name: "TailwindCSS", proficiency: 85, projects: ["TheraMotive CRM", "Portfolio"] },
    { name: "Bootstrap", proficiency: 80, projects: ["Early Projects"] },
    { name: "HTML/CSS", proficiency: 95, projects: ["CodePath Teaching", "All Projects"] }
  ],
  backend: [
    { name: "Node.js", proficiency: 85, projects: ["TheraMotive CRM", "API Integrations"] },
    { name: "Golang", proficiency: 82, projects: ["Sync Master Backend"] },
    { name: "Python", proficiency: 88, projects: ["Flappy Bird", "Early Projects"] },
    { name: "REST APIs", proficiency: 90, projects: ["TheraMotive", "Social Media Integrations"] },
    { name: "SOAP APIs", proficiency: 75, projects: ["Enterprise Integrations"] }
  ],
  databases: [
    { name: "MongoDB", proficiency: 85, projects: ["TheraMotive CRM"] },
    { name: "PostgreSQL", proficiency: 78, projects: ["Database Systems Course"] },
    { name: "MySQL", proficiency: 80, projects: ["Various Projects"] },
    { name: "SQLite", proficiency: 85, projects: ["Local Development"] }
  ],
  tools: [
    { name: "Git/GitHub", proficiency: 90, projects: ["All Projects"] },
    { name: "Vercel", proficiency: 85, projects: ["Deployment Pipeline"] },
    { name: "Google Cloud Platform", proficiency: 75, projects: ["Cloud Services"] },
    { name: "Jira", proficiency: 88, projects: ["TheraMotive Team Management"] },
    { name: "Postman", proficiency: 85, projects: ["API Testing"] },
    { name: "Figma", proficiency: 70, projects: ["UI/UX Design"] },
    { name: "Jest", proficiency: 80, projects: ["Unit Testing"] },
    { name: "Cypress", proficiency: 85, projects: ["Sync Master E2E Testing"] }
  ]
};

export const experience = [
  {
    id: 1,
    company: "TheraMotive",
    position: "Web Development Lead Intern",
    location: "Brooklyn, New York",
    duration: "May 2024 – August 2024",
    type: "Internship",
    technologies: ["NextJS", "MongoDB", "TypeScript", "Node.js", "TailwindCSS"],
    achievements: [
      "Built a 25+ feature CRM dashboard leading a 12-person development team netting a 15% efficiency increase",
      "Built comprehensive authentication using Clerk to streamline user management, reducing manual overhead by 80%",
      "Optimized a MongoDB database schema for efficient storage and retrieval of diverse data types reducing query response time by 40% (2.5s to 1.5s average)",
      "Built 7+ API Integrations through REST, TypeScript connecting all major social media platforms for real time data",
      "Streamlined workflow by strategically assigning tasks on Jira based on team strengths ensuring 100% on-time delivery"
    ],
    impact: {
      efficiency: "15%",
      teamSize: "12",
      overhead: "80%",
      queryTime: "40%",
      integrations: "7+",
      delivery: "100%"
    }
  },
  {
    id: 2,
    company: "CodePath",
    position: "Tech Fellow",
    location: "Staten Island, New York",
    duration: "August 2024 – November 2024",
    type: "Teaching",
    technologies: ["HTML", "CSS", "JavaScript", "Web Development"],
    achievements: [
      "Delivered 20+ comprehensive web development lessons in HTML/CSS and Javascript with hands on coding exercises improving proficiency by 85% measured by 70+ students completing final projects with 90% accuracy rates",
      "Mentored 25+ students through advanced JavaScript concepts through personalized coding sessions leading to 95% student course completion",
      "Applied various engaging learning materials and hands-on exercise to reinforce web development fundamentals",
      "Organized and led weekly technical discussion groups, mentoring students through complex web development concepts and establishing the best coding practices"
    ],
    impact: {
      lessons: "20+",
      students: "70+",
      proficiency: "85%",
      accuracy: "90%",
      completion: "95%",
      mentorship: "25+"
    }
  }
];

export const projects = [
  {
    id: 1,
    title: "Full Stack Sync Master",
    subtitle: "Real-time Development Synchronization Platform",
    description: "A Next.js frontend integrated with a Go Fiber backend to streamline local development synchronization with AI-powered code suggestions and real-time data syncing.",
    longDescription: "Built a comprehensive development tool that bridges the gap between frontend and backend development workflows. The platform leverages OpenAI API for intelligent code suggestions and uses WebSocket connections for real-time synchronization across development environments.",
    technologies: ["Next.js", "TypeScript", "Golang", "Go Fiber", "OpenAI API", "WebSockets", "Cypress"],
    features: [
      "Real-time development synchronization",
      "AI-powered code suggestions using OpenAI API",
      "WebSocket support for instant data updates",
      "Automated E2E testing with Cypress",
      "AI log analysis for debugging suggestions",
      "Live logging and monitoring"
    ],
    achievements: [
      "Accelerated API debugging by 30%",
      "Cut manual QA time by 40%",
      "AI suggests 50% of fixes during debugging",
      "Increased Full Stack Engineer productivity by 35%",
      "Reduced context switching and tightened feedback loops"
    ],
    metrics: {
      debugging: "30%",
      qaTime: "40%",
      aiFixes: "50%",
      productivity: "35%"
    },
    duration: "June 2025 – Present",
    status: "In Development",
    links: {
      github: "https://github.com/KBesada24/sync-master",
      live: "https://sync-master.vercel.app",
      demo: "https://demo.sync-master.com"
    },
    images: ["/projects/sync-master/dashboard.png", "/projects/sync-master/ai-suggestions.png"],
    category: "Full Stack"
  },
  {
    id: 2,
    title: "TheraMotive CRM Dashboard",
    subtitle: "Healthcare Management Platform",
    description: "Led development of a comprehensive 25+ feature CRM dashboard for healthcare management with a team of 12 developers, achieving 15% efficiency increase.",
    longDescription: "Spearheaded the development of a sophisticated CRM system designed for healthcare professionals. The platform integrates multiple social media APIs, implements robust authentication, and provides real-time data visualization for patient management and business analytics.",
    technologies: ["Next.js", "MongoDB", "TypeScript", "Node.js", "TailwindCSS", "Clerk", "REST APIs"],
    features: [
      "25+ comprehensive CRM features",
      "Real-time social media integrations",
      "Advanced user authentication system",
      "Optimized database queries and schemas",
      "Team collaboration tools",
      "Analytics and reporting dashboard"
    ],
    achievements: [
      "Led 12-person development team",
      "Achieved 15% efficiency increase",
      "Reduced manual overhead by 80%",
      "Improved query response time by 40%",
      "Integrated 7+ major social media platforms",
      "Maintained 100% on-time delivery"
    ],
    metrics: {
      teamSize: "12",
      efficiency: "15%",
      overhead: "80%",
      queryTime: "40%",
      integrations: "7+",
      delivery: "100%"
    },
    duration: "May 2024 – August 2024",
    status: "Completed",
    links: {
      company: "https://theramotive.com"
    },
    category: "Full Stack"
  },
  {
    id: 3,
    title: "CodePath Teaching Platform",
    subtitle: "Web Development Education",
    description: "Delivered comprehensive web development curriculum to 70+ students with hands-on coding exercises, achieving 95% course completion rate.",
    longDescription: "Developed and delivered an intensive web development curriculum focusing on HTML, CSS, and JavaScript fundamentals. Created engaging learning materials and provided personalized mentorship to ensure student success in web development concepts.",
    technologies: ["HTML", "CSS", "JavaScript", "Web Development", "Teaching"],
    features: [
      "20+ comprehensive lesson plans",
      "Hands-on coding exercises",
      "Personalized mentorship sessions",
      "Weekly technical discussion groups",
      "Project-based learning approach",
      "Best practices instruction"
    ],
    achievements: [
      "Taught 70+ students with 90% project accuracy",
      "Achieved 95% course completion rate",
      "Improved student proficiency by 85%",
      "Mentored 25+ students in advanced concepts",
      "Delivered 20+ comprehensive lessons",
      "Established coding best practices"
    ],
    metrics: {
      students: "70+",
      completion: "95%",
      proficiency: "85%",
      mentorship: "25+",
      lessons: "20+",
      accuracy: "90%"
    },
    duration: "August 2024 – November 2024",
    status: "Completed",
    category: "Education"
  },
  {
    id: 4,
    title: "Flappy Bird Clone",
    subtitle: "Python Game Development",
    description: "Developed a fully functional clone of the popular Flappy Bird game in Python using the pygame library with complete game mechanics.",
    longDescription: "Created a complete recreation of the classic Flappy Bird game demonstrating proficiency in Python programming and game development concepts. Implemented physics, collision detection, and scoring systems while maintaining smooth gameplay experience.",
    technologies: ["Python", "Pygame", "Game Development"],
    features: [
      "Complete game mechanics implementation",
      "Gravity and physics simulation",
      "Collision detection system",
      "Score tracking and display",
      "Graphical assets and animations",
      "Game state management"
    ],
    achievements: [
      "Fully functional game clone",
      "Smooth 60 FPS gameplay",
      "Accurate physics implementation",
      "Professional game assets",
      "Complete collision system"
    ],
    duration: "November 2023 – January 2024",
    status: "Completed",
    links: {
      github: "https://github.com/KBesada24/flappy-bird-python"
    },
    category: "Game Development"
  }
];

export const education = {
  institution: "City University of New York, College of Staten Island (CUNY)",
  degree: "Bachelor of Science in Computer Science",
  expectedGraduation: "May 2026",
  location: "Staten Island, New York",
  gpa: "3.5",
  relevantCoursework: [
    "Linear Algebra",
    "Calculus I, II & III",
    "Database Systems",
    "Operating Systems",
    "Data Structures and Algorithms",
    "Software Engineering",
    "Web Development"
  ]
};

export const leadership = [
  {
    organization: "Virgin Mary St. George Summer Camp",
    position: "Camp Leader",
    location: "Staten Island, New York",
    duration: "June 2020 – August 2020",
    achievements: [
      "Led Bible study sessions for kids, fostering their spiritual growth and understanding",
      "Ensured full participation in group activities, promoting teamwork and inclusivity",
      "Coordinated with other counselors and leaders to plan a new trip every week to make sure that all are included"
    ]
  }
];