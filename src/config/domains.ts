/**
 * Domain configuration system for Hydrogen app
 * Defines behaviors for different domains and paths
 */

export interface DomainConfig {
  // Domain pattern (can include wildcards)
  pattern: string | RegExp;
  // Path pattern (optional, for path-based routing)
  pathPattern?: string | RegExp;
  // Domain behavior configuration
  behavior: {
    // Type of experience to show
    type: 'authenticated' | 'public-landing' | 'redirect';
    // For redirects, specify the target
    redirectTo?: string;
    // Whether to show navigation
    showNavigation: boolean;
    // Which navigation component to use
    navigationComponent?: 'authenticated' | 'landing' | 'none';
    // Custom layout overrides
    layoutOverrides?: {
      showUserButton?: boolean;
      showOrganizationSwitcher?: boolean;
      showThemeSwitcher?: boolean;
    };
  };
  // Authentication requirements
  auth: {
    required: boolean;
    // Redirect to sign-in if not authenticated
    redirectToSignIn?: boolean;
    // Allow public access to certain paths
    publicPaths?: string[];
  };
  // Feature flags for this domain
  features?: {
    [key: string]: boolean;
  };
}

// Domain configuration registry
export const domainConfigs: DomainConfig[] = [
  // ===== PUBLIC/MARKETING PAGES =====
  {
    // Main domain root - public landing page
    pattern: /^(www\.)?nuvoxel\.com$/,
    pathPattern: /^\/$/,
    behavior: {
      type: 'public-landing',
      showNavigation: true,
      navigationComponent: 'landing',
      layoutOverrides: {
        showUserButton: true,
        showOrganizationSwitcher: false,
        showThemeSwitcher: true,
      },
    },
    auth: {
      required: false,
      redirectToSignIn: false,
    },
    features: {
      publicLanding: true,
      pricing: true,
    },
  },
  {
    // Company pages (about, pricing, contact)
    pattern: /^(www\.)?nuvoxel\.com$/,
    pathPattern: /^\/company(\/.*)?$/,
    behavior: {
      type: 'public-landing',
      showNavigation: true,
      navigationComponent: 'landing',
      layoutOverrides: {
        showUserButton: true,
        showOrganizationSwitcher: false,
        showThemeSwitcher: true,
      },
    },
    auth: {
      required: false,
      redirectToSignIn: false,
    },
    features: {
      publicLanding: true,
    },
  },
  {
    // Legal pages
    pattern: /^(www\.)?nuvoxel\.com$/,
    pathPattern: /^\/legal(\/.*)?$/,
    behavior: {
      type: 'public-landing',
      showNavigation: true,
      navigationComponent: 'landing',
      layoutOverrides: {
        showUserButton: false,
        showOrganizationSwitcher: false,
        showThemeSwitcher: true,
      },
    },
    auth: {
      required: false,
      redirectToSignIn: false,
    },
    features: {
      publicLanding: true,
    },
  },
  
  // ===== HYDROGEN APP PAGES =====
  {
    // Hydrogen app - all authenticated pages
    pattern: /^(www\.)?nuvoxel\.com$/,
    pathPattern: /^\/hydrogen(\/.*)?$/,
    behavior: {
      type: 'authenticated',
      showNavigation: true,
      navigationComponent: 'authenticated',
      layoutOverrides: {
        showUserButton: true,
        showOrganizationSwitcher: true,
        showThemeSwitcher: true,
      },
    },
    auth: {
      required: true,
      redirectToSignIn: true,
      publicPaths: [], // No public paths under /hydrogen
    },
    features: {
      dashboard: true,
      scenarios: true,
      comparisons: true,
      analytics: true,
      admin: true,
    },
  },
  
  // ===== AUTHENTICATION PAGES =====
  {
    // Sign-in and sign-up pages
    pattern: /^(www\.)?nuvoxel\.com$/,
    pathPattern: /^\/auth\/(sign-in|sign-up)(\/.*)?$/,
    behavior: {
      type: 'public-landing',
      showNavigation: false,
      navigationComponent: 'none',
    },
    auth: {
      required: false,
      redirectToSignIn: false,
    },
  },
  
  // ===== MARKETING PAGES =====
  {
    // Marketing pages (ripoff, tags, shop)
    pattern: /^(www\.)?nuvoxel\.com$/,
    pathPattern: /^\/marketing\/(ripoff|tags|shop)(\/.*)?$/,
    behavior: {
      type: 'public-landing',
      showNavigation: true,
      navigationComponent: 'landing',
      layoutOverrides: {
        showUserButton: true,
        showOrganizationSwitcher: false,
        showThemeSwitcher: true,
      },
    },
    auth: {
      required: false,
      redirectToSignIn: false,
    },
    features: {
      publicLanding: true,
    },
  },
  
  // ===== LOCALHOST DEVELOPMENT =====
  {
    // Development localhost root
    pattern: /^localhost(:\d+)?$/,
    pathPattern: /^\/$/,
    behavior: {
      type: 'public-landing',
      showNavigation: true,
      navigationComponent: 'landing',
      layoutOverrides: {
        showUserButton: true,
        showOrganizationSwitcher: false,
        showThemeSwitcher: true,
      },
    },
    auth: {
      required: false,
      redirectToSignIn: false,
    },
    features: {
      publicLanding: true,
      pricing: true,
    },
  },
  {
    // Development - Company pages
    pattern: /^localhost(:\d+)?$/,
    pathPattern: /^\/company(\/.*)?$/,
    behavior: {
      type: 'public-landing',
      showNavigation: true,
      navigationComponent: 'landing',
    },
    auth: {
      required: false,
      redirectToSignIn: false,
    },
  },
  {
    // Development - Legal pages
    pattern: /^localhost(:\d+)?$/,
    pathPattern: /^\/legal(\/.*)?$/,
    behavior: {
      type: 'public-landing',
      showNavigation: true,
      navigationComponent: 'landing',
    },
    auth: {
      required: false,
      redirectToSignIn: false,
    },
  },
  {
    // Development - Hydrogen app
    pattern: /^localhost(:\d+)?$/,
    pathPattern: /^\/hydrogen(\/.*)?$/,
    behavior: {
      type: 'authenticated',
      showNavigation: true,
      navigationComponent: 'authenticated',
      layoutOverrides: {
        showUserButton: true,
        showOrganizationSwitcher: true,
        showThemeSwitcher: true,
      },
    },
    auth: {
      required: true, // Require auth for Hydrogen app
      redirectToSignIn: true,
      publicPaths: [],
    },
    features: {
      dashboard: true,
      scenarios: true,
      comparisons: true,
      analytics: true,
      admin: true,
    },
  },
  {
    // Development - Auth pages
    pattern: /^localhost(:\d+)?$/,
    pathPattern: /^\/auth\/(sign-in|sign-up)(\/.*)?$/,
    behavior: {
      type: 'public-landing',
      showNavigation: false,
      navigationComponent: 'none',
    },
    auth: {
      required: false,
      redirectToSignIn: false,
    },
  },
  {
    // Development - Marketing pages
    pattern: /^localhost(:\d+)?$/,
    pathPattern: /^\/marketing\/(ripoff|tags|shop)(\/.*)?$/,
    behavior: {
      type: 'public-landing',
      showNavigation: true,
      navigationComponent: 'landing',
    },
    auth: {
      required: false,
      redirectToSignIn: false,
    },
  },
  
  // ===== AZURE STATIC WEB APPS =====
  {
    // Azure Static Web Apps default domain
    pattern: /\.azurestaticapps\.net$/,
    behavior: {
      type: 'authenticated',
      showNavigation: true,
      navigationComponent: 'authenticated',
      layoutOverrides: {
        showUserButton: true,
        showOrganizationSwitcher: true,
        showThemeSwitcher: true,
      },
    },
    auth: {
      required: false, // Flexible for testing
      redirectToSignIn: false,
      publicPaths: ['/auth/sign-in', '/auth/sign-up', '/company', '/legal', '/marketing'],
    },
    features: {
      dashboard: true,
      scenarios: true,
      comparisons: true,
      analytics: true,
      admin: true,
      publicLanding: true,
    },
  },
];

