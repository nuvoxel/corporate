import type { Metadata } from 'next'
import { Amiko } from 'next/font/google'
import { Providers } from '@/components/Providers'
import { Toaster } from '@/components/ui/toaster'
import { NavigationWrapper } from '@/components/NavigationWrapper'
import { AuthenticatedLayout } from '@/components/AuthenticatedLayout'
import './globals.css'

const amiko = Amiko({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-amiko',
})

export const metadata: Metadata = {
  title: 'Hydrogen by NuVoxel - Cloud Intelligence Platform',
  description: 'Analyze costs, optimize resources, enhance security, and benchmark performance across all major cloud providers.',
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
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
          <AuthenticatedLayout>
            {children}
          </AuthenticatedLayout>
          <Toaster />
        </Providers>
      </body>
    </html>
  )
}