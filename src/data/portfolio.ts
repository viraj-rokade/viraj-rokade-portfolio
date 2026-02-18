import { IconType } from 'react-icons'
import {
  SiReact, SiRedux, SiNodedotjs, SiTypescript, SiJavascript,
  SiPostgresql, SiMongodb, SiDocker, SiKubernetes, SiJenkins,
  SiAmazonwebservices, SiGraphql, SiGit, SiTailwindcss,
  SiExpress, SiFirebase, SiJest, SiSass, SiHtml5, SiCss3,
  SiJquery, SiBootstrap, SiMaterialdesign, SiPostman, SiJira,
  SiGithub, SiBitbucket
} from 'react-icons/si'

export interface Skill {
  name: string
  icon: IconType
  color: string
  category: 'frontend' | 'backend' | 'devops' | 'tools'
}

export interface Experience {
  id: string
  type: 'work' | 'education'
  title: string
  subtitle: string
  organization: string
  location: string
  period: string
  description: string
  highlights: string[]
  tags: string[]
}

export interface Project {
  id: string
  title: string
  subtitle: string
  description: string
  longDescription: string
  tags: string[]
  highlights: string[]
  image: string
  gradient: string
  links: { label: string; url: string }[]
  stats?: { label: string; value: string }[]
}

export interface BlogPost {
  id: string
  title: string
  excerpt: string
  date: string
  readTime: string
  tags: string[]
  gradient: string
  content: string
  image: string
}

export const personalInfo = {
  name: 'Viraj Rokade',
  firstName: 'Viraj',
  lastName: 'Rokade',
  title: 'Application Developer',
  roles: ['Full Stack Developer', 'Application Developer', 'Frontend Engineer', 'React Specialist'],
  linkedin: 'https://www.linkedin.com/in/viraj-rokade/',
  github: 'https://github.com/viraj-rokade',
  yearsExp: '8+',
  summary: `Results-driven Application Developer with over 8 years of experience in creating, enhancing, and maintaining cutting-edge front-end applications. Expertise in leading cross-functional teams to deliver user-focused solutions that prioritize usability, performance, and security. Certified AWS Cloud Practitioner with proven skills in React, TypeScript, and Node.js to develop scalable, efficient applications.`,
  shortBio: `I craft digital experiences that blend elegant design with robust engineering. From scaling applications serving 100K+ users to leading cross-functional teams, I bring ideas to life with clean code and creative problem-solving.`,
}

