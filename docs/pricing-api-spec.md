# Pricing API Specification

## Overview
Public API endpoint for fetching NuVoxel Hydrogen pricing plans, features, and marketplace availability.

## Base URL
```
https://hydrogen.nuvoxel.com/api/public
```

## Endpoints

### GET /api/public/pricing
Retrieve all pricing plans and their details.

#### URL Parameters
```typescript
interface PricingQueryParams {
  // Filter parameters
  includeHidden?: boolean;      // Include plans marked as hidden (default: false)
  planIds?: string;             // Comma-separated list of plan IDs to return
  marketplace?: string;         // Filter plans available in specific marketplace
  
  // Display parameters  
  currency?: string;            // Currency code (USD, EUR, GBP)
  locale?: string;              // Locale for formatting (en-US, en-GB)
  
  // Versioning
  apiVersion?: string;          // API version (default: latest)
  
  // Testing/Experiments
  variant?: string;             // A/B test variant ID
  preview?: boolean;            // Include preview/upcoming plans
}
```

#### Example Requests
```
# Get all active plans
GET /api/public/pricing

# Get specific plans only
GET /api/public/pricing?planIds=pro,max

# Get plans available on Azure Marketplace
GET /api/public/pricing?marketplace=azure

# Get pricing in Euros
GET /api/public/pricing?currency=EUR&locale=fr-FR

# Preview upcoming plans
GET /api/public/pricing?preview=true&includeHidden=true
```

#### Response Format
```typescript
interface PricingResponse {
  version: string;           // API version (e.g., "1.0.0")
  lastUpdated: string;       // ISO 8601 timestamp
  currency: string;          // Default currency (e.g., "USD")
  billingCycles: BillingCycle[];
  plans: Plan[];
  marketplaces: Marketplace[];
  features: Feature[];       // Master list of all features
}

interface BillingCycle {
  id: string;               // "monthly" | "annual"
  label: string;            // "Monthly" | "Annual"
  discountPercentage?: number; // e.g., 20 for annual
}

interface Plan {
  id: string;               // Unique plan identifier (dynamic)
  name: string;             // Display name
  badge?: string;           // Optional badge text
  description: string;      // Short description
  visible: boolean;         // Show in pricing table
  order: number;            // Display order (lower = left)
  pricing: {
    monthly: number;        // Monthly price in cents (0 for free)
    annual?: number;        // Annual price in cents (optional)
    perUser?: number;       // Additional user cost in cents (enterprise)
    currency: string;       // "USD"
  };
  limits: {
    users?: number;         // Number of users included
    apiCalls?: number;      // Monthly API call limit
    comparisons?: number;   // Monthly comparison limit
    savedComparisons?: number; // Saved comparison limit
  };
  features: string[];       // Array of feature IDs
  marketplaces?: MarketplaceListing[]; // Marketplace availability with links
  cta: {
    label: string;          // "Get Started Free" | "Start Free Trial"
    url: string;            // Target URL with plan param
    variant: string;        // "default" | "outline" | "primary"
  };
  trial?: {
    days: number;           // Trial period in days
    requiresCard: boolean;  // Credit card required?
  };
}

interface MarketplaceListing {
  marketplaceId: string;    // "azure" | "aws" | "gcp"
  listingUrl?: string;      // Direct link to this plan on marketplace
  badge?: string;           // Optional custom badge text
  comingSoon?: boolean;     // Show as "Coming Soon" instead of available
}

interface Marketplace {
  id: string;               // "azure" | "aws" | "gcp"
  name: string;             // "Azure Marketplace"
  icon?: string;            // URL to icon
  availablePlans: string[]; // Plan IDs available
  listingUrl?: string;     // Marketplace listing URL
  status: "available" | "coming_soon" | "beta";
}

interface Feature {
  id: string;               // Unique feature ID
  name: string;             // Display name
  description?: string;     // Optional description
  category: string;         // "core" | "advanced" | "enterprise"
  tooltip?: string;         // Hover tooltip text
}
```

