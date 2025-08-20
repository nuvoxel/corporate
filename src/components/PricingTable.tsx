'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Check, ArrowRight, Loader2 } from 'lucide-react'
import { usePricing, formatPrice, type Plan, type Feature, type MarketplaceListing } from '@/hooks/usePricing'
import { cn } from '@/lib/utils'

interface PricingTableProps {
  showFeatureComparison?: boolean
  maxColumns?: number
  className?: string
}

export function PricingTable({ 
  showFeatureComparison = false, 
  maxColumns = 4,
  className 
}: PricingTableProps) {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly')
  const { data, loading, error } = usePricing()

  if (loading) {
    return (
      <div className={cn("flex items-center justify-center py-12", className)}>
        <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
      </div>
    )
  }

  // More graceful fallback when pricing is unavailable
  if (!data || !data.plans || data.plans.length === 0) {
    return (
      <div className={cn("text-center py-16", className)}>
        <Card className="max-w-md mx-auto p-8 border-2">
          <CardContent className="space-y-4 p-0">
            <div className="text-2xl font-bold">
              Explore Our Pricing Plans
            </div>
            <p className="text-muted-foreground">
              Visit Hydrogen to see our current pricing options and start your free trial.
            </p>
            <div className="pt-4">
              <Button asChild size="lg" className="w-full">
                <Link href="https://hydrogen.nuvoxel.com">
                  View Plans on Hydrogen
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              Free tier available • No credit card required
            </p>
          </CardContent>
        </Card>
      </div>
    )
  }

  // Safely filter and sort plans
  let visiblePlans: Plan[] = []
  try {
    visiblePlans = data.plans
      .filter(plan => plan && plan.visible !== false)
      .sort((a, b) => (a.order || 999) - (b.order || 999))
      .slice(0, maxColumns)
  } catch (err) {
    console.warn('Error processing plans:', err)
    visiblePlans = []
  }

  // If no visible plans after processing, show fallback
  if (visiblePlans.length === 0) {
    return (
      <div className={cn("text-center py-16", className)}>
        <Card className="max-w-md mx-auto p-8 border-2">
          <CardContent className="space-y-4 p-0">
            <div className="text-2xl font-bold">
              Explore Our Pricing Plans
            </div>
            <p className="text-muted-foreground">
              Visit Hydrogen to see our current pricing options and start your free trial.
            </p>
            <div className="pt-4">
              <Button asChild size="lg" className="w-full">
                <Link href="https://hydrogen.nuvoxel.com">
                  View Plans on Hydrogen
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              Free tier available • No credit card required
            </p>
          </CardContent>
        </Card>
      </div>
    )
  }

  const getPrice = (plan: Plan) => {
    try {
      if (billingCycle === 'annual' && plan.pricing?.annual) {
        return plan.pricing.annual / 12 // Show monthly price when billed annually
      }
      return plan.pricing?.monthly || 0
    } catch {
      return 0
    }
  }

  const getFeatureDisplay = (featureId: string) => {
    try {
      const feature = data.features?.find(f => f.id === featureId)
      return feature?.name || featureId
    } catch {
      return featureId
    }
  }

  const getPlanFeatures = (plan: Plan) => {
    try {
      if (!plan.features || !Array.isArray(plan.features)) {
        return []
      }
      
      // Group features by category for better display
      const coreFeatures = plan.features
        .filter(fId => {
          const feature = data.features?.find(f => f.id === fId)
          return feature?.category === 'core'
        })
        .slice(0, 4) // Show max 4 core features

      const advancedFeatures = plan.features
        .filter(fId => {
          const feature = data.features?.find(f => f.id === fId)
          return feature?.category === 'advanced'
        })
        .slice(0, 5) // Show max 5 advanced features

      const enterpriseFeatures = plan.features
        .filter(fId => {
          const feature = data.features?.find(f => f.id === fId)
          return feature?.category === 'enterprise'
        })

      return [...coreFeatures, ...advancedFeatures, ...enterpriseFeatures]
    } catch (err) {
      console.warn('Error processing plan features:', err)
      return []
    }
  }

  const getButtonVariant = (variant: string): "default" | "outline" | "secondary" | "ghost" | "link" | "destructive" => {
    const validVariants = ["default", "outline", "secondary", "ghost", "link", "destructive"]
    return validVariants.includes(variant) ? variant as any : "outline"
  }

  // Get marketplace info - supports both old and new format
  const getMarketplaces = (plan: Plan): MarketplaceListing[] => {
    // Use new format if available
    if (plan.marketplaces && Array.isArray(plan.marketplaces)) {
      return plan.marketplaces
    }
    
    // Fall back to old format for backwards compatibility
    if (plan.marketplaceAvailability && Array.isArray(plan.marketplaceAvailability)) {
      return plan.marketplaceAvailability.map(id => ({
        marketplaceId: id,
        listingUrl: undefined
      }))
    }
    
    return []
  }

  // Get marketplace display name and icon
  const getMarketplaceInfo = (marketplaceId: string) => {
    const marketplaces: Record<string, { name: string; shortName: string; color: string }> = {
      azure: { name: 'Azure Marketplace', shortName: 'Azure', color: 'bg-blue-500' },
      aws: { name: 'AWS Marketplace', shortName: 'AWS', color: 'bg-orange-500' },
      gcp: { name: 'Google Cloud Marketplace', shortName: 'GCP', color: 'bg-green-500' },
      alibaba: { name: 'Alibaba Cloud Marketplace', shortName: 'Alibaba', color: 'bg-orange-600' }
    }
    return marketplaces[marketplaceId] || { 
      name: marketplaceId, 
      shortName: marketplaceId, 
      color: 'bg-gray-500' 
    }
  }

  return (
    <div className={className}>
      {/* Billing Cycle Toggle */}
      {data.billingCycles && data.billingCycles.length > 1 && (
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-4 p-1 bg-muted rounded-lg">
            {data.billingCycles.map(cycle => (
              <button
                key={cycle.id}
                onClick={() => setBillingCycle(cycle.id as 'monthly' | 'annual')}
                className={cn(
                  "px-4 py-2 rounded-md text-sm font-medium transition-colors",
                  billingCycle === cycle.id
                    ? "bg-background text-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {cycle.label}
                {cycle.discountPercentage && cycle.id === 'annual' && (
                  <span className="ml-1 text-xs text-green-600">
                    Save {cycle.discountPercentage}%
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Pricing Cards */}
      <div className={cn(
        "grid gap-6",
        visiblePlans.length === 1 && "md:grid-cols-1 max-w-md mx-auto",
        visiblePlans.length === 2 && "md:grid-cols-2 max-w-3xl mx-auto",
        visiblePlans.length === 3 && "md:grid-cols-3 max-w-5xl mx-auto",
        visiblePlans.length >= 4 && "md:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto"
      )}>
        {visiblePlans.map(plan => {
          const price = getPrice(plan)
          const displayFeatures = getPlanFeatures(plan)
          const marketplaces = getMarketplaces(plan)

          return (
            <Card 
              key={plan.id}
              className={cn(
                "relative border-2 hover:border-primary/50 transition-colors h-full flex flex-col",
                plan.badge?.includes('POPULAR') && "border-primary"
              )}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <Badge className="bg-gradient-to-r from-blue-500 to-purple-500 text-white border-0">
                    {plan.badge}
                  </Badge>
                </div>
              )}
              
              <CardHeader className={plan.badge ? "pt-8" : ""}>
                <CardTitle className="text-xl">{plan.name}</CardTitle>
                <div className="mt-4">
                  <span className="text-3xl font-bold">
                    {formatPrice(price, plan.pricing.currency)}
                  </span>
                  <span className="text-muted-foreground">
                    /{billingCycle === 'annual' ? 'mo' : 'month'}
                  </span>
                  {billingCycle === 'annual' && plan.pricing.annual && (
                    <div className="text-xs text-muted-foreground mt-1">
                      {formatPrice(plan.pricing.annual, plan.pricing.currency)}/year
                    </div>
                  )}
                </div>
                <CardDescription className="mt-2">
                  {plan.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="flex flex-col flex-grow">
                <ul className="space-y-2 mb-6 flex-grow text-sm">
                  {displayFeatures.map((featureId, idx) => (
                    <li key={featureId} className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className={idx === 0 && plan.id !== 'free' ? "font-medium" : ""}>
                        {idx === 0 && plan.id !== 'free' 
                          ? "Everything in " + (visiblePlans[visiblePlans.findIndex(p => p.id === plan.id) - 1]?.name || "previous") + ", plus:"
                          : getFeatureDisplay(featureId)}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Limits & Additional Info */}
                {(plan.limits?.users || plan.pricing?.perUser || plan.trial) && (
                  <div className="border-t pt-3 mb-3 space-y-1">
                    {plan.trial && (
                      <div className="text-xs text-center text-muted-foreground">
                        {plan.trial.days}-day free trial
                        {!plan.trial.requiresCard && " • No card required"}
                      </div>
                    )}
                    {plan.limits.users && plan.id === 'enterprise' && (
                      <div className="text-xs text-muted-foreground">
                        <p>• {plan.limits.users} users included</p>
                        {plan.pricing.perUser && (
                          <p>• {formatPrice(plan.pricing.perUser, plan.pricing.currency)}/mo per additional user</p>
                        )}
                      </div>
                    )}
                  </div>
                )}

                {/* Marketplace Badges */}
                {marketplaces.length > 0 && (
                  <div className="mb-3 space-y-2">
                    {marketplaces.map(marketplace => {
                      const info = getMarketplaceInfo(marketplace.marketplaceId)
                      
                      if (marketplace.comingSoon) {
                        return (
                          <Badge 
                            key={marketplace.marketplaceId}
                            variant="outline" 
                            className="text-xs w-full justify-center text-muted-foreground"
                          >
                            {info.shortName} Marketplace - Coming Soon
                          </Badge>
                        )
                      }
                      
                      if (marketplace.listingUrl) {
                        return (
                          <a
                            key={marketplace.marketplaceId}
                            href={marketplace.listingUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block"
                          >
                            <Badge 
                              variant="secondary" 
                              className="text-xs w-full justify-center hover:bg-secondary/80 cursor-pointer transition-colors"
                            >
                              Available on {info.shortName} Marketplace →
                            </Badge>
                          </a>
                        )
                      }
                      
                      return (
                        <Badge 
                          key={marketplace.marketplaceId}
                          variant="secondary" 
                          className="text-xs w-full justify-center"
                        >
                          Available on {info.shortName} Marketplace
                        </Badge>
                      )
                    })}
                  </div>
                )}

                {/* CTA Button */}
                <Button 
                  asChild 
                  className="w-full mt-auto" 
                  variant={getButtonVariant(plan.cta?.variant || 'outline')}
                >
                  <Link href={plan.cta?.url || 'https://hydrogen.nuvoxel.com'}>
                    {plan.cta?.label || 'Learn More'}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Service Provider CTA */}
      {visiblePlans.some(p => p.id === 'enterprise') && (
        <Card className="mt-12 bg-gradient-to-r from-purple-900/10 to-blue-900/10 border-2 border-purple-500/20">
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
      )}

      {/* Feature Comparison Table */}
      {showFeatureComparison && visiblePlans.length > 1 && data.features && (
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
                  {visiblePlans.map(plan => (
                    <th key={plan.id} className="text-center py-4 px-4">
                      {plan.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {data.features.map(feature => (
                  <tr key={feature.id} className="border-b">
                    <td className="py-4 px-4 font-medium">{feature.name}</td>
                    {visiblePlans.map(plan => (
                      <td key={plan.id} className="text-center py-4 px-4">
                        {plan.features?.includes(feature.id) ? (
                          <Check className="h-5 w-5 text-green-600 mx-auto" />
                        ) : (
                          <span className="text-gray-300">—</span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
                <tr className="border-b">
                  <td className="py-4 px-4 font-medium">Users Included</td>
                  {visiblePlans.map(plan => (
                    <td key={plan.id} className="text-center py-4 px-4">
                      {plan.limits.users || 1}
                    </td>
                  ))}
                </tr>
                {visiblePlans.some(p => p.limits.apiCalls) && (
                  <tr className="border-b">
                    <td className="py-4 px-4 font-medium">API Calls/Month</td>
                    {visiblePlans.map(plan => (
                      <td key={plan.id} className="text-center py-4 px-4">
                        {plan.limits.apiCalls === -1 
                          ? 'Unlimited' 
                          : plan.limits.apiCalls?.toLocaleString() || '—'}
                      </td>
                    ))}
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  )
}