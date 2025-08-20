/** @type {import('next').NextConfig} */
const nextConfig = {
  // Azure Static Web Apps supports hybrid Next.js apps with standalone output
  output: 'standalone',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  // Enable experimental features for better performance
  experimental: {
    optimizePackageImports: ['lucide-react', '@radix-ui/react-icons']
  }
}

export default nextConfig