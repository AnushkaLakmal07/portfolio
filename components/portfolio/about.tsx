import { SectionHeading } from './section-heading'

export function About() {
  return (
    <section id="about" className="py-10 md:py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionHeading title="About Me" />

        <div className="w-full">
          <div className="w-full space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Hello! I&apos;m Anushka Lakmal a passionate ICT undergraduate at Uva Wellassa University of Sri Lanka specializing in Software Technology. My journey in tech started with curiosity about how things are built on the web and it has grown into a dedication to creating meaningful digital experiences.
            </p>
            <p>
              I enjoy building web applications, exploring new frameworks and turning ideas into real working products. There&apos;s something deeply satisfying about seeing something you built from scratch running live on the internet.
            </p>
            <p>
              Currently pursuing my BICT degree while working on personal projects and expanding my skill set every day. I&apos;m always eager to learn, collaborate and take on new challenges in the ever-evolving world of technology.
            </p>

          </div>


        </div>
      </div>
    </section>
  )
}
