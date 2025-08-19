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
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">1. Acceptance of Terms</h2>
          <p className="mb-4">
            By accessing and using the Hydrogen platform (&quot;Service&quot;) operated by NuVoxel LLC (&quot;Company&quot;, &quot;we&quot;, &quot;us&quot;), 
            you accept and agree to be bound by the terms and provision of this agreement.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">2. Use of Service</h2>
          <p className="mb-4">
            Our Service allows you to compare cloud service pricing and performance benchmarks. You may use our Service 
            for lawful purposes only and in accordance with these Terms.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">3. User Accounts</h2>
          <p className="mb-4">
            When you create an account with us, you must provide information that is accurate, complete, and current at all times. 
            You are responsible for safeguarding the password and for all activities that occur under your account.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">4. Privacy</h2>
          <p className="mb-4">
            Your use of our Service is also governed by our Privacy Policy. Please review our Privacy Policy, 
            which also governs the Site and informs users of our data collection practices.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">5. Intellectual Property</h2>
          <p className="mb-4">
            The Service and its original content, features, and functionality are and will remain the exclusive property 
            of NuVoxel LLC and its licensors. The Service is protected by copyright, trademark, and other laws.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">6. Termination</h2>
          <p className="mb-4">
            We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, 
            including without limitation if you breach the Terms.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">7. Disclaimer</h2>
          <p className="mb-4">
            The information on this Service is provided &quot;as is&quot; without any representations or warranties, express or implied. 
            We make no representations or warranties in relation to the information on this Service.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">8. Contact Us</h2>
          <p className="mb-4">
            If you have any questions about these Terms, please contact us at:
            <br />
            Email: legal@nuvoxel.com
          </p>
        </div>
      </div>
    </div>
  )
}