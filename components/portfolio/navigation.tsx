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
  { href: '#experience', label: 'Experience' },
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
          <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 border border-primary/20 shadow-sm overflow-hidden transition-all duration-300 group-hover:shadow-primary/25 group-hover:border-primary/50 group-hover:-translate-y-0.5">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute inset-0 bg-primary/10 scale-0 rounded-full group-hover:scale-150 transition-transform duration-500 ease-out" />
            <span className="relative font-mono font-bold text-primary text-lg z-10">AL</span>
          </div>
          <div className="hidden sm:flex items-center">
            <span className="font-bold text-xl tracking-tight bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent group-hover:from-primary group-hover:to-primary/80 transition-colors duration-300">
              Anushka
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
