import type { Metadata } from 'next'
import { Amiko } from 'next/font/google'
import { Providers } from '@/components/Providers'
import { Toaster } from '@/components/ui/toaster'
import { NavigationWrapper } from '@/components/NavigationWrapper'
import { PageLayout } from '@/components/PageLayout'
import './globals.css'

const amiko = Amiko({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-amiko',
})

export const metadata: Metadata = {
  title: 'Hydrogen by NuVoxel - Cloud Intelligence Platform',
  description: 'Compare cloud providers, analyze workloads, predict costs, and find optimal configurations across AWS, Azure, and GCP with real pricing transparency.',
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  metadataBase: new URL('https://nuvoxel.com'),
  openGraph: {
    title: 'Hydrogen by NuVoxel',
    description: 'Transparent cloud intelligence: compare providers, analyze workloads, predict costs.',
    url: 'https://nuvoxel.com',
    siteName: 'NuVoxel',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hydrogen by NuVoxel',
    description: 'Transparent cloud intelligence: compare providers, analyze workloads, predict costs.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${amiko.variable} font-amiko bg-background text-foreground`}>
        <Providers>
          <NavigationWrapper />
          <PageLayout>
            {children}
          </PageLayout>
          <Toaster />
        </Providers>
      </body>
    </html>
  )
}