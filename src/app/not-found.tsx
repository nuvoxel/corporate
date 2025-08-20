'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Home, ArrowLeft } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function NotFound() {
  const router = useRouter()
  const [showLoader, setShowLoader] = useState(true)
  const [redirecting, setRedirecting] = useState(false)

  useEffect(() => {
    // Show the loader for a moment to add visual interest
    const timer = setTimeout(() => {
      setShowLoader(false)
    }, 1500)
    return () => clearTimeout(timer)
  }, [])

  const handleGoBack = () => {
    router.back()
  }

  const handleGoHome = () => {
    setRedirecting(true)
    router.push('/')
  }

  if (showLoader) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50 dark:from-slate-950 dark:via-blue-950 dark:to-slate-950">
        <div className="flex flex-col items-center gap-4">
          <div className="h-16 w-16 animate-spin rounded-full border-4 border-primary border-t-transparent" />
          <p className="text-lg text-muted-foreground">Searching for that page...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50 dark:from-slate-950 dark:via-blue-950 dark:to-slate-950">
      <div className="container mx-auto px-4">
        <Card className="max-w-2xl mx-auto p-8 md:p-12 text-center backdrop-blur-sm bg-white/80 dark:bg-slate-900/80 border-0 shadow-2xl">
          {/* Animated 404 with Hydrogen atom */}
          <div className="relative mb-8">
            <div className="absolute inset-0 flex items-center justify-center">
              <svg 
                className="w-48 h-48 md:w-64 md:h-64 opacity-10"
                viewBox="0 0 100 100"
              >
                <circle 
                  cx="50" 
                  cy="50" 
                  r="35" 
                  stroke="currentColor" 
                  strokeWidth="1" 
                  fill="none"
                  className="text-primary"
                />
                <circle 
                  cx="50" 
                  cy="50" 
                  r="20" 
                  stroke="currentColor" 
                  strokeWidth="0.5" 
                  fill="none"
                  className="text-primary"
                  strokeDasharray="2 2"
                />
              </svg>
            </div>
            <h1 className="text-8xl md:text-9xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent relative z-10">
              404
            </h1>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Lost in the Cloud?
          </h2>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto">
            We couldn&apos;t find the page you&apos;re looking for. It might have been moved, deleted, or perhaps it never existed in this universe.
          </p>

          {/* Fun facts while they're here */}
          <div className="bg-blue-50 dark:bg-blue-950/20 rounded-lg p-6 mb-8 max-w-md mx-auto">
            <p className="text-sm text-blue-800 dark:text-blue-200">
              <span className="font-semibold">Did you know?</span> A hydrogen atom is about 99.9999999999996% empty space. 
              Just like this page! 🌌
            </p>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={handleGoBack}
              variant="outline"
              size="lg"
              className="group"
              disabled={redirecting}
            >
              <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Go Back
            </Button>
            
            <Button 
              onClick={handleGoHome}
              size="lg"
              disabled={redirecting}
            >
              {redirecting ? (
                <>
                  <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                  Redirecting...
                </>
              ) : (
                <>
                  <Home className="mr-2 h-4 w-4" />
                  Go to Homepage
                </>
              )}
            </Button>
          </div>

          {/* Additional helpful links */}
          <div className="mt-12 pt-8 border-t">
            <p className="text-sm text-muted-foreground mb-4">
              Here are some helpful links:
            </p>
            <div className="flex flex-wrap gap-4 justify-center text-sm">
              <Link 
                href="https://hydrogen.nuvoxel.com" 
                className="text-primary hover:underline flex items-center gap-1"
              >
                Try Hydrogen
              </Link>
              <Link 
                href="/marketing/ripoff" 
                className="text-primary hover:underline flex items-center gap-1"
              >
                Cloud Ripoff
              </Link>
              <Link 
                href="/company/pricing" 
                className="text-primary hover:underline flex items-center gap-1"
              >
                Pricing
              </Link>
              <Link 
                href="/company/contact" 
                className="text-primary hover:underline flex items-center gap-1"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}