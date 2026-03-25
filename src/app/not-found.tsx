'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Home, ArrowLeft } from 'lucide-react'

export default function NotFound() {
  const router = useRouter()

  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="max-w-md mx-auto px-6 text-center">
        <h1 className="text-8xl font-bold text-nuvoxel-navy dark:text-white mb-4 font-amiko">
          404
        </h1>
        <h2 className="text-2xl font-bold mb-4 text-nuvoxel-navy dark:text-white">
          Page not found
        </h2>
        <p className="text-muted-foreground mb-8">
          We couldn&apos;t find the page you&apos;re looking for.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button onClick={() => router.back()} variant="outline" size="lg">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Go Back
          </Button>
          <Button asChild size="lg">
            <Link href="/">
              <Home className="mr-2 h-4 w-4" />
              Homepage
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
