'use client'

import Link from 'next/link'
import { NuVoxelLogo } from './NuVoxelLogo'
import { usePathname } from 'next/navigation'
import ThemeSwitcher from './ThemeSwitcher'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

const navLinks = [
  { href: '/#projects', label: 'Projects' },
  { href: '/projects/cryingcloud', label: 'CryingCloud' },
  { href: '/projects/shop', label: 'Shop' },
  { href: '/company/contact', label: 'Contact' },
]

export function LandingPageNavigation() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-white/90 dark:bg-slate-950/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 shadow-sm">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="cursor-pointer">
          <NuVoxelLogo className="h-7 sm:h-9 w-auto" variant="complete" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-medium transition-colors ${
                pathname === link.href
                  ? 'text-nuvoxel-ocean border-b-2 border-nuvoxel-ocean pb-1'
                  : 'text-foreground/80 hover:text-nuvoxel-ocean'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <ThemeSwitcher />
        </div>

        {/* Mobile menu toggle */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeSwitcher />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5 text-foreground" />
            ) : (
              <Menu className="h-5 w-5 text-foreground" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 px-6 py-4 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-foreground/80 hover:text-nuvoxel-ocean transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}