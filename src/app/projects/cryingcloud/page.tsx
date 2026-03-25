import {
  DollarSign,
  Search,
  Network,
  ArrowRight,
  ExternalLink,
} from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'CryingCloud - Azure Cost Optimization | NuVoxel',
  description:
    'Calling out cloud provider pricing BS. Azure cost optimization tips, cloud pricing analysis, and honest takes on an industry that loves to overcharge you.',
}

const pillars = [
  {
    icon: DollarSign,
    title: 'Azure Cost Optimization',
    description:
      'Deep dives into Reserved Instances, Savings Plans, and the hidden traps of Azure Advisor recommendations.',
    iconBg: 'bg-nuvoxel-pale-green',
    iconColor: 'text-nuvoxel-forest',
  },
  {
    icon: Search,
    title: 'Cloud Pricing Exposed',
    description:
      'Analyzing the true cost of egress, API calls, and the "free tier" that starts charging you when you least expect it.',
    iconBg: 'bg-nuvoxel-sky/10',
    iconColor: 'text-nuvoxel-ocean',
  },
  {
    icon: Network,
    title: 'Migration & Architecture',
    description:
      'Building for cost-efficiency from day one. Choosing between Serverless, Kubernetes, and "just a VM".',
    iconBg: 'bg-nuvoxel-navy/5',
    iconColor: 'text-nuvoxel-navy',
  },
]

const posts = [
  {
    tag: 'ANALYSIS',
    tagColor: 'bg-nuvoxel-navy',
    title: 'The $10,000 NAT Gateway Mistake',
    excerpt:
      'How one simple architectural choice led to a five-figure surprise bill and what you can do to prevent it.',
  },
  {
    tag: 'SAVINGS',
    tagColor: 'bg-nuvoxel-forest',
    title: 'Reserved Instances vs. Savings Plans',
    excerpt:
      'The definitive guide to committing your soul to Azure for 3 years without getting burned by regional locks.',
  },
  {
    tag: 'RANT',
    tagColor: 'bg-red-600',
    title: 'Why "Cloud Native" is a Trap',
    excerpt:
      'When vendor lock-in is disguised as innovation. Why portable containers are your only true defense.',
  },
]

export default function CryingCloudPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-24 md:pt-32 md:pb-40">
        <div className="max-w-[1200px] mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <span className="text-5xl">🌧️</span>
              <h1 className="text-5xl md:text-7xl font-bold text-nuvoxel-navy dark:text-white tracking-tight font-amiko">
                CryingCloud
              </h1>
            </div>
            <h2 className="text-2xl md:text-3xl font-semibold text-nuvoxel-ocean">
              Calling out cloud provider BS since 2024
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-xl">
              Azure cost optimization isn&apos;t just about deleting unused
              resources. It&apos;s about surviving the complex, often predatory
              pricing models of modern cloud giants. Honest takes, brutal
              analysis, and actual savings.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="https://www.azurefieldnotes.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-nuvoxel-navy text-white font-bold rounded-lg hover:bg-nuvoxel-midnight transition-colors"
              >
                Read the Blog
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="https://www.youtube.com/@cryingcloud1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-red-600 text-red-600 font-bold rounded-lg hover:bg-red-50 dark:hover:bg-red-900/10 transition-colors"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                Watch on YouTube
              </a>
            </div>
          </div>
          <div className="relative hidden md:block">
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-nuvoxel-ocean/10 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-nuvoxel-green/10 rounded-full blur-3xl -z-10"></div>
            <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-2xl border border-slate-100 dark:border-slate-700 rotate-2 hover:rotate-0 transition-transform duration-500">
              <div className="flex flex-col gap-6">
                <div className="h-4 w-3/4 bg-slate-100 dark:bg-slate-700 rounded"></div>
                <div className="h-64 rounded-lg bg-slate-50 dark:bg-slate-900 flex items-center justify-center">
                  <span className="text-8xl opacity-30">☁️💸</span>
                </div>
                <div className="space-y-3">
                  <div className="h-3 w-full bg-slate-100 dark:bg-slate-700 rounded"></div>
                  <div className="h-3 w-full bg-slate-100 dark:bg-slate-700 rounded"></div>
                  <div className="h-3 w-2/3 bg-slate-100 dark:bg-slate-700 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Pillars */}
      <section className="bg-slate-50 dark:bg-slate-900 py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-3xl font-bold text-nuvoxel-navy dark:text-white mb-12 text-center font-amiko">
            What We Cover
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="bg-white dark:bg-slate-800 p-8 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow group"
              >
                <div
                  className={`w-14 h-14 ${pillar.iconBg} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                >
                  <pillar.icon className={`w-7 h-7 ${pillar.iconColor}`} />
                </div>
                <h3 className="text-xl font-bold text-nuvoxel-navy dark:text-white mb-4">
                  {pillar.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-nuvoxel-navy dark:text-white font-amiko">
                Recent Posts
              </h2>
              <p className="text-slate-500 dark:text-slate-400 mt-2">
                Latest insights from the CryingCloud editorial desk.
              </p>
            </div>
            <a
              href="https://www.azurefieldnotes.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1 text-nuvoxel-ocean font-bold hover:underline"
            >
              View All Posts
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {posts.map((post) => (
              <a
                key={post.title}
                href="https://www.azurefieldnotes.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group cursor-pointer"
              >
                <div className="aspect-video rounded-lg overflow-hidden mb-4 bg-slate-100 dark:bg-slate-800 flex items-center justify-center relative">
                  <span className="text-4xl opacity-20">☁️</span>
                  <div
                    className={`absolute top-3 left-3 ${post.tagColor} text-white text-xs font-bold px-2 py-1 rounded`}
                  >
                    {post.tag}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-nuvoxel-navy dark:text-white group-hover:text-nuvoxel-ocean transition-colors mb-2">
                  {post.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                <span className="text-nuvoxel-ocean font-bold flex items-center gap-2">
                  Read more
                  <ArrowRight className="w-4 h-4" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* YouTube CTA */}
      <section className="bg-nuvoxel-navy py-20 overflow-hidden relative">
        <div className="max-w-[800px] mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl font-bold text-white mb-6 font-amiko">
            Prefer video? We&apos;re on YouTube too.
          </h2>
          <p className="text-xl text-nuvoxel-sky mb-10">
            Subscribe for weekly takes on cloud pricing, live architectural
            reviews, and the occasional rant about egress fees.
          </p>
          <a
            href="https://www.youtube.com/@cryingcloud1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-4 bg-red-600 text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-red-700 transition-all hover:scale-105 shadow-xl"
          >
            <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
            Subscribe to CryingCloud
          </a>
          <p className="text-white/40 mt-8 text-sm italic">
            Join 15k+ subscribers who value honesty over marketing fluff.
          </p>
        </div>
      </section>
    </>
  )
}
