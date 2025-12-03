import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <Link href="/" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>

        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>

        <div className="prose prose-gray dark:prose-invert max-w-none">
          <p className="text-muted-foreground mb-6">
            Last updated: December 2, 2025
          </p>

          <p className="mb-4">
            These Terms of Service (&quot;Terms&quot;) govern your access to and use of the Hydrogen Cloud Intelligence platform
            and related services (collectively, the &quot;Service&quot;) operated by NuVoxel LLC (&quot;NuVoxel,&quot; &quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;).
            By accessing or using the Service, you agree to be bound by these Terms.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">1. Acceptance of Terms</h2>
          <p className="mb-4">
            By creating an account, accessing, or using the Service, you accept and agree to be bound by these Terms and our{' '}
            <Link href="/legal/privacy" className="text-primary hover:underline">Privacy Policy</Link>. If you are entering
            into these Terms on behalf of an organization, you represent that you have the authority to bind that organization.
          </p>
          <p className="mb-4">
            If you do not agree to all Terms, do not use the Service.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">2. Description of Service</h2>
          <p className="mb-4">
            Hydrogen is a cloud intelligence platform that provides analytics, cost optimization, security insights,
            and performance benchmarking across cloud providers including Microsoft Azure, Amazon Web Services (AWS),
            Google Cloud Platform (GCP), and Microsoft 365.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">3. Eligibility</h2>
          <p className="mb-4">
            You must be at least 18 years old and legally capable of entering into a binding agreement to use the Service.
            The Service is intended for business use only.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">4. User Accounts</h2>
          <p className="mb-4">
            When you create an account with us, you must provide accurate, complete, and current information.
            You are responsible for:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Maintaining the security of your account credentials</li>
            <li>All activities that occur under your account</li>
            <li>Notifying us immediately of any unauthorized access</li>
            <li>Ensuring authorized users comply with these Terms</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">5. License and Permitted Use</h2>
          <p className="mb-4">
            Subject to these Terms, NuVoxel grants you a limited, non-exclusive, non-transferable, revocable license
            to access and use the Service solely for your internal business purposes.
          </p>
          <p className="mb-4">You may not:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Reverse engineer, decompile, or create derivative works of the Service</li>
            <li>Access the Service for competitive analysis or benchmarking</li>
            <li>Interfere with service performance or circumvent security features</li>
            <li>Use the Service to process unlawful data or violate third-party rights</li>
            <li>Resell, sublicense, or distribute the Service without written agreement</li>
            <li>Use automated means to access the Service without authorization</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">6. Your Data</h2>
          <p className="mb-4">
            You retain ownership of all data you submit to the Service (&quot;Customer Data&quot;). You grant NuVoxel a limited
            license to process Customer Data solely for providing and improving the Service.
          </p>
          <p className="mb-4">
            You are responsible for ensuring that your Customer Data and use of the Service complies with applicable
            laws and does not infringe third-party rights.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">7. Third-Party Integrations and Service Providers</h2>
          <p className="mb-4">
            The Service integrates with and relies on third-party platforms and service providers, including:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li><strong>Cloud Providers:</strong> Microsoft Azure, Amazon Web Services (AWS), Google Cloud Platform (GCP), Microsoft 365</li>
            <li><strong>Payment Processing:</strong> Stripe</li>
            <li><strong>Infrastructure:</strong> Azure, AWS, GCP hosting services</li>
            <li><strong>Email:</strong> Resend</li>
            <li><strong>E-commerce:</strong> Shopify (for marketplace transactions)</li>
          </ul>
          <p className="mb-4">
            You authorize NuVoxel to access credentials, APIs, and data necessary to deliver the Service. You are responsible
            for complying with third-party terms and licensing requirements. NuVoxel is not liable for outages, delays, or
            limitations caused by third-party platforms.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">8. Fees and Payment</h2>
          <p className="mb-4">
            Fees are set forth in your subscription or order. Payment is processed securely through Stripe.
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>All payments are non-refundable unless expressly stated otherwise</li>
            <li>NuVoxel may suspend or terminate access for non-payment</li>
            <li>You are responsible for applicable taxes unless legally exempt</li>
            <li>NuVoxel may change pricing with 30 days&apos; notice</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">9. Intellectual Property</h2>
          <p className="mb-4">
            The Service and its original content, features, and functionality are and will remain the exclusive property
            of NuVoxel LLC. This includes all software, designs, data models, AI systems, algorithms, branding, trademarks,
            and documentation. Except as expressly provided, no rights or licenses are granted by implication.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">10. Privacy</h2>
          <p className="mb-4">
            Your use of the Service is governed by our{' '}
            <Link href="/legal/privacy" className="text-primary hover:underline">Privacy Policy</Link>, which describes
            how we collect, use, and protect your information. For enterprise customers, we offer a{' '}
            <Link href="/legal/dpa" className="text-primary hover:underline">Data Processing Agreement</Link>.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">11. Termination</h2>
          <p className="mb-4">
            We may terminate or suspend your account immediately, without prior notice, for:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Material breach of these Terms</li>
            <li>Non-payment of fees</li>
            <li>Security or compliance reasons</li>
            <li>Violation of applicable law or third-party rights</li>
          </ul>
          <p className="mb-4">
            You may terminate your account at any time. Upon termination, your license ends immediately
            and Customer Data may be deleted after a retention period.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">12. Disclaimer of Warranties</h2>
          <p className="mb-4">
            THE SERVICE IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED,
            INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE,
            NON-INFRINGEMENT, OR ACCURACY OF AI-GENERATED OUTPUT.
          </p>
          <p className="mb-4">
            We do not guarantee that the Service will be uninterrupted, error-free, or secure. Insights and recommendations
            provided by the Service are for informational purposes only and should be verified before making business decisions.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">13. Limitation of Liability</h2>
          <p className="mb-4">
            TO THE MAXIMUM EXTENT PERMITTED BY LAW:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>NuVoxel shall not be liable for indirect, incidental, consequential, punitive, or special damages</li>
            <li>NuVoxel&apos;s total aggregate liability shall not exceed the fees paid by you in the 12 months preceding the claim</li>
          </ul>
          <p className="mb-4">
            These limitations apply regardless of the form of action and even if NuVoxel was advised of the possibility of damages.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">14. Indemnification</h2>
          <p className="mb-4">
            You agree to defend, indemnify, and hold harmless NuVoxel from any claims, damages, liabilities, or costs
            arising out of your use of the Service, your Customer Data, violation of third-party rights, or breach of these Terms.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">15. Governing Law and Dispute Resolution</h2>
          <p className="mb-4">
            These Terms are governed by the laws of the State of California, without regard to conflict-of-law principles.
            Any dispute shall be resolved through binding arbitration in San Francisco, California, under the rules of
            the American Arbitration Association. You waive the right to participate in class actions or class-wide arbitration.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">16. Changes to Terms</h2>
          <p className="mb-4">
            We may modify these Terms at any time. We will notify you of material changes by posting the updated Terms
            and updating the &quot;Last updated&quot; date. Your continued use of the Service after changes constitutes acceptance.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">17. General Provisions</h2>
          <ul className="list-disc pl-6 mb-4">
            <li><strong>Entire Agreement:</strong> These Terms constitute the entire agreement between you and NuVoxel</li>
            <li><strong>Severability:</strong> If any provision is unenforceable, the remaining provisions remain in effect</li>
            <li><strong>Waiver:</strong> Failure to enforce any right does not waive future enforcement</li>
            <li><strong>Assignment:</strong> You may not assign these Terms without our consent</li>
            <li><strong>Export Compliance:</strong> You agree not to use or export the Service in violation of U.S. export laws</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">18. Contact Us</h2>
          <p className="mb-4">
            If you have any questions about these Terms, please contact us:
          </p>
          <p className="mb-4">
            <strong>NuVoxel LLC</strong>
            <br />
            Attn: Legal
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
