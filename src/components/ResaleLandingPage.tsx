'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight, Recycle, Server, Package, ShieldCheck, Store, Truck } from 'lucide-react'
import Link from 'next/link'

export default function ResaleLandingPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="px-4 py-20 bg-gradient-to-br from-emerald-900 via-teal-900 to-green-800 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Resale
          </h1>
          <p className="text-2xl text-emerald-200 mb-8">
            Your Cloud Migration Partner - From Legacy to Cloud
          </p>
          <p className="text-xl text-gray-200 mb-10 max-w-3xl mx-auto">
            Complete your cloud journey with confidence. We provide end-to-end lifecycle management for your datacenter equipment, helping you transition from on-premise to cloud while maximizing asset value and ensuring responsible disposal.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-emerald-900 hover:bg-gray-100 font-semibold px-8 py-3" asChild>
              <a href="https://shop.nuvoxel.com">
                Visit Our Store
                <Store className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-white/50 bg-white/10 text-white hover:bg-white/20 hover:border-white" asChild>
              <Link href="/company/contact">
                Contact Sales
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Key Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Supporting Your Cloud Transformation Journey
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Server className="h-10 w-10 text-emerald-600 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">Pre-Migration Assessment</h3>
              <p className="text-gray-600">
                Evaluate your infrastructure to identify equipment for cloud replacement, on-premise retention for hybrid scenarios, resale, or recycling
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Package className="h-10 w-10 text-emerald-600 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">Upgrade & Optimize</h3>
              <p className="text-gray-600">
                Extend equipment life with new parts and upgrades, or maximize ROI through our liquidation channels
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Recycle className="h-10 w-10 text-emerald-600 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">Responsible Disposal</h3>
              <p className="text-gray-600">
                Complete your cloud journey responsibly with our California permitted e-waste recycling services
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            End-to-End Cloud Migration Support
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Bridging the Gap Between Legacy and Cloud</h3>
              <p className="text-gray-600 mb-6">
                Not everything needs to move to the cloud. We help you make smart decisions about your existing infrastructure - 
                identifying equipment to repurpose for hybrid cloud deployments, non-migratable workloads, or cost-effective 
                on-premise capacity using fully depreciated assets:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <ShieldCheck className="h-5 w-5 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Strategic planning for equipment lifecycle during cloud transition</span>
                </li>
                <li className="flex items-start">
                  <ShieldCheck className="h-5 w-5 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Identify equipment to repurpose for hybrid cloud or workloads that can&apos;t migrate</span>
                </li>
                <li className="flex items-start">
                  <ShieldCheck className="h-5 w-5 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Turn decommissioned infrastructure into funding for cloud initiatives</span>
                </li>
                <li className="flex items-start">
                  <ShieldCheck className="h-5 w-5 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Upgrade existing equipment with new parts to extend useful life</span>
                </li>
                <li className="flex items-start">
                  <ShieldCheck className="h-5 w-5 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Leverage depreciated assets for cost-effective hybrid capacity</span>
                </li>
                <li className="flex items-start">
                  <ShieldCheck className="h-5 w-5 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Ensure data security and regulatory compliance throughout the process</span>
                </li>
              </ul>
            </div>
            <div className="bg-emerald-50 dark:bg-emerald-900/20 p-8 rounded-lg">
              <h4 className="text-xl font-semibold mb-4">Flexible Engagement Models</h4>
              <div className="space-y-4">
                <div>
                  <h5 className="font-semibold flex items-center mb-2">
                    <Store className="h-5 w-5 mr-2 text-emerald-600" />
                    Quick Transactions via Shopify
                  </h5>
                  <p className="text-gray-600 text-sm">
                    Browse our inventory of refurbished equipment, new parts, and upgrade components
                  </p>
                </div>
                <div>
                  <h5 className="font-semibold flex items-center mb-2">
                    <Truck className="h-5 w-5 mr-2 text-emerald-600" />
                    Enterprise Partnerships
                  </h5>
                  <p className="text-gray-600 text-sm">
                    Work with our team for comprehensive datacenter decommissioning and cloud migration support
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-emerald-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Complete Your Cloud Journey with Confidence</h2>
          <p className="text-xl text-emerald-100 mb-8">
            From initial assessment to final recycling, we provide the missing piece in your cloud transformation strategy
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-emerald-900 hover:bg-gray-100" asChild>
              <Link href="/company/contact">
                Get a Quote
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white/50 bg-white/10 text-white hover:bg-white/20 hover:border-white" asChild>
              <a href="https://shop.nuvoxel.com">
                Browse Inventory
                <Store className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}