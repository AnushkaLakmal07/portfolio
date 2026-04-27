import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react'

export function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-6 pt-24 pb-12"
    >
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12 lg:gap-20 w-full relative">

        {/* Left Content */}
        <div className="flex-1 text-center md:text-left flex flex-col items-center md:items-start max-w-2xl">
          {/* Greeting */}
          <div className="mb-4 inline-block">
            <p
              className="text-primary font-mono text-lg md:text-xl font-semibold tracking-wide overflow-hidden whitespace-nowrap border-r-[3px] border-primary pr-1"
              style={{
                width: '15.5ch',
                animation: 'typing 2s steps(15, end) forwards, blink 0.75s step-end 4 forwards'
              }}
            >
              Hi, My name is
            </p>
            <style>{`
              @keyframes typing {
                from { width: 0; }
              }
              @keyframes blink {
                0%, 100% { border-color: transparent; }
                50% { border-color: hsl(var(--primary)); }
              }
            `}</style>
          </div>

          {/* Name */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4 tracking-tight leading-tight">
            Anushka Lakmal
          </h1>

          {/* Title */}
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-muted-foreground mb-6 h-[1.5em] overflow-hidden relative w-full">
            <div className="animate-word-slide flex flex-col w-full text-center md:text-left absolute left-0 top-0">
              <span className="h-[1.5em] flex items-center justify-center md:justify-start">ICT Undergraduate</span>
              <span className="h-[1.5em] flex items-center justify-center md:justify-start">Problem Solver</span>
              <span className="h-[1.5em] flex items-center justify-center md:justify-start">Tech Enthusiast</span>
              <span className="h-[1.5em] flex items-center justify-center md:justify-start" aria-hidden="true">ICT Undergraduate</span>
            </div>
            <style>{`
              @keyframes word-slide {
                0%, 20% { transform: translateY(0%); }
                33%, 53% { transform: translateY(-25%); }
                66%, 86% { transform: translateY(-50%); }
                100% { transform: translateY(-75%); }
              }
              .animate-word-slide {
                animation: word-slide 9s infinite cubic-bezier(0.64, 0, 0.35, 1);
                /* 4 items = height automatically 400% of a single item but translateY handles percentages of the full height */
              }
            `}</style>
          </h2>

          {/* Description */}
          <p className="text-muted-foreground text-base md:text-lg mb-8 leading-relaxed max-w-xl text-pretty">
            I&apos;m a ICT undergraduate with a focus on Software Technology Currently building my skills in web development while working towards becoming a DevOps and cloud engineer.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mb-10">
            <Button asChild size="lg" className="px-8 transition-all duration-300 border border-primary hover:bg-transparent hover:text-primary hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/20">
              <Link href="#projects">View My Work</Link>
            </Button>
            <Button asChild size="lg" className="px-8 transition-all duration-300 border border-primary hover:bg-transparent hover:text-primary hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/20">
              <Link href="#contact">Get In Touch</Link>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center md:justify-start gap-6">
            <a
              href="https://github.com/AnushkaLakmal07"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-all duration-300 hover:-translate-y-1"
              aria-label="GitHub"
            >
              <Github className="size-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/anushka-lakmal/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-all duration-300 hover:-translate-y-1"
              aria-label="LinkedIn"
            >
              <Linkedin className="size-6" />
            </a>
            <Link
              href="#contact"
              className="text-muted-foreground hover:text-primary transition-all duration-300 hover:-translate-y-1"
              aria-label="Contact Section"
            >
              <Mail className="size-6" />
            </Link>
          </div>
        </div>

        {/* Right Content - Profile Picture */}
        <div className="relative group w-64 sm:w-72 md:w-80 lg:w-[400px] aspect-square md:mr-4">
          {/* Decorative frame shadow (offset) */}
          <div className="absolute inset-0 border-2 border-primary rounded-xl translate-x-4 translate-y-4 md:translate-x-6 md:translate-y-6 transition-transform duration-500 ease-out group-hover:translate-x-3 group-hover:translate-y-3 z-0 hidden sm:block" />

          {/* Image Container for Desktop (Square + Frame style) */}
          <div className="absolute inset-0 rounded-xl overflow-hidden border border-primary/20 bg-primary/5 transition-transform duration-500 ease-out sm:group-hover:-translate-y-2 sm:group-hover:-translate-x-2 z-10 hidden sm:block">
            {/* Color Overlay - removed on hover */}
            <div className="absolute inset-0 bg-primary/20 group-hover:opacity-0 transition-opacity duration-500 z-10 mix-blend-multiply" />
            <Image
              src="/images/profile.jpg"
              alt="Anushka Lakmal"
              fill
              className="object-cover object-[30%_20%] grayscale group-hover:grayscale-0 transition-all duration-500"
              priority
              sizes="(max-width: 760px) 256px, (max-width: 1024px) 320px, 400px"
            />
          </div>

          {/* Simple Circle Image for Mobile */}
          <div className="absolute inset-0 rounded-full sm:hidden overflow-hidden border-2 border-primary/50">
            <Image
              src="/images/profile.jpg"
              alt="Anushka Lakmal"
              fill
              className="object-cover"
              priority
              sizes="256px"
            />
          </div>
        </div>

        {/* Scroll Indicator - Bottom left/center */}
        <div className="absolute bottom-0 md:-bottom-2 lg:-bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
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
