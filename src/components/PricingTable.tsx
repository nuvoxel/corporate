'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Loader2, ArrowRight } from 'lucide-react'
import { usePricing } from '@/hooks/usePricing'
import { PricingDisplay } from '@/components/pricing/PricingDisplay'

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
  const { data, loading, error } = usePricing()

  if (loading) {
    return (
      <div className={`flex items-center justify-center py-12 ${className}`}>
        <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
      </div>
    )
  }

  // More graceful fallback when pricing is unavailable
  if (!data || !data.plans || data.plans.length === 0) {
    return (
      <div className={`text-center py-16 ${className}`}>
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
          </CardContent>
        </Card>
      </div>
    )
  }

  // Safely filter and sort plans
  let visiblePlans: any[] = []
  try {
    visiblePlans = data.plans
      .filter(plan => plan && plan.visible !== false)
      .sort((a, b) => (a.order || 999) - (b.order || 999))
      .slice(0, maxColumns)
      .map(plan => ({
        id: plan.id,
        name: plan.name,
        description: plan.description,
        monthlyPrice: plan.pricing?.monthly ? (plan.pricing.monthly / 100).toString() : undefined,
        overagePricePerResource: plan.pricing?.perResource ? (plan.pricing.perResource / 100).toString() : undefined,
        freeResourceQuota: plan.limits?.resources,
        trialDays: plan.trial?.days,
        features: plan.features || []
      }))
  } catch (err) {
    console.warn('Error processing plans:', err)
    visiblePlans = []
  }

  // If no visible plans after processing, show fallback
  if (visiblePlans.length === 0) {
    return (
      <div className={`text-center py-16 ${className}`}>
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
          </CardContent>
        </Card>
      </div>
    )
  }

  // Transform add-ons
  const transformedAddons = (data.addons || []).map(addon => ({
    id: addon.id,
    name: addon.name,
    description: addon.description,
    monthlyPrice: addon.pricing?.monthly ? (addon.pricing.monthly / 100).toString() : undefined,
    meteredPricePerUnit: addon.pricing?.meteredPricePerUnit?.toString() || undefined,
    meteredUnit: addon.pricing?.meteredUnit || undefined,
    features: addon.features || []
  }))

  // Transform features
  const transformedFeatures = (data.features || []).map(feature => ({
    id: feature.id,
    name: feature.name
  }))

  return (
    <PricingDisplay
      plans={visiblePlans}
      addons={transformedAddons}
      features={transformedFeatures}
      className={className}
      renderButton={(plan) => (
        <Button
          asChild
          className="w-full mt-auto"
          variant={plan.id === 'pro' || plan.id === 'metered' ? 'default' : 'outline'}
        >
          <Link href={!plan.monthlyPrice || plan.monthlyPrice === '0' ? 'https://nuvoxel.com/company/contact' : `https://hydrogen.nuvoxel.com/sign-up?plan=${plan.id}`}>
            {plan.id === 'free' ? 'Get Started Free' :
             !plan.monthlyPrice || plan.monthlyPrice === '0' ? 'Contact Sales' : 'Start Free Trial'}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      )}
      renderAddonButton={(addon) => (
        <Button
          asChild
          className="w-full mt-auto"
          variant={addon.monthlyPrice ? 'default' : 'outline'}
        >
          <Link href={addon.monthlyPrice ? 'https://hydrogen.nuvoxel.com/pricing' : 'https://nuvoxel.com/company/contact'}>
            {addon.monthlyPrice ? 'Add to Plan' : 'Contact Sales'}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      )}
    />
  )
}
