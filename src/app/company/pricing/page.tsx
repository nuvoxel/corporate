'use client'

import { PricingTable } from '@/components/PricingTable'

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
            Free for your first 250 resources. Pay as you scale beyond that. Add premium features when you need them.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Pricing Table with Feature Comparison */}
        <PricingTable showFeatureComparison={true} />
      </div>
    </div>
  )
}