export const skills: Skill[] = [
  { name: 'React', icon: SiReact, color: '#61DAFB', category: 'frontend' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6', category: 'frontend' },
  { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E', category: 'frontend' },
  { name: 'Redux', icon: SiRedux, color: '#764ABC', category: 'frontend' },
  { name: 'HTML5', icon: SiHtml5, color: '#E34F26', category: 'frontend' },
  { name: 'CSS3', icon: SiCss3, color: '#1572B6', category: 'frontend' },
  { name: 'Sass', icon: SiSass, color: '#CC6699', category: 'frontend' },
  { name: 'Tailwind', icon: SiTailwindcss, color: '#06B6D4', category: 'frontend' },
  { name: 'Bootstrap', icon: SiBootstrap, color: '#7952B3', category: 'frontend' },
  { name: 'Material-UI', icon: SiMaterialdesign, color: '#0081CB', category: 'frontend' },
  { name: 'jQuery', icon: SiJquery, color: '#0769AD', category: 'frontend' },
  { name: 'Node.js', icon: SiNodedotjs, color: '#339933', category: 'backend' },
  { name: 'Express.js', icon: SiExpress, color: '#FFFFFF', category: 'backend' },
  { name: 'GraphQL', icon: SiGraphql, color: '#E10098', category: 'backend' },
  { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1', category: 'backend' },
  { name: 'MongoDB', icon: SiMongodb, color: '#47A248', category: 'backend' },
  { name: 'Firebase', icon: SiFirebase, color: '#FFCA28', category: 'backend' },
  { name: 'AWS', icon: SiAmazonwebservices, color: '#FF9900', category: 'devops' },
  { name: 'Docker', icon: SiDocker, color: '#2496ED', category: 'devops' },
  { name: 'Kubernetes', icon: SiKubernetes, color: '#326CE5', category: 'devops' },
  { name: 'Jenkins', icon: SiJenkins, color: '#D24939', category: 'devops' },
  { name: 'Git', icon: SiGit, color: '#F05032', category: 'tools' },
  { name: 'GitHub', icon: SiGithub, color: '#FFFFFF', category: 'tools' },
  { name: 'Bitbucket', icon: SiBitbucket, color: '#0052CC', category: 'tools' },
  { name: 'Jest', icon: SiJest, color: '#C21325', category: 'tools' },
  { name: 'Postman', icon: SiPostman, color: '#FF6C37', category: 'tools' },
  { name: 'JIRA', icon: SiJira, color: '#0052CC', category: 'tools' },
]

export const experiences: Experience[] = [
  {
    id: 'adp-dev-2',
    type: 'work',
    title: 'Application Developer',
    subtitle: 'Cloud Migration | Scrum Master',
    organization: 'ADP',
    location: 'Roseland, NJ, USA',
    period: 'Sept 2024 - Present',
    description: 'Promoted to Application Developer role, taking on a more significant role in project management and cross-team collaboration on mission-critical enterprise applications.',
    highlights: [
      'Served as Scrum Master, facilitating daily stand-ups, sprint planning, retrospectives, and review meetings using JIRA Scrum Board, tracking project plans, targets, and progress reports in an agile environment',
      'Guided team and stakeholders in adopting AWS best practices for cloud integration, leveraging cloud-native solutions to enhance scalability, reliability, and operational efficiency, resulting in 30% improvement in system performance and 20% reduction in operational costs',
      'Spearheaded development on mission-critical tasks, optimizing workflows and enhancing application efficiency with React, TypeScript, and Node.js',
    ],
    tags: ['AWS', 'Cloud Migration', 'Scrum Master', 'Agile', 'React', 'TypeScript'],
  },
  {
    id: 'adp-dev-1',
    type: 'work',
    title: 'Associate Application Developer',
    subtitle: 'Built SmartCAPture | 60% fewer conflicts',
    organization: 'ADP',
    location: 'Roseland, NJ, USA',
    period: 'Jul 2021 - Sept 2024',
    description: "Developed and streamlined 'SmartCAPture', an innovative app automating business case funding requests, resulting in reduction in time spent on manualdata entry and increased accuracy for ADP's annual budget planning andcapital investment analysis processes.",
    highlights: [
      'Engineered custom WebSocket functionality to resolve conflicts during dual editing, enabling seamless live communication on a multi-Node server with socket and Postgres Adapter, reducing collaboration issues by 60%',
      'Orchestrated bug fixes, feature implementations, and UI enhancements using React, OneUX, Material-UI, Node.js, and TypeScript, leading to a 40% reduction in customer support tickets',
      'Managed database operations using PostgreSQL and developed RESTful APIs with Node.js, Express.js, and Axios; facilitated daily PR reviews and production code deployment using Docker Containers, Jenkins, and Bitbucket',
    ],
    tags: ['WebSocket', 'Node.js', 'PostgreSQL', 'REST APIs', 'Docker', 'Material-UI'],
  },
  {
    id: 'adp-intern',
    type: 'work',
    title: 'Application Developer - Intern',
    subtitle: 'Executive Dashboard | 30% faster queries',
    organization: 'ADP',
    location: 'Roseland, NJ, USA',
    period: 'Jun 2020 - Aug 2020',
    description: 'Expanded dashboard functionality and deployed production-ready code using Docker, Kubernetes, Jenkins, and Git.',
    highlights: [
      'Conceptualized data visualization for executive dashboard using React and Redux',
      'Optimized SQL queries resulting in 30% reduction in query execution time',
      'Recognized by Global CIO and appreciated by a team of 20 for exceptional work',
    ],
    tags: ['Data Visualization', 'Redux', 'SQL Optimization', 'Kubernetes', 'Jenkins'],
  },
  {
    id: 'stalkerscode',
    type: 'work',
    title: 'Frontend Developer, Co-Founder & Director',
    subtitle: 'Startup Founder | 20+ Projects Delivered',
    organization: 'STALKERSCODE PVT. LTD.',
    location: 'Mumbai, India',
    period: 'Dec 2016 - Jun 2019',
    description: 'Launched a startup offering e-commerce development services, UI design, dashboard management, and web security solutions.',
    highlights: [
      'Led team of 8 programmers, designers, and testers to deliver high-quality products',
      'Launched Skill Housie gaming portal serving 100,000+ users',
      'Completed 20+ customized projects for local and international clients',
    ],
    tags: ['JavaScript', 'Node.js', 'MongoDB', 'Leadership', 'Entrepreneurship'],
  },
  {
    id: 'stevens-ms',
    type: 'education',
    title: 'Master of Science in Computer Science',
    subtitle: 'GPA: 3.9 / 4.0',
    organization: 'Stevens Institute of Technology',
    location: 'Hoboken, NJ, USA',
    period: 'Aug 2019 - May 2021',
    description: 'Pursued advanced studies in Computer Science with focus on web technologies, HCI, and software engineering methodologies.',
    highlights: [
      'Web Programming', 
      'Human-Computer Interaction',
      'Agile Methods of Software Development',
      'Fundamentals of Cybersecurity and Networking',
    ],
    tags: ['Computer Science', 'GPA 3.9', 'Research'],
  },
  {
    id: 'mumbai-be',
    type: 'education',
    title: 'Bachelor of Engineering in Computer Engineering',
    subtitle: 'Student Council Committee Head',
    organization: 'University of Mumbai',
    location: 'Mumbai, India',
    period: '2013 - May 2017',
    description: 'Studied core computer engineering principles including data structures, algorithms, databases, and software engineering.',
    highlights: [
      'Computer Engineering Fundamentals',
      'Data Structures & Algorithms',
      'Database Systems',
      'Software Engineering',
    ],
    tags: ['Computer Engineering Foundations', 'Leadership'],
  },
]

export const projects: Project[] = [
  {
    id: 'smartcapture',
    title: 'SmartCAPture',
    subtitle: 'Enterprise Budget Automation',
    description: 'Innovative app automating business case funding requests at ADP, streamlining annual budget planning and capital investment analysis.',
    longDescription: `SmartCAPture is an enterprise-grade application built to automate the complex process of business case funding requests at ADP. The platform streamlined annual budget planning and capital investment analysis, significantly reducing time spent on manual data entry while increasing accuracy.\n\nKey achievements include engineering custom WebSocket functionality for real-time collaboration, resolving editing conflicts on multi-Node servers with PostgreSQL Adapter integration. The application features a sophisticated React-based UI with TypeScript for type safety and Material-UI for consistent enterprise design.`,
    tags: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'WebSocket', 'Material-UI'],
    highlights: [
      'Real-time collaborative editing with WebSocket',
      'Reduced collaboration conflicts by 60%',
      '40% reduction in customer support tickets',
      'Automated budget planning workflow',
    ],
    image: '',
    gradient: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
    links: [],
    stats: [
      { label: 'Conflict Reduction', value: '60%' },
      { label: 'Support Tickets', value: '-40%' },
      { label: 'Team Size', value: '20+' },
    ],
  },
  {
    id: 'uncovered-media',
    title: 'Uncovered Media',
    subtitle: 'Social Media Authenticity Platform',
    description: 'A solution to counter social media misuse and uplift authentic user stories, tested with 150 users at Stevens Institute.',
    longDescription: `Uncovered Media was pioneered as a Signature Project at Stevens Institute of Technology to address the growing problem of social media misuse. The platform was designed to uplift authentic user stories and counter misinformation.\n\nThe application was rigorously tested with 150 users, establishing its potential for widespread adoption and impact. Built with a focus on user experience, accessibility, and security using Node.js, JavaScript ES6, MongoDB, and Express.js with integrated Google APIs.`,
    tags: ['Node.js', 'JavaScript ES6', 'MongoDB', 'Express.js', 'Google APIs'],
    highlights: [
      'Tested with 150+ users',
      'Google Geolocation & Captcha API integration',
      'Robust HTTP routing with Express.js',
      'Focus on UX accessibility and security',
    ],
    image: '',
    gradient: 'linear-gradient(135deg, #22d3ee, #6366f1)',
    links: [],
    stats: [
      { label: 'Test Users', value: '150+' },
      { label: 'APIs Integrated', value: '3+' },
      { label: 'Platform', value: 'Web' },
    ],
  },
  {
    id: 'skill-housie',
    title: 'Skill Housie',
    subtitle: 'Interactive Gaming Portal',
    description: 'Online gaming portal enabling 100,000+ users to learn computational skills through gamification with enhanced engagement.',
    longDescription: `Skill Housie is an interactive online gaming portal designed to make learning computational skills fun and engaging through gamification. The platform successfully served over 100,000 users, proving that gamified learning can drive both engagement and knowledge retention.\n\nBuilt as a key product at STALKERSCODE PVT. LTD., the portal features interactive game mechanics, real-time scoring, and progressive difficulty levels to keep users motivated and learning.`,
    tags: ['JavaScript', 'Node.js', 'MongoDB', 'Real-time', 'Gamification'],
    highlights: [
      '100,000+ active users',
      'Gamified learning experience',
      'Real-time scoring system',
      'Enhanced user engagement & knowledge retention',
    ],
    image: '',
    gradient: 'linear-gradient(135deg, #f472b6, #fbbf24)',
    links: [],
    stats: [
      { label: 'Users', value: '100K+' },
      { label: 'Type', value: 'Gaming' },
      { label: 'Impact', value: 'EdTech' },
    ],
  },
  {
    id: 'executive-dashboard',
    title: 'Executive Dashboard',
    subtitle: 'Data Visualization Platform',
    description: 'Enterprise executive dashboard consolidating 80% of complex information into a single view using React and Redux.',
    longDescription: `Developed during an internship at ADP, this executive dashboard was designed to consolidate complex business data into an intuitive, single-page view. The dashboard helped executives make data-driven decisions by presenting key metrics and KPIs in real-time.\n\nThe project involved conceptualizing advanced data visualization techniques, optimizing SQL queries for a 30% reduction in execution time, and restructuring the entire UI using Material-UI framework.`,
    tags: ['React', 'Redux', 'Material-UI', 'SQL', 'Data Visualization'],
    highlights: [
      '80% complex data consolidated into single view',
      '30% reduction in SQL query execution time',
      '15% decrease in user error rates',
      'Recognized by Global CIO',
    ],
    image: '',
    gradient: 'linear-gradient(135deg, #34d399, #6366f1)',
    links: [],
    stats: [
      { label: 'Data Consolidated', value: '80%' },
      { label: 'Query Speed', value: '+30%' },
      { label: 'Error Rate', value: '-15%' },
    ],
  },
  {
    id: 'digital-notice-board',
    title: 'Digital Notice Board',
    subtitle: 'Institutional Communication System',
    description: 'Digital communication system for educational institutions serving 5,000-6,000 users with real-time updates.',
    longDescription: `The Digital Notice Board was an innovative solution designed for educational institutions to modernize their communication systems. Serving 5,000-6,000 users, the platform replaced traditional physical notice boards with a dynamic, digital solution.\n\nThe system featured real-time notifications, content management capabilities, and a responsive design accessible across all devices, making institutional communication more efficient and accessible.`,
    tags: ['JavaScript', 'Node.js', 'Web Development', 'Real-time'],
    highlights: [
      '5,000-6,000 users served',
      'Real-time notification system',
      'Content management system',
      'Cross-device responsive design',
    ],
    image: '',
    gradient: 'linear-gradient(135deg, #fbbf24, #f472b6)',
    links: [],
    stats: [
      { label: 'Users', value: '6K+' },
      { label: 'Platform', value: 'Web' },
      { label: 'Sector', value: 'EdTech' },
    ],
  },
  {
    id: 'ecommerce-projects',
    title: 'E-Commerce Solutions',
    subtitle: '20+ Client Projects',
    description: 'Portfolio of 20+ customized e-commerce projects and applications for local and international clients at STALKERSCODE.',
    longDescription: `As Co-Founder and Director of STALKERSCODE PVT. LTD., led the development and delivery of over 20 customized e-commerce projects for diverse clients. Each project was tailored to specific business needs, incorporating custom UI/UX design, secure payment integrations, and scalable architectures.\n\nThe projects ranged from small business storefronts to comprehensive e-commerce platforms, all built with a focus on performance, security, and user experience.`,
    tags: ['JavaScript', 'Node.js', 'E-Commerce', 'UI/UX', 'Full Stack'],
    highlights: [
      '20+ projects delivered',
      'Local and international clients',
      'Custom UI/UX design for each client',
      'High client satisfaction and repeat business',
    ],
    image: '',
    gradient: 'linear-gradient(135deg, #8b5cf6, #22d3ee)',
    links: [],
    stats: [
      { label: 'Projects', value: '20+' },
      { label: 'Clients', value: 'Global' },
      { label: 'Satisfaction', value: 'High' },
    ],
  },
]

export const blogPosts: BlogPost[] = [
  {
    id: 'react-performance',
    title: 'Mastering React Performance: Lessons from Enterprise Apps',
    excerpt: 'Deep dive into performance optimization techniques I learned while building enterprise applications at ADP, including memoization strategies, virtual scrolling, and smart re-rendering patterns.',
    date: 'Jan 2025',
    readTime: '8 min read',
    tags: ['React', 'Performance', 'Enterprise'],
    gradient: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
    image: '',
    content: `Performance optimization is crucial for enterprise React applications. After years of building complex UIs at ADP, here are the key patterns that made the biggest impact:\n\n**1. Strategic Memoization**\nNot everything needs to be memoized. Focus on expensive computations and components that receive complex props.\n\n**2. Virtual Scrolling**\nWhen dealing with large datasets in dashboards, virtual scrolling reduced DOM nodes by 95%.\n\n**3. Code Splitting**\nRoute-based and component-based code splitting reduced initial bundle size by 40%.\n\n**4. State Management Optimization**\nUsing Redux selectors with proper memoization prevented unnecessary re-renders across the component tree.`,
  },
  {
    id: 'websocket-collaboration',
    title: 'Building Real-Time Collaboration with WebSockets',
    excerpt: 'How I engineered a custom WebSocket solution for multi-user editing that reduced collaboration conflicts by 60% - the architecture, challenges, and lessons learned.',
    date: 'Nov 2024',
    readTime: '10 min read',
    tags: ['WebSocket', 'Node.js', 'Real-time'],
    gradient: 'linear-gradient(135deg, #22d3ee, #6366f1)',
    image: '',
    content: `Real-time collaboration is one of the most challenging features to implement correctly. Here's how we built a robust WebSocket solution at ADP:\n\n**The Challenge**\nMultiple users editing the same document simultaneously, causing conflicts and data loss.\n\n**The Solution**\nCustom WebSocket implementation with PostgreSQL Adapter on multi-Node servers, implementing operational transforms for conflict resolution.\n\n**Results**\n- 60% reduction in collaboration conflicts\n- Seamless live editing experience\n- Scalable across multiple Node.js server instances`,
  },
  {
    id: 'startup-to-corporate',
    title: 'From Startup Founder to Corporate Developer: My Journey',
    excerpt: 'Reflections on transitioning from co-founding a tech startup in Mumbai to working at a Fortune 500 company, and the valuable lessons from both worlds.',
    date: 'Sep 2024',
    readTime: '6 min read',
    tags: ['Career', 'Startup', 'Leadership'],
    gradient: 'linear-gradient(135deg, #f472b6, #fbbf24)',
    image: '',
    content: `The journey from founding STALKERSCODE in Mumbai to joining ADP in the US has been transformative. Each phase taught me invaluable lessons:\n\n**Startup Life**\n- Wearing multiple hats: developer, designer, project manager, and business developer\n- Leading a team of 8 to deliver 20+ projects\n- Learning to make decisions fast with limited resources\n\n**Corporate Excellence**\n- Deep technical expertise in specific domains\n- Understanding enterprise-scale architecture\n- Collaboration across large cross-functional teams\n\n**The Common Thread**\nBoth environments demand adaptability, continuous learning, and a user-first mindset.`,
  },
  {
    id: 'aws-cloud-journey',
    title: 'My AWS Cloud Practitioner Certification Journey',
    excerpt: 'A practical guide to preparing for the AWS Cloud Practitioner exam, including study resources, key concepts, and how cloud knowledge transformed my development workflow.',
    date: 'Oct 2024',
    readTime: '7 min read',
    tags: ['AWS', 'Cloud', 'Certification'],
    gradient: 'linear-gradient(135deg, #fbbf24, #34d399)',
    image: '',
    content: `Getting AWS certified was a game-changer for my career. Here's my preparation journey and key takeaways:\n\n**Why Get Certified?**\nUnderstanding cloud architecture fundamentally changes how you design applications. It bridges the gap between development and infrastructure.\n\n**Study Approach**\n- Official AWS training materials\n- Hands-on labs and practice exams\n- Building small projects on AWS\n\n**Impact on Development**\n- Better architectural decisions\n- Understanding cost optimization\n- Improved team collaboration with DevOps`,
  },
]

export const certifications = [
  {
    name: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    date: 'Oct 2024',
    icon: SiAmazonwebservices,
    color: '#FF9900',
    url: 'https://www.credly.com/badges/b8ee84a1-5fb2-4fc3-b39f-19d00ec516c2',
  },
]

export const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
]