#### Example Response
```json
{
  "version": "1.0.0",
  "lastUpdated": "2025-01-20T12:00:00Z",
  "currency": "USD",
  "billingCycles": [
    {
      "id": "monthly",
      "label": "Monthly"
    },
    {
      "id": "annual",
      "label": "Annual",
      "discountPercentage": 20
    }
  ],
  "plans": [
    {
      "id": "free",
      "name": "Free",
      "description": "Essential cloud comparison tools",
      "visible": true,
      "order": 1,
      "pricing": {
        "monthly": 0,
        "currency": "USD"
      },
      "limits": {
        "users": 1,
        "comparisons": 100
      },
      "features": [
        "cloud_provider_comparisons",
        "region_comparisons",
        "sku_comparisons",
        "cloud_leaderboards"
      ],
      "marketplaces": [],
      "cta": {
        "label": "Get Started Free",
        "url": "https://hydrogen.nuvoxel.com/sign-up?plan=free",
        "variant": "outline"
      }
    },
    {
      "id": "pro",
      "name": "Pro",
      "description": "Advanced comparisons & export",
      "visible": true,
      "order": 2,
      "pricing": {
        "monthly": 1000,
        "annual": 9600,
        "currency": "USD"
      },
      "limits": {
        "users": 1,
        "apiCalls": 1000,
        "savedComparisons": 50
      },
      "features": [
        "cloud_provider_comparisons",
        "region_comparisons",
        "sku_comparisons",
        "cloud_leaderboards",
        "workload_comparisons",
        "benchmark_comparisons",
        "saved_comparisons",
        "excel_export",
        "sku_equivalence"
      ],
      "marketplaces": [
        {
          "marketplaceId": "azure",
          "listingUrl": "https://azuremarketplace.microsoft.com/marketplace/apps/nuvoxel.hydrogen-pro"
        }
      ],
      "cta": {
        "label": "Subscribe to Pro",
        "url": "https://hydrogen.nuvoxel.com/sign-up?plan=pro",
        "variant": "outline"
      }
    },
    {
      "id": "max",
      "name": "Max",
      "badge": "MOST POPULAR",
      "description": "Complete cloud intelligence suite",
      "visible": true,
      "order": 3,
      "pricing": {
        "monthly": 3000,
        "annual": 28800,
        "currency": "USD"
      },
      "limits": {
        "users": 1,
        "apiCalls": 10000,
        "savedComparisons": -1
      },
      "features": [
        "cloud_provider_comparisons",
        "region_comparisons",
        "sku_comparisons",
        "cloud_leaderboards",
        "workload_comparisons",
        "benchmark_comparisons",
        "saved_comparisons",
        "excel_export",
        "sku_equivalence",
        "multi_currency",
        "spot_analysis",
        "api_access",
        "arm_bicep_pricing",
        "variable_cost",
        "support_license_costs"
      ],
      "marketplaces": [
        {
          "marketplaceId": "azure",
          "listingUrl": "https://azuremarketplace.microsoft.com/marketplace/apps/nuvoxel.hydrogen-max"
        }
      ],
      "cta": {
        "label": "Start Free Trial",
        "url": "https://hydrogen.nuvoxel.com/sign-up?plan=max",
        "variant": "default"
      },
      "trial": {
        "days": 7,
        "requiresCard": false
      }
    },
    {
      "id": "enterprise",
      "name": "Enterprise",
      "description": "Team collaboration & enterprise features",
      "visible": true,
      "order": 4,
      "pricing": {
        "monthly": 25000,
        "annual": 240000,
        "currency": "USD",
        "perUser": 3000
      },
      "limits": {
        "users": 5,
        "apiCalls": -1,
        "savedComparisons": -1
      },
      "features": [
        "cloud_provider_comparisons",
        "region_comparisons",
        "sku_comparisons",
        "cloud_leaderboards",
        "workload_comparisons",
        "benchmark_comparisons",
        "saved_comparisons",
        "excel_export",
        "sku_equivalence",
        "multi_currency",
        "spot_analysis",
        "api_access",
        "arm_bicep_pricing",
        "variable_cost",
        "support_license_costs",
        "organization_management",
        "role_based_access",
        "audit_logs",
        "flexible_storage",
        "priority_support"
      ],
      "marketplaces": [
        {
          "marketplaceId": "azure",
          "listingUrl": "https://azuremarketplace.microsoft.com/marketplace/apps/nuvoxel.hydrogen-enterprise"
        },
        {
          "marketplaceId": "aws",
          "comingSoon": true
        }
      ],
      "cta": {
        "label": "Contact Sales",
        "url": "https://nuvoxel.com/company/contact",
        "variant": "primary"
      }
    }
  ],
  "marketplaces": [
    {
      "id": "azure",
      "name": "Azure Marketplace",
      "availablePlans": ["pro", "max", "enterprise"],
      "listingUrl": "https://azuremarketplace.microsoft.com/marketplace/apps/nuvoxel.hydrogen",
      "status": "available"
    },
    {
      "id": "aws",
      "name": "AWS Marketplace",
      "availablePlans": ["enterprise"],
      "status": "coming_soon"
    },
    {
      "id": "gcp",
      "name": "Google Cloud Marketplace",
      "availablePlans": [],
      "status": "coming_soon"
    }
  ],
  "features": [
    {
      "id": "cloud_provider_comparisons",
      "name": "Cloud Provider Comparisons",
      "category": "core"
    },
    {
      "id": "region_comparisons",
      "name": "Region Comparisons",
      "category": "core"
    },
    {
      "id": "sku_comparisons",
      "name": "Specific SKU Comparisons",
      "category": "core"
    },
    {
      "id": "cloud_leaderboards",
      "name": "Cloud Leaderboards",
      "category": "core"
    },
    {
      "id": "workload_comparisons",
      "name": "Workload Based Comparisons",
      "category": "advanced"
    },
    {
      "id": "benchmark_comparisons",
      "name": "Benchmark Informed Comparisons",
      "category": "advanced"
    },
    {
      "id": "saved_comparisons",
      "name": "Saved Comparisons",
      "category": "advanced"
    },
    {
      "id": "excel_export",
      "name": "Excel Export",
      "category": "advanced"
    },
    {
      "id": "sku_equivalence",
      "name": "SKU Equivalence Calculation",
      "category": "advanced"
    },
    {
      "id": "multi_currency",
      "name": "Multi-Currency Conversion",
      "category": "advanced"
    },
    {
      "id": "spot_analysis",
      "name": "Spot Instance Analysis",
      "category": "advanced"
    },
    {
      "id": "api_access",
      "name": "API Access",
      "category": "advanced"
    },
    {
      "id": "arm_bicep_pricing",
      "name": "ARM/Bicep Template Pricing",
      "category": "advanced"
    },
    {
      "id": "variable_cost",
      "name": "Variable Cost Comparison",
      "category": "advanced"
    },
    {
      "id": "support_license_costs",
      "name": "Support & License Costs",
      "category": "advanced"
    },
    {
      "id": "organization_management",
      "name": "Organization Management",
      "category": "enterprise"
    },
    {
      "id": "role_based_access",
      "name": "Role-Based Access Control",
      "category": "enterprise"
    },
    {
      "id": "audit_logs",
      "name": "Audit Logs & Compliance",
      "category": "enterprise"
    },
    {
      "id": "flexible_storage",
      "name": "Flexible Storage Options",
      "category": "enterprise"
    },
    {
      "id": "priority_support",
      "name": "Priority Support",
      "category": "enterprise"
    }
  ]
}
```

