import heroImage from '../assets/images/profile-hero.png';
import connectImage from '../assets/images/profile-connect.png';

// Project images loaded dynamically to reduce bundle size
const crm_image_1 = new URL('../assets/crm_samples/CRM_image_1.png', import.meta.url).href;
const crm_image_2 = new URL('../assets/crm_samples/CRM_image_2.png', import.meta.url).href;
const crm_image_3 = new URL('../assets/crm_samples/CRM_image_3.png', import.meta.url).href;
const crm_image_4 = new URL('../assets/crm_samples/CRM_image_4.png', import.meta.url).href;
const crm_image_5 = new URL('../assets/crm_samples/CRM_image_5.png', import.meta.url).href;
const crm_image_6 = new URL('../assets/crm_samples/CRM_image_6.png', import.meta.url).href;
const erp_image_1 = new URL('../assets/erp_samples/ERP_image_1.png', import.meta.url).href;
const erp_image_2 = new URL('../assets/erp_samples/ERP_image_2.png', import.meta.url).href;
const erp_image_3 = new URL('../assets/erp_samples/ERP_image_3.png', import.meta.url).href;
const erp_image_4 = new URL('../assets/erp_samples/ERP_image_4.png', import.meta.url).href;
const erp_image_5 = new URL('../assets/erp_samples/ERP_image_5.png', import.meta.url).href;
const erp_image_6 = new URL('../assets/erp_samples/ERP_image_6.png', import.meta.url).href;
const medico_plus_image_1 = new URL('../assets/medicoplus_samples/MEDICOPLUS_image_1.jpeg', import.meta.url).href;
const medico_plus_image_2 = new URL('../assets/medicoplus_samples/MEDICOPLUS_image_2.jpeg', import.meta.url).href;
const medico_plus_image_3 = new URL('../assets/medicoplus_samples/MEDICOPLUS_image_3.jpeg', import.meta.url).href;
const medico_plus_image_4 = new URL('../assets/medicoplus_samples/MEDICOPLUS_image_4.jpeg', import.meta.url).href;
const medico_plus_image_5 = new URL('../assets/medicoplus_samples/MEDICOPLUS_image_5.jpeg', import.meta.url).href;
const movie_mate_image_1 = new URL('../assets/movie_mate_samples/MOVIE_MATE_image_1.png', import.meta.url).href;
const movie_mate_image_2 = new URL('../assets/movie_mate_samples/MOVIE_MATE_image_2.png', import.meta.url).href;
const movie_mate_image_3 = new URL('../assets/movie_mate_samples/MOVIE_MATE_image_3.png', import.meta.url).href;
const movie_mate_image_4 = new URL('../assets/movie_mate_samples/MOVIE_MATE_image_4.png', import.meta.url).href;
const movie_mate_image_5 = new URL('../assets/movie_mate_samples/MOVIE_MATE_image_5.png', import.meta.url).href;
const chat_app_image_1 = new URL('../assets/chat_app_samples/CHAT_APP_image_1.png', import.meta.url).href;
const chat_app_image_2 = new URL('../assets/chat_app_samples/CHAT_APP_image_2.png', import.meta.url).href;
const chat_app_image_3 = new URL('../assets/chat_app_samples/CHAT_APP_image_3.png', import.meta.url).href;
const chat_app_image_4 = new URL('../assets/chat_app_samples/CHAT_APP_image_4.png', import.meta.url).href;
const hrm_image_1 = new URL('../assets/hrm_samples/HRM_image_1.png', import.meta.url).href;
const exercise_helper_image_1 = new URL('../assets/exercise_helper_samples/EXERCISE_HELPER_image_1.png', import.meta.url).href;
const exercise_helper_image_2 = new URL('../assets/exercise_helper_samples/EXERCISE_HELPER_image_2.png', import.meta.url).href;

