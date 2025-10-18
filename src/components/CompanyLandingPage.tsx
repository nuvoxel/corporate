'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { NuVoxelLogo } from '@/components/NuVoxelLogo'
import { HydrogenLogo } from '@/components/HydrogenLogo'
import { YouTubeLatestVideo } from '@/components/YouTubeLatestVideo'
import { Cloud, ArrowRight, BarChart3, Users, Shield, Sparkles, TrendingUp, AlertTriangle, Youtube } from 'lucide-react'

export default function CompanyLandingPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-white via-blue-50 to-slate-50 dark:from-slate-950 dark:via-blue-950 dark:to-slate-950">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-gradient-to-br from-blue-400/20 to-purple-400/20 blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-gradient-to-tr from-green-400/20 to-blue-400/20 blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Text content */}
            <div className="text-center lg:text-left">
              <div className="mb-8">
                <NuVoxelLogo className="h-16 w-auto mx-auto lg:mx-0" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                Cloud Intelligence for Everyone - Now Available!
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0">
                NuVoxel makes cloud pricing transparent and accessible, helping anyone compare providers and make informed decisions
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" asChild className="bg-primary hover:bg-primary/90">
                  <Link href="https://hydrogen.nuvoxel.com">
                    Explore Hydrogen
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="#products">
                    Our Products
                  </Link>
                </Button>
              </div>
              
              {/* Cloud Ripoff Alert */}
              <div className="mt-8 p-4 bg-orange-50 dark:bg-orange-950/20 border border-orange-200 dark:border-orange-800 rounded-lg max-w-lg">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-orange-900 dark:text-orange-100">
                      Did you know? Cloud providers enjoy 40% profit margins while you struggle with surprise bills.
                    </p>
                    <Link href="/marketing/ripoff" className="text-sm text-orange-700 dark:text-orange-400 hover:text-orange-800 dark:hover:text-orange-300 underline mt-1 inline-block">
                      Learn about the cloud pricing ripoff →
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Animated graphic */}
            <div className="relative h-[500px] hidden lg:block">
              {/* Hydrogen atom orbit rings behind providers */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] z-5">
                <svg className="w-full h-full" viewBox="0 0 450 450">
                  {/* Outer orbit */}
                  <circle 
                    cx="225" 
                    cy="225" 
                    r="220" 
                    stroke="rgb(99, 102, 241)" 
                    strokeWidth="2" 
                    fill="none" 
                    opacity="0.4"
                    strokeDasharray="8,12"
                  />
                  {/* Inner orbit */}
                  <circle 
                    cx="225" 
                    cy="225" 
                    r="140" 
                    stroke="rgb(99, 102, 241)" 
                    strokeWidth="1.5" 
                    fill="none" 
                    opacity="0.3"
                    strokeDasharray="5,8"
                  />
                  {/* Outer electron */}
                  <circle cx="445" cy="225" r="8" fill="rgb(99, 102, 241)" opacity="0.9">
                    <animateTransform
                      attributeName="transform"
                      attributeType="XML"
                      type="rotate"
                      from="0 225 225"
                      to="360 225 225"
                      dur="20s"
                      repeatCount="indefinite"
                    />
                  </circle>
                </svg>
              </div>


              {/* Central NuVoxel hub - Atom nucleus */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                <div className="relative">
                  {/* Nucleus glow effect */}
                  <div className="absolute inset-0 w-36 h-36 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full blur-xl opacity-50"></div>
                  {/* Main nucleus */}
                  <div className="relative w-36 h-36 bg-gradient-to-br from-primary to-blue-600 rounded-full shadow-2xl shadow-primary/50 flex items-center justify-center">
                    {/* Inner particles */}
                    <div className="absolute w-4 h-4 bg-blue-400 rounded-full top-1/3 left-1/3 opacity-80"></div>
                    <div className="absolute w-3 h-3 bg-purple-400 rounded-full bottom-1/3 right-1/3 opacity-80"></div>
                    <div className="absolute w-3 h-3 bg-indigo-400 rounded-full top-1/2 right-1/4 opacity-80"></div>
                    {/* Center core */}
                    <div className="w-24 h-24 bg-gradient-to-br from-white/90 to-blue-100/90 dark:from-gray-800/90 dark:to-blue-900/90 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <Cloud className="w-12 h-12 text-primary" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Cloud providers distributed on the outer ring */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[440px] h-[440px] z-20">
                {/* AWS - Top (0 degrees) - on the ring */}
                <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2" style={{ top: '0' }}>
                  <div className="w-24 h-24 bg-white dark:bg-gray-800 rounded-lg shadow-lg flex items-center justify-center p-3 hover:scale-110 transition-transform">
                    <Image src="/aws-color-24.svg" alt="AWS" width={96} height={96} className="w-full h-full" />
                  </div>
                </div>
                
                {/* Azure - Right (90 degrees) - on the ring */}
                <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2">
                  <div className="w-24 h-24 bg-white dark:bg-gray-800 rounded-lg shadow-lg flex items-center justify-center p-4 hover:scale-110 transition-transform">
                    <Image src="/azure-color-24.svg" alt="Azure" width={96} height={96} className="w-full h-full" />
                  </div>
                </div>
                
                {/* GCP - Bottom (180 degrees) - on the ring */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
                  <div className="w-24 h-24 bg-white dark:bg-gray-800 rounded-lg shadow-lg flex items-center justify-center p-3 hover:scale-110 transition-transform">
                    <Image src="/gcp-color-24.svg" alt="Google Cloud" width={96} height={96} className="w-full h-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-slate-50 dark:bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Product Portfolio
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Enterprise-grade solutions designed for modern cloud challenges
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Hydrogen - Primary Product */}
            <Card className="relative overflow-hidden border-2 hover:border-primary transition-colors">
              <div className="absolute top-0 right-0 bg-primary text-white px-3 py-1 text-sm font-medium">
                FLAGSHIP
              </div>
              <CardHeader>
                <HydrogenLogo className="h-20 w-auto mb-4" animated={false} />
                <CardDescription className="text-base">
                  Compare cloud pricing across major providers instantly
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    Whether you&apos;re choosing your first cloud provider or optimizing complex multi-cloud deployments, Hydrogen provides instant SKU comparisons, benchmarking data, and pricing intelligence across all major providers.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <BarChart3 className="h-4 w-4" />
                      <span>Real-time Pricing</span>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Cloud className="h-4 w-4" />
                      <span>Multi-Cloud</span>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Sparkles className="h-4 w-4" />
                      <span>Performance Benchmarks</span>
                    </div>
                  </div>
                  <Button asChild className="w-full">
                    <Link href="https://hydrogen.nuvoxel.com">
                      Learn More About Hydrogen
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* YouTube Videos - Free Resource */}
            <Card className="relative overflow-hidden hover:border-red-500/50 transition-colors">
              <div className="absolute top-0 right-0 bg-red-600 text-white px-3 py-1 text-sm font-medium">
                FREE
              </div>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-red-100 dark:bg-red-900/20 flex items-center justify-center">
                    <Youtube className="h-6 w-6 text-red-600 dark:text-red-400" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">YouTube Channel</CardTitle>
                    <CardDescription className="text-base">
                      Cloud Secrets They Don&apos;t Want You to Know
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-muted-foreground text-sm">
                    Free educational content exposing cloud pricing tricks, hidden costs, and money-saving strategies.
                  </p>
                  
                  {/* Latest Video Embed */}
                  <YouTubeLatestVideo />
                  
                  <div className="flex flex-wrap gap-2">
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <TrendingUp className="h-4 w-4" />
                      <span>Weekly Videos</span>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <AlertTriangle className="h-4 w-4" />
                      <span>Truth Exposed</span>
                    </div>
                  </div>
                  <Button asChild variant="outline" className="w-full group">
                    <Link href="https://www.youtube.com/@cryingcloud1" target="_blank" rel="noopener noreferrer">
                      <Youtube className="mr-2 h-4 w-4 text-red-600 group-hover:text-red-700" />
                      Subscribe Now
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose NuVoxel
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Making cloud pricing transparent and accessible for everyone - from startups to enterprises
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="mb-4 mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">For Everyone</h3>
              <p className="text-muted-foreground">
                From individuals exploring cloud options to enterprises managing complex deployments - we serve all users
              </p>
            </div>

            <div className="text-center">
              <div className="mb-4 mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <BarChart3 className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Data Transparency</h3>
              <p className="text-muted-foreground">
                Real-time pricing data and performance benchmarks from major cloud providers, presented in clear comparisons
              </p>
            </div>

            <div className="text-center">
              <div className="mb-4 mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <Sparkles className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Instant Insights</h3>
              <p className="text-muted-foreground">
                Compare SKUs, understand pricing models, and find the best options for your needs in seconds
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Make Smarter Cloud Decisions?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join thousands using Hydrogen to compare cloud providers, understand pricing, and find the best options for their needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="https://hydrogen.nuvoxel.com">
                Get Started with Hydrogen
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white/10" asChild>
              <Link href="/company/contact">
                Contact Sales
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}