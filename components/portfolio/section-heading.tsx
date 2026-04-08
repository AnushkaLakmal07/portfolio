interface SectionHeadingProps {
  number: number
  title: string
}

export function SectionHeading({ number, title }: SectionHeadingProps) {
  return (
    <h2 className="flex items-center gap-4 text-2xl md:text-3xl font-bold text-foreground mb-10">
      <span className="text-primary font-mono text-lg md:text-xl font-normal">
        0{number}.
      </span>
      {title}
      <span className="flex-1 h-px bg-border ml-4 max-w-xs" />
    </h2>
  )
}
