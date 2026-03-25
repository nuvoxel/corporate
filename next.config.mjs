/** @type {import('next').NextConfig} */
const nextConfig = {
  // Use standalone for containerized deployment on Kubernetes
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
}

export default nextConfig
