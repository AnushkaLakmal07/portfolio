import { BadgeCheck, BriefcaseBusiness, FolderKanban, Mail, UserRound } from 'lucide-react'

interface SectionHeadingProps {
  title: string
}

const sectionIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  'About Me': UserRound,
  'Skills & Technologies': BriefcaseBusiness,
  Projects: FolderKanban,
  Achievements: BadgeCheck,
  'Contact Me': Mail,
}

export function SectionHeading({ title }: SectionHeadingProps) {
  const Icon = sectionIcons[title] ?? BadgeCheck

  return (
    <h2 className="flex items-center gap-2.5 md:gap-4 text-xl md:text-2xl font-bold text-foreground mb-4 md:mb-10">
      <span className="inline-flex items-center justify-center w-9 h-9 md:w-10 md:h-10 rounded-xl border border-primary/30 bg-primary/10 text-primary shadow-[0_0_18px_rgba(34,197,94,0.2)]">
        <Icon className="size-4 md:size-5" />
      </span>
      {title}
      <span className="flex-1 h-px bg-border ml-2.5 md:ml-4 max-w-xs" />
    </h2>
  )
}
