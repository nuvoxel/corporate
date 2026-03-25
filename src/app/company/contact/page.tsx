import { Mail, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact | NuVoxel',
  description: 'Get in touch with NuVoxel.',
}

export default function ContactPage() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-[600px] mx-auto px-6 text-center">
        <Link
          href="/"
          className="inline-flex items-center text-muted-foreground hover:text-foreground mb-12 text-sm"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>

        <div className="w-16 h-16 bg-nuvoxel-ocean/10 rounded-full flex items-center justify-center mx-auto mb-8">
          <Mail className="h-8 w-8 text-nuvoxel-ocean" />
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-nuvoxel-navy dark:text-white mb-4 font-amiko">
          Get in Touch
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-300 mb-10">
          Questions, ideas, or just want to say hi? Drop us a line.
        </p>

        <a
          href="mailto:support@nuvoxel.com"
          className="inline-flex items-center gap-3 px-8 py-4 bg-nuvoxel-navy text-white font-semibold rounded-lg hover:opacity-90 transition-all active:scale-95 shadow-lg text-lg"
        >
          <Mail className="h-5 w-5" />
          support@nuvoxel.com
        </a>

        <p className="mt-8 text-sm text-muted-foreground">
          We typically respond within a day or two.
        </p>
      </div>
    </section>
  )
}
