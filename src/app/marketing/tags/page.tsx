'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowRight, Tag, Database, AlertTriangle, CheckCircle, TrendingUp, Shield } from 'lucide-react'
import { HydrogenLogo } from '@/components/HydrogenLogo'

export default function TagsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="mb-6 inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-sm px-4 py-2 rounded-full">
              <Tag className="h-4 w-4" />
              <span className="text-sm font-medium">Cloud Tagging & Metadata Management</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Your Cloud Tags Are a Mess.
              <br />
              <span className="text-blue-400">We Can Fix That.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Remember when your CMDB was supposed to be the single source of truth? Now you have tags scattered across 
              multiple clouds, inconsistent naming, and no way to track what&apos;s what.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="bg-blue-600 hover:bg-blue-700 text-white">
                <Link href="https://hydrogen.nuvoxel.com">
                  Start Tag Analysis
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-white border-white hover:bg-white/10">
                <Link href="#solution">
                  See How It Works
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              The Hidden Cost of Tag Chaos
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <AlertTriangle className="h-8 w-8 text-red-500 mb-2" />
                  <CardTitle>The Problem</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-muted-foreground">
                    <strong>67% of cloud costs</strong> can&apos;t be accurately attributed due to missing or incorrect tags
                  </p>
                  <p className="text-muted-foreground">
                    Teams use different tag names for the same thing: env vs environment vs stage
                  </p>
                  <p className="text-muted-foreground">
                    Your CMDB is out of sync with reality, making compliance a nightmare
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <TrendingUp className="h-8 w-8 text-red-500 mb-2" />
                  <CardTitle>The Impact</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-muted-foreground">
                    Can&apos;t answer &quot;What did Department X spend last month?&quot;
                  </p>
                  <p className="text-muted-foreground">
                    Orphaned resources accumulate because ownership is unclear
                  </p>
                  <p className="text-muted-foreground">
                    Security and compliance audits become manual, error-prone processes
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solution" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <HydrogenLogo className="h-16 w-auto mx-auto mb-4" animated={false} />
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Hydrogen Brings Order to Tag Chaos
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                We analyze your tags across all cloud providers, identify inconsistencies, 
                and help you implement a unified tagging strategy.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 dark:bg-blue-900/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Database className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Tag Discovery</h3>
                <p className="text-muted-foreground">
                  Automatically inventory all tags across AWS, Azure, GCP, and more. See what tags exist, 
                  their values, and usage patterns.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-blue-100 dark:bg-blue-900/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Consistency Analysis</h3>
                <p className="text-muted-foreground">
                  Identify naming inconsistencies, missing required tags, and orphaned resources. 
                  Get actionable recommendations for standardization.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-blue-100 dark:bg-blue-900/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">CMDB Integration</h3>
                <p className="text-muted-foreground">
                  Sync your cloud reality with your CMDB. Ensure compliance requirements are met 
                  and maintain that single source of truth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Complete Tag Management Platform
            </h2>
            <div className="space-y-6">
              <Card>
                <CardContent className="flex items-start gap-4 p-6">
                  <Tag className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">Multi-Cloud Tag Analysis</h3>
                    <p className="text-muted-foreground">
                      See all your tags across AWS, Azure, GCP, and other providers in one unified view. 
                      Compare naming conventions and identify standardization opportunities.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="flex items-start gap-4 p-6">
                  <TrendingUp className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">Cost Attribution Reports</h3>
                    <p className="text-muted-foreground">
                      Finally answer &quot;What did this project/department/team cost?&quot; with accurate,
                      tag-based cost allocation across all your cloud providers.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="flex items-start gap-4 p-6">
                  <Database className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">Tag Governance & Policies</h3>
                    <p className="text-muted-foreground">
                      Define required tags, naming conventions, and allowed values. Get alerts when 
                      resources are created without proper tagging.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="flex items-start gap-4 p-6">
                  <Shield className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">Compliance & Audit Ready</h3>
                    <p className="text-muted-foreground">
                      Maintain compliance with automatic tag validation. Export reports showing 
                      proper resource classification and ownership for auditors.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Stop Guessing. Start Tracking.
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Get your cloud tags under control with Hydrogen. See all your tags, fix inconsistencies, 
            and finally have accurate cost attribution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="https://hydrogen.nuvoxel.com">
                Analyze Your Tags Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white/10" asChild>
              <Link href="/company/pricing">
                View Pricing
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}