'use client'

import { Navigation } from './Navigation'
import { LandingPageNavigation } from './LandingPageNavigation'
import { useDomainConfig } from '@/hooks/use-domain-config'
import { usePathname } from 'next/navigation'
import { useUser } from '@clerk/nextjs'

export function NavigationWrapper() {
  const { config, isLoading } = useDomainConfig()
  const pathname = usePathname()
  const { isSignedIn } = useUser()
  
  // Hide navigation on auth pages
  const isAuthPage = pathname?.startsWith('/sign-in') || pathname?.startsWith('/sign-up')
  if (isAuthPage) {
    return null
  }

  if (isLoading || !config) {
    // Return a loading skeleton or null
    return <div className="h-16 border-b bg-background/95 backdrop-blur-sm" />
  }

  // Don't show navigation if configured not to
  if (!config.behavior.showNavigation || config.behavior.navigationComponent === 'none') {
    return null
  }

  // Check if we're on dashboard or other app pages
  const isAppPage = pathname?.startsWith('/dashboard') || pathname?.startsWith('/hydrogen/dashboard')

  // Dashboard pages have their own navigation in the layout
  if (isAppPage) {
    return null
  }

  // For all other cases, show landing navigation
  return <LandingPageNavigation />
}