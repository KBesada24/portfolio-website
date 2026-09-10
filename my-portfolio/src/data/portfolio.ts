export const personalInfo = {
  name: "Kirollos M. Besada",
  title: "AI & Full Stack Developer",
  subtitle: "Building production AI systems and scalable full-stack applications",
  email: "besadakirollos@gmail.com",
  phone: "(646) 247-0165",
  location: "New York, NY",
  links: {
    linkedin: "https://linkedin.com/in/kirollos-besada",
    github: "https://github.com/KBesada24",
    portfolio: "https://besadakirollos.me"
  },
  bio: "AI and Full Stack Developer building production agent systems, financial data workflows, and scalable web applications. Experienced with Python, Java, Model Context Protocol, React, and Next.js, with a track record of reducing complex workflows from minutes to seconds.",
};

export const skills = {
  frontend: [
    { name: "React.js", proficiency: 90, projects: ["CodeCircuit AI", "ScheduleFirst AI", "TheraMotive CRM"] },
    { name: "Next.js", proficiency: 95, projects: ["CodeCircuit AI", "TheraMotive CRM", "Sync Master", "Portfolio"] },
    { name: "TypeScript", proficiency: 88, projects: ["CodeCircuit AI", "ScheduleFirst AI", "TheraMotive CRM"] },
    { name: "JavaScript", proficiency: 92, projects: ["All Projects", "CodePath Teaching"] },
    { name: "TailwindCSS", proficiency: 85, projects: ["CodeCircuit AI", "ScheduleFirst AI", "TheraMotive CRM", "Portfolio"] },
    { name: "Bootstrap", proficiency: 80, projects: ["Early Projects"] },
    { name: "HTML/CSS", proficiency: 95, projects: ["CodePath Teaching", "All Projects"] }
  ],
  backend: [
    { name: "Node.js", proficiency: 85, projects: ["TheraMotive CRM", "API Integrations"] },
    { name: "Golang", proficiency: 82, projects: ["Sync Master Backend"] },
    { name: "Python", proficiency: 88, projects: ["RBC Capital Markets", "ScheduleFirst AI", "Flappy Bird"] },
    { name: "REST APIs", proficiency: 90, projects: ["TheraMotive", "Social Media Integrations"] },
    { name: "SOAP APIs", proficiency: 75, projects: ["Enterprise Integrations"] }
  ],
  databases: [
    { name: "MongoDB", proficiency: 85, projects: ["TheraMotive CRM"] },
    { name: "PostgreSQL", proficiency: 78, projects: ["ScheduleFirst AI", "Database Systems Course"] },
    { name: "MySQL", proficiency: 80, projects: ["Various Projects"] },
    { name: "SQLite", proficiency: 85, projects: ["RBC Capital Markets", "Local Development"] },
    { name: "Convex", proficiency: 82, projects: ["CodeCircuit AI"] }
  ],
  tools: [
    { name: "Git/GitHub", proficiency: 90, projects: ["All Projects"] },
    { name: "Vercel", proficiency: 85, projects: ["Deployment Pipeline"] },
    { name: "Google Cloud Platform", proficiency: 75, projects: ["Cloud Services"] },
    { name: "Jira", proficiency: 88, projects: ["TheraMotive Team Management"] },
    { name: "Postman", proficiency: 85, projects: ["API Testing"] },
    { name: "Figma", proficiency: 70, projects: ["UI/UX Design"] },
    { name: "Jest", proficiency: 80, projects: ["Unit Testing"] },
    { name: "Cypress", proficiency: 85, projects: ["Sync Master E2E Testing"] },
    { name: "Solace Pub/Sub+", proficiency: 80, projects: ["RBC Capital Markets"] }
  ]
};