## CORS Configuration
The endpoint should allow CORS requests from:
- `https://nuvoxel.com`
- `https://www.nuvoxel.com`
- `http://localhost:3000` (development)
- `http://localhost:3001` (development)

## Caching
- Response should include cache headers:
  - `Cache-Control: public, max-age=300` (5 minutes)
  - `ETag` for conditional requests

## Error Responses
```json
{
  "error": {
    "code": "PRICING_UNAVAILABLE",
    "message": "Unable to fetch pricing information",
    "timestamp": "2025-01-20T12:00:00Z"
  }
}
```

## Implementation Notes

### Hydrogen Backend
1. Create `/api/public/pricing` endpoint
2. No authentication required (public endpoint)
3. Pull data from:
   - Clerk pricing plans configuration
   - Azure Marketplace API for availability status
   - Internal feature flags/configuration
4. **Dynamic Plan Management:**
   - Plans stored in database or configuration file
   - Add/remove plans without code changes
   - Toggle visibility with `visible` flag
   - Reorder with `order` field
   - Support seasonal/promotional plans
   - Enable gradual rollout with preview flag

### Corporate Frontend
1. Create `usePricing()` hook to fetch and cache data
2. Handle loading and error states
3. Format prices (cents to dollars)
4. Support locale-specific formatting
5. **Dynamic Rendering:**
   - Render plans based on API response
   - No hardcoded plan IDs
   - Responsive grid layout adjusts to plan count
   - Handle 1-6+ plans gracefully

### Security Considerations
- Rate limit: 100 requests per minute per IP
- No sensitive data exposed
- Version endpoint to support future changes

## Future Enhancements
- Localized pricing (EUR, GBP, etc.)
- A/B testing support (return multiple variants)
- Promotional pricing/discounts
- Partner/reseller pricing tiers
- Usage-based pricing details