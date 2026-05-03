'use client'
import { SectionHeading } from './section-heading'
import { Code2, Cloud, Database, Terminal, GitBranch, Monitor, Layers } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

type SkillIcon = { bg: string; content: React.ReactNode }

const skillIcons: Record<string, SkillIcon> = {
  Python: {
    bg: '#3776AB',
    content: (
      <svg viewBox="0 0 24 24" width="14" height="14" fill="none">
        <path d="M11.914 0C5.82 0 6.2 2.656 6.2 2.656l.007 2.752h5.814v.826H3.9S0 5.789 0 11.969c0 6.18 3.403 5.96 3.403 5.96h2.031v-2.867s-.109-3.402 3.35-3.402h5.769s3.24.052 3.24-3.13V3.13S18.28 0 11.914 0zm-3.2 1.812a1.042 1.042 0 1 1 0 2.083 1.042 1.042 0 0 1 0-2.083z" fill="#fff"/>
        <path d="M12.086 24c6.094 0 5.714-2.656 5.714-2.656l-.007-2.752h-5.814v-.826h8.121S24 18.211 24 12.031c0-6.18-3.403-5.96-3.403-5.96h-2.031v2.867s.109 3.402-3.35 3.402H9.447s-3.24-.052-3.24 3.13V20.87S5.72 24 12.086 24zm3.2-1.812a1.042 1.042 0 1 1 0-2.083 1.042 1.042 0 0 1 0 2.083z" fill="#FFD43B"/>
      </svg>
    ),
  },
  JavaScript: {
    bg: '#F7DF1E',
    content: <span style={{ fontSize: 9, fontWeight: 900, color: '#000' }}>JS</span>,
  },
  Java: {
    bg: '#E76F00',
    content: <span style={{ fontSize: 9, fontWeight: 900, color: '#fff' }}>☕</span>,
  },
  C: {
    bg: '#2c5fbc',
    content: <span style={{ fontSize: 10, fontWeight: 900, color: '#fff' }}>C</span>,
  },
  SQL: {
    bg: '#336791',
    content: (
      <svg viewBox="0 0 24 24" width="13" height="13" fill="#fff">
        <path d="M12 2C6.48 2 2 4.24 2 7v10c0 2.76 4.48 5 10 5s10-2.24 10-5V7c0-2.76-4.48-5-10-5zm0 2c4.42 0 8 1.79 8 4s-3.58 4-8 4-8-1.79-8-4 3.58-4 8-4zm0 16c-4.42 0-8-1.79-8-4v-2.23C5.61 15.15 8.65 16 12 16s6.39-.85 8-2.23V16c0 2.21-3.58 4-8 4z"/>
      </svg>
    ),
  },
  'Node.js': {
    bg: '#339933',
    content: <span style={{ fontSize: 8, fontWeight: 900, color: '#fff' }}>NODE</span>,
  },
  FastAPI: {
    bg: '#009688',
    content: <span style={{ fontSize: 10, fontWeight: 900, color: '#fff' }}>⚡</span>,
  },
  'REST APIs': {
    bg: '#6366f1',
    content: <span style={{ fontSize: 8, fontWeight: 900, color: '#fff' }}>API</span>,
  },
  PostgreSQL: {
    bg: '#336791',
    content: <span style={{ fontSize: 8, fontWeight: 900, color: '#fff' }}>PG</span>,
  },
  MongoDB: {
    bg: '#47A248',
    content: (
      <svg viewBox="0 0 24 24" width="12" height="12" fill="#fff">
        <path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.3 6.335 3.67 8.927 4.26 9.346.168.12.41.143.61.09.18-.05.35-.15.48-.3 1.37-1.484 1.87-2.73 1.91-3.08.062-.5-.016-1.003-.16-1.49.63-.87 1.13-1.93 1.13-2.91 0-1.03-.29-1.975-.66-2.295z"/>
      </svg>
    ),
  },
  Redis: {
    bg: '#DC382D',
    content: <span style={{ fontSize: 8, fontWeight: 900, color: '#fff' }}>RDS</span>,
  },
  Docker: {
    bg: '#2496ED',
    content: (
      <svg viewBox="0 0 24 24" width="14" height="14" fill="#fff">
        <path d="M13.983 11.078h2.119a.186.186 0 0 0 .186-.185V9.006a.186.186 0 0 0-.186-.186h-2.119a.185.185 0 0 0-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 0 0 .186-.186V3.574a.186.186 0 0 0-.186-.185h-2.118a.185.185 0 0 0-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 0 0 .186-.186V6.29a.186.186 0 0 0-.186-.185h-2.118a.185.185 0 0 0-.185.185v1.887c0 .102.082.185.185.186m-2.93 0h2.12a.186.186 0 0 0 .184-.186V6.29a.185.185 0 0 0-.185-.185H8.1a.185.185 0 0 0-.185.185v1.887c0 .102.083.185.185.186m-2.964 0h2.119a.186.186 0 0 0 .185-.186V6.29a.185.185 0 0 0-.185-.185H5.136a.186.186 0 0 0-.186.185v1.887c0 .102.084.185.186.186m5.893 2.715h2.118a.186.186 0 0 0 .186-.185V9.006a.186.186 0 0 0-.186-.186h-2.118a.185.185 0 0 0-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 0 0 .184-.185V9.006a.185.185 0 0 0-.184-.186h-2.12a.185.185 0 0 0-.184.185v1.888c0 .102.083.185.185.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338.001-.676.03-1.01.087-.248-1.7-1.653-2.53-1.716-2.566l-.344-.199-.226.327c-.284.438-.49.922-.612 1.43-.23.97-.09 1.882.403 2.661-.595.332-1.55.413-1.744.42H.751a.751.751 0 0 0-.75.748 11.376 11.376 0 0 0 .692 4.062c.545 1.428 1.355 2.48 2.41 3.124 1.18.723 3.1 1.137 5.275 1.137.983.003 1.963-.086 2.93-.266a12.248 12.248 0 0 0 3.823-1.389c.98-.567 1.86-1.288 2.61-2.136 1.252-1.418 1.998-2.997 2.553-4.4h.221c1.372 0 2.215-.549 2.68-1.009.309-.293.55-.65.707-1.046l.098-.288Z"/>
      </svg>
    ),
  },
  'GitHub Actions': {
    bg: '#2088FF',
    content: (
      <svg viewBox="0 0 24 24" width="13" height="13" fill="#fff">
        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.09.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.349-1.086.635-1.337-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.268 2.75 1.026A9.578 9.578 0 0 1 12 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.026 2.747-1.026.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
      </svg>
    ),
  },
  AWS: {
    bg: '#FF9900',
    content: <span style={{ fontSize: 8, fontWeight: 900, color: '#fff' }}>AWS</span>,
  },
  Git: {
    bg: '#F05032',
    content: (
      <svg viewBox="0 0 24 24" width="13" height="13" fill="#fff">
        <path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.608-.406-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187"/>
      </svg>
    ),
  },
  GitHub: {
    bg: '#181717',
    content: (
      <svg viewBox="0 0 24 24" width="13" height="13" fill="#fff">
        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.09.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.349-1.086.635-1.337-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.268 2.75 1.026A9.578 9.578 0 0 1 12 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.026 2.747-1.026.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
      </svg>
    ),
  },
  'VS Code': {
    bg: '#007ACC',
    content: (
      <svg viewBox="0 0 24 24" width="13" height="13" fill="#fff">
        <path d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 19.05V4.95a1.5 1.5 0 0 0-.85-1.363zm-5.146 14.861L10.826 12l7.178-5.448v10.896z"/>
      </svg>
    ),
  },
  Postman: {
    bg: '#FF6C37',
    content: <span style={{ fontSize: 9, fontWeight: 900, color: '#fff' }}>P</span>,
  },
  React: {
    bg: '#20232a',
    content: (
      <svg viewBox="0 0 24 24" width="14" height="14" fill="#61DAFB">
        <circle cx="12" cy="11.245" r="1.785"/>
        <path d="M12 8.003C6.251 8.003 1.37 9.388 1.37 11.245c0 1.857 4.881 3.242 10.63 3.242s10.63-1.385 10.63-3.242c0-1.857-4.881-3.242-10.63-3.242zm0 5.366c-5.118 0-9.13-1.022-9.13-2.124 0-1.102 4.012-2.124 9.13-2.124s9.13 1.022 9.13 2.124c0 1.102-4.012 2.124-9.13 2.124z"/>
        <path d="M8.465 9.625C5.59 4.629 3.193 1.402 1.853 2.18.513 2.957.992 7.38 3.867 12.376s5.272 8.223 6.612 7.446c1.34-.777.861-5.201-2.014-10.197zm-.867 1.499c2.562 4.432 3.487 8.348 2.073 9.173-1.414.825-4.499-1.754-7.061-6.186S-.877 5.763.537 4.938C1.951 4.113 5.036 6.692 7.598 11.124z"/>
        <path d="M15.535 9.625c2.875-4.996 5.272-8.223 6.612-7.446 1.34.777.861 5.201-2.014 10.197s-5.272 8.223-6.612 7.446c-1.34-.777-.861-5.201 2.014-10.197zm.867 1.499c-2.562 4.432-3.487 8.348-2.073 9.173 1.414.825 4.499-1.754 7.061-6.186s2.972-8.348 1.558-9.173c-1.414-.825-4.499 1.754-7.061 6.186z"/>
      </svg>
    ),
  },
  'Next.js': {
    bg: '#000',
    content: <span style={{ fontSize: 9, fontWeight: 900, color: '#fff' }}>N</span>,
  },
  'Electron.js': {
    bg: '#47848F',
    content: <span style={{ fontSize: 8, fontWeight: 900, color: '#fff' }}>e⁻</span>,
  },
  '.NET': {
    bg: '#512BD4',
    content: <span style={{ fontSize: 7, fontWeight: 900, color: '#fff' }}>.NET</span>,
  },
}

