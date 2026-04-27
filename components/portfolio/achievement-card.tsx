'use client'

import { useState, useEffect } from 'react'
import { Calendar, GraduationCap, Clock } from 'lucide-react'
import { Achievement } from '@/lib/data/achievements'

interface AchievementCardProps {
  achievement: Achievement
}

const categoryColors: Record<string, string> = {
  EVENT: '#f5c842',
  EDUCATION: '#1faf1f',
}

const categoryIcons: Record<string, React.ReactNode> = {
  EVENT: <Calendar className="size-3" />,
  EDUCATION: <GraduationCap className="size-3" />,
}

export function AchievementCard({ achievement }: AchievementCardProps) {
  const accentColor = categoryColors[achievement.category] ?? '#f5c842'
  const categoryIcon = categoryIcons[achievement.category] ?? <Calendar className="size-3" />
  const [currentIndex, setCurrentIndex] = useState(0)
  const imageFit = achievement.imageFit ?? (achievement.category === 'EDUCATION' ? 'contain' : 'cover')

  const images =
    achievement.image_urls && achievement.image_urls.length > 0
      ? achievement.image_urls
      : achievement.image && achievement.image.trim() !== ''
        ? [achievement.image]
        : []

  // Auto-slide every 5 seconds if multiple images
  useEffect(() => {
    if (images.length > 1) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length)
      }, 5000)
      return () => clearInterval(interval)
    }
  }, [images.length])

  return (
    <div
      className="group flex flex-col h-full rounded-xl overflow-hidden border border-white/10 hover:border-white/20 bg-[#12151a] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
      style={{
        boxShadow: `0 0 0 1px transparent`,
        transition: 'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease',
      }}
    >
      {/* ── IMAGE SECTION ── */}
      <div className="relative w-full aspect-[16/10] overflow-hidden flex-shrink-0 bg-slate-900">
        {images.length > 0 ? (
          <>
            {/* Sliding strip */}
            <div
              className="flex w-full h-full transition-transform duration-1000 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {images.map((url, i) => (
                <img
                  key={i}
                  src={url}
                  alt={`${achievement.title} slide ${i + 1}`}
                  className={[
                    'w-full h-full flex-shrink-0 transition-transform duration-700',
                    imageFit === 'contain' ? 'object-contain p-3' : 'object-cover',
                  ].join(' ')}
                />
              ))}
            </div>

            {/* Bottom fade into card body */}
            <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-[#12151a] to-transparent" />
          </>
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950" />
        )}

        {/* Carousel dots — bottom-center of image */}
        {images.length > 1 && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-10">
            {images.map((_, i) => (
              <div
                key={i}
                className={`h-1 rounded-full transition-all duration-500 ${i === currentIndex
                    ? 'w-3 bg-white shadow-[0_0_6px_rgba(255,255,255,0.5)]'
                    : 'w-1.5 bg-white/30'
                  }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* ── TEXT SECTION ── */}
      <div className="flex flex-col flex-1 px-5 py-3 md:py-4 gap-2">

        {/* Title */}
        <h3 className="text-white font-bold text-[0.95rem] leading-snug mt-0.5">
          {achievement.title}
        </h3>

        {/* Organization — bigger, eye-catching */}
        <p
          className="text-sm font-semi tracking-wide"
        >
          {achievement.organization}
        </p>

        {/* Category badge (with icon) + Year pill */}
        <div className="flex items-center gap-2 flex-wrap mt-0.5">
          {/* Category badge with icon */}
          <span
            className="inline-flex items-center gap-1.5 text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full border"
            style={{
              color: accentColor,
              backgroundColor: accentColor + '18',
              borderColor: accentColor + '50',
            }}
          >
            {categoryIcon}
            {achievement.category}
          </span>

          {/* Year pill — styled */}
          <span
            className="inline-flex items-center gap-1 text-[10px] font-bold font-mono px-2.5 py-1 rounded-full border border-white/15 bg-white/5 text-white/70"
          >
            <Clock className="size-4 opacity-60" />
            {achievement.period}
          </span>
        </div>

        {/* Description */}
        {achievement.description && (
          <p className="text-white/55 text-xs leading-relaxed mt-1">
            {achievement.description}
          </p>
        )}
      </div>
    </div>
  )
}
