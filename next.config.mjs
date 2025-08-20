/** @type {import('next').NextConfig} */
const nextConfig = {
  // Use standalone output for server deployment
  output: 'standalone',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  // Enable experimental features for better performance
  experimental: {
    optimizePackageImports: ['lucide-react', '@radix-ui/react-icons']
  },
  // Redirects for alternate domain routes
  async redirects() {
    return [
      {
        source: '/ripoff',
        destination: '/marketing/ripoff',
        permanent: true,
      },
      {
        source: '/resale',
        destination: '/marketing/resale',
        permanent: true,
      },
      {
        source: '/tags',
        destination: '/marketing/tags',
        permanent: true,
      },
      {
        source: '/poc',
        destination: '/marketing/poc',
        permanent: true,
      },
    ]
  }
}

export default nextConfig