/**
 * Get domain configuration for a given hostname and pathname
 */
export function getDomainConfig(hostname: string, pathname?: string): DomainConfig {
  for (const config of domainConfigs) {
    // Check domain pattern
    const domainMatch = typeof config.pattern === 'string' 
      ? config.pattern === hostname
      : config.pattern.test(hostname);

    if (!domainMatch) continue;

    // If path pattern exists, check it
    if (config.pathPattern && pathname) {
      const pathMatch = typeof config.pathPattern === 'string'
        ? pathname.startsWith(config.pathPattern)
        : config.pathPattern.test(pathname);
      
      if (pathMatch) return config;
    } else if (!config.pathPattern) {
      // No path pattern required, domain match is enough
      return config;
    }
  }

  // Return last config as default (catch-all)
  return domainConfigs[domainConfigs.length - 1];
}

/**
 * Check if a path is public for a given domain config
 */
export function isPublicPath(pathname: string, config: DomainConfig): boolean {
  if (!config.auth.required) return true;
  
  const publicPaths = config.auth.publicPaths || [];
  return publicPaths.some(path => {
    if (path.includes('*')) {
      // Handle wildcard paths
      const regex = new RegExp(`^${path.replace(/\*/g, '.*')}$`);
      return regex.test(pathname);
    }
    return pathname === path || pathname.startsWith(`${path}/`);
  });
}

/**
 * Get the appropriate navigation component for a domain
 */
export function getNavigationComponent(config: DomainConfig): 'authenticated' | 'landing' | 'none' {
  return config.behavior.navigationComponent || 'authenticated';
}

/**
 * Check if a feature is enabled for a domain
 */
export function isFeatureEnabled(feature: string, config: DomainConfig): boolean {
  return config.features?.[feature] ?? false;
}