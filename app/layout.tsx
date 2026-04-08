import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Toaster } from '@/components/ui/sonner'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-jetbrains-mono' })

export const metadata: Metadata = {
  title: 'Anushka Lakmal',
  description: 'Portfolio of Anushka Lakmal - Aspiring Backend, DevOps & Cloud Engineer. BSc Computer Science undergraduate passionate about building scalable systems and infrastructure.',
  icons: {
    icon: "/e:\favicon_io\favicon.ico",
  },
  keywords: ['Backend Developer', 'DevOps Engineer', 'Cloud Engineer', 'Portfolio', 'Computer Science', 'AWS', 'Kubernetes', 'Docker'],
  authors: [{ name: 'Anushka Lakmal' }],
  creator: 'Anushka Lakmal',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Anushka Lakmal | Backend & DevOps Engineer',
    description: 'Portfolio of Anushka Lakmal - Aspiring Backend, DevOps & Cloud Engineer',
    siteName: 'Anushka Lakmal Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Anushka Lakmal | Backend & DevOps Engineer',
    description: 'Portfolio of Anushka Lakmal - Aspiring Backend, DevOps & Cloud Engineer',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  themeColor: '#0a192f',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        {children}
        <Toaster position="bottom-right" />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
