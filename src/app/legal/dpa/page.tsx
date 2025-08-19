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
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">1. Definitions</h2>
          <p className="mb-4">
            In this Data Processing Agreement (&quot;DPA&quot;), the following terms shall have the meanings set forth below:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li><strong>&quot;Data Controller&quot;</strong> means the entity that determines the purposes and means of processing Personal Data</li>
            <li><strong>&quot;Data Processor&quot;</strong> means NuVoxel LLC, processing Personal Data on behalf of the Data Controller</li>
            <li><strong>&quot;Personal Data&quot;</strong> means any information relating to an identified or identifiable natural person</li>
            <li><strong>&quot;Processing&quot;</strong> means any operation performed on Personal Data</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">2. Processing of Personal Data</h2>
          <p className="mb-4">
            The Data Processor shall process Personal Data only on documented instructions from the Data Controller, 
            including with regard to transfers of Personal Data to a third country or an international organization.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">3. Security of Processing</h2>
          <p className="mb-4">
            The Data Processor shall implement appropriate technical and organizational measures to ensure a level of 
            security appropriate to the risk, including:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Encryption of Personal Data</li>
            <li>Ongoing confidentiality, integrity, availability, and resilience of processing systems</li>
            <li>Ability to restore availability and access to Personal Data in a timely manner</li>
            <li>Regular testing of security measures</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">4. Sub-processors</h2>
          <p className="mb-4">
            The Data Controller provides general authorization for the Data Processor to engage sub-processors. 
            The Data Processor shall inform the Data Controller of any intended changes concerning the addition or 
            replacement of sub-processors.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">5. Data Subject Rights</h2>
          <p className="mb-4">
            The Data Processor shall assist the Data Controller in fulfilling its obligation to respond to requests 
            for exercising the data subject&apos;s rights, including:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Right of access</li>
            <li>Right to rectification</li>
            <li>Right to erasure</li>
            <li>Right to data portability</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">6. Data Breach Notification</h2>
          <p className="mb-4">
            The Data Processor shall notify the Data Controller without undue delay after becoming aware of a personal 
            data breach affecting the Personal Data processed under this Agreement.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">7. Audit and Inspection</h2>
          <p className="mb-4">
            The Data Processor shall make available to the Data Controller all information necessary to demonstrate 
            compliance with the obligations laid down in this Agreement and allow for audits.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">8. Contact Information</h2>
          <p className="mb-4">
            For questions regarding this Data Processing Agreement, please contact:
            <br />
            Email: legal@nuvoxel.com
            <br />
            Data Protection Officer: dpo@nuvoxel.com
          </p>
        </div>
      </div>
    </div>
  )
}