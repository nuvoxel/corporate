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
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Your Privacy Rights</CardTitle>
              <CardDescription>
                In accordance with privacy regulations, you have the right to opt out of the sale of your personal information.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                <strong>Important:</strong> NuVoxel does not sell, rent, or trade your personal information to third parties 
                for monetary or other valuable consideration. We respect your privacy and are committed to protecting your data.
              </p>
            </CardContent>
          </Card>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Information We Collect</h2>
          <p className="mb-4">
            We collect information that you provide to us directly, such as when you create an account or use our services. 
            This information is used solely to provide and improve our services.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">How We Use Your Information</h2>
          <p className="mb-4">Your information is used for:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Providing our cloud comparison and intelligence services</li>
            <li>Improving and personalizing your experience</li>
            <li>Communicating with you about our services</li>
            <li>Complying with legal obligations</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Your Rights</h2>
          <p className="mb-4">You have the right to:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Know what personal information we collect</li>
            <li>Access your personal information</li>
            <li>Request deletion of your personal information</li>
            <li>Opt out of any sale of personal information (though we do not sell your data)</li>
            <li>Non-discrimination for exercising your privacy rights</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Opt-Out Request</h2>
          <p className="mb-4">
            While we do not sell your personal information, if you would like to submit an opt-out request or have any 
            questions about your privacy rights, you can contact us using the information below.
          </p>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Submit a Request</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>To exercise your privacy rights, please contact us at:</p>
              <div className="space-y-2">
                <p><strong>Email:</strong> privacy@nuvoxel.com</p>
                <p><strong>Subject Line:</strong> Privacy Rights Request</p>
              </div>
              <p className="text-sm text-muted-foreground">
                Please include your name, email address associated with your account, and a description of your request.
              </p>
              <Button asChild className="w-full sm:w-auto">
                <a href="mailto:privacy@nuvoxel.com?subject=Privacy Rights Request">
                  Send Privacy Request
                </a>
              </Button>
            </CardContent>
          </Card>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Verification Process</h2>
          <p className="mb-4">
            To protect your privacy and security, we may need to verify your identity before processing your request. 
            This may include asking you to provide additional information.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Response Time</h2>
          <p className="mb-4">
            We will acknowledge receipt of your request within 10 business days and will respond to your request 
            within 45 days. If we need more time, we will inform you of the reason and extension period in writing.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">More Information</h2>
          <p className="mb-4">
            For more information about our privacy practices, please review our{' '}
            <Link href="/privacy" className="text-primary hover:underline">
              Privacy Policy
            </Link>.
          </p>
        </div>
      </div>
    </div>
  )
}