'use client'

import { Footer } from './Footer'
import { usePathname } from 'next/navigation'

export function AuthenticatedLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  
  // Don't show footer on dashboard pages (dashboard has its own footer)
  const isDashboardPage = pathname?.startsWith('/dashboard') || false
  const showFooter = !isDashboardPage

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1">
        {children}
      </div>
      {showFooter && <Footer />}
    </div>
  )
}