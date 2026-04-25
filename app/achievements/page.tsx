import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { AchievementCard } from '@/components/portfolio/achievement-card'
import { achievements } from '@/lib/data/achievements'

export const metadata = {
  title: 'Achievements | Anushka Lakmal',
  description:
    'A complete list of my achievements, certifications, projects, and educational milestones.',
}

export default function AchievementsPage() {
  const categories = Array.from(new Set(achievements.map((a) => a.category)))

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <div className="border-b border-border/50 bg-background/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-200 text-sm font-medium"
          >
            <ArrowLeft className="size-4 group-hover:-translate-x-1 transition-transform duration-300" />
            Back to Portfolio
          </Link>
          <span className="text-xs font-mono text-muted-foreground">
            {achievements.length} achievements
          </span>
        </div>
      </div>

      <main className="max-w-6xl mx-auto px-6 py-16">
        {/* Page heading */}
        <div className="mb-14 text-center">
          <p className="text-primary font-mono text-sm mb-3 tracking-widest uppercase">
            04. milestones
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            All Achievements
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto text-base leading-relaxed">
            A complete collection of my professional milestones, certifications, competitions, and educational accomplishments.
          </p>
        </div>

        {/* Grouped by category */}
        {categories.map((category) => {
          const items = achievements.filter((a) => a.category === category)
          return (
            <div key={category} className="mb-16">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px flex-1 bg-border/50" />
                <span className="text-xs font-bold tracking-widest uppercase text-muted-foreground">
                  {category}
                </span>
                <div className="h-px flex-1 bg-border/50" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {items.map((achievement) => (
                  <AchievementCard key={achievement.id} achievement={achievement} />
                ))}
              </div>
            </div>
          )
        })}
      </main>

      {/* Footer */}
      <div className="border-t border-border/50 py-8 text-center">
        <p className="text-muted-foreground text-sm">
          © {new Date().getFullYear()} Anushka Lakmal · All rights reserved
        </p>
      </div>
    </div>
  )
}
