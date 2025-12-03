import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <Link href="/" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>

        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>

        <div className="prose prose-gray dark:prose-invert max-w-none">
          <p className="text-muted-foreground mb-6">
            Last updated: December 2, 2025
          </p>

          <p className="mb-4">
            NuVoxel LLC (&quot;NuVoxel,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is committed to protecting your privacy. This Privacy Policy
            explains how we collect, use, disclose, and safeguard your information when you use our Hydrogen Cloud Intelligence
            platform and related services (collectively, the &quot;Service&quot;).
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">1. Information We Collect</h2>

          <h3 className="text-xl font-semibold mt-6 mb-3">Information You Provide</h3>
          <p className="mb-4">
            We collect information you provide directly to us when you:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Create an account (name, email address, organization name)</li>
            <li>Connect cloud provider accounts (OAuth tokens, connection metadata)</li>
            <li>Subscribe to paid plans (billing information processed by Stripe)</li>
            <li>Contact us for support (communication content)</li>
            <li>Participate in surveys or promotions</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">Information Collected Automatically</h3>
          <p className="mb-4">
            When you use our Service, we automatically collect:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Log data (IP address, browser type, access times, pages viewed)</li>
            <li>Device information (operating system, device identifiers)</li>
            <li>Usage data (features used, actions taken within the Service)</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">Cloud Provider Data</h3>
          <p className="mb-4">
            When you connect your cloud accounts, we collect data from Microsoft Azure, Amazon Web Services (AWS),
            Google Cloud Platform (GCP), and Microsoft 365 to provide our analytics services. This may include:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Resource inventory and configuration data</li>
            <li>Cost and billing information</li>
            <li>Usage metrics and performance data</li>
            <li>Security and compliance findings</li>
            <li>User and identity information from connected directories</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">2. How We Use Your Information</h2>
          <p className="mb-4">We use the information we collect to:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Provide, maintain, and improve our Service</li>
            <li>Process transactions and manage your subscription</li>
            <li>Generate analytics, insights, and recommendations</li>
            <li>Send technical notices, security alerts, and support messages</li>
            <li>Respond to your comments, questions, and requests</li>
            <li>Detect, prevent, and address technical issues and security threats</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">3. Data Security</h2>
          <p className="mb-4">
            We implement appropriate technical and organizational security measures to protect your personal information,
            including:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Encryption of data in transit (TLS 1.2+) and at rest (AES-256)</li>
            <li>Regular security assessments and penetration testing</li>
            <li>Access controls and authentication requirements</li>
            <li>Secure cloud infrastructure with industry-standard certifications</li>
            <li>Employee security training and background checks</li>
          </ul>
          <p className="mb-4">
            While we strive to protect your information, no method of transmission over the Internet or electronic
            storage is 100% secure. We cannot guarantee absolute security.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">4. Data Sharing and Third-Party Service Providers</h2>
          <p className="mb-4">
            We do not sell, trade, or rent your personal information to third parties. We may share your information
            only in the following circumstances:
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">Service Providers (Sub-processors)</h3>
          <p className="mb-4">
            We use the following third-party service providers to operate our Service. These providers process data
            on our behalf under contractual obligations to protect your information:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li><strong>Microsoft Azure</strong> - Cloud infrastructure, hosting, and data storage (United States)</li>
            <li><strong>Amazon Web Services (AWS)</strong> - Cloud infrastructure and data processing (United States)</li>
            <li><strong>Google Cloud Platform (GCP)</strong> - Cloud infrastructure and data processing (United States)</li>
            <li><strong>Stripe</strong> - Payment processing and subscription management (United States)</li>
            <li><strong>Resend</strong> - Transactional email delivery (United States)</li>
            <li><strong>Shopify</strong> - E-commerce and marketplace transactions (United States/Canada)</li>
            <li><strong>GitHub</strong> - Source code hosting and CI/CD (United States)</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">Other Sharing</h3>
          <ul className="list-disc pl-6 mb-4">
            <li><strong>With your consent</strong> - When you explicitly authorize sharing</li>
            <li><strong>Legal compliance</strong> - To comply with applicable laws, regulations, or legal process</li>
            <li><strong>Protection of rights</strong> - To protect our rights, privacy, safety, or property</li>
            <li><strong>Business transfers</strong> - In connection with a merger, acquisition, or sale of assets</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">5. Your Rights and Choices</h2>
          <p className="mb-4">Depending on your location, you may have the following rights:</p>
          <ul className="list-disc pl-6 mb-4">
            <li><strong>Access</strong> - Request a copy of your personal information</li>
            <li><strong>Correction</strong> - Request correction of inaccurate data</li>
            <li><strong>Deletion</strong> - Request deletion of your personal information</li>
            <li><strong>Portability</strong> - Request a portable copy of your data</li>
            <li><strong>Objection</strong> - Object to certain processing activities</li>
            <li><strong>Restriction</strong> - Request restriction of processing</li>
            <li><strong>Withdraw consent</strong> - Withdraw consent where processing is based on consent</li>
          </ul>
          <p className="mb-4">
            To exercise these rights, please contact us at legal@nuvoxel.com. We will respond within 45 days
            (or sooner where required by law).
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">6. California Privacy Rights (CCPA)</h2>
          <p className="mb-4">
            If you are a California resident, you have additional rights under the California Consumer Privacy Act:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li><strong>Right to Know</strong> - What personal information we collect, use, and disclose</li>
            <li><strong>Right to Delete</strong> - Request deletion of your personal information</li>
            <li><strong>Right to Opt-Out</strong> - Opt out of the sale of personal information</li>
            <li><strong>Right to Non-Discrimination</strong> - Equal service regardless of exercising privacy rights</li>
          </ul>
          <p className="mb-4">
            <strong>We do not sell your personal information.</strong> For more information, see our{' '}
            <Link href="/legal/do-not-sell" className="text-primary hover:underline">
              Do Not Sell My Personal Information
            </Link>{' '}
            page.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">7. International Data Transfers</h2>
          <p className="mb-4">
            Your information may be transferred to and processed in countries other than your country of residence,
            including the United States. We ensure appropriate safeguards are in place for such transfers, including
            Standard Contractual Clauses where required.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">8. Data Retention</h2>
          <p className="mb-4">
            We retain your personal information for as long as necessary to provide our Service and fulfill the
            purposes described in this Privacy Policy. When you delete your account:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Account data is deleted within 30 days</li>
            <li>Cloud analytics data is deleted within 90 days</li>
            <li>Backup copies are purged within 180 days</li>
            <li>Some data may be retained longer for legal or compliance purposes</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">9. Cookies</h2>
          <p className="mb-4">
            We use only essential cookies required for authentication. We do not use tracking or advertising cookies.
            For more information, see our{' '}
            <Link href="/legal/cookies" className="text-primary hover:underline">
              Cookie Policy
            </Link>
            .
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">10. Children&apos;s Privacy</h2>
          <p className="mb-4">
            Our Service is not directed to individuals under 18 years of age. We do not knowingly collect personal
            information from children. If you become aware that a child has provided us with personal information,
            please contact us immediately.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">11. Updates to This Policy</h2>
          <p className="mb-4">
            We may update this Privacy Policy from time to time. We will notify you of material changes by posting
            the new Privacy Policy on this page and updating the &quot;Last updated&quot; date. For significant changes,
            we may also notify you by email.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">12. Contact Us</h2>
          <p className="mb-4">
            If you have any questions about this Privacy Policy or our data practices, please contact us:
          </p>
          <p className="mb-4">
            <strong>NuVoxel LLC</strong>
            <br />
            702 via Hermosa
            <br />
            Danville, CA 94526 USA
            <br />
            <br />
            Email: legal@nuvoxel.com
          </p>
        </div>
      </div>
    </div>
  )
}
