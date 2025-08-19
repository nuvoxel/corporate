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
    optimizePackageImports: ['@clerk/nextjs']
  },
  // Exclude native Node.js modules from client-side bundling
  webpack: (config, { isServer, webpack }) => {
    if (!isServer) {
      // Exclude server-only modules from client bundle
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
        crypto: false,
        path: false,
        os: false,
        stream: false,
        util: false,
        url: false,
        querystring: false,
        buffer: false,
        events: false,
        child_process: false,
      }
      
      // Externalize native modules and their dependencies
      config.externals = [
        ...(config.externals || []),
        'duckdb',
        'duckdb-async',
        'better-sqlite3',
        '@mapbox/node-pre-gyp',
        'node-pre-gyp',
        'node-gyp',
        'sharp',
        'aws-sdk',
        'mock-aws-s3',
        'nock',
        {
          'duckdb': 'commonjs duckdb',
          'duckdb-async': 'commonjs duckdb-async',
          '@azure/identity': 'commonjs @azure/identity'
        }
      ]
    }
    
    // Ignore problematic files in node modules
    config.module.rules.push(
      {
        test: /\.html$/,
        use: 'ignore-loader'
      },
      {
        test: /\.cs$/,
        use: 'ignore-loader'
      },
      {
        test: /node_modules\/(@mapbox\/node-pre-gyp|node-gyp)/,
        use: 'ignore-loader'
      }
    )
    
    // Ignore specific paths that cause issues
    config.plugins.push(
      new webpack.IgnorePlugin({
        resourceRegExp: /^(mock-aws-s3|aws-sdk|nock)$/
      })
    )
    
    return config
  }
}

export default nextConfig