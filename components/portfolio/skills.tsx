import { SectionHeading } from './section-heading'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Code2, Cloud, Database, Terminal, GitBranch, Monitor } from 'lucide-react'

const skillCategories = [
  {
    title: 'Languages',
    icon: Code2,
    skills: ['Python', 'JavaScript', 'TypeScript', 'Go', 'Bash', 'SQL'],
  },
  {
    title: 'Backend',
    icon: Terminal,
    skills: ['Node.js', 'Express', 'FastAPI', 'REST APIs', 'GraphQL', 'gRPC'],
  },
  {
    title: 'Databases',
    icon: Database,
    skills: ['PostgreSQL', 'MongoDB', 'Redis', 'MySQL', 'Elasticsearch'],
  },
  {
    title: 'DevOps',
    icon: GitBranch,
    skills: ['Docker', 'Kubernetes', 'Terraform', 'Ansible', 'Jenkins', 'GitHub Actions'],
  },
  {
    title: 'Cloud',
    icon: Cloud,
    skills: ['AWS', 'GCP', 'Azure', 'Vercel', 'DigitalOcean', 'Cloudflare'],
  },
  {
    title: 'Monitoring',
    icon: Monitor,
    skills: ['Prometheus', 'Grafana', 'ELK Stack', 'Datadog', 'New Relic'],
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
              className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-colors"
            >
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-3 text-lg">
                  <category.icon className="size-5 text-primary" />
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
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
