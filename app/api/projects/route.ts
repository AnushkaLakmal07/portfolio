import { NextResponse } from 'next/server'

const projects = [
  {
    id: '3',
    title: 'Boolean Logic Solver & Hardware Simulator',
    description: 'Built a desktop-based digital logic platform using Electron.js, React, and Python. Featuring a real-time Boolean simplification engine, circuit design tools, and a hardware simulation module. Architected the full system from the ground up, integrating algebraic minimization and interactive circuit simulation into a single, unified interface.',
    long_description: 'Built a desktop-based digital logic platform using Electron.js, React, and Python. Featuring a real-time Boolean simplification engine, circuit design tools, and a hardware simulation module. Architected the full system from the ground up, integrating algebraic minimization and interactive circuit simulation into a single, unified interface.',
    image_url: null,
    image_urls: [
      '/images/boolean01.png',
      '/images/boolean02.png',
      '/images/boolean03.png',
      '/images/boolean04.png',
      '/images/boolean05.png',
      '/images/boolean06.png',
      '/images/boolean07.png',
      '/images/boolean08.png'
    ],
    video_url: "https://www.youtube.com/watch?v=DBZNrmWjAZo",
    technologies: ['ELECTRON.JS', 'REACT.JS', 'PYTHON', 'SQLITE', 'FIGMA', 'GIT/GITHUB',],
    github_url: 'https://github.com/logicsimplifier/boolean_logic_solver',
    live_url: null,
    featured: true,
  },
  {
    id: '1',
    title: 'Smart Campus Food Management Platform',
    description: '',
    long_description: 'Engineered a production-ready food management ecosystem for Uva Wellassa University using the MERN stack delivering a full-featured web platform, dual mobile applications for logistics management, and a secure QR-based payment solution. Architected the complete system from database design to frontend interfaces, integrating real-time ordering, role-based access control, and fintech functionality into a unified, scalable platform.',
    image_urls: [
      '/images/food01.jpeg',
      '/images/food02.jpeg',
      '/images/food03.jpeg',
      '/images/food04.jpeg',
      '/images/food05.jpeg',
      '/images/food06.jpeg',
      '/images/food07.jpeg',
      '/images/food08.jpeg',
      '/images/food09.jpeg',
      '/images/food10.jpeg',
      '/images/food11.jpeg'  
    ],
    video_url: null,
    technologies: ['MERN STACK', 'REACT.JS', 'NODE.JS', 'MONGO DB', 'AWS', 'GITHUB'],
    github_url: null,
    github_urls: [
      { label: 'Frontend', url: 'https://github.com/uwufts22/uwufood-web-frontend' },
      { label: 'Backend', url: 'https://github.com/uwufts22/uwufood-web-backend' },
      { label: 'Admin', url: 'https://github.com/uwufts22/uwufood-web-admin' }
    ],
    featured: true,
  },
  {
    id: '2',
    title: 'Smart Inventory Management Platform',
    description: 'Developed a high-performance desktop inventory management system for SMEs using JavaFX, built on a modular OOP architecture with role-based access control. Designed and implemented a scalable, multi-layered system structure with a rigorous JUnit 5 testing suite, ensuring full system reliability and maintainability.',
    image_url: null,
    video_url: null,
    technologies: ['JAVAFX', 'SQLITE', 'MAVEN', 'JUNIT', 'GIT'],
    github_url: 'https://github.com/logicsimplifier/inventory-management-system',
    live_url: null,
    featured: true,
  },
  {
    id: '4',
    title: 'AI-Powered Financial Fraud Detection Platform',
    description: 'Built an AI-driven financial fraud detection platform capable of processing 1,000+ transactions per second, built on a high-performance stack of FastAPI, Redis, and React. Integrated machine learning models for real-time anomaly detection alongside explainable AI modules, achieving 95%+ detection accuracy. Architected a Dockerized microservices infrastructure to ensure scalability, transparency, and actionable fraud insights for stakeholders.',
    image_url: null,
    video_url: null,
    technologies: ['FASTAPI', 'DOCKER', 'REACT.JS', 'REDIS','POSTGRESQL', 'PYTHON'],
    github_url: 'https://github.com/deep-scan-ai/ai-powered-fraud-detection',
    live_url: null,
    featured: true,
  }
]

export async function GET() {
  return NextResponse.json(projects)
}