'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
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
  description?: string
  monthlyPrice?: string | number
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

  return (
    <div className={className}>
      {/* Pricing Cards */}
      <div className={cn(
        "grid gap-8 w-full mx-auto",
        plans.length === 1 && "md:grid-cols-1 max-w-md",
        plans.length === 2 && "md:grid-cols-2 max-w-3xl",
        plans.length === 3 && "md:grid-cols-3 max-w-5xl",
        plans.length >= 4 && "md:grid-cols-2 lg:grid-cols-4 max-w-7xl"
      )}>
        {plans.map((plan) => {
          const price = getMonthlyPrice(plan)
          const isPopular = plan.id === 'pro' || plan.id === 'metered'
          const isCurrentPlan = currentPlanId === plan.id

          return (
            <Card
              key={plan.id}
              className={cn(
                "relative border-2 h-full flex flex-col overflow-visible",
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

              <CardHeader className={isPopular || isCurrentPlan ? "pt-8" : ""}>
                <CardTitle className="text-xl">{plan.name}</CardTitle>
                <div className="mt-4">
                  {plan.id === 'free' ? (
                    <div className="text-3xl font-bold">Free</div>
                  ) : !plan.monthlyPrice || plan.monthlyPrice === 0 || plan.monthlyPrice === '0' ? (
                    <div className="text-3xl font-bold">Contact Us</div>
                  ) : plan.overagePricePerResource && plan.freeResourceQuota ? (
                    <>
                      <div className="text-2xl font-semibold text-primary mb-1">
                        {plan.freeResourceQuota} resources free
                      </div>
                      <div className="text-3xl font-bold">
                        ${Number(plan.overagePricePerResource).toFixed(2)}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        per resource/month after {plan.freeResourceQuota}
                      </div>
                    </>
                  ) : (
                    <>
                      <span className="text-3xl font-bold">{formatPrice(price)}</span>
                      <span className="text-muted-foreground">/month</span>
                    </>
                  )}
                </div>
                <CardDescription className="mt-2">{plan.description}</CardDescription>
              </CardHeader>

              <CardContent className="flex flex-col flex-grow">
                <ul className="space-y-2 mb-6 flex-grow text-sm">
                  {(plan.features || []).slice(0, 8).map((featureKey: string) => (
                    <li key={featureKey} className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>{getFeatureDisplay(featureKey)}</span>
                    </li>
                  ))}
                  {(plan.features || []).length > 8 && (
                    <li className="text-xs text-muted-foreground italic">
                      + {(plan.features || []).length - 8} more features
                    </li>
                  )}
                </ul>

                {plan.trialDays && plan.trialDays > 0 && !isCurrentPlan && (
                  <div className="border-t pt-3 mb-3">
                    <div className="text-xs text-center text-muted-foreground">
                      {plan.trialDays}-day free trial
                    </div>
                  </div>
                )}

                {plan.id === 'free' && (
                  <div className="border-t pt-3 mb-3">
                    <div className="flex items-center justify-center gap-1 text-xs text-green-600 font-medium">
                      <Check className="h-3 w-3" />
                      No credit card required
                    </div>
                  </div>
                )}

                {renderButton ? (
                  renderButton(plan)
                ) : (
                  <Button className="w-full mt-auto" variant={isPopular ? 'default' : 'outline'}>
                    {plan.id === 'free' ? 'Get Started Free' :
                     !plan.monthlyPrice || plan.monthlyPrice === 0 || plan.monthlyPrice === '0' ? 'Contact Sales' : 'Start Free Trial'}
                  </Button>
                )}
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
            addons.length === 2 && "md:grid-cols-2 max-w-3xl",
            addons.length >= 3 && "md:grid-cols-3 max-w-6xl"
          )}>
            {addons.map((addon) => {
              const addonPrice = addon.monthlyPrice ? Number(addon.monthlyPrice) : 0;

              return (
                <Card
                  key={addon.id}
                  className="relative border-2 h-full flex flex-col border-border hover:border-primary/50 transition-colors"
                >
                  <CardHeader>
                    <CardTitle className="text-xl">{addon.name}</CardTitle>
                    <div className="mt-4">
                      {addonPrice === 0 || !addon.monthlyPrice ? (
                        <div className="text-3xl font-bold">Contact Us</div>
                      ) : addon.id === 'extended_data_retention' ? (
                        <>
                          <div className="text-3xl font-bold">
                            $0.0001
                            <span className="text-lg font-normal text-muted-foreground">
                              {' '}per resource-day
                            </span>
                          </div>
                          <p className="text-sm text-muted-foreground mt-2">
                            90 days included. ~$2.75/mo per 100 resources for 1 year retention.
                          </p>
                        </>
                      ) : (
                        <>
                          <span className="text-3xl font-bold">
                            {formatPrice(addonPrice)}
                          </span>
                          <span className="text-muted-foreground">/month</span>
                        </>
                      )}
                    </div>
                    <CardDescription className="mt-2">
                      {addon.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="flex flex-col flex-grow">
                    {addon.features && addon.features.length > 0 && (
                      <ul className="space-y-2 mb-6 flex-grow text-sm">
                        {addon.features.map((featureKey: string) => (
                          <li key={featureKey} className="flex items-start gap-2">
                            <Check className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <span>{getFeatureDisplay(featureKey)}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {renderAddonButton ? (
                      renderAddonButton(addon)
                    ) : (
                      <Button
                        className="w-full mt-auto"
                        variant={addon.monthlyPrice ? 'default' : 'outline'}
                      >
                        {addon.monthlyPrice ? 'Add to Plan' : 'Contact Sales'}
                      </Button>
                    )}
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
