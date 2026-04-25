export interface Achievement {
  id: string
  title: string
  organization: string
  period: string
  description: string
  category: string
  image?: string
  image_urls?: string[]
}

export const achievements: Achievement[] = [

  {
    id: 'uwu-expo-2025',
    title: 'UWU EXPO 2025 Food Platform Launch',
    organization: 'Uva Wellassa University Of Sri Lanka',
    period: '2025',
    description:
      'Built and deployed a full-stack Food Web Platform for the UWU 20th Anniversary Inaugural Ceremony using the MERN stack. Architected the backend REST API with Node.js and Express, designed the MongoDB data models, and developed a responsive React frontend. Handled end-to-end AWS deployment including EC2, S3, and environment configuration, ensuring the platform was production-ready and scalable for live event use.',
    category: 'EVENT',
    image_urls: [
      '/images/expo01.jpeg',
      '/images/expo02.jpeg',
      '/images/expo03.jpeg'
   ],
  },
  {
    id: 'docker-fundamentals',
    title: 'Docker Fundamentals',
    organization: 'Engineer.kodekloud',
    period: '2025',
    description:
      'Completed a hands on Docker fundamentals course covering containerization concepts, building and managing Docker images, running containers, Docker networking, volumes, and Docker Compose for multi-container applications.',
    category: 'EDUCATION',
  },
]
