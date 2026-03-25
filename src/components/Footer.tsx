'use client'

import Link from 'next/link'
import { NuVoxelLogo } from './NuVoxelLogo'
import { Linkedin, Youtube, BookOpen } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="mt-auto border-t bg-slate-50 dark:bg-slate-950">
      <div className="w-full max-w-[1200px] mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo & Copyright */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <Link href="/" className="inline-flex items-center hover:opacity-80 transition-opacity">
              <NuVoxelLogo className="h-7 w-auto" variant="complete" />
            </Link>
            <p className="text-sm text-muted-foreground">
              © {currentYear} NuVoxel LLC. the Bay Area.
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-6 text-sm">
            <Link href="/legal/terms" className="text-muted-foreground hover:text-foreground transition-colors">
              Terms
            </Link>
            <Link href="/legal/privacy" className="text-muted-foreground hover:text-foreground transition-colors">
              Privacy
            </Link>
          </div>

          {/* Social */}
          <div className="flex gap-5">
            <a
              href="https://x.com/nuvoxel"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="X"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/company/nuvoxel/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://www.youtube.com/@cryingcloud1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="YouTube"
            >
              <Youtube className="h-5 w-5" />
            </a>
            <a
              href="https://www.azurefieldnotes.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Blog"
            >
              <BookOpen className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
