import { SectionHeading } from './section-heading'
import { Card, CardContent } from '@/components/ui/card'

const experiences = [
  {
    title: 'Bachelor of Information and Communication Technology (Honours) Degree',
    organization: 'Uva Wellassa University of Sri Lanka',
    period: '2023 - Present',
    description:
      'Currently pursuing my degree with a focus on software engineering, distributed systems, and cloud computing. Maintaining strong academic performance while working on personal projects.',
    highlights: [
      'Data Structures & Algorithms',
      'Database Systems',
      'Operating Systems',
      'Computer Networks',
    ],
  },
  {
    title: 'Open Source Contributor',
    organization: 'Various Projects',
    period: '2023 - Present',
    description:
      'Contributing to open-source projects in the DevOps and cloud-native ecosystem. Learning from experienced developers and giving back to the community.',
    highlights: [
      'Kubernetes tools',
      'CI/CD pipelines',
      'Documentation improvements',
      'Bug fixes',
    ],
  },
  {
    title: 'Self-Learning & Certifications',
    organization: 'Online Platforms',
    period: '2022 - Present',
    description:
      'Continuously expanding my knowledge through online courses, certifications, and hands-on projects. Focused on cloud platforms and DevOps practices.',
    highlights: [
      'AWS Cloud Practitioner',
      'Docker Certified Associate (In Progress)',
      'Kubernetes Fundamentals',
      'Terraform Associate (Planned)',
    ],
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <SectionHeading number={4} title="Experience & Learning" />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.title}
                className={`relative grid md:grid-cols-2 gap-8 ${
                  index % 2 === 0 ? '' : 'md:direction-rtl'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background" />

                {/* Content */}
                <Card
                  className={`bg-card/50 backdrop-blur-sm border-border/50 ${
                    index % 2 === 0 ? 'md:mr-8' : 'md:ml-8 md:col-start-2'
                  }`}
                  style={{ direction: 'ltr' }}
                >
                  <CardContent className="pt-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
                      <div>
                        <h3 className="text-lg font-semibold text-foreground">
                          {exp.title}
                        </h3>
                        <p className="text-primary font-mono text-sm">
                          {exp.organization}
                        </p>
                      </div>
                      <span className="text-muted-foreground text-sm font-mono">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                      {exp.description}
                    </p>
                    <ul className="flex flex-wrap gap-2">
                      {exp.highlights.map((highlight) => (
                        <li
                          key={highlight}
                          className="text-xs font-mono text-muted-foreground bg-secondary px-2 py-1 rounded"
                        >
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
