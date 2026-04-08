import { SectionHeading } from './section-heading'

export function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionHeading number={1} title="About Me" />

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Hello! I&apos;m Anushka, a passionate Computer Science undergraduate with a
              deep interest in backend development, DevOps practices, and cloud
              infrastructure. My journey in tech started with curiosity about how
              large-scale systems work, and it has evolved into a dedication to
              building reliable, scalable solutions.
            </p>
            <p>
              I enjoy the challenge of designing systems that can handle millions of
              requests, automating complex deployment pipelines, and optimizing
              infrastructure for performance and cost-efficiency. There&apos;s something
              deeply satisfying about seeing a well-architected system running smoothly
              in production.
            </p>
            <p>
              Currently, I&apos;m pursuing my BSc in Computer Science while actively
              contributing to open-source projects and building my own tools to solve
              real-world problems. I&apos;m always eager to learn new technologies and
              best practices in the ever-evolving world of cloud computing.
            </p>
            <p>
              Here are a few technologies I&apos;ve been working with recently:
            </p>
            <ul className="grid grid-cols-2 gap-2 text-sm font-mono">
              {[
                'Node.js',
                'Python',
                'Docker',
                'Kubernetes',
                'AWS',
                'Terraform',
                'PostgreSQL',
                'Redis',
              ].map((tech) => (
                <li key={tech} className="flex items-center gap-2">
                  <span className="text-primary">{'>'}</span>
                  {tech}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative group">
            <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-secondary">
              <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-300" />
              <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                <span className="font-mono text-sm">Profile Image</span>
              </div>
            </div>
            <div className="absolute -inset-2 border-2 border-primary rounded-lg -z-10 translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300" />
          </div>
        </div>
      </div>
    </section>
  )
}