export const portfolioData = {
  name: 'Aswin Anilkumar',
  role: 'Software Engineer',
  designation: 'Software Engineer | MERN Stack | Full Stack Web Development',
  experience: '3+ years',
  location: 'Kochi, Kerala, India - 682017',
  addressUrl: 'https://maps.app.goo.gl/ePevQghd9VWnmvX36',
  phone: '+91 7356450725',
  email: 'aswinanilkumar.hex@gmail.com',
  resumeUrl: `${import.meta.env.BASE_URL}Aswin_Anilkumar_MERN_Resume.pdf`,
  images: {
    hero: heroImage,
    connect: connectImage,
  },
  socialLinks: {
    linkedin: 'https://www.linkedin.com/in/aswin-anilkumar-2190911b1/',
    email: 'mailto:aswinanilkumar.hex@gmail.com',
    github: 'https://github.com/hextrongit',
    gitlab: 'https://gitlab.com/achut0725',
    leetcode: 'https://leetcode.com/u/hextron/',
    instagram: 'https://www.instagram.com/aswin_vrs/',
    facebook: 'https://www.facebook.com/share/18tyGG9dhj/',
  },
  roleSwitch: ['Software Engineer', 'Full Stack Developer', 'MERN Stack Developer', 'Frontend Developer', 'React Developer', 'UI Engineer', 'Web Developer'],
  about: [
    'Software Engineer with 3+ years of full stack experience building scalable web applications across CRM, ERP, HRM, and Healthcare domains.',
    'Proficient in the MERN stack with hands-on exposure to Laravel and .NET backend ecosystems. Skilled in modular frontend architecture, RESTful API development, and delivering production-grade platforms.',
    'Focused on building performant, maintainable, and scalable web systems.',
  ],
  skills: {
    Frontend: ['React.js', 'TypeScript', 'JavaScript (ES6+)', 'HTML', 'CSS', 'Redux', 'Zustand'],
    Backend: ['Node.js', 'Express.js', 'REST APIs', 'WebSockets', 'Webhook Integration'],
    Database: ['MongoDB', 'Mongoose', 'Firebase', 'Firestore'],
    Tools: ['Git', 'Bitbucket', 'JIRA', 'Postman', 'Swagger', 'CI/CD', 'VS Code', 'Cursor', 'Claude AI', 'Docker', 'Redis', 'NGINX'],
    Technologies: ['JWT', 'RBAC', 'OAuth', 'bcrypt', 'SonarQube', 'OWASP ZAP', 'Burp Suite'],
  },
  uiStyling: ['Tailwind CSS', 'Material UI', 'Chakra UI', 'Bootstrap', 'React Bootstrap', 'Responsive Design'],
  testing: ['Jest', 'React Testing Library'],
  experienceItems: [
    {
      company: 'Direct Axis Technology',
      location: 'UL Cyberpark, Kozhikode, Kerala',
      position: 'Software Engineer',
      duration: 'May 2024 - Present',
      techStack: [
        'React.js',
        'TypeScript',
        'Redux',
        'Node.js',
        'Express.js',
        'Laravel',
        'Inertia.js',
        '.NET',
        'Docker',
        'Redis',
        'NGINX'
      ],
      responsibilities: [
        'Contributed to frontend architecture and development of scalable CRM, ERP, and HRM platforms by introducing reusable component patterns and reducing duplicate logic.',
        'Participated in architectural decisions involving state management strategy, component design standards, and API integration patterns.',
        'Collaborated with backend teams working on Laravel and .NET services to integrate business workflows through REST APIs.',
        'Improved development efficiency by standardizing shared component patterns across multiple modules.',
        'Optimized component rendering and state updates to improve application responsiveness and user experience.',
        'Led pull request reviews and promoted frontend code quality standards within a Laravel and Inertia.js ecosystem.',
        'Worked within a containerized enterprise environment leveraging Docker, Redis, and NGINX as part of the application infrastructure.',
      ],
    },
    {
      company: 'Kaizen Star Technologies',
      location: 'Infopark, Kochi, Kerala',
      position: 'Software Engineer',
      duration: 'Jun 2023 - Apr 2024',
      techStack: ['React', 'Node.js', 'Express.js', '.NET', 'C#', 'REST APIs'],
      responsibilities: [
        'Worked on full stack development for Medicoplus Hospital Management System covering patient management, billing, and consultation workflows.',
        'Built and integrated REST APIs using Node.js and Express.js for patient records, billing, and insurance modules.',
        'Collaborated with .NET backend services, integrating APIs into React-based frontend modules.',
        'Improved application responsiveness by optimizing rendering logic, state management, and API data flow.',
      ],
    },
    {
      company: 'Soften Technologies',
      location: 'Kochi, Kerala',
      position: 'Junior MERN Stack Developer',
      duration: 'Nov 2022 - May 2023',
      techStack: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'JWT'],
      responsibilities: [
        'Developed full-stack web applications using the MongoDB, Express.js, React.js, and Node.js stack.',
        'Built reusable frontend components and integrated secure REST APIs with JWT authentication.',
      ],
    },
  ],
  projects: [
    {
      id: 'crm-system',
      title: 'Enterprise CRM System',
      description:
        'Production-grade CRM platform supporting lead management, opportunity tracking, customer lifecycle management, and operational workflows across multiple business functions.',
      category: 'Enterprise Systems',
      techStack: [
        'React.js',
        'TypeScript',
        'Redux',
        'Laravel',
        'Inertia.js',
        'REST APIs',
        'Docker',
        'Redis',
        'NGINX'
      ],
      images: [crm_image_1, crm_image_2, crm_image_3, crm_image_4, crm_image_5, crm_image_6],
      github: '',
      demo: '',
      featured: true,
      highlights: [
        'Architected reusable UI patterns for forms, tables, filters, modals, and workflow-driven components.',
        'Implemented structured state management for user context, permissions, and cross-module business workflows.',
        'Collaborated with backend and product teams to integrate complex business processes through REST APIs.',
        'Worked within a Dockerized enterprise environment utilizing Redis and NGINX as part of the application infrastructure.',
      ],
    },
    {
      id: 'erp-system',
      title: 'Enterprise ERP Platform',
      description:
        'Enterprise resource planning platform supporting operational workflows, master data management, reporting, and business process automation.',
      category: 'Enterprise Systems',
      techStack: [
        'React.js',
        'TypeScript',
        'Redux',
        'Laravel',
        'REST APIs',
        'Docker',
        'Redis',
        'NGINX'
      ],
      images: [erp_image_1, erp_image_2, erp_image_3, erp_image_4, erp_image_5, erp_image_6],
      github: '',
      demo: '',
      featured: true,
      highlights: [
        'Developed modular frontend architecture supporting scalable operational workflows and business modules.',
        'Integrated ERP processes with backend services through structured API communication patterns.',
        'Standardized reusable component patterns to improve consistency across modules.',
        'Participated in frontend architecture decisions involving state management and component design standards.',
        'Contributed to applications deployed in a Dockerized environment leveraging Redis and NGINX.',
      ],
    },
    {
      id: 'medicoplus-hms',
      title: 'Medicoplus Hospital Management System',
      description:
        'Production-grade healthcare platform supporting consultation workflows, patient records, billing, and operational modules.',
      category: 'Healthcare',
      techStack: [
        'React.js',
        '.NET (C#)',
        'REST APIs',
        'Redux'
      ],
      images: [medico_plus_image_1, medico_plus_image_2, medico_plus_image_3, medico_plus_image_4, medico_plus_image_5],
      github: '',
      demo: '',
      featured: true,
      highlights: [
        'Designed and enhanced the Consultation module for patient scheduling and workflow management.',
        'Integrated APIs for billing, insurance, and patient record workflows.',
        'Optimized rendering logic and state management to improve responsiveness.',
      ],
    },
    {
      id: 'movie-mate',
      title: 'Movie Mate - Ticket Booking Platform for Ceniplex',
      description: 'Ticket booking platform with user and admin modules, secure Stripe payment integration, and webhook-based validation.',
      category: 'Full Stack',
      techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe', 'Redux'],
      images: [movie_mate_image_1, movie_mate_image_2, movie_mate_image_3, movie_mate_image_4, movie_mate_image_5],
      github: '',
      demo: '',
      featured: true,
      highlights: ['Implemented Redux-based cart management with lazy loading optimization.'],
    },
    {
      id: 'exercise-helper',
      title: 'Exercise Helper',
      description:
        'Responsive Progressive Web App (PWA) designed to assist users with workout tracking, interval training, voice-based repetition counting, and daily fitness monitoring.',
      category: 'Fitness',
      techStack: [
        'React.js',
        'Redux Toolkit',
        'JavaScript',
        'PWA',
        'Web Speech API',
        'CSS3'
      ],
      images: [
        exercise_helper_image_1,
        exercise_helper_image_2,
      ],
      github: '',
      demo: 'https://exercise-helper-ruby.vercel.app',
      featured: true,
      highlights: [
        'Built a mobile-first responsive Progressive Web App for workout tracking and interval training.',
        'Implemented voice-based repetition counting using the Web Speech API for hands-free workout sessions.',
        'Created workout analytics, customizable settings, and local JSON export functionality for workout reports and history.'
      ],
    },
    {
      id: 'real-time-chat',
      title: 'Real-Time Chat Application',
      description: 'Full-stack real-time chat supporting concurrent users with low-latency delivery via WebSocket communication.',
      category: 'Full Stack',
      techStack: ['React (Vite)', 'Node.js', 'Express', 'Socket.io', 'JWT', 'MongoDB'],
      images: [chat_app_image_1, chat_app_image_2, chat_app_image_3, chat_app_image_4],
      github: '',
      demo: '',
      featured: true,
      highlights: [
        'Implemented JWT authentication with RBAC and bcrypt password hashing for enterprise-grade security.',
        'Optimized state management and socket lifecycle handling, reducing memory leaks and unnecessary re-renders.',
      ],
    },
    {
      id: 'hrm-system',
      title: 'HRM Management System',
      description:
        'Human Resource Management platform supporting employee management, attendance workflows, organizational administration, and operational processes.',
      category: 'Enterprise Systems',
      techStack: [
        'React.js',
        'TypeScript',
        'Redux',
        'Laravel',
        'REST APIs',
        'Docker',
        'Redis',
        'NGINX'
      ],
      images: [hrm_image_1],
      github: '',
      demo: '',
      featured: true,
      highlights: [
        'Built reusable interfaces for employee management, attendance tracking, and administrative workflows.',
        'Implemented role-based workflows and structured state management across HR modules.',
        'Collaborated with backend teams to integrate business processes through REST APIs.',
        'Maintained consistent component architecture and shared UI standards across modules.',
        'Worked within a Dockerized deployment ecosystem utilizing Redis and NGINX infrastructure.',
      ],
    }
  ],
  achievements: [
    'Reduced duplicate component logic by introducing reusable component patterns across CRM, ERP, and HRM platforms.',
    'Improved page load performance by optimizing component rendering and state updates.',
    'Led pull request reviews and enforced code quality standards across a team of 5+ developers.',
    // TODO: Add awards, recognitions, publications, or open-source achievements when available.
  ],
  education: [
    {
      degree: 'Bachelor of Science in Physics',
      institution: 'Sreenarayana Arts & Science College, MG University',
      duration: 'Jun 2019 - Apr 2022',
    },
  ],
  certifications: [
    {
      name: 'MERN Stack Certification',
      issuer: 'Soften Technologies',
      duration: 'May 2022 - Oct 2022',
      credentialUrl: '',
    },
  ],
  placeholders: {
    github: 'TODO: Add GitHub profile URL.',
    gitlab: 'TODO: Add GitLab profile URL.',
    leetcode: 'TODO: Add LeetCode profile URL.',
    instagram: 'TODO: Add Instagram profile URL.',
    facebook: 'TODO: Add Facebook profile URL.',
    projectImages: 'TODO: Add project screenshots, GitHub URLs, and demo URLs.',
    contactForm: 'Contact form will be available when the backend/service is ready. please use email or call instead.',
  },
};
