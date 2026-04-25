import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { SectionHeading } from './section-heading'
import { AchievementCard } from './achievement-card'
import { achievements } from '@/lib/data/achievements'

export function Experience() {
  const featured = achievements.slice(0, 4)

  return (
    <section id="achievements" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <SectionHeading title="Achievements" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
          {featured.map((achievement) => (
            <AchievementCard key={achievement.id} achievement={achievement} />
          ))}
        </div>

        
        {/*See All Button — temporarily disabled*/}

        {/*<div className="flex justify-center mt-12">
          <Link
            href="/achievements"
            className="group inline-flex items-center gap-3 px-8 py-3 rounded-full border border-primary/40 text-primary font-medium text-sm hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
          >
            See All Achievements
            <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      */}
      </div>
    </section>
  )
}
