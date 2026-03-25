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
  title: 'NuVoxel - Ideas. Projects. Built with curiosity.',
  description: 'NuVoxel is Mike DeLuca\'s workshop for interesting ideas and projects. Cloud cost optimization, Filla IQ, and parts & supplies.',
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  metadataBase: new URL('https://nuvoxel.com'),
  openGraph: {
    title: 'NuVoxel - Ideas. Projects. Built with curiosity.',
    description: 'Mike DeLuca\'s workshop for interesting ideas and projects. CryingCloud, Filla IQ, and NuVoxel Shop.',
    url: 'https://nuvoxel.com',
    siteName: 'NuVoxel',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NuVoxel - Ideas. Projects. Built with curiosity.',
    description: 'Mike DeLuca\'s workshop for interesting ideas and projects.',
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