import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowLeft, Mail, MessageSquare, Calendar } from 'lucide-react'
import Link from 'next/link'

export default function ContactSalesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50 dark:from-slate-950 dark:via-blue-950 dark:to-slate-950">
      <div className="container mx-auto px-4 py-20">
        {/* Back button */}
        <Link href="/" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>

        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              Contact Sales
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready to learn more about how Hydrogen can help you make smarter cloud decisions? Our team is here to help.
            </p>
          </div>

          {/* Contact Options */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Email Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Send us your questions and we&apos;ll respond within 24 hours</p>
                <a href="mailto:sales@nuvoxel.com" className="text-primary hover:underline">
                  sales@nuvoxel.com
                </a>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <MessageSquare className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Live Chat</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Chat with our team for immediate assistance</p>
                <Button variant="outline" className="w-full" disabled>
                  Coming Soon
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Schedule Demo</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Book a personalized demo with our product experts</p>
                <Button variant="outline" className="w-full" disabled>
                  Coming Soon
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Enterprise Section */}
          <Card className="bg-gradient-to-br from-primary to-blue-600 text-white">
            <CardHeader>
              <CardTitle className="text-2xl text-white">Enterprise Solutions</CardTitle>
              <CardDescription className="text-white/90">
                Looking for custom pricing, dedicated support, or specific compliance requirements?
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-6 text-white/90">
                Our enterprise team can help you design a solution that meets your organization&apos;s unique needs. 
                We offer flexible deployment options, custom integrations, and dedicated support.
              </p>
              <div className="space-y-2 text-white/90">
                <p>✓ Custom pricing for large deployments</p>
                <p>✓ Dedicated account management</p>
                <p>✓ Priority support and SLAs</p>
                <p>✓ Custom integrations and APIs</p>
                <p>✓ Compliance and security reviews</p>
              </div>
            </CardContent>
          </Card>

          {/* CTA Section */}
          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              Not ready to talk to sales? Start exploring on your own.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild>
                <Link href="https://hydrogen.nuvoxel.com">
                  Explore Hydrogen
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/company/pricing">
                  View Pricing
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}