import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function SignupTermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <Link href="/" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>

        <h1 className="text-4xl font-bold mb-8">Signup Terms</h1>

        <div className="prose prose-gray dark:prose-invert max-w-none">
          <p className="text-muted-foreground mb-6">
            Last updated: December 2, 2025
          </p>

          <div className="bg-muted/50 border rounded-lg p-6 mb-8">
            <p className="text-lg font-medium mb-2">Quick Summary</p>
            <p className="text-muted-foreground">
              By creating an account, you agree to our Terms of Service and Privacy Policy.
              We collect your information to provide cloud intelligence services, process payments through Stripe,
              and keep your account secure. We never sell your data.
            </p>
          </div>

          <h2 className="text-2xl font-semibold mt-8 mb-4">What You&apos;re Agreeing To</h2>
          <p className="mb-4">
            By creating a NuVoxel account or using the Hydrogen Cloud Intelligence platform, you agree to:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>
              Our full{' '}
              <Link href="/legal/terms" className="text-primary hover:underline">Terms of Service</Link>
            </li>
            <li>
              Our{' '}
              <Link href="/legal/privacy" className="text-primary hover:underline">Privacy Policy</Link>
            </li>
            <li>
              Our{' '}
              <Link href="/legal/cookies" className="text-primary hover:underline">Cookie Policy</Link>
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Key Points</h2>

          <h3 className="text-xl font-semibold mt-6 mb-3">Account Requirements</h3>
          <ul className="list-disc pl-6 mb-4">
            <li>You must be at least 18 years old</li>
            <li>You must provide accurate account information</li>
            <li>You are responsible for keeping your credentials secure</li>
            <li>Business use only - the Service is designed for organizations</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">Your Data</h3>
          <ul className="list-disc pl-6 mb-4">
            <li>You own your data - we never claim ownership</li>
            <li>We process your data only to provide the Service</li>
            <li>We use industry-standard encryption and security</li>
            <li>We never sell your personal information</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">Cloud Provider Connections</h3>
          <ul className="list-disc pl-6 mb-4">
            <li>You authorize us to access your cloud accounts (Azure, AWS, GCP) when you connect them</li>
            <li>We collect resource, cost, and usage data to provide analytics</li>
            <li>You remain responsible for your cloud provider agreements</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">Payments</h3>
          <ul className="list-disc pl-6 mb-4">
            <li>Payments are processed securely through Stripe</li>
            <li>Subscription fees are billed according to your plan</li>
            <li>All fees are non-refundable unless otherwise stated</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">Service Providers</h3>
          <p className="mb-4">
            We use trusted third-party services to operate Hydrogen:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li><strong>Microsoft Azure, AWS, GCP</strong> - Infrastructure and hosting</li>
            <li><strong>Stripe</strong> - Payment processing</li>
            <li><strong>Resend</strong> - Email delivery</li>
            <li><strong>Shopify</strong> - Marketplace transactions</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Your Rights</h2>
          <ul className="list-disc pl-6 mb-4">
            <li>Access, correct, or delete your personal information</li>
            <li>Export your data in a portable format</li>
            <li>Cancel your account at any time</li>
            <li>Opt out of marketing communications</li>
          </ul>
          <p className="mb-4">
            California residents have additional rights under CCPA. See our{' '}
            <Link href="/legal/do-not-sell" className="text-primary hover:underline">
              Do Not Sell My Personal Information
            </Link>{' '}
            page for details.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Questions?</h2>
          <p className="mb-4">
            If you have questions about these terms before signing up, please contact us:
          </p>
          <p className="mb-4">
            Email: legal@nuvoxel.com
          </p>

          <div className="border-t pt-8 mt-8">
            <h2 className="text-2xl font-semibold mb-4">Full Legal Documents</h2>
            <p className="mb-4">
              These signup terms are a summary. Please review the complete legal documents:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>
                <Link href="/legal/terms" className="text-primary hover:underline">Terms of Service</Link>
                {' '}- Full terms governing use of the Service
              </li>
              <li>
                <Link href="/legal/privacy" className="text-primary hover:underline">Privacy Policy</Link>
                {' '}- How we collect, use, and protect your information
              </li>
              <li>
                <Link href="/legal/dpa" className="text-primary hover:underline">Data Processing Agreement</Link>
                {' '}- For enterprise customers with data protection requirements
              </li>
              <li>
                <Link href="/legal/cookies" className="text-primary hover:underline">Cookie Policy</Link>
                {' '}- Our use of cookies (essential only)
              </li>
              <li>
                <Link href="/legal/do-not-sell" className="text-primary hover:underline">Do Not Sell My Personal Information</Link>
                {' '}- California privacy rights
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
