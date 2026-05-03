import Link from 'next/link'
import { Github, Linkedin, Mail, FileText } from 'lucide-react'

const navigationLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Achievements', href: '#achievements' },
]

const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com/AnushkaLakmal07',
    icon: Github,
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/anushka-lakmal/',
    icon: Linkedin,
  },
  {
    name: 'Resume',
    href: '/cv.pdf',
    icon: FileText,
  },
  {
    name: 'Email',
    href: '#contact',
    icon: Mail,
  },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#0b0d11] border-t border-white/5 pt-8 pb-6 md:pt-10 md:pb-6">
      <div className="max-w-6xl mx-auto px-6">
        {/* Mobile: compact footer */}
        <div className="md:hidden flex flex-col gap-4">
          <div className="flex items-center justify-between gap-4">
            <Link href="/" className="flex items-center gap-2 w-fit">
              <div className="relative flex h-10 w-10 items-center justify-center rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/30 via-primary/10 to-transparent shadow-[0_0_18px_rgba(34,197,94,0.22)]">
                <span className="text-[11px] font-extrabold tracking-[0.2em] text-white">AL</span>
              </div>
              <span className="font-bold text-[16px] tracking-wider text-white/90">
                ANUSHKA
              </span>
            </Link>

            <div className="flex items-center gap-2">
              {socialLinks.slice(0, 3).map((link) => {
                const isInternalLink = link.href.startsWith('#')
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    target={isInternalLink ? undefined : '_blank'}
                    rel={isInternalLink ? undefined : 'noopener noreferrer'}
                    aria-label={link.name}
                    className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-muted-foreground hover:bg-primary/10 hover:text-primary hover:border-primary/30 transition-colors"
                  >
                    <link.icon className="size-4" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Short description */}
          <p className="text-muted-foreground/80 text-sm leading-relaxed">
            ICT undergraduate passionate about Backend Development & DevOps. Building scalable systems and cloud-native solutions.          </p>

          {/* Mobile nav links (same as desktop, compact) */}
          <div className="flex flex-wrap gap-x-4 gap-y-2">
            {navigationLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-[13px] font-semibold text-white/70 hover:text-green-400 transition-colors duration-200"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <p className="text-muted-foreground/65 text-xs font-medium">
            © {currentYear} Anushka Lakmal
          </p>
        </div>

        {/* Desktop: full footer */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          
          {/* Column 1: Brand & Bio */}
          <div className="md:col-span-6 lg:col-span-5 flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-3 group w-fit transition-all duration-300">
              <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/30 via-primary/10 to-transparent shadow-[0_0_22px_rgba(34,197,94,0.25)] transition-all duration-300 group-hover:-translate-y-0.5 group-hover:shadow-[0_0_28px_rgba(34,197,94,0.35)]">
                <span className="text-sm font-extrabold tracking-[0.2em] text-white">AL</span>
              </div>
              <span className="font-bold text-[20px] tracking-wider text-white transition-all duration-300 group-hover:opacity-60 group-hover:-translate-y-0.5">
                ANUSHKA
              </span>
            </Link>
            <p className="text-muted-foreground/80 text-sm leading-relaxed max-w-sm">
              Undergraduate Software Engineer focused on delivering high impact solutions through leadership and technical excellence.
            </p>
          </div>

          {/* Column 2: Navigation */}
          <div className="md:col-span-3 lg:col-span-3">
            <h3 className="text-white/90 text-xs font-bold tracking-[0.2em] uppercase mb-6">
              Navigation
            </h3>
            <ul className="flex flex-col gap-2">
              {navigationLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground/70 hover:text-primary transition-colors text-sm font-medium"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Connect */}
          <div className="md:col-span-3 lg:col-span-4">
            <h3 className="text-white/90 text-xs font-bold tracking-[0.2em] uppercase mb-6">
              Connect
            </h3>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((link) => {
                const isInternalLink = link.href.startsWith('#')

                return (
                  <a
                    key={link.name}
                    href={link.href}
                    target={isInternalLink ? undefined : '_blank'}
                    rel={isInternalLink ? undefined : 'noopener noreferrer'}
                    aria-label={link.name}
                    className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-muted-foreground hover:bg-primary/10 hover:text-primary hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
                  >
                    <link.icon className="size-4" />
                  </a>
                )
              })}
            </div>
            <p className="mt-22 text-muted-foreground/60 text-xs font-medium">
              © {currentYear} Anushka Lakmal. Professional Portfolio.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
