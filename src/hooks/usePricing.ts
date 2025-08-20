'use client'

import { useState, useEffect } from 'react'

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

const PRICING_API_URL = process.env.NEXT_PUBLIC_HYDROGEN_URL || 'https://hydrogen.nuvoxel.com'
const CACHE_KEY = 'nuvoxel_pricing_cache'
const CACHE_DURATION = 5 * 60 * 1000 // 5 minutes

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

      // Check cache first - wrap in try/catch in case localStorage is unavailable
      try {
        const cacheKey = `${CACHE_KEY}_${buildQueryString()}`
        const cached = localStorage.getItem(cacheKey)
        if (cached) {
          const { data: cachedData, timestamp } = JSON.parse(cached)
          if (Date.now() - timestamp < CACHE_DURATION) {
            setData(cachedData)
            setLoading(false)
            return
          }
        }
      } catch (cacheErr) {
        // Ignore cache errors and continue
        console.warn('Cache read failed:', cacheErr)
      }

      const response = await fetch(`${PRICING_API_URL}/api/public/pricing${buildQueryString()}`)
      
      if (!response.ok) {
        throw new Error(`Failed to fetch pricing: ${response.statusText}`)
      }

      const result = await response.json()
      
      // Validate the response has required fields
      if (!result.plans || !Array.isArray(result.plans)) {
        throw new Error('Invalid pricing data format')
      }
      
      // Cache the result - wrap in try/catch
      try {
        const cacheKey = `${CACHE_KEY}_${buildQueryString()}`
        localStorage.setItem(cacheKey, JSON.stringify({
          data: result,
          timestamp: Date.now()
        }))
      } catch (cacheErr) {
        // Ignore cache write errors
        console.warn('Cache write failed:', cacheErr)
      }

      setData(result)
    } catch (err) {
      console.warn('Pricing API unavailable, using fallback:', err)
      setError(err instanceof Error ? err : new Error('Pricing service unavailable'))
      
      // Fall back to static data if API fails
      try {
        setData(getStaticPricingData())
      } catch (fallbackErr) {
        // If even static data fails, set error and null data
        console.error('Failed to load fallback pricing:', fallbackErr)
        setData(null)
      }
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

// Fallback static data in case API is unavailable
function getStaticPricingData(): PricingResponse {
  return {
    version: '1.0.0',
    lastUpdated: new Date().toISOString(),
    currency: 'USD',
    billingCycles: [
      { id: 'monthly', label: 'Monthly' },
      { id: 'annual', label: 'Annual', discountPercentage: 20 }
    ],
    plans: [
      {
        id: 'free',
        name: 'Free',
        description: 'Essential cloud comparison tools',
        visible: true,
        order: 1,
        pricing: { monthly: 0, currency: 'USD' },
        limits: { users: 1, comparisons: 100 },
        features: ['cloud_provider_comparisons', 'region_comparisons', 'sku_comparisons', 'cloud_leaderboards'],
        marketplaces: [],
        cta: {
          label: 'Get Started Free',
          url: 'https://hydrogen.nuvoxel.com/sign-up?plan=free',
          variant: 'outline'
        }
      },
      {
        id: 'pro',
        name: 'Pro',
        description: 'Advanced comparisons & export',
        visible: true,
        order: 2,
        pricing: { monthly: 1000, annual: 9600, currency: 'USD' },
        limits: { users: 1, apiCalls: 1000, savedComparisons: 50 },
        features: [
          'cloud_provider_comparisons', 'region_comparisons', 'sku_comparisons', 'cloud_leaderboards',
          'workload_comparisons', 'benchmark_comparisons', 'saved_comparisons', 'excel_export', 'sku_equivalence'
        ],
        marketplaces: [
          { marketplaceId: 'azure', listingUrl: 'https://azuremarketplace.microsoft.com/marketplace/apps/nuvoxel.hydrogen' }
        ],
        cta: {
          label: 'Subscribe to Pro',
          url: 'https://hydrogen.nuvoxel.com/sign-up?plan=pro',
          variant: 'outline'
        }
      },
      {
        id: 'max',
        name: 'Max',
        badge: 'MOST POPULAR',
        description: 'Complete cloud intelligence suite',
        visible: true,
        order: 3,
        pricing: { monthly: 3000, annual: 28800, currency: 'USD' },
        limits: { users: 1, apiCalls: 10000, savedComparisons: -1 },
        features: [
          'cloud_provider_comparisons', 'region_comparisons', 'sku_comparisons', 'cloud_leaderboards',
          'workload_comparisons', 'benchmark_comparisons', 'saved_comparisons', 'excel_export', 'sku_equivalence',
          'multi_currency', 'spot_analysis', 'api_access', 'arm_bicep_pricing', 'variable_cost', 'support_license_costs'
        ],
        marketplaces: [
          { marketplaceId: 'azure', listingUrl: 'https://azuremarketplace.microsoft.com/marketplace/apps/nuvoxel.hydrogen' }
        ],
        cta: {
          label: 'Start Free Trial',
          url: 'https://hydrogen.nuvoxel.com/sign-up?plan=max',
          variant: 'default'
        },
        trial: { days: 7, requiresCard: false }
      },
      {
        id: 'enterprise',
        name: 'Enterprise',
        description: 'Team collaboration & enterprise features',
        visible: true,
        order: 4,
        pricing: { monthly: 25000, annual: 240000, perUser: 3000, currency: 'USD' },
        limits: { users: 5, apiCalls: -1, savedComparisons: -1 },
        features: [
          'cloud_provider_comparisons', 'region_comparisons', 'sku_comparisons', 'cloud_leaderboards',
          'workload_comparisons', 'benchmark_comparisons', 'saved_comparisons', 'excel_export', 'sku_equivalence',
          'multi_currency', 'spot_analysis', 'api_access', 'arm_bicep_pricing', 'variable_cost', 'support_license_costs',
          'organization_management', 'role_based_access', 'audit_logs', 'flexible_storage', 'priority_support'
        ],
        marketplaces: [
          { marketplaceId: 'azure', listingUrl: 'https://azuremarketplace.microsoft.com/marketplace/apps/nuvoxel.hydrogen' },
          { marketplaceId: 'aws', comingSoon: true }
        ],
        cta: {
          label: 'Contact Sales',
          url: 'https://nuvoxel.com/company/contact',
          variant: 'primary'
        }
      }
    ],
    marketplaces: [
      {
        id: 'azure',
        name: 'Azure Marketplace',
        availablePlans: ['pro', 'max', 'enterprise'],
        listingUrl: 'https://azuremarketplace.microsoft.com/marketplace/apps/nuvoxel.hydrogen',
        status: 'available'
      },
      {
        id: 'aws',
        name: 'AWS Marketplace',
        availablePlans: ['enterprise'],
        status: 'coming_soon'
      }
    ],
    features: [
      { id: 'cloud_provider_comparisons', name: 'Cloud Provider Comparisons', category: 'core' },
      { id: 'region_comparisons', name: 'Region Comparisons', category: 'core' },
      { id: 'sku_comparisons', name: 'Specific SKU Comparisons', category: 'core' },
      { id: 'cloud_leaderboards', name: 'Cloud Leaderboards', category: 'core' },
      { id: 'workload_comparisons', name: 'Workload Based Comparisons', category: 'advanced' },
      { id: 'benchmark_comparisons', name: 'Benchmark Informed Comparisons', category: 'advanced' },
      { id: 'saved_comparisons', name: 'Saved Comparisons', category: 'advanced' },
      { id: 'excel_export', name: 'Excel Export', category: 'advanced' },
      { id: 'sku_equivalence', name: 'SKU Equivalence Calculation', category: 'advanced' },
      { id: 'multi_currency', name: 'Multi-Currency Conversion', category: 'advanced' },
      { id: 'spot_analysis', name: 'Spot Instance Analysis', category: 'advanced' },
      { id: 'api_access', name: 'API Access', category: 'advanced' },
      { id: 'arm_bicep_pricing', name: 'ARM/Bicep Template Pricing', category: 'advanced' },
      { id: 'variable_cost', name: 'Variable Cost Comparison', category: 'advanced' },
      { id: 'support_license_costs', name: 'Support & License Costs', category: 'advanced' },
      { id: 'organization_management', name: 'Organization Management', category: 'enterprise' },
      { id: 'role_based_access', name: 'Role-Based Access Control', category: 'enterprise' },
      { id: 'audit_logs', name: 'Audit Logs & Compliance', category: 'enterprise' },
      { id: 'flexible_storage', name: 'Flexible Storage Options', category: 'enterprise' },
      { id: 'priority_support', name: 'Priority Support', category: 'enterprise' }
    ]
  }
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