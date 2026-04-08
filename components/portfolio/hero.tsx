import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react'

export function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-6 pt-20"
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Profile Photo */}
        <div className="mb-8 relative inline-block">
          <div className="w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-primary/50 relative">
            <Image
              src="/images/profile.jpg"
              alt="Anushka Lakmal"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute inset-0 rounded-full border-2 border-primary/20 animate-pulse" />
        </div>

        {/* Greeting */}
        <p className="text-primary font-mono text-sm md:text-base mb-4 animate-fade-in">
          Hi, my name is
        </p>

        {/* Name */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4 text-balance">
          Anushka Lakmal
        </h1>

        {/* Title */}
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-muted-foreground mb-6 text-balance">
          I build things for the cloud.
        </h2>

        {/* Description */}
        <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto mb-8 leading-relaxed text-pretty">
          I&apos;m a Computer Science undergraduate specializing in backend development,
          DevOps practices, and cloud infrastructure. Currently focused on building
          scalable, reliable systems and automating everything.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <Button asChild size="lg">
            <Link href="#projects">View My Work</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="#contact">Get In Touch</Link>
          </Button>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-6">
          <a
            href="https://github.com/anushka"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="GitHub"
          >
            <Github className="size-6" />
          </a>
          <a
            href="https://linkedin.com/in/anushka"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="size-6" />
          </a>
          <a
            href="mailto:anushka@example.com"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="Email"
          >
            <Mail className="size-6" />
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <Link
            href="#about"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="Scroll to about section"
          >
            <ChevronDown className="size-8" />
          </Link>
        </div>
      </div>
    </section>
  )
}
