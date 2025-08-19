'use client'

import { useUser, UserButton, useOrganization, OrganizationSwitcher, CreateOrganization, useAuth } from '@clerk/nextjs'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { useModal } from '@/contexts/ModalContext'
import { NuVoxelLogo } from './NuVoxelLogo'
import { HydrogenLogo } from './HydrogenLogo'
import { usePathname } from 'next/navigation'
import ThemeSwitcher from './ThemeSwitcher'
import { HelpCircle, Building2, BarChart3, GitCompare, Layers, Trophy } from 'lucide-react'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Badge } from '@/components/ui/badge'

export function LandingPageNavigation() {
  const { isSignedIn, isLoaded, user } = useUser()
  const { organization } = useOrganization()
  const { has } = useAuth()
  const { setSignInModalOpen } = useModal()
  const pathname = usePathname()
  const isMainLandingPage = pathname === '/'
  const isHydrogenPage = pathname === '/hydrogen'
  const isHydrogenRoute = pathname?.startsWith('/hydrogen')
  
  // Check if user has organization management feature (Enterprise/Service Provider)
  const hasOrganizationManagement = has?.({ permission: 'org:organization_management' }) || false

  return (
    <nav className="flex items-center justify-between px-4 sm:px-6 py-3 border-b bg-background/95 backdrop-blur-sm">
      {/* Logo */}
      <Link href={isHydrogenRoute ? "https://hydrogen.nuvoxel.com/dashboard" : "/"}>
        {isHydrogenRoute ? (
          <HydrogenLogo className="h-7 sm:h-9 w-auto" animated={false} />
        ) : (
          <NuVoxelLogo className="h-7 sm:h-9 w-auto" variant="complete" />
        )}
      </Link>

      {/* Right side - Navigation and auth */}
      <div className="flex items-center gap-6">
        {/* Main navigation */}
        <div className="hidden md:flex items-center gap-6">
          {isHydrogenRoute && isSignedIn ? (
            <>
              <Link href="https://hydrogen.nuvoxel.com/dashboard" className="text-foreground/80 hover:text-primary transition-colors">
                Dashboard
              </Link>
              <Link href="https://hydrogen.nuvoxel.com/dashboard/compare" className="text-foreground/80 hover:text-primary transition-colors">
                Compare
              </Link>
              <Link href="https://hydrogen.nuvoxel.com/dashboard/scenarios" className="text-foreground/80 hover:text-primary transition-colors">
                Scenarios
              </Link>
              <Link href="https://hydrogen.nuvoxel.com/dashboard/leaderboards" className="text-foreground/80 hover:text-primary transition-colors">
                Leaderboards
              </Link>
              <Link href="/company/pricing" className="text-foreground/80 hover:text-primary transition-colors">
                Pricing
              </Link>
              <Link href="/company/contact" className="text-foreground/80 hover:text-primary transition-colors">
                Support
              </Link>
            </>
          ) : isHydrogenRoute && !isSignedIn ? (
            <>
              <Link href="https://hydrogen.nuvoxel.com/dashboard/leaderboards" className="text-foreground/80 hover:text-primary transition-colors">
                Leaderboards
              </Link>
              <Link href="/company/pricing" className="text-foreground/80 hover:text-primary transition-colors">
                Pricing
              </Link>
              <Link href="/company/contact" className="text-foreground/80 hover:text-primary transition-colors">
                Contact
              </Link>
            </>
          ) : isMainLandingPage ? (
            <>
              <Link href="#products" className="text-foreground/80 hover:text-primary transition-colors">
                Products
              </Link>
              <Link href="/company/pricing" className="text-foreground/80 hover:text-primary transition-colors">
                Pricing
              </Link>
              <Link href="/marketing/ripoff" className="text-foreground/80 hover:text-primary transition-colors">
                Cloud Ripoff
              </Link>
              <Link href="/marketing/shop" className="text-foreground/80 hover:text-primary transition-colors">
                Shop
              </Link>
              <Link href="/company/contact" className="text-foreground/80 hover:text-primary transition-colors">
                Contact Us
              </Link>
            </>
          ) : (
            <>
              <Link href="/#products" className="text-foreground/80 hover:text-primary transition-colors">
                Products
              </Link>
              <Link href="/company/pricing" className="text-foreground/80 hover:text-primary transition-colors">
                Pricing
              </Link>
              <Link href="/marketing/ripoff" className="text-foreground/80 hover:text-primary transition-colors">
                Cloud Ripoff
              </Link>
              <Link href="/marketing/shop" className="text-foreground/80 hover:text-primary transition-colors">
                Shop
              </Link>
              <Link href="/company/contact" className="text-foreground/80 hover:text-primary transition-colors">
                Contact Us
              </Link>
            </>
          )}
        </div>

        {/* Mobile navigation icons - only for signed in users on hydrogen routes */}
        {isHydrogenRoute && isSignedIn && (
          <div className="flex md:hidden items-center gap-1">
            <Link href="https://hydrogen.nuvoxel.com/dashboard" className="p-1.5 text-foreground/80 hover:text-primary transition-colors" title="Dashboard">
              <BarChart3 className="h-5 w-5" />
            </Link>
            <Link href="https://hydrogen.nuvoxel.com/dashboard/compare" className="p-1.5 text-foreground/80 hover:text-primary transition-colors" title="Compare">
              <GitCompare className="h-5 w-5" />
            </Link>
            <Link href="https://hydrogen.nuvoxel.com/dashboard/scenarios" className="p-1.5 text-foreground/80 hover:text-primary transition-colors" title="Scenarios">
              <Layers className="h-5 w-5" />
            </Link>
          </div>
        )}

        {/* Auth section */}
        {!isLoaded ? (
          <div className="h-10 w-24 animate-pulse bg-gray-200 rounded"></div>
        ) : isSignedIn ? (
          isHydrogenRoute ? (
            <div className="flex items-center gap-4">
              {/* Help button */}
              <Button
                variant="ghost"
                size="icon"
                className="text-muted-foreground hover:text-foreground"
                title="Help & Documentation"
              >
                <HelpCircle className="h-5 w-5" />
              </Button>

              {/* Theme switcher */}
              <ThemeSwitcher />

              {/* Organization switcher - only for users with organization management */}
              {hasOrganizationManagement && (
                <>
                  {organization ? (
                    <OrganizationSwitcher 
                      appearance={{
                        elements: {
                          rootBox: "flex items-center",
                          organizationSwitcherTrigger: "px-2 sm:px-3 py-1 sm:py-2 text-xs sm:text-sm"
                        }
                      }}
                      afterCreateOrganizationUrl="https://hydrogen.nuvoxel.com/dashboard"
                      afterSelectOrganizationUrl="https://hydrogen.nuvoxel.com/dashboard"
                    />
                  ) : (
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline" size="sm" className="flex items-center gap-2">
                          <Building2 className="h-4 w-4" />
                          <span className="hidden sm:block">Create Organization</span>
                          <Badge variant="secondary" className="ml-1 text-xs">Required</Badge>
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-md">
                        <DialogHeader>
                          <DialogTitle>Create Your Organization</DialogTitle>
                          <DialogDescription>
                            Enterprise features require an organization. Create one to get started with team management and collaboration features.
                          </DialogDescription>
                        </DialogHeader>
                        <CreateOrganization 
                          afterCreateOrganizationUrl="https://hydrogen.nuvoxel.com/dashboard"
                          appearance={{
                            elements: {
                              rootBox: "w-full",
                              card: "shadow-none border-0"
                            }
                          }}
                        />
                      </DialogContent>
                    </Dialog>
                  )}
                </>
              )}

              {/* User button */}
              <UserButton 
                afterSignOutUrl="/"
                appearance={{
                  elements: {
                    avatarBox: "h-8 w-8",
                    userButtonBox: "h-8 w-8"
                  }
                }}
              />
            </div>
          ) : (
            <Link href="https://hydrogen.nuvoxel.com/dashboard">
              <Button className="bg-primary hover:bg-primary/90">
                Dashboard
              </Button>
            </Link>
          )
        ) : isHydrogenPage ? (
          <Button 
            className="bg-gradient-to-r from-[#163172] to-[#3A81C3] hover:from-[#0E1F4A] hover:to-[#2B5E98] text-white shadow-md hover:shadow-lg transition-all duration-200"
            onClick={() => setSignInModalOpen(true)}
          >
            Start Free Trial
          </Button>
        ) : (
          <Link href="https://hydrogen.nuvoxel.com">
            <Button 
              className="bg-gradient-to-r from-[#163172] to-[#3A81C3] hover:from-[#0E1F4A] hover:to-[#2B5E98] text-white shadow-md hover:shadow-lg transition-all duration-200"
            >
              Get Started
            </Button>
          </Link>
        )}
      </div>
    </nav>
  )
}