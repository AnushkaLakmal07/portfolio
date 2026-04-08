import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Github, ExternalLink, Folder } from 'lucide-react'
import { cn } from '@/lib/utils'

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

interface ProjectCardProps {
  project: Project
  featured?: boolean
  reverse?: boolean
}

export function ProjectCard({ project, featured, reverse }: ProjectCardProps) {
  if (featured) {
    return (
      <div
        className={cn(
          'grid md:grid-cols-12 gap-4 items-center',
          reverse && 'direction-rtl'
        )}
      >
        {/* Project Image */}
        <div
          className={cn(
            'md:col-span-7 relative group',
            reverse ? 'md:col-start-6' : 'md:col-start-1'
          )}
          style={{ direction: 'ltr' }}
        >
          <a
            href={project.live_url || project.github_url || '#'}
            target="_blank"
            rel="noopener noreferrer"
            className="block relative overflow-hidden rounded-lg bg-secondary aspect-video"
          >
            <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-300" />
            {project.image_url ? (
              <img
                src={project.image_url}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                <Folder className="size-16 opacity-50" />
              </div>
            )}
          </a>
        </div>

        {/* Project Info */}
        <div
          className={cn(
            'md:col-span-6 md:row-start-1 relative z-10',
            reverse ? 'md:col-start-1 md:text-left' : 'md:col-start-6 md:text-right'
          )}
          style={{ direction: 'ltr' }}
        >
          <p className="text-primary font-mono text-sm mb-2">Featured Project</p>
          <h3 className="text-2xl font-bold text-foreground mb-4">
            <a
              href={project.live_url || project.github_url || '#'}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              {project.title}
            </a>
          </h3>
          <div className="bg-card p-6 rounded-lg shadow-lg mb-4">
            <p className="text-muted-foreground leading-relaxed">
              {project.long_description || project.description}
            </p>
          </div>
          <ul
            className={cn(
              'flex flex-wrap gap-3 text-sm font-mono text-muted-foreground mb-4',
              reverse ? 'justify-start' : 'justify-end'
            )}
          >
            {project.technologies.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
          <div
            className={cn(
              'flex gap-4',
              reverse ? 'justify-start' : 'justify-end'
            )}
          >
            {project.github_url && (
              <a
                href={project.github_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub Repository"
              >
                <Github className="size-5" />
              </a>
            )}
            {project.live_url && (
              <a
                href={project.live_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Live Demo"
              >
                <ExternalLink className="size-5" />
              </a>
            )}
          </div>
        </div>
      </div>
    )
  }

  // Non-featured project card
  return (
    <Card className="group bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 hover:-translate-y-1 transition-all duration-300">
      <CardHeader>
        <div className="flex items-center justify-between mb-4">
          <Folder className="size-10 text-primary" />
          <div className="flex gap-3">
            {project.github_url && (
              <a
                href={project.github_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub Repository"
              >
                <Github className="size-5" />
              </a>
            )}
            {project.live_url && (
              <a
                href={project.live_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Live Demo"
              >
                <ExternalLink className="size-5" />
              </a>
            )}
          </div>
        </div>
        <CardTitle className="text-lg group-hover:text-primary transition-colors">
          <a
            href={project.live_url || project.github_url || '#'}
            target="_blank"
            rel="noopener noreferrer"
          >
            {project.title}
          </a>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.slice(0, 4).map((tech) => (
            <Badge key={tech} variant="outline" className="text-xs">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
