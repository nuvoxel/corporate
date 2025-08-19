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
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">What Are Cookies</h2>
          <p className="mb-4">
            Cookies are small text files that are placed on your computer or mobile device when you visit our website. 
            They help us provide you with a better experience by remembering your preferences and understanding how you use our service.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">How We Use Cookies</h2>
          <p className="mb-4">We use cookies for the following purposes:</p>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">Essential Cookies</h3>
          <p className="mb-4">
            These cookies are necessary for the website to function properly. They enable basic functions like page navigation 
            and access to secure areas of the website.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">Analytics Cookies</h3>
          <p className="mb-4">
            We use analytics cookies to understand how visitors interact with our website. This helps us improve our service 
            and provide better user experience.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">Functionality Cookies</h3>
          <p className="mb-4">
            These cookies allow the website to remember choices you make (such as your user name, language, or theme preference) 
            and provide enhanced, more personal features.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Third-Party Cookies</h2>
          <p className="mb-4">
            We may use third-party services that also set cookies. These include:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Authentication services (Clerk)</li>
            <li>Analytics services (Application Insights)</li>
            <li>Payment processors (when applicable)</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Managing Cookies</h2>
          <p className="mb-4">
            Most web browsers allow you to control cookies through their settings preferences. However, limiting cookies 
            may impact your experience of our site. You can:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Delete all cookies from your browser</li>
            <li>Block all cookies from being set</li>
            <li>Allow only first-party cookies</li>
            <li>Block cookies from specific websites</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Updates to This Policy</h2>
          <p className="mb-4">
            We may update this Cookie Policy from time to time. We will notify you of any changes by posting the new 
            Cookie Policy on this page and updating the &quot;Last updated&quot; date.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Us</h2>
          <p className="mb-4">
            If you have any questions about our use of cookies, please contact us at:
            <br />
            Email: privacy@nuvoxel.com
          </p>
        </div>
      </div>
    </div>
  )
}