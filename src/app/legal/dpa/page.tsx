import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function DPAPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <Link href="/" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>

        <h1 className="text-4xl font-bold mb-8">Data Processing Agreement</h1>

        <div className="prose prose-gray dark:prose-invert max-w-none">
          <p className="text-muted-foreground mb-6">
            Last updated: December 2, 2025
          </p>

          <p className="mb-4">
            This Data Processing Agreement (&quot;DPA&quot;) forms part of the agreement between NuVoxel LLC (&quot;NuVoxel,&quot; &quot;Processor,&quot; &quot;we,&quot; or &quot;us&quot;)
            and you (&quot;Controller,&quot; &quot;Customer,&quot; or &quot;you&quot;) for the provision of the Hydrogen Cloud Intelligence platform and related services.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">1. Definitions</h2>
          <ul className="list-disc pl-6 mb-4">
            <li><strong>&quot;Data Controller&quot;</strong> means the entity that determines the purposes and means of processing Personal Data (you, the Customer)</li>
            <li><strong>&quot;Data Processor&quot;</strong> means NuVoxel LLC, processing Personal Data on behalf of the Data Controller</li>
            <li><strong>&quot;Personal Data&quot;</strong> means any information relating to an identified or identifiable natural person</li>
            <li><strong>&quot;Processing&quot;</strong> means any operation performed on Personal Data, including collection, storage, use, disclosure, or deletion</li>
            <li><strong>&quot;Sub-processor&quot;</strong> means any third party engaged by NuVoxel to process Personal Data on behalf of the Controller</li>
            <li><strong>&quot;Data Protection Laws&quot;</strong> means GDPR, CCPA, and other applicable privacy regulations</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">2. Scope and Purpose</h2>
          <p className="mb-4">
            This DPA applies to the processing of Personal Data by NuVoxel on behalf of the Customer in connection with the Service.
            NuVoxel processes Personal Data solely to provide the Hydrogen Cloud Intelligence platform, including:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Cloud resource analytics and cost optimization</li>
            <li>Security and compliance monitoring</li>
            <li>Performance benchmarking and recommendations</li>
            <li>User account management and authentication</li>
            <li>Customer support and service delivery</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">3. Processing of Personal Data</h2>
          <p className="mb-4">
            NuVoxel shall:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Process Personal Data only on documented instructions from the Controller</li>
            <li>Ensure that persons authorized to process Personal Data are bound by confidentiality obligations</li>
            <li>Not transfer Personal Data outside the agreed processing locations without appropriate safeguards</li>
            <li>Assist the Controller in responding to data subject requests</li>
            <li>Delete or return Personal Data upon termination of the Service, unless retention is required by law</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">4. Security Measures</h2>
          <p className="mb-4">
            NuVoxel implements appropriate technical and organizational measures to ensure a level of security appropriate
            to the risk, including:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li><strong>Encryption:</strong> Data encrypted in transit (TLS 1.2+) and at rest (AES-256)</li>
            <li><strong>Access Controls:</strong> Role-based access, multi-factor authentication, principle of least privilege</li>
            <li><strong>Infrastructure Security:</strong> Firewalls, intrusion detection, regular vulnerability scanning</li>
            <li><strong>Availability:</strong> Redundant systems, regular backups, disaster recovery procedures</li>
            <li><strong>Monitoring:</strong> Security event logging, anomaly detection, incident response procedures</li>
            <li><strong>Personnel:</strong> Background checks, security training, confidentiality agreements</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">5. Sub-processors</h2>
          <p className="mb-4">
            The Controller provides general authorization for NuVoxel to engage the following sub-processors.
            NuVoxel will notify the Controller of any changes to sub-processors with at least 30 days&apos; notice.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">Current Sub-processors</h3>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full border-collapse border border-gray-300 dark:border-gray-700">
              <thead>
                <tr className="bg-gray-100 dark:bg-gray-800">
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left">Sub-processor</th>
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left">Purpose</th>
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left">Location</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Microsoft Azure</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Primary cloud infrastructure, hosting, data storage</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">United States</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Amazon Web Services (AWS)</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Cloud infrastructure, data processing</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">United States</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Google Cloud Platform (GCP)</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Cloud infrastructure, data processing</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">United States</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Stripe, Inc.</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Payment processing, subscription management</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">United States</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Resend, Inc.</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Transactional email delivery</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">United States</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Shopify Inc.</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">E-commerce, marketplace transactions</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">United States / Canada</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">GitHub, Inc.</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Source code hosting, CI/CD</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">United States</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mb-4">
            All sub-processors are bound by data protection obligations no less protective than those in this DPA.
            NuVoxel remains fully liable for the acts and omissions of its sub-processors.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">6. Data Subject Rights</h2>
          <p className="mb-4">
            NuVoxel shall assist the Controller in responding to requests from data subjects to exercise their rights under
            Data Protection Laws, including:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li><strong>Right of Access:</strong> Provide copies of Personal Data upon request</li>
            <li><strong>Right to Rectification:</strong> Correct inaccurate Personal Data</li>
            <li><strong>Right to Erasure:</strong> Delete Personal Data when required</li>
            <li><strong>Right to Data Portability:</strong> Provide Personal Data in a structured, machine-readable format</li>
            <li><strong>Right to Restriction:</strong> Limit processing when requested</li>
            <li><strong>Right to Object:</strong> Cease processing upon valid objection</li>
          </ul>
          <p className="mb-4">
            NuVoxel will respond to Controller requests within 10 business days or as required by applicable law.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">7. Data Breach Notification</h2>
          <p className="mb-4">
            NuVoxel shall notify the Controller without undue delay (and in any event within 72 hours) after becoming aware
            of a personal data breach affecting Personal Data processed under this DPA. The notification shall include:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Description of the nature of the breach</li>
            <li>Categories and approximate number of data subjects affected</li>
            <li>Categories and approximate number of Personal Data records affected</li>
            <li>Likely consequences of the breach</li>
            <li>Measures taken or proposed to address the breach</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">8. International Data Transfers</h2>
          <p className="mb-4">
            Personal Data may be transferred to and processed in the United States. For transfers from the European Economic
            Area, United Kingdom, or Switzerland, NuVoxel relies on:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Standard Contractual Clauses (SCCs) approved by the European Commission</li>
            <li>Supplementary measures where required by applicable guidance</li>
            <li>Data Privacy Framework certification (where applicable)</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">9. Audit and Compliance</h2>
          <p className="mb-4">
            NuVoxel shall make available to the Controller all information necessary to demonstrate compliance with this DPA
            and Data Protection Laws, and allow for and contribute to audits, including inspections, conducted by the Controller
            or an auditor mandated by the Controller.
          </p>
          <p className="mb-4">
            Audits shall be conducted with reasonable notice (at least 30 days), during normal business hours, and no more
            than once per year unless required by a regulatory authority or following a data breach.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">10. Data Retention and Deletion</h2>
          <p className="mb-4">
            Upon termination of the Service or at the Controller&apos;s request:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>NuVoxel will delete or return all Personal Data within 30 days</li>
            <li>Backup copies will be purged within 180 days</li>
            <li>NuVoxel may retain data as required by applicable law, with notice to the Controller</li>
            <li>Upon request, NuVoxel will certify deletion in writing</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">11. Liability</h2>
          <p className="mb-4">
            Each party&apos;s liability under this DPA is subject to the limitations set forth in the underlying Service agreement.
            NuVoxel shall be liable for damages caused by processing that does not comply with Data Protection Laws or this DPA.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">12. Term and Termination</h2>
          <p className="mb-4">
            This DPA shall remain in effect for the duration of the Service agreement. Provisions relating to confidentiality,
            data deletion, and liability shall survive termination.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">13. Contact Information</h2>
          <p className="mb-4">
            For questions regarding this Data Processing Agreement or to exercise rights under this DPA:
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

          <h2 className="text-2xl font-semibold mt-8 mb-4">Related Documents</h2>
          <ul className="list-disc pl-6 mb-4">
            <li>
              <Link href="/legal/terms" className="text-primary hover:underline">Terms of Service</Link>
            </li>
            <li>
              <Link href="/legal/privacy" className="text-primary hover:underline">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/legal/cookies" className="text-primary hover:underline">Cookie Policy</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
