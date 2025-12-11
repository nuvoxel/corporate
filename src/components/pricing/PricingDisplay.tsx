'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Check } from 'lucide-react'
import { cn } from '@/lib/utils'

export interface PricingPlan {
  id: string
  name: string
  description?: string
  monthlyPrice?: string | number
  overagePricePerResource?: string | number
  freeResourceQuota?: number
  trialDays?: number
  features: string[]
}

export interface PricingAddon {
  id: string
  name: string
  description?: string | null
  monthlyPrice?: string | number | null
  meteredPricePerUnit?: string | number | null
  meteredUnit?: string | null
  features: string[]
}

export interface PricingFeature {
  id: string
  name: string
}

export interface PricingDisplayProps {
  plans: PricingPlan[]
  addons?: PricingAddon[]
  features: PricingFeature[]
  renderButton?: (plan: PricingPlan) => React.ReactNode
  renderAddonButton?: (addon: PricingAddon) => React.ReactNode
  currentPlanId?: string
  className?: string
}

export function PricingDisplay({
  plans,
  addons = [],
  features,
  renderButton,
  renderAddonButton,
  currentPlanId,
  className
}: PricingDisplayProps) {
  const getMonthlyPrice = (plan: PricingPlan) => {
    return Number(plan.monthlyPrice) || 0
  }

  const formatPrice = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount)
  }

  const getFeatureDisplay = (featureKey: string) => {
    const feature = features.find(f => f.id === featureKey)
    return feature?.name || featureKey
  }

  // Get features for display, showing "Everything from [Plan] Plus:" when appropriate
  const getPlanFeaturesDisplay = (plan: PricingPlan, planIndex: number) => {
    // Remove duplicates from current features
    const currentFeatures = [...new Set(plan.features || [])]

    // Check if any feature is "Everything in [plan]" pattern
    const everythingPattern = /^Everything in (.+)$/i
    const everythingMatch = currentFeatures.find(f => everythingPattern.test(f))

    if (everythingMatch && planIndex > 0) {
      // Extract the plan name
      const match = everythingMatch.match(everythingPattern)
      const previousPlanName = match ? match[1] : plans[planIndex - 1].name

      // Get only the new features (excluding the "Everything in X" feature)
      const newFeatures = currentFeatures.filter(f => !everythingPattern.test(f))

      return {
        hasInherited: true,
        inheritedFrom: previousPlanName,
        newFeatures: newFeatures
      }
    }

    // Check if this plan's features are a superset of the previous plan's features
    if (planIndex > 0) {
      const previousPlan = plans[planIndex - 1]
      const previousFeatures = [...new Set(previousPlan.features || [])]

      // If previous plan has features, check if current plan contains all of them
      if (previousFeatures.length > 0) {
        const allPreviousIncluded = previousFeatures.every(f => currentFeatures.includes(f))

        if (allPreviousIncluded && currentFeatures.length > previousFeatures.length) {
          // Find features that are new (not in previous plan) - remove duplicates
          const newFeaturesSet = new Set(currentFeatures.filter(f => !previousFeatures.includes(f)))
          const newFeatures = Array.from(newFeaturesSet)

          // Only show "Everything from X Plus:" if there are new features
          if (newFeatures.length > 0) {
            return {
              hasInherited: true,
              inheritedFrom: previousPlan.name,
              newFeatures: newFeatures
            }
          }
        }
      }
    }

    // Return all features (with duplicates removed)
    return {
      hasInherited: false,
      inheritedFrom: null,
      newFeatures: currentFeatures
    }
  }


  return (
    <div className={className}>
      {/* Pricing Cards */}
      <div className={cn(
        "grid gap-8 w-full mx-auto",
        plans.length === 1 && "md:grid-cols-1 max-w-md",
        plans.length === 2 && "md:grid-cols-2 max-w-4xl",
        plans.length === 3 && "md:grid-cols-3 max-w-6xl",
        plans.length >= 4 && "md:grid-cols-2 lg:grid-cols-4 max-w-7xl"
      )}>
        {plans.map((plan, planIndex) => {
          const price = getMonthlyPrice(plan)
          const isPopular = plan.id === 'pro' || plan.id === 'metered'
          const isCurrentPlan = currentPlanId === plan.id

          return (
            <Card
              key={plan.id}
              className={cn(
                "relative border-2 h-full flex flex-col overflow-visible min-h-[650px]",
                isPopular && "border-primary shadow-xl ring-1 ring-primary/10",
                !isPopular && "border-border hover:border-primary/50 transition-colors"
              )}
            >
              {isPopular && !isCurrentPlan && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                  <Badge className="bg-gradient-to-r from-blue-500 to-purple-500 text-white border-0 shadow-md px-3 py-1">
                    MOST POPULAR
                  </Badge>
                </div>
              )}

              {isCurrentPlan && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                  <Badge variant="default" className="bg-green-600 shadow-md px-3 py-1">
                    CURRENT PLAN
                  </Badge>
                </div>
              )}

              <CardHeader className="pt-4 pb-5">
                {/* Plan Name - fixed height */}
                <div className="h-[32px] mb-3 flex items-center">
                  <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                </div>

                {/* Price Section - fixed height */}
                <div className="h-[72px] mt-2 mb-4 flex flex-col justify-start">
                  {plan.id === 'free' ? (
                    <div className="text-4xl font-bold">Free</div>
                  ) : (plan.overagePricePerResource && Number(plan.overagePricePerResource) > 0) ? (
                    <div>
                      <div className="text-4xl font-bold">
                        ${Number(plan.overagePricePerResource).toFixed(2)}
                      </div>
                      <div className="text-sm text-muted-foreground mt-1">per resource/month</div>
                    </div>
                  ) : !plan.monthlyPrice || plan.monthlyPrice === 0 || plan.monthlyPrice === '0' ? (
                    <div className="text-4xl font-bold">Contact Us</div>
                  ) : (
                    <div>
                      <div className="text-4xl font-bold">{formatPrice(price)}</div>
                      <div className="text-sm text-muted-foreground mt-1">/month</div>
                    </div>
                  )}
                </div>
              </CardHeader>

              <CardContent className="flex flex-col flex-grow px-6 pt-0 pb-6">
                {/* Description Section - fixed height for alignment */}
                <div className="mb-5 h-[80px] flex items-start">
                  {plan.description ? (
                    <CardDescription className="text-sm leading-relaxed" style={{ wordBreak: 'break-word' }}>
                      {plan.description}
                    </CardDescription>
                  ) : (
                    <div className="text-sm text-muted-foreground">—</div>
                  )}
                </div>

                {/* Features List - fixed height for alignment */}
                <div className="mb-5 flex-grow min-h-[350px]">
                  <div className="text-xs font-bold text-muted-foreground uppercase tracking-wide mb-4 h-[20px] flex items-center">
                    Features
                  </div>
                  <ul className="space-y-2.5 text-sm">
                    {(() => {
                      const featureDisplay = getPlanFeaturesDisplay(plan, planIndex)
                      // Ensure no duplicates in features to show
                      const featuresToShow = [...new Set(featureDisplay.newFeatures)]
                      const maxVisible = 8
                      const visibleFeatures = featuresToShow.slice(0, maxVisible)
                      const remainingCount = featuresToShow.length - maxVisible

                      return (
                        <>
                          {featureDisplay.hasInherited && (
                            <li className="flex items-start gap-2.5 mb-2">
                              <span className="text-sm font-semibold text-muted-foreground">
                                Everything from {featureDisplay.inheritedFrom} Plus:
                              </span>
                            </li>
                          )}
                          {visibleFeatures.map((featureKey: string) => (
                            <li key={featureKey} className="flex items-start gap-2.5">
                              <Check className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                              <span className="leading-relaxed">{getFeatureDisplay(featureKey)}</span>
                            </li>
                          ))}
                          {remainingCount > 0 && (
                            <li className="pt-1">
                              <Accordion type="single" collapsible className="w-full">
                                <AccordionItem value="more-features" className="border-0">
                                  <AccordionTrigger className="py-2 text-xs text-muted-foreground font-medium hover:no-underline">
                                    + {remainingCount} more {remainingCount === 1 ? 'feature' : 'features'}
                                  </AccordionTrigger>
                                  <AccordionContent className="pt-2 pb-0">
                                    <ul className="space-y-2.5 text-sm">
                                      {featuresToShow.slice(maxVisible).map((featureKey: string) => (
                                        <li key={featureKey} className="flex items-start gap-2.5">
                                          <Check className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                                          <span className="leading-relaxed">{getFeatureDisplay(featureKey)}</span>
                                        </li>
                                      ))}
                                    </ul>
                                  </AccordionContent>
                                </AccordionItem>
                              </Accordion>
                            </li>
                          )}
                        </>
                      )
                    })()}
                  </ul>
                </div>

                {/* Bottom section - always at bottom */}
                <div className="mt-auto pt-5 border-t">
                  {(plan.trialDays ?? 0) > 0 && !isCurrentPlan && (
                    <div className="mb-3">
                      <div className="text-xs text-center text-muted-foreground">
                        {plan.trialDays}-day free trial
                      </div>
                    </div>
                  )}

                  {/* CTA Button */}
                  <div>
                    {renderButton ? (
                      renderButton(plan)
                    ) : (
                      <Button className="w-full" size="lg" variant={isPopular ? 'default' : 'outline'}>
                        {plan.id === 'free' ? 'Get Started Free' :
                         !plan.monthlyPrice || plan.monthlyPrice === 0 || plan.monthlyPrice === '0' ? 'Contact Sales' : 'Start Free Trial'}
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Add-ons Section */}
      {addons && addons.length > 0 && (
        <div className="mt-20">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-3">Add-ons</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Enhance your subscription with additional features
            </p>
          </div>

          <div className={cn(
            "grid gap-8 w-full mx-auto",
            addons.length === 1 && "md:grid-cols-1 max-w-md",
            addons.length === 2 && "md:grid-cols-2 max-w-4xl",
            addons.length >= 3 && "md:grid-cols-3 max-w-6xl"
          )}>
            {addons.map((addon) => {
              const addonPrice = addon.monthlyPrice ? Number(addon.monthlyPrice) : 0;

              return (
                <Card
                  key={addon.id}
                  className="relative border-2 h-full flex flex-col border-border hover:border-primary/50 transition-colors min-h-[500px]"
                >
                  <CardHeader className="pt-4 pb-5">
                    {/* Addon Name */}
                    <CardTitle className="text-2xl font-bold mb-2">{addon.name}</CardTitle>

                    {/* Price Section */}
                    <div className="mt-2 mb-3">
                      {addon.meteredPricePerUnit && Number(addon.meteredPricePerUnit) > 0 ? (
                        <div>
                          <div className="text-4xl font-bold">
                            ${Number(addon.meteredPricePerUnit).toFixed(4)}
                          </div>
                          <div className="text-sm text-muted-foreground mt-1">
                            per {addon.meteredUnit || 'unit'}
                          </div>
                        </div>
                      ) : addonPrice === 0 || !addon.monthlyPrice ? (
                        <div className="text-4xl font-bold">Contact Us</div>
                      ) : (
                        <div>
                          <div className="text-4xl font-bold">{formatPrice(addonPrice)}</div>
                          <div className="text-sm text-muted-foreground mt-1">/month</div>
                        </div>
                      )}
                    </div>

                    {/* Description - no fixed height */}
                    {addon.description && (
                      <CardDescription className="mt-3 mb-3 text-sm leading-relaxed" style={{ wordBreak: 'break-word', minHeight: '3.5rem' }}>
                        {addon.description}
                      </CardDescription>
                    )}
                  </CardHeader>

                  <CardContent className="flex flex-col flex-grow px-6 pt-2 pb-6">
                    {/* Features List */}
                    {addon.features && addon.features.length > 0 && (
                      <div className="mb-5 flex-grow min-h-[150px]">
                        <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-4">
                          Features
                        </div>
                        <ul className="space-y-2.5 text-sm">
                          {addon.features.map((featureKey: string) => (
                            <li key={featureKey} className="flex items-start gap-2.5">
                              <Check className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                              <span className="leading-relaxed">{getFeatureDisplay(featureKey)}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* CTA Button - always at bottom */}
                    <div className="mt-auto pt-5 border-t">
                      {renderAddonButton ? (
                        renderAddonButton(addon)
                      ) : (
                        <Button
                          className="w-full"
                          size="lg"
                          variant="outline"
                        >
                          {addon.monthlyPrice ? 'Add to Plan' : 'Contact Sales'}
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      )}
    </div>
  )
}
