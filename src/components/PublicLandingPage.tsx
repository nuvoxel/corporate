'use client'

import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { GetStartedButton } from '@/components/GetStartedButton'
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
  Zap
} from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { HydrogenLogo } from './HydrogenLogo'
import { useModal } from '@/contexts/ModalContext'

export default function PublicLandingPage() {
  const { isSignInModalOpen } = useModal()
  return (
    <>
      {/* Hero Section */}
      <section className="px-6 lg:px-8 py-16 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="relative z-10 max-w-7xl xl:max-w-[1320px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-24 xl:gap-32 2xl:gap-40 items-center">
            {/* Content Column */}
            <div className="text-center lg:text-left lg:pr-8 xl:pr-12 overflow-visible">
              <div className="mb-10 -mt-6">
                <HydrogenLogo className="h-32 md:h-36 lg:h-40 w-auto mx-auto lg:mx-0" aria-label="Hydrogen - Cloud Intelligence" animated={!isSignInModalOpen} variant="dark" />
              </div>
              
              <div className="mb-8">
                <div className="relative block h-16">
                  <div className="absolute left-[65%] lg:left-[22rem] text-red-500 text-4xl md:text-5xl font-bold whitespace-nowrap" style={{ fontFamily: 'Comic Sans MS, cursive', transform: 'rotate(-5deg)' }}>
                    <span className="inline-block opacity-0 animate-write-char-1">E</span>
                    <span className="inline-block opacity-0 animate-write-char-2">v</span>
                    <span className="inline-block opacity-0 animate-write-char-3">e</span>
                    <span className="inline-block opacity-0 animate-write-char-4">r</span>
                    <span className="inline-block opacity-0 animate-write-char-5">y</span>
                  </div>
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
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
              
              <p className="text-xl text-gray-300 mb-10 max-w-2xl leading-relaxed">
                Six intelligence types for smarter cloud decisions. Compare providers, analyze existing workloads, predict costs, and find optimal configurations across AWS, Azure, GCP and more.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start items-center">
                <GetStartedButton 
                  className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white shadow-xl hover:shadow-2xl transform hover:scale-105 px-8 py-4 text-lg font-semibold"
                >
                  Start free trial
                </GetStartedButton>
                <Button 
                  size="lg" 
                  variant="ghost" 
                  className="text-white hover:bg-white/10 gap-3 px-6 py-4 text-lg"
                  asChild
                >
                  <Link href="/leaderboards">
                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                      <div className="w-0 h-0 border-l-[6px] border-l-white border-y-[4px] border-y-transparent ml-0.5"></div>
                    </div>
                    How it works
                  </Link>
                </Button>
              </div>
            </div>
            
            {/* Dashboard Mockup Column */}
            <div className="relative">
              {/* Main Dashboard Card */}
              <div className="bg-white rounded-2xl shadow-2xl p-6 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-800">Workload Comparison</h3>
                  <span className="text-sm text-gray-500">8 vCPU, 32GB RAM</span>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                    <div>
                      <span className="text-gray-700 font-medium">AWS EC2</span>
                      <span className="text-xs text-gray-500 block">m6i.2xlarge</span>
                    </div>
                    <span className="font-semibold text-green-600">$248/mo</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-orange-50 rounded-lg">
                    <div>
                      <span className="text-gray-700 font-medium">Azure VM</span>
                      <span className="text-xs text-gray-500 block">D8s_v5</span>
                    </div>
                    <span className="font-semibold text-red-600">$276/mo</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                    <div>
                      <span className="text-gray-700 font-medium">GCP Compute</span>
                      <span className="text-xs text-gray-500 block">n2-standard-8</span>
                    </div>
                    <span className="font-semibold text-green-600">$312/mo</span>
                  </div>
                </div>
              </div>
              
              {/* Floating Stats Card */}
              <div className="absolute -top-6 -right-6 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl p-4 text-white shadow-xl transform -rotate-12 hover:rotate-0 transition-transform duration-300">
                <div className="text-center">
                  <div className="text-2xl font-bold">26%</div>
                  <div className="text-sm opacity-90">Cheaper on AWS</div>
                </div>
              </div>
              
              {/* Bottom Right Card */}
              <div className="absolute -bottom-6 right-0 bg-white rounded-xl shadow-lg p-4 transform rotate-6 hover:rotate-0 transition-transform duration-300">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-800">Performance Match</div>
                    <div className="text-lg font-bold text-green-600">98%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2 text-gray-900">50+</div>
              <div className="text-sm text-gray-600">Cloud Services</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2 text-gray-900">24/7</div>
              <div className="text-sm text-gray-600">Real-time Updates</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2 text-gray-900">$2M+</div>
              <div className="text-sm text-gray-600">Savings Generated</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2 text-gray-900">10k+</div>
              <div className="text-sm text-gray-600">Comparisons Daily</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Why Teams Choose Hydrogen</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
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

      {/* Free vs Premium Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Start Free, Upgrade When You&apos;re Ready</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Access powerful cloud comparison tools instantly. Upgrade for advanced analytics and team features.
            </p>
          </div>
          
          {/* Features Grid */}
          <div className="max-w-6xl mx-auto mb-16">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Free Features */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-green-100 rounded-full p-2">
                    <Sparkles className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold">Free Forever</h3>
                  <Badge variant="secondary" className="bg-green-100 text-green-700 border-green-200">
                    No credit card required
                  </Badge>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Unlimited Cloud Comparisons</p>
                      <p className="text-sm text-gray-600">Compare services across AWS, Azure, GCP, and more</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Basic Workload Profiling</p>
                      <p className="text-sm text-gray-600">Define requirements and match to optimal services</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Real-Time Pricing</p>
                      <p className="text-sm text-gray-600">Up-to-date prices including hidden costs</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Export to Excel</p>
                      <p className="text-sm text-gray-600">Download comparisons for offline analysis</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Community Benchmarks</p>
                      <p className="text-sm text-gray-600">Access crowd-sourced performance data</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">3 Saved Scenarios</p>
                      <p className="text-sm text-gray-600">Save and revisit your comparisons</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Premium Features */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-full p-2">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">Premium</h3>
                  <Badge className="bg-gradient-to-r from-blue-500 to-purple-500 text-white border-0">
                    From $29/month
                  </Badge>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Everything in Free, plus:</p>
                      <p className="text-sm text-gray-600">All free features included</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Spend Intelligence Analytics</p>
                      <p className="text-sm text-gray-600">Upload bills, analyze trends, project future costs</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Predictive Intelligence (AI)</p>
                      <p className="text-sm text-gray-600">ML-powered recommendations and anomaly detection</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Unlimited Scenarios</p>
                      <p className="text-sm text-gray-600">Save and organize unlimited comparisons</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Team Collaboration</p>
                      <p className="text-sm text-gray-600">Share with unlimited team members</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">API Access</p>
                      <p className="text-sm text-gray-600">Integrate with your existing tools</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Priority Support</p>
                      <p className="text-sm text-gray-600">Get help when you need it most</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Enterprise CTA */}
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-3">Need Enterprise Features?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Get dedicated infrastructure, custom integrations, SSO, compliance certifications, and more.
            </p>
            <Button variant="outline" className="border-2" asChild>
              <Link href="/company/contact">
                Contact Sales
                <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </Button>
          </div>
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
          <div className="flex flex-wrap gap-4 justify-center">
            <GetStartedButton 
              className="bg-white text-primary hover:bg-gray-100 from-white to-white hover:from-gray-100 hover:to-gray-100 font-bold shadow-lg"
            >
              Get Started Free
            </GetStartedButton>
            <Link href="/pricing">
              <Button 
                size="lg" 
                variant="outline" 
                className="px-8 border-2 border-white text-white hover:bg-white hover:text-primary transition-all duration-200 font-semibold backdrop-blur-sm bg-white/10"
              >
                View Pricing
              </Button>
            </Link>
          </div>
          <p className="mt-6 text-sm opacity-80">
            No credit card required • Free forever for small teams
          </p>
        </div>
      </section>
    </>
  )
}