'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#achievements', label: 'Achievements' },
  { href: '#contact', label: 'Contact' },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-background/80 backdrop-blur-md border-b border-border'
          : 'bg-transparent'
      )}
    >
      <nav className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-3 group transition-all duration-300"
        >
          <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/30 via-primary/10 to-transparent shadow-[0_0_22px_rgba(34,197,94,0.25)] transition-all duration-300 group-hover:-translate-y-0.5 group-hover:shadow-[0_0_28px_rgba(34,197,94,0.35)]">
            <span className="text-sm font-extrabold tracking-[0.2em] text-white">AL</span>
          </div>
          <div className="hidden sm:flex items-center">
            <span className="relative font-extrabold text-[20px] tracking-wider text-white transition-all duration-300 group-hover:-translate-y-0.5 group-hover:text-primary group-hover:drop-shadow-[0_0_14px_rgba(34,197,94,0.45)]">
              <span className="bg-gradient-to-r from-white via-white to-primary bg-[length:220%_100%] bg-left bg-clip-text text-transparent transition-all duration-500 group-hover:bg-right">
                ANUSHKA
              </span>
              <span className="left-0 h-[2px] w-full origin-left scale-x-0 rounded-full bg-primary/80 shadow-[0_0_10px_rgba(34,197,94,0.45)] transition-transform duration-500 group-hover:scale-x-100" />
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link, index) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="relative group text-base font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-primary rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left ease-out" />
              </Link>
            </li>
          ))}
          <li>
            <Button asChild className="px-6 transition-all duration-300 border border-primary hover:bg-transparent hover:text-primary hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/20">
              <a href="/cv.pdf" target="_blank" rel="noopener noreferrer">
                Resume
              </a>
            </Button>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </Button>
      </nav>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-b border-border">
          <ul className="flex flex-col items-center gap-6 py-8">
            {navLinks.map((link, index) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="relative group text-base text-muted-foreground hover:text-primary transition-colors font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-primary rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left ease-out" />
                </Link>
              </li>
            ))}
            <li>
              <Button asChild size="sm" className="px-6 transition-all duration-300 border border-primary hover:bg-transparent hover:text-primary hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/20">
                <a href="/cv.pdf" target="_blank" rel="noopener noreferrer">
                  Resume
                </a>
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
