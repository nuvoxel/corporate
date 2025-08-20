'use client'

import { PricingTable } from '@/components/PricingTable'
import { Card, CardContent } from '@/components/ui/card'

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Transparent Pricing for Cloud Transparency
          </h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Start free with powerful comparison tools. Upgrade when you need advanced features, team collaboration, or API access.
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        {/* Pricing Table with Feature Comparison */}
        <PricingTable showFeatureComparison={true} />
        
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
            <Card>
              <CardContent className="p-6">
                <h4 className="font-semibold mb-2">Is there a discount for annual billing?</h4>
                <p className="text-muted-foreground">
                  Yes! Annual billing saves you 20% compared to monthly billing. You can switch between monthly and annual billing at any time from your account settings.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h4 className="font-semibold mb-2">Can I purchase through cloud marketplaces?</h4>
                <p className="text-muted-foreground">
                  Yes! Many of our plans are available through cloud marketplaces, allowing you to consolidate billing with your existing cloud spend. Click on the marketplace badges on each plan to view the listing. We're continuously adding support for more marketplaces.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}