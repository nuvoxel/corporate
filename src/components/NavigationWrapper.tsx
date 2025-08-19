'use client'

import { LandingPageNavigation } from './LandingPageNavigation'
import { usePathname } from 'next/navigation'

export function NavigationWrapper() {
  const pathname = usePathname()
  
  // Check if we're on dashboard or other app pages
  const isAppPage = pathname?.startsWith('/dashboard')

  // Dashboard pages have their own navigation in the layout
  if (isAppPage) {
    return null
  }

  // For all other cases, show landing navigation
  return <LandingPageNavigation />
}