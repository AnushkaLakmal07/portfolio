'use client'

import { useEffect, useState } from 'react'
import { ChevronUp } from 'lucide-react'

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`fixed bottom-6 right-6 z-50 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-primary/40 bg-primary text-primary-foreground shadow-[0_0_24px_rgba(34,197,94,0.4)] transition-all duration-300 hover:-translate-y-1 hover:bg-primary/90 hover:shadow-[0_0_30px_rgba(34,197,94,0.55)] ${
        isVisible ? 'opacity-100 translate-y-0' : 'pointer-events-none translate-y-3 opacity-0'
      }`}
    >
      <ChevronUp className="size-5" />
    </button>
  )
}
