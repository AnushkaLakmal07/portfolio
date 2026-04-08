import { NextResponse } from 'next/server'

const projects = [
  {
    id: '1',
    title: 'Portfolio Website',
    description: 'Personal portfolio built with Next.js, React 19, and Tailwind CSS.',
    long_description: null,
    image_url: null,
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript'],
    github_url: 'https://github.com/yourusername',
    live_url: null,
    featured: true,
  },
]

export async function GET() {
  return NextResponse.json(projects)
}