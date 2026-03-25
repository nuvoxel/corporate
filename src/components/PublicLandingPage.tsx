'use client'

import Link from 'next/link'
import {
  CloudRain,
  Brain,
  Package,
  FlaskConical,
  ArrowRight,
  Linkedin,
  Youtube,
  BookOpen,
} from 'lucide-react'

const projects = [
  {
    title: 'CryingCloud',
    description:
      'Exposing cloud provider pricing BS through our blog and YouTube channel. Azure cost optimization tips that actually save money.',
    tag: 'Blog & YouTube',
    href: '/projects/cryingcloud',
    linkText: 'Read the blog',
    icon: CloudRain,
    borderColor: 'border-nuvoxel-ocean',
    tagBg: 'bg-nuvoxel-ocean/10',
    tagText: 'text-nuvoxel-ocean',
    iconBg: 'bg-nuvoxel-ocean/10',
    iconColor: 'text-nuvoxel-ocean',
  },
  {
    title: 'Filla IQ',
    description:
      'Smart inventory and fulfillment intelligence. Because guessing isn\'t a strategy for growing ecommerce businesses.',
    tag: 'Software Project',
    href: '/projects/fillaiq',
    linkText: 'Learn more',
    icon: Brain,
    borderColor: 'border-nuvoxel-green',
    tagBg: 'bg-nuvoxel-green/10',
    tagText: 'text-nuvoxel-forest',
    iconBg: 'bg-nuvoxel-green/10',
    iconColor: 'text-nuvoxel-green',
  },
  {
    title: 'NuVoxel Shop',
    description:
      'Parts, supplies, and interesting finds on our Shopify store and eBay. Hand-picked and carefully sourced.',
    tag: 'Online Store',
    href: '/projects/shop',
    linkText: 'Visit shop',
    icon: Package,
    borderColor: 'border-nuvoxel-sky',
    tagBg: 'bg-nuvoxel-sky/10',
    tagText: 'text-nuvoxel-sky',
    iconBg: 'bg-nuvoxel-sky/10',
    iconColor: 'text-nuvoxel-sky',
  },
  {
    title: 'Hydrogen',
    description:
      'Cloud intelligence platform. Compare providers, analyze costs, and find the best deals across AWS, Azure, and GCP.',
    tag: 'Cloud Platform',
    href: '/projects/hydrogen',
    linkText: 'Try Hydrogen',
    icon: FlaskConical,
    borderColor: 'border-nuvoxel-navy',
    tagBg: 'bg-nuvoxel-navy/5',
    tagText: 'text-nuvoxel-navy',
    iconBg: 'bg-nuvoxel-navy/5',
    iconColor: 'text-nuvoxel-navy',
  },
]

export default function PublicLandingPage() {
  return (
    <>
      {/* Hero Section */}
      <header className="relative w-full overflow-hidden bg-gradient-to-b from-white to-[#f0f6ff] dark:from-slate-950 dark:to-slate-900 py-24 md:py-32">
        <div className="max-w-[1200px] mx-auto px-6 text-center relative z-10">
          <h1 className="font-amiko text-5xl md:text-7xl font-bold text-nuvoxel-navy dark:text-white mb-6 tracking-tight">
            Ideas. Projects.{' '}
            <span className="text-nuvoxel-ocean">No Corporate BS.</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-10 leading-relaxed">
            NuVoxel is Mike DeLuca&apos;s workshop for building things that are
            interesting, useful, or just fun. Based in Danville, CA.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="#projects"
              className="px-8 py-4 bg-nuvoxel-navy text-white font-semibold rounded-lg hover:opacity-90 transition-all active:scale-95 shadow-lg"
            >
              Explore Projects
            </Link>
            <a
              href="https://www.youtube.com/@cryingcloud1"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border-2 border-nuvoxel-ocean text-nuvoxel-ocean dark:text-nuvoxel-sky font-semibold rounded-lg hover:bg-nuvoxel-ocean/5 transition-all active:scale-95"
            >
              Watch on YouTube
            </a>
          </div>
        </div>
        {/* Decorative blurs */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-96 h-96 bg-nuvoxel-ocean/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/3 w-96 h-96 bg-nuvoxel-green/5 rounded-full blur-3xl"></div>
      </header>

      {/* Projects Grid */}
      <section className="py-24 bg-white dark:bg-slate-950" id="projects">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex items-center justify-between mb-12">
            <h2 className="font-amiko text-3xl md:text-4xl font-bold text-nuvoxel-navy dark:text-white">
              What We&apos;re Working On
            </h2>
            <div className="h-1 w-24 bg-nuvoxel-green rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <Link
                key={project.title}
                href={project.href}
                className={`group bg-white dark:bg-slate-900 p-8 rounded-xl shadow-sm border-t-4 ${project.borderColor} hover:shadow-xl transition-all duration-300`}
              >
                <div
                  className={`w-14 h-14 ${project.iconBg} rounded-lg flex items-center justify-center mb-6`}
                >
                  <project.icon className={`w-7 h-7 ${project.iconColor}`} />
                </div>
                <span
                  className={`inline-block px-3 py-1 ${project.tagBg} ${project.tagText} text-xs font-bold rounded-full mb-4`}
                >
                  {project.tag}
                </span>
                <h3 className="font-amiko text-2xl font-bold text-nuvoxel-navy dark:text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                  {project.description}
                </p>
                <span className="inline-flex items-center font-semibold text-nuvoxel-ocean group-hover:underline">
                  {project.linkText}{' '}
                  <ArrowRight className="w-4 h-4 ml-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About Strip */}
      <section className="bg-nuvoxel-navy py-12">
        <div className="max-w-[1200px] mx-auto px-6 flex flex-col items-center">
          <p className="text-white text-lg font-medium mb-6 text-center">
            NuVoxel LLC — Built with curiosity in Danville, CA
          </p>
          <div className="flex gap-8">
            <a
              href="https://x.com/nuvoxel"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-nuvoxel-green transition-colors"
              aria-label="X"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/company/nuvoxel/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-nuvoxel-green transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://www.youtube.com/@cryingcloud1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-nuvoxel-green transition-colors"
              aria-label="YouTube"
            >
              <Youtube className="h-5 w-5" />
            </a>
            <a
              href="https://www.azurefieldnotes.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-nuvoxel-green transition-colors"
              aria-label="Blog"
            >
              <BookOpen className="h-5 w-5" />
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
