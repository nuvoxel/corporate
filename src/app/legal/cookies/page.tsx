import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <Link href="/" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>

        <h1 className="text-4xl font-bold mb-8">Cookie Policy</h1>

        <div className="prose prose-gray dark:prose-invert max-w-none">
          <p className="text-muted-foreground mb-6">
            Last updated: December 2, 2025
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">What Are Cookies</h2>
          <p className="mb-4">
            Cookies are small text files that are placed on your computer or mobile device when you visit our website.
            They help us provide you with a better experience by remembering your preferences and enabling essential functionality.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">How We Use Cookies</h2>
          <p className="mb-4">
            We use a minimal number of cookies, primarily for essential functionality. We do not use cookies for advertising
            or third-party tracking purposes.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">Essential Cookies (Required)</h3>
          <p className="mb-4">
            These cookies are strictly necessary for the website to function and cannot be disabled. They include:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li><strong>Session Authentication Cookie</strong> - Maintains your logged-in state securely (better-auth.session_token)</li>
            <li><strong>Security Cookies</strong> - Protect against cross-site request forgery and other security threats</li>
          </ul>
          <p className="mb-4">
            Essential cookies are exempt from consent requirements under GDPR and similar regulations because they are
            necessary for the service you have requested.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">Cookies We Do NOT Use</h3>
          <p className="mb-4">
            To protect your privacy, we do not use:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Advertising or marketing cookies</li>
            <li>Third-party tracking cookies</li>
            <li>Social media tracking pixels</li>
            <li>Google Analytics or similar analytics tracking</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Session Storage</h2>
          <p className="mb-4">
            We use browser sessionStorage (not cookies) for temporary data during your session, such as:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>OAuth redirect state during cloud provider authentication</li>
            <li>Temporary UI preferences within a single session</li>
          </ul>
          <p className="mb-4">
            Session storage is automatically cleared when you close your browser tab and is not shared with any third parties.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Third-Party Service Providers</h2>
          <p className="mb-4">
            Our service integrates with third-party providers that may set their own cookies when you interact with their services
            (for example, during payment processing). These providers include:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li><strong>Stripe</strong> - Payment processing (sets cookies for fraud prevention and payment security)</li>
            <li><strong>Microsoft Azure</strong> - Cloud infrastructure and OAuth authentication</li>
          </ul>
          <p className="mb-4">
            These third-party cookies are governed by their respective privacy policies. We do not control these cookies.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Managing Cookies</h2>
          <p className="mb-4">
            Most web browsers allow you to control cookies through their settings. However, because we only use essential
            authentication cookies, disabling cookies will prevent you from logging into the Service.
          </p>
          <p className="mb-4">
            You can manage cookies in your browser by:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Viewing and deleting cookies in your browser settings</li>
            <li>Blocking third-party cookies while allowing first-party cookies</li>
            <li>Using private/incognito browsing mode</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Updates to This Policy</h2>
          <p className="mb-4">
            We may update this Cookie Policy from time to time. We will notify you of any material changes by posting
            the new Cookie Policy on this page and updating the &quot;Last updated&quot; date.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Us</h2>
          <p className="mb-4">
            If you have any questions about our use of cookies, please contact us at:
            <br />
            Email: legal@nuvoxel.com
          </p>
        </div>
      </div>
    </div>
  )
}
