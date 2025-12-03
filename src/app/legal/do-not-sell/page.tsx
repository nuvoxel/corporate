import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function DoNotSellPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <Link href="/" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>

        <h1 className="text-4xl font-bold mb-8">Do Not Sell My Personal Information</h1>

        <div className="prose prose-gray dark:prose-invert max-w-none">
          <p className="text-muted-foreground mb-6">
            Last updated: December 2, 2025
          </p>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Your Privacy Rights</CardTitle>
              <CardDescription>
                California Consumer Privacy Act (CCPA) and other privacy regulations give you the right to opt out of the sale of your personal information.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                <strong>Important:</strong> NuVoxel LLC does not sell, rent, or trade your personal information to third parties
                for monetary or other valuable consideration. We respect your privacy and are committed to protecting your data.
              </p>
            </CardContent>
          </Card>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Information We Collect</h2>
          <p className="mb-4">
            We collect information that you provide to us directly, such as when you create an account or use our services.
            This information is used solely to provide and improve our services. For full details, see our{' '}
            <Link href="/legal/privacy" className="text-primary hover:underline">Privacy Policy</Link>.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">How We Use Your Information</h2>
          <p className="mb-4">Your information is used for:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Providing the Hydrogen Cloud Intelligence platform and related services</li>
            <li>Processing payments through our payment processor (Stripe)</li>
            <li>Sending transactional emails (via Resend)</li>
            <li>Improving and personalizing your experience</li>
            <li>Communicating with you about our services</li>
            <li>Complying with legal obligations</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Your California Privacy Rights</h2>
          <p className="mb-4">Under the CCPA, California residents have the right to:</p>
          <ul className="list-disc pl-6 mb-4">
            <li><strong>Right to Know</strong> - Request disclosure of what personal information we collect, use, and disclose</li>
            <li><strong>Right to Access</strong> - Request a copy of your personal information</li>
            <li><strong>Right to Delete</strong> - Request deletion of your personal information</li>
            <li><strong>Right to Opt-Out</strong> - Opt out of the sale of personal information (we do not sell your data)</li>
            <li><strong>Right to Non-Discrimination</strong> - Equal service and pricing regardless of exercising privacy rights</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Categories of Personal Information</h2>
          <p className="mb-4">In the past 12 months, we may have collected:</p>
          <ul className="list-disc pl-6 mb-4">
            <li><strong>Identifiers</strong> - Name, email address, account credentials</li>
            <li><strong>Commercial Information</strong> - Subscription and payment history</li>
            <li><strong>Internet Activity</strong> - Usage data, feature interactions, log data</li>
            <li><strong>Professional Information</strong> - Organization name, job title (if provided)</li>
          </ul>
          <p className="mb-4">
            <strong>We have not sold any personal information in the past 12 months.</strong>
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Submit a Privacy Request</h2>
          <p className="mb-4">
            To exercise your privacy rights, you can submit a request through any of the following methods:
          </p>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <p><strong>Email:</strong> legal@nuvoxel.com</p>
                <p><strong>Subject Line:</strong> California Privacy Rights Request</p>
              </div>
              <div className="space-y-2">
                <p><strong>Mail:</strong></p>
                <p>
                  NuVoxel LLC<br />
                  Attn: Privacy<br />
                  702 via Hermosa<br />
                  Danville, CA 94526 USA
                </p>
              </div>
              <p className="text-sm text-muted-foreground">
                Please include your name, email address associated with your account, and a description of your request.
              </p>
              <Button asChild className="w-full sm:w-auto">
                <a href="mailto:legal@nuvoxel.com?subject=California Privacy Rights Request">
                  Send Privacy Request
                </a>
              </Button>
            </CardContent>
          </Card>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Verification Process</h2>
          <p className="mb-4">
            To protect your privacy and security, we will verify your identity before processing your request.
            We may ask you to:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Confirm the email address associated with your account</li>
            <li>Provide additional information to verify your identity</li>
            <li>Confirm your request through a verification email</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Response Time</h2>
          <p className="mb-4">
            We will acknowledge receipt of your request within 10 business days and will respond to your request
            within 45 days. If we need more time (up to an additional 45 days), we will inform you of the reason
            and extension period in writing.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Authorized Agents</h2>
          <p className="mb-4">
            You may designate an authorized agent to submit a request on your behalf. We will require:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Written authorization signed by you</li>
            <li>Verification of the agent&apos;s identity</li>
            <li>Direct confirmation from you (unless agent has power of attorney)</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">More Information</h2>
          <p className="mb-4">
            For more information about our privacy practices, please review:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>
              <Link href="/legal/privacy" className="text-primary hover:underline">Privacy Policy</Link>
              {' '}- Full details on data collection and use
            </li>
            <li>
              <Link href="/legal/cookies" className="text-primary hover:underline">Cookie Policy</Link>
              {' '}- Information about cookies (we use essential cookies only)
            </li>
            <li>
              <Link href="/legal/terms" className="text-primary hover:underline">Terms of Service</Link>
              {' '}- Terms governing use of our service
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
