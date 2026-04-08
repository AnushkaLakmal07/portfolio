'use client'

import useSWR from 'swr'
import { SectionHeading } from './section-heading'
import { ProjectCard } from './project-card'
import { Skeleton } from '@/components/ui/skeleton'

interface Project {
  id: string
  title: string
  description: string
  long_description: string | null
  image_url: string | null
  technologies: string[]
  github_url: string | null
  live_url: string | null
  featured: boolean
}

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export function Projects() {
  const { data: projects, error, isLoading } = useSWR<Project[]>('/api/projects', fetcher)

  const featuredProjects = projects?.filter((p) => p.featured) || []
  const otherProjects = projects?.filter((p) => !p.featured) || []

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading number={3} title="Projects" />

        {/* Featured Projects */}
        <div className="space-y-24 mb-16">
          {isLoading ? (
            <>
              <ProjectSkeleton />
              <ProjectSkeleton />
            </>
          ) : error ? (
            <p className="text-muted-foreground text-center">
              Failed to load projects. Please try again later.
            </p>
          ) : (
            featuredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                featured
                reverse={index % 2 === 1}
              />
            ))
          )}
        </div>

        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <>
            <h3 className="text-xl font-semibold text-center text-foreground mb-8">
              Other Noteworthy Projects
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  )
}

function ProjectSkeleton() {
  return (
    <div className="grid md:grid-cols-12 gap-4 items-center">
      <div className="md:col-span-7">
        <Skeleton className="w-full aspect-video rounded-lg" />
      </div>
      <div className="md:col-span-5 space-y-4">
        <Skeleton className="h-4 w-24" />
        <Skeleton className="h-8 w-48" />
        <Skeleton className="h-24 w-full" />
        <div className="flex gap-2">
          <Skeleton className="h-6 w-16" />
          <Skeleton className="h-6 w-16" />
          <Skeleton className="h-6 w-16" />
        </div>
      </div>
    </div>
  )
}
