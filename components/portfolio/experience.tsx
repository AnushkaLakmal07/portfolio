import { SectionHeading } from './section-heading'
import { AchievementCard } from './achievement-card'
import { achievements } from '@/lib/data/achievements'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselDots,
} from '@/components/ui/carousel'

export function Experience() {
  const featured = achievements.slice(0, 4)

  return (
    <section id="achievements" className="py-10 md:py-24 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <SectionHeading title="Achievements" />

        {/* Mobile: carousel with swipe + dots */}
        <div className="relative px-0 sm:px-12 mt-6 md:mt-10 md:hidden">
          <Carousel
            opts={{
              align: 'start',
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4 sm:-ml-6 items-stretch">
              {featured.map((achievement) => (
                <CarouselItem key={achievement.id} className="pl-4 sm:pl-6 md:basis-1/2 lg:basis-1/2 h-auto">
                  <AchievementCard achievement={achievement} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="bg-[#1e2329]/80 h-10 w-10 border-white/10 text-white hover:bg-[#252b32] hover:text-green-500 transition-colors" />
            <CarouselNext className="bg-[#1e2329]/80 h-10 w-10 border-white/10 text-white hover:bg-[#252b32] hover:text-green-500 transition-colors" />

            <CarouselDots className="mt-6 md:mt-8" />
          </Carousel>
        </div>

        {/* Desktop: original grid layout */}
        <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
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
