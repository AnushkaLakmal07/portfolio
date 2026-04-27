import { SectionHeading } from './section-heading'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Code2, Cloud, Database, Terminal, GitBranch, Monitor } from 'lucide-react'

const skillCategories = [
  {
    title: 'Languages',
    icon: Code2,
    skills: ['Python', 'JavaScript', 'Java', 'C', 'SQL'],
  },
  {
    title: 'Backend',
    icon: Terminal,
    skills: ['Node.js', 'Python', 'FastAPI', 'REST APIs'],
  },
  {
    title: 'Databases',
    icon: Database,
    skills: ['PostgreSQL', 'MongoDB', 'Redis'],
  },
  {
    title: 'DevOps',
    icon: GitBranch,
    skills: ['Docker', 'GitHub Actions'],
  },
  {
    title: 'Cloud',
    icon: Cloud,
    skills: ['AWS'],
  },

  {
  title: 'Monitoring',
  icon: Monitor,
  skills: ['Git', 'GitHub', 'VS Code', 'Postman'],
  },

  {
  title: 'Frameworks',
  icon: Monitor,
  skills: ['React', 'Next.js', 'Electron.js', '.NET'],
  },

]

export function Skills() {
  return (
    <section id="skills" className="py-10 md:py-24 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <SectionHeading title="Skills & Technologies" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {skillCategories.map((category) => (
            <Card
              key={category.title}
              className="group bg-card/60 md:bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card hover:border-primary/50 transition-all duration-300 md:duration-500 rounded-xl overflow-hidden md:hover:-translate-y-2 md:hover:shadow-xl md:hover:shadow-primary/10"
            >
              <CardHeader className="pb-3 border-b border-white/5">
                <CardTitle className="flex items-center gap-3 text-lg md:text-xl font-semibold tracking-tight">
                  <span className="inline-flex size-7 md:size-8 items-center justify-center rounded-lg bg-primary/15 border border-primary/25">
                    <category.icon className="size-4 text-primary transition-transform duration-300 group-hover:scale-110" />
                  </span>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2.5 md:gap-3">
                  {category.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="px-3.5 py-1.5 text-xs md:text-sm font-semibold tracking-wide bg-secondary/80 border border-white/10 text-foreground/90 hover:border-primary/30 hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
