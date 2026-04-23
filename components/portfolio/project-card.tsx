'use client'

import { useState, useEffect } from 'react'
import { Badge } from '@/components/ui/badge'
import { Github, ExternalLink, Folder, CheckCircle } from 'lucide-react'

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

interface ProjectCardProps {
  project: Project
  featured?: boolean
  reverse?: boolean
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (project.image_urls && project.image_urls.length > 1) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % project.image_urls!.length)
      }, 5000)
      return () => clearInterval(interval)
    }
  }, [project.image_urls])

  return (
    <div className="group flex flex-col bg-[#1e2329]/80 backdrop-blur-md border border-white/10 rounded-3xl overflow-hidden hover:border-green-500/30 hover:shadow-[0_0_40px_rgba(34,197,94,0.15)] hover:-translate-y-2 transition-all duration-500 h-full">
      {/* Media Header */}
      <div className="relative aspect-[4/3] overflow-hidden bg-[#121519] flex-shrink-0">
        {project.image_urls && project.image_urls.length > 0 ? (
          <div className="w-full h-full transition-transform duration-10000 group-hover:scale-105">
            <div
              className="flex w-full h-full transition-transform duration-1000 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {project.image_urls.map((url, i) => (
                <img
                  key={i}
                  src={url}
                  alt={`${project.title} slide ${i + 1}`}
                  className="w-full h-full object-contain flex-shrink-0"
                />
              ))}
            </div>
          </div>
        ) : project.video_url ? (
          <video
            src={project.video_url}
            className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
            autoPlay
            loop
            muted
            playsInline
          />
        ) : project.image_url ? (
          <img
            src={project.image_url}
            alt={project.title}
            className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-muted-foreground transition-transform duration-700 group-hover:scale-110">
            <Folder className="size-16 opacity-50" />
          </div>
        )}

        {/* Gradient Overlay for bottom fade - creating the blending effect */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1e2329]/95 via-[#1e2329]/40 to-transparent transition-opacity duration-500 group-hover:opacity-90" />
        <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-500" />

        {/* Top Badges */}
        <div className="absolute top-4 left-4 right-4 flex justify-between items-start z-10">
          <Badge
            variant="outline"
            className="bg-green-500/10 text-green-500 border-green-500/20 px-2.5 py-1 font-semibold tracking-wide rounded-full gap-1.5 shadow-sm text-xs"
          >
            <CheckCircle className="size-3.5" />
            COMPLETED
          </Badge>

          <div className="flex gap-2">
            {project.github_urls ? (
              project.github_urls.map((repo, idx) => (
                <div key={idx} className="relative group/repo flex justify-center">
                  <a
                    href={repo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-[#1a1f24]/80 hover:bg-[#252b32] rounded-xl backdrop-blur-md transition-all border border-white/10 shadow-sm flex items-center justify-center w-[36px] h-[36px]"
                    aria-label={`GitHub Repository - ${repo.label}`}
                  >
                    <Github className="size-4 text-white/80 group-hover/repo:text-white" />
                  </a>
                  {/* Tooltip */}
                  <div className="absolute top-[calc(100%+8px)] opacity-0 group-hover/repo:opacity-100 transition-opacity duration-200 bg-[#121519] border border-white/10 text-white/90 text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-md whitespace-nowrap pointer-events-none shadow-xl z-50">
                    {repo.label}
                  </div>
                </div>
              ))
            ) : project.github_url && (
              <a
                href={project.github_url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-[#1a1f24]/80 hover:bg-[#252b32] rounded-xl backdrop-blur-md transition-all border border-white/10 shadow-sm flex items-center justify-center w-[36px] h-[36px]"
                aria-label="GitHub Repository"
              >
                <Github className="size-4 text-white/80 hover:text-white" />
              </a>
            )}
          </div>
        </div>

        {/* Carousel indicators (dynamic) */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-10">
          {project.image_urls && project.image_urls.length > 1 ? (
            project.image_urls.map((_, i) => (
              <div
                key={i}
                className={`h-1.5 rounded-full transition-all duration-500 ${i === currentIndex
                    ? 'w-6 bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.5)]'
                    : 'w-1.5 bg-white/30'
                  }`}
              />
            ))
          ) : (
            <>
              <div className="w-6 h-1 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.5)]" />
              <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
              <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
              <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
            </>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 px-6 pb-6 -mt-3 z-20 relative">
        <h3 className="text-[1.2rem] font-bold text-white mb-2 leading-[1.3] tracking-tight">
          {(project.youtube_url || project.video_url || project.live_url) ? (
            <a
              href={project.youtube_url || project.video_url || project.live_url!}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-400 transition-colors"
            >
              {project.title}
            </a>
          ) : (
            <span>{project.title}</span>
          )}
        </h3>

        <p className="text-gray-400 text-[0.85rem] leading-[1.6] mb-5 flex-1 tracking-tight font-[300]">
          {project.long_description || project.description}
        </p>

        {/* Technologies Footer */}
        <div className="pt-4 border-t border-white/5 mt-auto">
          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, 6).map((tech, i) => (
              <span
                key={tech}
                className="px-2.5 py-1 text-[0.6rem] font-bold tracking-wider uppercase rounded-full bg-white/5 text-gray-400 border border-white/10 transition-all duration-300 group-hover:bg-white/10 group-hover:text-gray-200 group-hover:border-white/20 hover:!bg-green-500/20 hover:!text-green-400 hover:!border-green-500/40 hover:scale-110 hover:shadow-[0_0_10px_rgba(34,197,94,0.2)] cursor-default"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 6 && (
              <span className="px-2.5 py-1 text-[0.6rem] font-bold tracking-wider uppercase rounded-full bg-white/5 text-gray-400 border border-white/10 transition-all duration-300 group-hover:bg-white/10 group-hover:text-gray-200 group-hover:border-white/20">
                +{project.technologies.length - 6} MORE
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
