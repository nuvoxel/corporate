'use client'

import Link from 'next/link'
import { NuVoxelLogo } from './NuVoxelLogo'
import { HydrogenLogo } from './HydrogenLogo'
import { Linkedin, Youtube, BookOpen } from 'lucide-react'
import { usePathname } from 'next/navigation'

export function Footer() {
  const currentYear = new Date().getFullYear()
  const pathname = usePathname()
  const isDashboard = pathname?.startsWith('/dashboard')
  const isHydrogenPage = pathname === '/hydrogen'

  return (
    <footer className="mt-auto border-t bg-background/50 backdrop-blur-sm">
      <div className="w-full max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Left - Logo and company info */}
          <div className="flex flex-col items-center lg:items-start">
            <Link href="/" className="inline-flex items-center hover:opacity-80 transition-opacity">
              <NuVoxelLogo className="h-8 w-auto" variant="complete" />
            </Link>
            <p className="text-sm text-muted-foreground mt-4 text-center lg:text-left">
              {isDashboard ? (
                'Cloud Intelligence is NuVoxel\'s platform, empowering enterprises to make data-driven cloud decisions.'
              ) : (
                'Building enterprise solutions for modern cloud challenges.'
              )}
            </p>
          </div>

          {/* Center - Links */}
          <div className="flex justify-center gap-12">
            {/* Company Links */}
            <div>
              <h4 className="text-sm font-semibold mb-3">Company</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="https://hydrogen.nuvoxel.com" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Hydrogen Platform
                  </Link>
                </li>
                <li>
                  <Link href="/resale" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Resale
                  </Link>
                </li>
                <li>
                  <a href="https://shop.nuvoxel.com" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Shop
                  </a>
                </li>
                <li>
                  <Link href="/company/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            
            {/* Legal Links */}
            <div>
              <h4 className="text-sm font-semibold mb-3">Legal</h4>
              <div className="flex gap-3 min-w-0">
                {/* First column - 3 short entries */}
                <ul className="space-y-2">
                  <li>
                    <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap">
                      Terms
                    </Link>
                  </li>
                  <li>
                    <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap">
                      Privacy
                    </Link>
                  </li>
                  <li>
                    <Link href="/cookies" className="text-sm text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap">
                      Cookies
                    </Link>
                  </li>
                </ul>
                {/* Second column - 2 long entries */}
                <ul className="space-y-2 ml-8">
                  <li>
                    <Link href="/dpa" className="text-sm text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap">
                      Data Processing Agreement
                    </Link>
                  </li>
                  <li>
                    <Link href="/do-not-sell" className="text-sm text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap">
                      Do Not Sell/Share My Info
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right - Social links */}
          <div className="flex flex-col items-center lg:items-end">
            <h4 className="text-sm font-semibold mb-3">Connect</h4>
            <div className="flex gap-4">
              <Link 
                href="https://www.azurefieldnotes.com" 
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Blog"
              >
                <BookOpen className="h-5 w-5" />
              </Link>
              <Link 
                href="https://www.linkedin.com/company/nuvoxel/" 
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link 
                href="https://www.youtube.com/@cryingcloud1" 
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom - Copyright */}
        <div className="mt-12 pt-8 border-t text-center">
          <p className="text-xs text-muted-foreground">
            Built with ❤️ in Silicon Valley • Copyright © {currentYear} NuVoxel LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}