export const experience = [
  {
    id: 3,
    company: "RBC Capital Markets",
    position: "AI Developer",
    location: "Jersey City, New Jersey",
    duration: "March 2026 – Present",
    type: "Full-time",
    technologies: ["Python", "Java", "Model Context Protocol", "SQLite", "Solace Pub/Sub+", "RHEL", "GitHub Actions", "Ansible"],
    achievements: [
      "Built an AI-powered bond recommendation system with custom Model Context Protocol servers, reducing recommendation generation from 15 minutes to under one minute",
      "Built 3 custom MCPs for real-time financial data retrieval across 60,000+ bonds and securities spanning 11 sectors and 3 regions",
      "Designed a mathematical scoring model with a 12+ point rubric, reducing agent output processing to sub-10-second average runs through automated filtering",
      "Consolidated custom SQLite databases from 5+ data sources into a unified schema, eliminating manual reconciliation and enabling direct agent queries",
      "Deployed Java and Python applications to production RHEL servers with GitHub Actions and Ansible, reducing deployment cycles by 2+ hours per release",
      "Built a real-time market data streaming pipeline by integrating Solace Pub/Sub+ messaging into a custom MCP, eliminating stale bond and securities data during live trading sessions"
    ],
    impact: {
      recommendationTime: "<1 min",
      customMCPs: "3",
      securities: "60K+",
      processingTime: "<10s",
      dataSources: "5+",
      deploymentSavings: "2+ hrs"
    },
    featured: true
  },
  {
    id: 1,
    company: "TheraMotive",
    position: "Software Engineer Lead Intern",
    location: "Brooklyn, New York",
    duration: "May 2024 – August 2024",
    type: "Internship",
    technologies: ["NextJS", "MongoDB", "TypeScript", "Node.js", "TailwindCSS"],
    achievements: [
      "Delivered a 25+ feature CRM dashboard that increased operational efficiency by 15% while leading a 12-person development team",
      "Developed 7+ RESTful TypeScript integrations with major social platforms, reducing data latency by 50% and increasing analytics coverage by 80%",
      "Translated stakeholder requirements into technical specifications, enabling on-time delivery of every mandatory application requirement"
    ],
    impact: {
      efficiency: "15%",
      teamSize: "12",
      integrations: "7+",
      dataLatency: "50%",
      dataCoverage: "80%",
      delivery: "100%"
    },
    featured: false
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
    },
    featured: false
  }
];

export const projects = [
  {
    id: 5,
    title: "CodeCircuit AI",
    subtitle: "AI-Powered Technical Interview Workspace",
    description: "Built and launched an all-in-one interview preparation workspace with adaptive practice, real-time AI feedback, and progress tracking across technical, behavioral, and system design interviews.",
    longDescription: "Designed and shipped a unified interview preparation platform that brings AI-generated questions, an in-browser coding workspace, streaming feedback, Socratic coaching, and learning analytics into one experience. The product supports multiple practice formats while helping users identify strengths, close skill gaps, and prepare with less context switching.",
    technologies: ["Next.js", "TypeScript", "React", "Convex", "Clerk", "LLM APIs", "Tailwind CSS"],
    features: [
      "Technical, behavioral, and system design practice modes",
      "Real-time AI scoring and improvement recommendations",
      "Socratic Learn Mode with progressive guidance",
      "In-browser code editor with multi-language support",
      "AI-generated questions tailored to role and experience",
      "Session history and progress analytics"
    ],
    achievements: [
      "Reduced prep-tool switching by 67% across 20+ beta testers",
      "Delivered AI scoring and recommendations in under 60 seconds while tracking 5+ learning metrics",
      "Built a three-level Socratic Learn Mode that helped 60% of users complete problems independently versus a 35% baseline",
      "Unified questions, coding exercises, feedback, and analytics in one workspace"
    ],
    metrics: {
      practiceModes: "3",
      betaTesters: "20+",
      lessSwitching: "67%",
      feedbackTime: "<60s"
    },
    duration: "January 2026 – March 2026",
    status: "Live",
    links: {
      live: "https://codecircuit.app"
    },
    featured: true,
    category: "Full Stack"
  },
  {
    id: 6,
    title: "ScheduleFirst AI",
    subtitle: "AI-Powered Course Scheduling Platform",
    description: "Built an AI scheduling platform that generates conflict-free CUNY course schedules around student preferences, professor quality, and time availability.",
    longDescription: "Designed a full-stack scheduling workspace that combines course search, professor intelligence, conflict detection, and AI-assisted optimization. A FastAPI and FastMCP backend coordinates CUNY and professor data through Supabase, while the React interface lets students compare and refine schedules in real time.",
    technologies: ["React", "TypeScript", "Vite", "Python", "FastAPI", "FastMCP", "Supabase", "PostgreSQL", "Google Gemini API"],
    features: [
      "AI-generated schedules based on personalized constraints",
      "Automatic class-time and location conflict detection",
      "Professor ratings aggregated across multiple sources",
      "Real-time course and instructor search filters",
      "Interactive calendar and schedule comparison",
      "Unified student dashboard backed by Supabase"
    ],
    achievements: [
      "Generated 80% conflict-free schedules and improved user satisfaction by 35%",
      "Automated course selection 70% faster across approximately 1,500 instructors with a custom MCP server",
      "Reduced schedule-optimization time by 45% for a platform designed to support 10,000+ students"
    ],
    metrics: {
      conflictFree: "80%",
      satisfaction: "35%",
      fasterSelection: "70%",
      optimizationTime: "45%"
    },
    duration: "October 2025 – December 2025",
    status: "Completed",
    links: {
      github: "https://github.com/KBesada24/ScheduleFirst-AI"
    },
    featured: true,
    category: "Full Stack"
  },
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
    featured: false,
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
    featured: false,
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
    featured: false,
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
    featured: false,
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
