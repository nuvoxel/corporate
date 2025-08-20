/** @type {import('next').NextConfig} */
const nextConfig = {
  // Use static export for Azure Static Web Apps
  output: 'export',
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