'use client'

import useSWR from 'swr'
import { SectionHeading } from './section-heading'
import { ProjectCard } from './project-card'
import { Skeleton } from '@/components/ui/skeleton'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselDots,
} from '@/components/ui/carousel'

interface Project {
  id: string
  title: string
  description: string
  long_description: string | null
  image_url: string | null
  image_urls?: string[]
  video_url?: string | null
  youtube_url?: string | null
  technologies: string[]
  github_url: string | null
  github_urls?: { label: string; url: string }[]
  live_url: string | null
  featured: boolean
}

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export function Projects() {
  const { data: projects, error, isLoading } = useSWR<Project[]>('/api/projects', fetcher)

  const featuredProjects = projects?.filter((p) => p.featured) || []
  const otherProjects = projects?.filter((p) => !p.featured) || []

  return (
    <section id="projects" className="py-10 md:py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading number={3} title="Projects" />

        {/* Featured Projects */}
        <div className="relative px-12 mb-10">
          <Carousel
            opts={{
              align: 'start',
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-6">
              {isLoading ? (
                <>
                  <CarouselItem className="pl-6 md:basis-1/2 lg:basis-1/3">
                    <ProjectSkeleton />
                  </CarouselItem>
                  <CarouselItem className="pl-6 md:basis-1/2 lg:basis-1/3">
                    <ProjectSkeleton />
                  </CarouselItem>
                  <CarouselItem className="pl-6 md:basis-1/2 lg:basis-1/3">
                    <ProjectSkeleton />
                  </CarouselItem>
                  <CarouselItem className="pl-6 md:basis-1/2 lg:basis-1/3">
                    <ProjectSkeleton />
                  </CarouselItem>
                </>
              ) : error ? (
                <p className="text-muted-foreground text-center w-full py-10">
                  Failed to load projects. Please try again later.
                </p>
              ) : (
                featuredProjects.map((project) => (
                  <CarouselItem key={project.id} className="pl-6 md:basis-1/2 lg:basis-1/3 h-auto">
                    <ProjectCard
                      project={project}
                      featured
                    />
                  </CarouselItem>
                ))
              )}
            </CarouselContent>
            <CarouselPrevious className="bg-[#1e2329]/80 h-10 w-10 border-white/10 text-white hover:bg-[#252b32] hover:text-green-500 transition-colors" />
            <CarouselNext className="bg-[#1e2329]/80 h-10 w-10 border-white/10 text-white hover:bg-[#252b32] hover:text-green-500 transition-colors" />
            
            {/* Pagination Dots */}
            <CarouselDots className="mt-8" />
          </Carousel>
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
    <div className="flex flex-col bg-[#1e2329]/80 border border-white/10 rounded-3xl overflow-hidden h-[500px]">
      <Skeleton className="w-full aspect-[4/3] rounded-none opacity-20" />
      <div className="flex flex-col flex-1 p-7 space-y-4">
        <Skeleton className="h-7 w-3/4 opacity-20" />
        <Skeleton className="h-4 w-full opacity-20 mt-4" />
        <Skeleton className="h-4 w-full opacity-20" />
        <Skeleton className="h-4 w-2/3 opacity-20" />
        <div className="pt-6 mt-auto flex gap-2">
          <Skeleton className="h-6 w-16 rounded-full opacity-20" />
          <Skeleton className="h-6 w-16 rounded-full opacity-20" />
          <Skeleton className="h-6 w-16 rounded-full opacity-20" />
        </div>
      </div>
    </div>
  )
}
