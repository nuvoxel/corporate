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
    <nav className="flex items-center justify-between px-4 sm:px-6 py-3 border-b bg-white/90 dark:bg-slate-900/95 backdrop-blur-sm">
      {/* Logo */}
      <Link href="/" className="cursor-pointer">
        <NuVoxelLogo className="h-7 sm:h-9 w-auto" variant="complete" />
      </Link>

      {/* Right side - Navigation */}
      <div className="flex items-center gap-6">
        {/* Main navigation */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="/#hydrogen" className="text-foreground/80 hover:text-primary transition-colors">
            Hydrogen
          </Link>
          <Link href="/company/pricing" className="text-foreground/80 hover:text-primary transition-colors">
            Pricing
          </Link>
          <Link href="/marketing/ripoff" className="text-foreground/80 hover:text-primary transition-colors">
            Cloud Ripoff
          </Link>
          <a href="https://shop.nuvoxel.com" className="text-foreground/80 hover:text-primary transition-colors">
            Shop
          </a>
          <Link href="/company/contact" className="text-foreground/80 hover:text-primary transition-colors">
            Contact Us
          </Link>
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