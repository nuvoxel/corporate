'use client'

import { PricingTable } from '@/components/PricingTable'
import { Card, CardContent } from '@/components/ui/card'
import faqsData from '@/data/faqs.json'

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
            {faqsData.map((faq) => (
              <Card key={faq.id}>
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-2">{faq.question}</h4>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}