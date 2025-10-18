'use client'

import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { 
  TrendingUp, 
  BarChart3, 
  Sparkles,
  Shield,
  Calendar,
  Cloud,
  Lock,
  FileDown,
  AlertCircle,
  Users,
  Zap,
  Check,
  ArrowRight
} from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { HydrogenLogo } from './HydrogenLogo'
import { PricingTable } from './PricingTable'

export default function PublicLandingPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="px-6 lg:px-8 py-16 bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 dark:from-slate-950 dark:via-blue-950 dark:to-slate-900 text-slate-900 dark:text-white relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="relative z-10 max-w-7xl xl:max-w-[1320px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-24 xl:gap-32 2xl:gap-40 items-center">
            {/* Content Column */}
            <div className="text-center lg:text-left lg:pr-8 xl:pr-12 overflow-visible">
              <div className="mb-10 -mt-6">
                <HydrogenLogo className="h-32 md:h-36 lg:h-40 w-auto mx-auto lg:mx-0" aria-label="Hydrogen - Cloud Intelligence" animated={true} variant="auto" />
              </div>
              
              <div className="mb-8">
                <div className="relative block h-16">
                  <div className="absolute left-1/2 -translate-x-1/2 md:translate-x-0 md:left-[18rem] lg:left-[22rem] text-red-500 text-4xl md:text-5xl font-bold whitespace-nowrap" style={{ fontFamily: 'Comic Sans MS, cursive', transform: 'rotate(-5deg)' }}>
                    <span className="inline-block opacity-0 animate-write-char-1">E</span>
                    <span className="inline-block opacity-0 animate-write-char-2">v</span>
                    <span className="inline-block opacity-0 animate-write-char-3">e</span>
                    <span className="inline-block opacity-0 animate-write-char-4">r</span>
                    <span className="inline-block opacity-0 animate-write-char-5">y</span>
                  </div>
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-slate-900 dark:text-white">
                  Choose Right{' '}
                  <span className="relative inline-block">
                    <span>the First</span>
                    <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 40" preserveAspectRatio="none">
                      <path 
                        d="M 2,22 Q 20,20 40,19 T 60,17 Q 80,15 98,12" 
                        stroke="none"
                        fill="none"
                        strokeLinecap="round"
                      >
                        <animate
                          attributeName="stroke"
                          values="none;rgb(239, 68, 68);rgb(239, 68, 68)"
                          dur="0.8s"
                          begin="0.5s"
                          fill="freeze"
                        />
                        <animate
                          attributeName="stroke-width"
                          values="0;6;5"
                          dur="0.8s"
                          begin="0.5s"
                          fill="freeze"
                        />
                        <animate
                          attributeName="stroke-dasharray"
                          values="0 100;100 0"
                          dur="0.8s"
                          begin="0.5s"
                          fill="freeze"
                        />
                      </path>
                    </svg>
                  </span>
                  {' '}Time
                </h2>
              </div>
              
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl leading-relaxed">
                Six intelligence types for smarter cloud decisions. Compare providers, analyze existing workloads, predict costs, and find optimal configurations across AWS, Azure, GCP and more.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start items-center">
                <Link href="https://hydrogen.nuvoxel.com">
                  <Button 
                    className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white shadow-xl hover:shadow-2xl transform hover:scale-105 px-8 py-4 text-lg font-semibold"
                  >
                    Start free trial
                  </Button>
                </Link>
                <Button 
                  size="lg" 
                  variant="ghost" 
                  className="text-slate-900 dark:text-white hover:bg-black/5 dark:hover:bg-white/10 gap-3 px-6 py-4 text-lg"
                  asChild
                >
                  <Link href="https://hydrogen.nuvoxel.com">
                    <div className="w-10 h-10 bg-black/10 dark:bg-white/20 rounded-full flex items-center justify-center">
                      <div className="w-0 h-0 border-l-[6px] border-l-slate-900 dark:border-l-white border-y-[4px] border-y-transparent ml-0.5"></div>
                    </div>
                    How it works
                  </Link>
                </Button>
              </div>
            </div>
            
            {/* Dashboard Mockup Column */}
            <div className="relative">
              {/* Main Dashboard Card */}
              <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl p-6 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Workload Comparison</h3>
                  <span className="text-sm text-gray-500 dark:text-gray-400">8 vCPU, 32GB RAM</span>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                    <div>
                      <span className="text-gray-700 dark:text-gray-200 font-medium">AWS EC2</span>
                      <span className="text-xs text-gray-500 dark:text-gray-400 block">m6i.2xlarge</span>
                    </div>
                    <span className="font-semibold text-green-600 dark:text-green-400">$248/mo</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                    <div>
                      <span className="text-gray-700 dark:text-gray-200 font-medium">Azure VM</span>
                      <span className="text-xs text-gray-500 dark:text-gray-400 block">D8s_v5</span>
                    </div>
                    <span className="font-semibold text-red-600 dark:text-red-400">$276/mo</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                    <div>
                      <span className="text-gray-700 dark:text-gray-200 font-medium">GCP Compute</span>
                      <span className="text-xs text-gray-500 dark:text-gray-400 block">n2-standard-8</span>
                    </div>
                    <span className="font-semibold text-green-600 dark:text-green-400">$312/mo</span>
                  </div>
                </div>
              </div>
              
              {/* Floating Stats Card */}
              <div className="hidden md:block absolute -top-6 -right-6 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl p-4 text-white shadow-xl transform -rotate-12 hover:rotate-0 transition-transform duration-300">
                <div className="text-center">
                  <div className="text-2xl font-bold">26%</div>
                  <div className="text-sm opacity-90">Cheaper on AWS</div>
                </div>
              </div>
              
              {/* Bottom Right Card */}
              <div className="hidden md:block absolute -bottom-6 right-0 bg-white dark:bg-slate-800 rounded-xl shadow-lg p-4 transform rotate-6 hover:rotate-0 transition-transform duration-300">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-4 h-4 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-800 dark:text-gray-200">Performance Match</div>
                    <div className="text-lg font-bold text-green-600 dark:text-green-400">98%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white dark:bg-slate-900">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2 text-gray-900 dark:text-gray-100">50+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Cloud Services</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2 text-gray-900 dark:text-gray-100">24/7</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Real-time Updates</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2 text-gray-900 dark:text-gray-100">$2M+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Savings Generated</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2 text-gray-900 dark:text-gray-100">10k+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Comparisons Daily</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="hydrogen" className="py-16 bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50 dark:from-slate-950 dark:via-slate-950 dark:to-slate-950">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100">Why Teams Choose Hydrogen</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Built by cloud architects, for cloud architects. The authoritative platform for transparent cloud cost analysis.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow border-0 shadow-sm hover:shadow-xl">
              <CardHeader>
                <div className="mb-4">
                  <TrendingUp className="w-10 h-10 text-primary icon-glow" />
                </div>
                <CardTitle>Spend Intelligence</CardTitle>
                <CardDescription className="mt-2">
                  Slice and dice your existing cloud spend across any provider. Project cost changes with real-time pricing and what-if scenario modeling.
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow border-0 shadow-sm hover:shadow-xl">
              <CardHeader>
                <div className="mb-4">
                  <BarChart3 className="w-10 h-10 text-primary icon-glow" />
                </div>
                <CardTitle>Workload Intelligence</CardTitle>
                <CardDescription className="mt-2">
                  Deep analysis of your specific requirements. Our findings engine maps workload patterns to optimal cloud configurations across providers.
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow border-0 shadow-sm hover:shadow-xl">
              <CardHeader>
                <div className="mb-4">
                  <Sparkles className="w-10 h-10 text-primary icon-glow" />
                </div>
                <CardTitle>Predictive Intelligence</CardTitle>
                <CardDescription className="mt-2">
                  AI-powered forecasting and anomaly detection. Predict future costs, identify optimization opportunities, and receive proactive alerts.
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow border-0 shadow-sm hover:shadow-xl">
              <CardHeader>
                <div className="mb-4">
                  <Shield className="w-10 h-10 text-primary icon-glow" />
                </div>
                <CardTitle>Flexible Data Storage</CardTitle>
                <CardDescription className="mt-2">
                  Choose where your data lives: our shared platform, dedicated instance, or your own infrastructure. Complete control over your sensitive information.
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow border-0 shadow-sm hover:shadow-xl">
              <CardHeader>
                <div className="mb-4">
                  <Zap className="w-10 h-10 text-primary icon-glow" />
                </div>
                <CardTitle>Benchmark & Compare</CardTitle>
                <CardDescription className="mt-2">
                  Answer simple questions to find the cheapest provider for your workload. Real performance benchmarks across our growing catalog of cloud services.
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow border-0 shadow-sm hover:shadow-xl">
              <CardHeader>
                <div className="mb-4">
                  <Cloud className="w-10 h-10 text-primary icon-glow" />
                </div>
                <CardTitle>Multi-Cloud Native</CardTitle>
                <CardDescription className="mt-2">
                  True resource equivalence mapping across providers. Compare EC2 vs VMs vs Compute Engine with automatic spec matching and performance normalization.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Start free with powerful comparison tools. Upgrade when you need advanced features and team collaboration.
            </p>
          </div>
          
          {/* Dynamic Pricing Table */}
          <PricingTable maxColumns={4} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 text-white overflow-hidden" style={{ background: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 50%, #4f46e5 100%)' }}>
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl font-bold mb-4">Ready to Choose Right Every Time?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of teams making smarter cloud decisions with Hydrogen. 
            Start comparing costs and finding optimal configurations today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="https://hydrogen.nuvoxel.com">
              <Button 
                size="lg"
                className="bg-white text-slate-900 hover:bg-gray-100 font-bold shadow-lg px-8"
              >
                Get Started Free
              </Button>
            </Link>
            <Link href="/company/pricing">
              <Button 
                size="lg" 
                variant="outline" 
                className="px-8 border-2 border-white text-white hover:bg-white hover:text-slate-900 transition-all duration-200 font-semibold backdrop-blur-sm bg-white/10"
              >
                View Pricing
              </Button>
            </Link>
          </div>
          <p className="mt-6 text-sm opacity-80">
            No credit card required
          </p>
        </div>
      </section>

    </>
  )
}
