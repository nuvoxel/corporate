'use client'

import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import {
  TrendingUp,
  Sparkles,
  Lock,
  AlertCircle,
  Trophy,
  Layers,
  Network,
  Tag,
  GitCompare,
  FolderTree,
  Package,
  FileOutput
} from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { HydrogenLogo } from './HydrogenLogo'
import { PricingTable } from './PricingTable'
import statsData from '@/data/stats.json'

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
                AI-powered cloud intelligence for smarter decisions. Analyze costs, identify security risks, optimize workloads, and find optimal configurations across AWS, Azure, GCP, and more.
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
            {statsData.map((stat) => (
              <div key={stat.id}>
                <div className="text-3xl font-bold mb-2 text-gray-900 dark:text-gray-100">{stat.value}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="hydrogen" className="py-16 bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50 dark:from-slate-950 dark:via-slate-950 dark:to-slate-950">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100">Why Teams Choose Hydrogen</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Complete visibility into your cloud estate. Connect your accounts, discover every resource, and optimize with confidence.
            </p>
          </div>

          {/* Intelligence Graph - Featured Card */}
          <Card className="mb-8 hover:shadow-lg transition-shadow border-0 shadow-sm hover:shadow-xl ring-2 ring-primary/20 overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              <CardHeader className="p-8 flex flex-col justify-center">
                <div className="mb-4">
                  <Sparkles className="w-12 h-12 text-primary icon-glow" />
                </div>
                <CardTitle className="text-2xl mb-3">Cloud Intelligence</CardTitle>
                <CardDescription className="text-base">
                  AI-powered force-graph visualization of your cloud infrastructure with resource relationships, dependencies, and real-time intelligence feeds. See how everything connects across Azure, AWS, GCP, and more.
                </CardDescription>
              </CardHeader>
              <div className="relative bg-slate-100 dark:bg-slate-800 min-h-[300px] lg:min-h-[350px]">
                <Image
                  src="/images/intelligence-graph.png"
                  alt="Hydrogen Intelligence Graph showing connected cloud resources"
                  fill
                  className="object-cover object-left-top"
                />
              </div>
            </div>
          </Card>

          {/* Feature Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow border-0 shadow-sm hover:shadow-xl">
              <CardHeader>
                <div className="mb-4">
                  <TrendingUp className="w-10 h-10 text-primary icon-glow" />
                </div>
                <CardTitle>Cost Analysis</CardTitle>
                <CardDescription className="mt-2">
                  AI-driven cloud spend analysis with trend tracking, forecasting, budget alerts, and anomaly detection by service, region, and tags.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-0 shadow-sm hover:shadow-xl">
              <CardHeader>
                <div className="mb-4">
                  <Trophy className="w-10 h-10 text-primary icon-glow" />
                </div>
                <CardTitle>Cloud Excellence Score</CardTitle>
                <CardDescription className="mt-2">
                  Holistic cloud health scoring across security, cost, reliability, performance, and operations with benchmarking against industry standards.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-0 shadow-sm hover:shadow-xl">
              <CardHeader>
                <div className="mb-4">
                  <AlertCircle className="w-10 h-10 text-primary icon-glow" />
                </div>
                <CardTitle>Security & Cost Findings</CardTitle>
                <CardDescription className="mt-2">
                  AI-identified security vulnerabilities, cost optimization opportunities, and compliance issues with remediation guidance and auto-fix capabilities.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-0 shadow-sm hover:shadow-xl">
              <CardHeader>
                <div className="mb-4">
                  <Layers className="w-10 h-10 text-primary icon-glow" />
                </div>
                <CardTitle>Workload Designer</CardTitle>
                <CardDescription className="mt-2">
                  Visual drag-and-drop workload architecture designer with AI-assisted templates, cost estimation, and infrastructure-as-code export.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-0 shadow-sm hover:shadow-xl">
              <CardHeader>
                <div className="mb-4">
                  <Network className="w-10 h-10 text-primary icon-glow" />
                </div>
                <CardTitle>Network Topology</CardTitle>
                <CardDescription className="mt-2">
                  Network visualization showing VPCs, subnets, security groups, public endpoints, and network security posture across cloud environments.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-0 shadow-sm hover:shadow-xl">
              <CardHeader>
                <div className="mb-4">
                  <Lock className="w-10 h-10 text-primary icon-glow" />
                </div>
                <CardTitle>Access Analysis</CardTitle>
                <CardDescription className="mt-2">
                  Identity and access path analysis showing effective permissions, role inheritance, and security risks across principals and resources.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-0 shadow-sm hover:shadow-xl">
              <CardHeader>
                <div className="mb-4">
                  <Package className="w-10 h-10 text-primary icon-glow" />
                </div>
                <CardTitle>Resource Inventory</CardTitle>
                <CardDescription className="mt-2">
                  Complete searchable inventory of cloud resources with AI-powered activity tracking, zombie resource detection, and multi-cloud asset management.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-0 shadow-sm hover:shadow-xl">
              <CardHeader>
                <div className="mb-4">
                  <FolderTree className="w-10 h-10 text-primary icon-glow" />
                </div>
                <CardTitle>Resource Groups</CardTitle>
                <CardDescription className="mt-2">
                  Organize resources into smart groups with dynamic queries or manual assignment for cost tracking, security monitoring, and team allocation.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-0 shadow-sm hover:shadow-xl">
              <CardHeader>
                <div className="mb-4">
                  <Tag className="w-10 h-10 text-primary icon-glow" />
                </div>
                <CardTitle>Tag Management</CardTitle>
                <CardDescription className="mt-2">
                  Tag coverage analysis, gap detection, conflict resolution, and AI-powered tag suggestions to improve resource organization and cost allocation.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-0 shadow-sm hover:shadow-xl">
              <CardHeader>
                <div className="mb-4">
                  <GitCompare className="w-10 h-10 text-primary icon-glow" />
                </div>
                <CardTitle>Cloud Comparison</CardTitle>
                <CardDescription className="mt-2">
                  Compare VM sizes, pricing, and capabilities across Azure, AWS, and Google Cloud with spot, reserved, and on-demand pricing options.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-0 shadow-sm hover:shadow-xl">
              <CardHeader>
                <div className="mb-4">
                  <FileOutput className="w-10 h-10 text-primary icon-glow" />
                </div>
                <CardTitle>Enterprise Exports</CardTitle>
                <CardDescription className="mt-2">
                  Export to native PowerPoint (PPTX), Excel, and Visio (VSDX) with fully editable charts, diagrams, and visualizations for presentations and documentation.
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
              Free for your first 250 resources. Pay as you scale beyond that. Add premium features when you need them.
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
        </div>
      </section>

    </>
  )
}
