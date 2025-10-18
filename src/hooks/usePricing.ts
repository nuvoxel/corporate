'use client'

import { useState, useEffect } from 'react'
import pricingData from '@/data/pricing.json'

export interface BillingCycle {
  id: string
  label: string
  discountPercentage?: number
}

export interface PricingData {
  monthly: number
  annual?: number
  perUser?: number
  currency: string
}

export interface MarketplaceListing {
  marketplaceId: string
  listingUrl?: string
  badge?: string
  comingSoon?: boolean
}

export interface Plan {
  id: string
  name: string
  badge?: string
  description: string
  visible: boolean
  order: number
  pricing: PricingData
  limits: {
    users?: number
    apiCalls?: number
    comparisons?: number
    savedComparisons?: number
  }
  features: string[]
  marketplaces?: MarketplaceListing[]
  marketplaceAvailability?: string[] // Deprecated, for backwards compatibility
  cta: {
    label: string
    url: string
    variant: string
  }
  trial?: {
    days: number
    requiresCard: boolean
  }
}

export interface Marketplace {
  id: string
  name: string
  icon?: string
  availablePlans: string[]
  listingUrl?: string
  status: 'available' | 'coming_soon' | 'beta'
}

export interface Feature {
  id: string
  name: string
  description?: string
  category: string
  tooltip?: string
}

export interface PricingResponse {
  version: string
  lastUpdated: string
  currency: string
  billingCycles: BillingCycle[]
  plans: Plan[]
  marketplaces: Marketplace[]
  features: Feature[]
}

interface UsePricingOptions {
  includeHidden?: boolean
  planIds?: string[]
  marketplace?: string
  currency?: string
  locale?: string
  preview?: boolean
}

interface UsePricingResult {
  data: PricingResponse | null
  loading: boolean
  error: Error | null
  refetch: () => Promise<void>
}

// Pricing data is now loaded from local JSON file

export function usePricing(options: UsePricingOptions = {}): UsePricingResult {
  const [data, setData] = useState<PricingResponse | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  const buildQueryString = () => {
    const params = new URLSearchParams()
    if (options.includeHidden) params.append('includeHidden', 'true')
    if (options.planIds?.length) params.append('planIds', options.planIds.join(','))
    if (options.marketplace) params.append('marketplace', options.marketplace)
    if (options.currency) params.append('currency', options.currency)
    if (options.locale) params.append('locale', options.locale)
    if (options.preview) params.append('preview', 'true')
    const query = params.toString()
    return query ? `?${query}` : ''
  }

  const fetchPricing = async () => {
    try {
      setLoading(true)
      setError(null)

      // Load from JSON file directly
      setData(getStaticPricingData())
      
    } catch (err) {
      console.error('Failed to load pricing data:', err)
      setError(err instanceof Error ? err : new Error('Failed to load pricing'))
      setData(null)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchPricing()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [options.includeHidden, options.marketplace, options.currency, options.locale, options.preview])

  return {
    data,
    loading,
    error,
    refetch: fetchPricing
  }
}

// Fallback static data from JSON file
function getStaticPricingData(): PricingResponse {
  return {
    ...pricingData,
    lastUpdated: new Date().toISOString()
  } as PricingResponse
}

// Utility function to format price
export function formatPrice(cents: number, currency = 'USD'): string {
  try {
    // Ensure cents is a valid number
    const price = typeof cents === 'number' && !isNaN(cents) ? cents : 0
    
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency,
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(price / 100)
  } catch (err) {
    console.warn('Error formatting price:', err)
    // Fallback to simple formatting
    return `$${Math.round((cents || 0) / 100)}`
  }
}