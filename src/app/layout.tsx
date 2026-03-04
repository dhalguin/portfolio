import type { Metadata } from 'next'
import { Toaster } from 'react-hot-toast'
import { toastOptions } from '@/lib/toast'
import { LenguageProvider } from '@/contexts/lenguageContext'
import { JetBrains_Mono, Space_Grotesk } from 'next/font/google'
import Layout from '@/components/layout'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  variable: '--font-space-grotesk',
  subsets: ['latin'],
})

const jetBrainsMono = JetBrains_Mono({
  variable: '--font-jet-brains-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Dhalgüin Hernández | Full Stack Developer',
  description: 'My portfolio as Full Stack Developer',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${spaceGrotesk.variable} ${jetBrainsMono.variable} antialiased`}>
        <LenguageProvider>
          <Layout>{children}</Layout>
        </LenguageProvider>
        <Toaster toastOptions={toastOptions} />
      </body>
    </html>
  )
}