const skillCategories = [
  { title: 'Languages', icon: Code2, skills: ['Python', 'JavaScript', 'Java', 'C', 'SQL'] },
  { title: 'Backend', icon: Terminal, skills: ['Node.js', 'Python', 'FastAPI', 'REST APIs'] },
  { title: 'Databases', icon: Database, skills: ['PostgreSQL', 'MongoDB', 'Redis'] },
  { title: 'DevOps', icon: GitBranch, skills: ['Docker', 'GitHub Actions'] },
  { title: 'Cloud', icon: Cloud, skills: ['AWS'] },
  { title: 'Tools', icon: Monitor, skills: ['Git', 'GitHub', 'VS Code', 'Postman'] },
  { title: 'Frameworks', icon: Layers, skills: ['React', 'Next.js', 'Electron.js', '.NET'] },
]

function SkillBadge({ skill }: { skill: string }) {
  const icon = skillIcons[skill]
  return (
    <div className="group/badge flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 hover:border-primary/40 hover:bg-primary/8 transition-all duration-300 cursor-default hover:shadow-[0_0_12px_rgba(34,197,94,0.12)]">
      {icon && (
        <span
          className="flex items-center justify-center rounded-full w-5 h-5 shrink-0 transition-transform duration-300 group-hover/badge:scale-110"
          style={{ background: icon.bg }}
        >
          {icon.content}
        </span>
      )}
      <span className="text-xs font-semibold text-foreground/80 group-hover/badge:text-foreground tracking-wide whitespace-nowrap">
        {skill}
      </span>
    </div>
  )
}

export function Skills() {
  return (
    <section id="skills" className="py-10 md:py-24 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <SectionHeading title="Skills & Technologies" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {skillCategories.map((category) => (
            <Card
              key={category.title}
              className="group bg-card/60 md:bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card hover:border-primary/50 transition-all duration-300 md:duration-500 rounded-xl overflow-hidden md:hover:-translate-y-2 md:hover:shadow-xl md:hover:shadow-primary/10"
            >
              <CardHeader className="pb-3 border-b border-white/5">
                <CardTitle className="flex items-center gap-3 text-lg md:text-xl font-semibold tracking-tight">
                  <span className="inline-flex size-7 md:size-8 items-center justify-center rounded-lg bg-primary/15 border border-primary/25">
                    <category.icon className="size-4 text-primary transition-transform duration-300 group-hover:scale-110" />
                  </span>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <SkillBadge key={skill} skill={skill} />
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
