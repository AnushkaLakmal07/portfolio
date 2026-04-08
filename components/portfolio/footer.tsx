import { Github, Linkedin, Mail, Twitter } from 'lucide-react'

const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com/anushka',
    icon: Github,
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/anushka',
    icon: Linkedin,
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/anushka',
    icon: Twitter,
  },
  {
    name: 'Email',
    href: 'mailto:anushka@example.com',
    icon: Mail,
  },
]

export function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        {/* Social Links */}
        <div className="flex items-center justify-center gap-6 mb-8">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label={link.name}
            >
              <link.icon className="size-5" />
            </a>
          ))}
        </div>

        {/* Credit */}
        <div className="text-center">
          <p className="text-muted-foreground text-sm font-mono">
            Designed & Built by{' '}
            <a
              href="https://github.com/anushka"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Anushka Lakmal
            </a>
          </p>
          <p className="text-muted-foreground/60 text-xs font-mono mt-2">
            Built with Next.js, Tailwind CSS & Supabase
          </p>
        </div>
      </div>
    </footer>
  )
}
