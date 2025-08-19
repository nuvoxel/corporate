'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { NuVoxelLogo } from './NuVoxelLogo'
import { usePathname } from 'next/navigation'
import ThemeSwitcher from './ThemeSwitcher'

export function LandingPageNavigation() {
  const pathname = usePathname()
  const isMainLandingPage = pathname === '/'

  return (
    <nav className="flex items-center justify-between px-4 sm:px-6 py-3 border-b bg-background/95 backdrop-blur-sm">
      {/* Logo */}
      <Link href="/">
        <NuVoxelLogo className="h-7 sm:h-9 w-auto" variant="complete" />
      </Link>

      {/* Right side - Navigation */}
      <div className="flex items-center gap-6">
        {/* Main navigation */}
        <div className="hidden md:flex items-center gap-6">
          {isMainLandingPage ? (
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

        {/* Theme switcher and Hydrogen button */}
        <div className="flex items-center gap-2">
          <ThemeSwitcher />
          <Link href="https://hydrogen.nuvoxel.com">
            <Button variant="default" size="sm">
              Try Hydrogen
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  )
}