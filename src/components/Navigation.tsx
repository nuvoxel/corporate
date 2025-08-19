'use client'

import { UserButton, useUser, OrganizationSwitcher, useOrganization } from '@clerk/nextjs'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import ThemeSwitcher from './ThemeSwitcher'
import { SignInModal } from '@/components/SignInModal'
import { useState } from 'react'
import { useModal } from '@/contexts/ModalContext'
import { useDomainConfig } from '@/hooks/use-domain-config'
import { HydrogenLogo } from './HydrogenLogo'
import { BarChart3, GitCompare, Layers, Trophy } from 'lucide-react'

interface NavigationProps {
  showClerkComponents?: boolean
}

export function Navigation({ showClerkComponents = false }: NavigationProps) {
  const { isSignedIn, user, isLoaded } = useUser()
  const { organization } = useOrganization()  
  const { setSignInModalOpen } = useModal()
  const { config } = useDomainConfig()

  const layoutOverrides = config?.behavior.layoutOverrides || {}

  return (
    <nav className="flex items-center justify-between px-4 sm:px-6 py-3 border-b bg-background/95 backdrop-blur-sm">
      {/* Logo */}
      <Link href="/hydrogen/dashboard">
        <HydrogenLogo className="h-7 sm:h-9 w-auto" />
      </Link>

      {/* Right side - Navigation and auth */}
      <div className="flex items-center gap-6">
        {/* Main navigation */}
        <div className="hidden md:flex items-center gap-6">
          {isSignedIn ? (
            <>
              <Link href="/hydrogen/dashboard" className="text-foreground/80 hover:text-primary transition-colors">
                Dashboard
              </Link>
              <Link href="/hydrogen/dashboard/compare" className="text-foreground/80 hover:text-primary transition-colors">
                Compare
              </Link>
              <Link href="/hydrogen/dashboard/scenarios" className="text-foreground/80 hover:text-primary transition-colors">
                Scenarios
              </Link>
              <Link href="/hydrogen/dashboard/leaderboards" className="text-foreground/80 hover:text-primary transition-colors">
                Leaderboards
              </Link>
            </>
          ) : (
            <>
              <Link href="/hydrogen/dashboard/leaderboards" className="text-foreground/80 hover:text-primary transition-colors">
                Leaderboards
              </Link>
              <Link href="/company/pricing" className="text-foreground/80 hover:text-primary transition-colors">
                Pricing
              </Link>
            </>
          )}
        </div>

        {/* Mobile navigation icons - only for signed in users */}
        {isSignedIn && (
          <div className="flex md:hidden items-center gap-1">
            <Link href="/hydrogen/dashboard" className="p-1.5 text-foreground/80 hover:text-primary transition-colors" title="Dashboard">
              <BarChart3 className="h-5 w-5" />
            </Link>
            <Link href="/hydrogen/dashboard/compare" className="p-1.5 text-foreground/80 hover:text-primary transition-colors" title="Compare">
              <GitCompare className="h-5 w-5" />
            </Link>
            <Link href="/hydrogen/dashboard/scenarios" className="p-1.5 text-foreground/80 hover:text-primary transition-colors" title="Scenarios">
              <Layers className="h-5 w-5" />
            </Link>
          </div>
        )}

        {/* Auth section */}
        {!isLoaded ? (
          <div className="h-10 w-24 animate-pulse bg-gray-200 rounded"></div>
        ) : isSignedIn ? (
          <>
            {layoutOverrides.showThemeSwitcher !== false && <ThemeSwitcher />}
            {showClerkComponents && layoutOverrides.showOrganizationSwitcher !== false && (
              <OrganizationSwitcher 
                appearance={{
                  elements: {
                    rootBox: "flex items-center",
                    organizationSwitcherTrigger: "px-2 sm:px-3 py-1 sm:py-2 text-xs sm:text-sm"
                  }
                }}
                afterCreateOrganizationUrl="/hydrogen/dashboard"
                afterSelectOrganizationUrl="/hydrogen/dashboard"
              />
            )}
            {showClerkComponents && layoutOverrides.showUserButton !== false && (
              <UserButton 
                afterSignOutUrl="/"
                appearance={{
                  elements: {
                    avatarBox: "h-8 w-8",
                    userButtonBox: "h-8 w-8"
                  }
                }}
              />
            )}
          </>
        ) : (
          <Button 
            className="bg-gradient-to-r from-[var(--nuvoxel-primary)] to-[var(--nuvoxel-accent)] hover:from-[var(--nuvoxel-primary-dark)] hover:to-[var(--nuvoxel-accent-dark)] text-white shadow-md hover:shadow-lg transition-all duration-200"
            onClick={() => setSignInModalOpen(true)}
          >
            Get Started
          </Button>
        )}
      </div>
    </nav>
  )
}