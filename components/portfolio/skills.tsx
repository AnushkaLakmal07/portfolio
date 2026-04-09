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
    <section id="skills" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <SectionHeading number={2} title="Skills & Technologies" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <Card
              key={category.title}
              className="group bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card hover:border-primary/50 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10 transition-all duration-500"
            >
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-3 text-xl font-semibold tracking-tight">
                  <category.icon className="size-6 text-primary transition-transform duration-500 group-hover:scale-110" />
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="px-4 py-1.5 text-sm font-medium tracking-wide bg-secondary border border-transparent hover:border-primary/20 hover:bg-primary hover:text-primary-foreground hover:scale-105 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 cursor-default"
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
