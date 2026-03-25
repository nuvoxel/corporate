import {
  Scale,
  Server,
  ShieldCheck,
  BarChart3,
  ArrowRight,
} from 'lucide-react'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Hydrogen - Cloud Intelligence Platform | NuVoxel',
  description:
    'Compare cloud providers, analyze costs, identify security risks, and find optimal configurations across AWS, Azure, GCP, and more.',
}

const features = [
  {
    icon: Scale,
    title: 'Cost Comparison',
    description:
      'Compare pricing across cloud providers with real, transparent data. No more spreadsheet gymnastics.',
  },
  {
    icon: Server,
    title: 'Workload Analysis',
    description:
      'Analyze your workloads and get recommendations for the most cost-effective deployment options.',
  },
  {
    icon: ShieldCheck,
    title: 'Security Insights',
    description:
      'Identify security risks and compliance gaps before they become expensive problems.',
  },
  {
    icon: BarChart3,
    title: 'Resource Intelligence',
    description:
      'AI-powered resource tracking, zombie detection, and optimization recommendations.',
  },
]

export default function HydrogenPage() {
  return (
    <>
      {/* Hero */}
      <header className="relative pt-20 pb-20 md:pt-32 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-linear-to-b from-white to-nuvoxel-light-sky/10 dark:from-slate-950 dark:to-nuvoxel-deep-ocean/10"></div>
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-amiko font-bold text-nuvoxel-navy dark:text-white mb-4 tracking-tight">
            Hydrogen
          </h1>
          <p className="text-xl md:text-2xl font-medium text-nuvoxel-ocean mb-8">
            Cloud Intelligence Platform
          </p>
          <div className="max-w-2xl mx-auto mb-10">
            <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
              Hydrogen helps teams make smarter cloud decisions. Compare
              providers, analyze costs, identify security risks, and find
              optimal configurations across AWS, Azure, GCP, and more. Built
              from years of experience watching companies overpay for cloud
              services.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://hydrogen.nuvoxel.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-nuvoxel-navy text-white font-bold rounded-lg hover:bg-nuvoxel-ocean transition-all shadow-lg active:scale-[0.98]"
            >
              Try Hydrogen
            </a>
            <Link
              href="/projects/cryingcloud"
              className="px-8 py-4 border-2 border-nuvoxel-ocean text-nuvoxel-ocean dark:text-nuvoxel-sky font-bold rounded-lg hover:bg-nuvoxel-sky/10 transition-all active:scale-[0.98]"
            >
              Learn More
            </Link>
          </div>
        </div>
      </header>

      {/* Features */}
      <section className="py-24 bg-white dark:bg-slate-950">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-amiko font-bold text-nuvoxel-navy dark:text-white mb-4">
              What Hydrogen Does
            </h2>
            <div className="h-1 w-20 bg-nuvoxel-green mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="p-8 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-xl shadow-sm hover:shadow-md transition-shadow group"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-nuvoxel-sky/10 text-nuvoxel-ocean mb-6 group-hover:bg-nuvoxel-ocean group-hover:text-white transition-colors">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-amiko font-bold text-nuvoxel-navy dark:text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Teaser */}
      <section className="py-12 bg-nuvoxel-pale-green dark:bg-nuvoxel-forest/10">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <p className="text-nuvoxel-navy dark:text-white font-semibold text-lg">
            Free for up to 250 resources. No credit card required.
            <a
              href="https://hydrogen.nuvoxel.com"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 text-nuvoxel-ocean hover:underline inline-flex items-center gap-1"
            >
              View full pricing{' '}
              <ArrowRight className="w-4 h-4" />
            </a>
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-nuvoxel-navy relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-nuvoxel-ocean/20 rounded-full blur-3xl -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-nuvoxel-green/10 rounded-full blur-3xl -ml-32 -mb-32"></div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-amiko font-bold text-white mb-10 leading-tight">
            Ready to stop overpaying for cloud?
          </h2>
          <a
            href="https://hydrogen.nuvoxel.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-nuvoxel-navy px-10 py-5 rounded-lg font-bold text-xl hover:bg-nuvoxel-mint transition-all shadow-xl active:scale-95"
          >
            Start Free Trial
            <ArrowRight className="w-5 h-5" />
          </a>
          <p className="mt-8 text-nuvoxel-light-sky font-medium tracking-wide">
            Join teams managing $22M+ in monthly cloud spend.
          </p>
        </div>
      </section>
    </>
  )
}
