'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Check, X, ArrowRight, BarChart3, FileSpreadsheet, Globe, Zap, Shield, Building2, Users, Code, DollarSign, Cloud } from 'lucide-react'
import { useUser, useOrganization, useAuth } from '@clerk/nextjs'

export default function PricingPage() {
  const { user, isSignedIn } = useUser()
  const { organization } = useOrganization()
  const { has } = useAuth()
  
  // For pricing display, we still need to check actual plan subscriptions
  // to show "CURRENT PLAN" badges correctly
  const currentPlan = user?.publicMetadata?.subscription_tier as string || 'free'
  const hasMaxTrial = isSignedIn && currentPlan === 'max_trial'
  const hasMaxSubscription = isSignedIn && currentPlan === 'max'
  const hasProSubscription = isSignedIn && currentPlan === 'pro'
  const hasEnterpriseSubscription = isSignedIn && organization?.publicMetadata?.subscription_tier === 'enterprise'
  const hasFreeSubscription = isSignedIn && !hasProSubscription && !hasMaxSubscription && !hasMaxTrial && !hasEnterpriseSubscription

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Transparent Pricing for Cloud Transparency</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Start free with powerful comparison tools. Upgrade when you need advanced features, team collaboration, or API access.
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        {/* Pricing Tiers */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-16">
          {/* Free Tier */}
          <Card className={`relative border-2 hover:border-primary/50 transition-colors h-full flex flex-col ${
            hasFreeSubscription 
              ? 'border-blue-500 bg-blue-50/30 dark:bg-blue-950/20' 
              : ''
          }`}>
            <CardHeader className="pt-8">
              <div className="h-7 mb-4">
                {hasFreeSubscription && (
                  <Badge className="bg-blue-600 text-white">CURRENT PLAN</Badge>
                )}
              </div>
              <CardTitle className="text-2xl">Free</CardTitle>
              <div className="mt-4">
                <span className="text-4xl font-bold">$0</span>
                <span className="text-muted-foreground">/month</span>
              </div>
              <CardDescription className="mt-2">
                Essential cloud comparison tools for everyone
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col">
              <ul className="space-y-3 mb-6 flex-grow">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Cloud provider comparisons</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Region comparisons</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Specific SKU comparisons</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Leaderboards</span>
                </li>
              </ul>
              <Button asChild className="w-full mt-auto">
                <Link href="/sign-up">
                  Get Started Free
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          {/* Pro Tier */}
          <Card className={`relative border-2 hover:border-primary/50 transition-colors h-full flex flex-col ${
            hasProSubscription ? 'border-blue-500 bg-blue-50/30 dark:bg-blue-950/20' : ''
          }`}>
            <CardHeader className="pt-8">
              <div className="h-7 mb-4">
                {hasProSubscription && (
                  <Badge className="bg-blue-600 text-white">CURRENT PLAN</Badge>
                )}
              </div>
              <CardTitle className="text-2xl">Pro</CardTitle>
              <div className="mt-4">
                <span className="text-4xl font-bold">$10</span>
                <span className="text-muted-foreground">/month</span>
              </div>
              <CardDescription className="mt-2">
                Advanced comparisons and export capabilities
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col">
              <ul className="space-y-3 mb-6 flex-grow">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm font-medium">Everything in Free, plus:</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Workload based comparisons</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Benchmark informed comparisons</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Saved comparisons</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Excel export of results</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Service/SKU equivalence calculation</span>
                </li>
              </ul>
              {hasProSubscription || hasMaxSubscription || hasEnterpriseSubscription ? (
                <Button asChild className="w-full mt-auto" variant="outline">
                  <Link href="/dashboard">
                    Go to Dashboard
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              ) : (
                <Button asChild className="w-full mt-auto">
                  <Link href="/sign-up?plan=pro">
                    Subscribe to Pro
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              )}
            </CardContent>
          </Card>

          {/* Max Tier */}
          <Card className={`relative border-2 transition-colors h-full flex flex-col ${
            hasMaxSubscription || hasMaxTrial 
              ? 'border-blue-500 bg-blue-50/30 dark:bg-blue-950/20' 
              : 'border-primary hover:border-primary'
          }`}>
            <div className="absolute top-0 right-0 bg-primary text-white px-3 py-1 text-sm font-medium rounded-bl-lg">
              7 DAY FREE TRIAL
            </div>
            {(hasMaxSubscription || hasMaxTrial) && (
              <div className="absolute top-0 left-0 bg-blue-600 text-white px-3 py-1 text-sm font-medium rounded-br-lg">
                {hasMaxTrial ? 'TRIAL ACTIVE' : 'CURRENT PLAN'}
              </div>
            )}
            <CardHeader className="pt-8">
              <div className="h-7 mb-4">
                <Badge variant="secondary" className="bg-green-100 text-green-700">MOST POPULAR</Badge>
              </div>
              <CardTitle className="text-2xl">Max</CardTitle>
              <div className="mt-4">
                <span className="text-4xl font-bold">$30</span>
                <span className="text-muted-foreground">/month</span>
              </div>
              <CardDescription className="mt-2">
                Complete cloud intelligence suite
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col">
              <ul className="space-y-3 mb-6 flex-grow">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm font-medium">Everything in Pro, plus:</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Multi-currency conversion & spread calculation</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Spot eviction/preemption information</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">API access (with request limits)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">ARM/Bicep template pricing</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Variable cost comparison</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Support cost comparison</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">License cost comparison</span>
                </li>
              </ul>
              <div className="mt-auto">
              {hasMaxSubscription ? (
                <Button asChild className="w-full" variant="outline">
                  <Link href="/dashboard">
                    Go to Dashboard
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              ) : hasMaxTrial ? (
                <div className="space-y-2">
                  <Button asChild className="w-full bg-primary hover:bg-primary/90">
                    <Link href="/sign-up?plan=max">
                      Subscribe to Max
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild className="w-full" variant="outline" size="sm">
                    <Link href="/dashboard">
                      Continue Trial
                    </Link>
                  </Button>
                </div>
              ) : (
                <Button asChild className="w-full bg-primary hover:bg-primary/90">
                  <Link href="/sign-up?plan=max&trial=true">
                    Start 7-Day Free Trial
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              )}
              </div>
            </CardContent>
          </Card>

          {/* Enterprise Tier */}
          <Card className={`relative border-2 hover:border-primary/50 transition-colors h-full flex flex-col ${
            hasEnterpriseSubscription ? 'border-blue-500 bg-blue-50/30 dark:bg-blue-950/20' : ''
          }`}>
            <CardHeader className="pt-8">
              <div className="h-7 mb-4">
                {hasEnterpriseSubscription && (
                  <Badge className="bg-blue-600 text-white">CURRENT PLAN</Badge>
                )}
              </div>
              <CardTitle className="text-2xl">Enterprise</CardTitle>
              <div className="mt-4">
                <span className="text-4xl font-bold">$250</span>
                <span className="text-muted-foreground">/month</span>
              </div>
              <CardDescription className="mt-2">
                Team collaboration & enterprise features
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col">
              <ul className="space-y-3 mb-4 flex-grow">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm font-medium">Everything in Max, plus:</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Organization & team management</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Role-based access control</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Audit logs & compliance</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Flexible data storage options</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Priority support</span>
                </li>
              </ul>
              <div className="border-t pt-4 mb-6">
                <div className="text-sm text-muted-foreground space-y-2">
                  <p>• 5 users included</p>
                  <p>• $30/mo per additional user beyond 5</p>
                  <p>• Enterprise SSO available (+$100/mo)</p>
                </div>
              </div>
              <div className="mt-auto">
              {hasEnterpriseSubscription ? (
                <Button asChild className="w-full" variant="outline">
                  <Link href="/dashboard">
                    Go to Dashboard
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              ) : (
                <div className="space-y-3">
                  <Button asChild className="w-full">
                    <Link href="/sign-up?plan=enterprise">
                      Subscribe to Enterprise
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild className="w-full" variant="outline">
                    <Link href="/company/contact">
                      Contact Sales
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              )}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Service Provider CTA */}
        <Card className="mb-16 bg-gradient-to-r from-purple-900/10 to-blue-900/10 border-2 border-purple-500/20">
          <CardHeader>
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              <div>
                <CardTitle className="text-3xl mb-2">Service Providers</CardTitle>
                <CardDescription className="text-lg">
                  White label solutions, higher API limits, and benchmark submission capabilities
                </CardDescription>
              </div>
              <Button asChild size="lg" className="lg:min-w-[200px]">
                <Link href="/company/contact">
                  Contact Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </CardHeader>
        </Card>

        {/* Feature Comparison */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Detailed Feature Comparison</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              All plans include our core comparison engine. Higher tiers unlock advanced analytics and team features.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full max-w-6xl mx-auto">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-4 px-4">Feature</th>
                  <th className="text-center py-4 px-4">Free</th>
                  <th className="text-center py-4 px-4">Pro</th>
                  <th className="text-center py-4 px-4">Max</th>
                  <th className="text-center py-4 px-4">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-4 px-4 font-medium">Cloud Provider Comparisons</td>
                  <td className="text-center py-4 px-4"><Check className="h-5 w-5 text-green-600 mx-auto" /></td>
                  <td className="text-center py-4 px-4"><Check className="h-5 w-5 text-green-600 mx-auto" /></td>
                  <td className="text-center py-4 px-4"><Check className="h-5 w-5 text-green-600 mx-auto" /></td>
                  <td className="text-center py-4 px-4"><Check className="h-5 w-5 text-green-600 mx-auto" /></td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 px-4 font-medium">Leaderboards Access</td>
                  <td className="text-center py-4 px-4"><Check className="h-5 w-5 text-green-600 mx-auto" /></td>
                  <td className="text-center py-4 px-4"><Check className="h-5 w-5 text-green-600 mx-auto" /></td>
                  <td className="text-center py-4 px-4"><Check className="h-5 w-5 text-green-600 mx-auto" /></td>
                  <td className="text-center py-4 px-4"><Check className="h-5 w-5 text-green-600 mx-auto" /></td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 px-4 font-medium">Workload-Based Comparisons</td>
                  <td className="text-center py-4 px-4"><X className="h-5 w-5 text-gray-300 mx-auto" /></td>
                  <td className="text-center py-4 px-4"><Check className="h-5 w-5 text-green-600 mx-auto" /></td>
                  <td className="text-center py-4 px-4"><Check className="h-5 w-5 text-green-600 mx-auto" /></td>
                  <td className="text-center py-4 px-4"><Check className="h-5 w-5 text-green-600 mx-auto" /></td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 px-4 font-medium">Excel Export</td>
                  <td className="text-center py-4 px-4"><X className="h-5 w-5 text-gray-300 mx-auto" /></td>
                  <td className="text-center py-4 px-4"><Check className="h-5 w-5 text-green-600 mx-auto" /></td>
                  <td className="text-center py-4 px-4"><Check className="h-5 w-5 text-green-600 mx-auto" /></td>
                  <td className="text-center py-4 px-4"><Check className="h-5 w-5 text-green-600 mx-auto" /></td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 px-4 font-medium">API Access</td>
                  <td className="text-center py-4 px-4"><X className="h-5 w-5 text-gray-300 mx-auto" /></td>
                  <td className="text-center py-4 px-4"><X className="h-5 w-5 text-gray-300 mx-auto" /></td>
                  <td className="text-center py-4 px-4"><Check className="h-5 w-5 text-green-600 mx-auto" /></td>
                  <td className="text-center py-4 px-4"><Check className="h-5 w-5 text-green-600 mx-auto" /></td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 px-4 font-medium">Multi-Currency Support</td>
                  <td className="text-center py-4 px-4"><X className="h-5 w-5 text-gray-300 mx-auto" /></td>
                  <td className="text-center py-4 px-4"><X className="h-5 w-5 text-gray-300 mx-auto" /></td>
                  <td className="text-center py-4 px-4"><Check className="h-5 w-5 text-green-600 mx-auto" /></td>
                  <td className="text-center py-4 px-4"><Check className="h-5 w-5 text-green-600 mx-auto" /></td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 px-4 font-medium">Team Features</td>
                  <td className="text-center py-4 px-4"><X className="h-5 w-5 text-gray-300 mx-auto" /></td>
                  <td className="text-center py-4 px-4"><X className="h-5 w-5 text-gray-300 mx-auto" /></td>
                  <td className="text-center py-4 px-4"><X className="h-5 w-5 text-gray-300 mx-auto" /></td>
                  <td className="text-center py-4 px-4"><Check className="h-5 w-5 text-green-600 mx-auto" /></td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 px-4 font-medium">Users Included</td>
                  <td className="text-center py-4 px-4">1</td>
                  <td className="text-center py-4 px-4">1</td>
                  <td className="text-center py-4 px-4">1</td>
                  <td className="text-center py-4 px-4">5</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
        {/* FAQ Section */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h3>
          <div className="max-w-3xl mx-auto space-y-6">
            <Card>
              <CardContent className="p-6">
                <h4 className="font-semibold mb-2">How is this different from cloud cost optimization tools?</h4>
                <p className="text-muted-foreground">
                  Hydrogen augments cost optimization tools by providing upfront intelligence across multiple providers and services. We answer &quot;Where can I run this workload in the best way possible?&quot; before you deploy, helping you make informed decisions across all major cloud providers.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h4 className="font-semibold mb-2">Can I switch between plans?</h4>
                <p className="text-muted-foreground">
                  Yes! You can upgrade or downgrade your plan at any time. Changes take effect at the next billing cycle, and we&apos;ll prorate any differences.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h4 className="font-semibold mb-2">What&apos;s included in the 7-day Max trial?</h4>
                <p className="text-muted-foreground">
                  The trial includes full access to all Max features including API access, multi-currency support, and advanced template pricing. No credit card required to start.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h4 className="font-semibold mb-2">What happens after my Max trial ends?</h4>
                <p className="text-muted-foreground">
                  After your 7-day trial, you&apos;ll automatically move to the Free tier unless you choose to subscribe. No credit card is required for the trial, and you won&apos;t be charged unless you actively upgrade.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}