import {
  Cpu,
  Wrench,
  Sparkles,
  Truck,
  ShieldCheck,
  Star,
  ArrowRight,
  ExternalLink,
} from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'NuVoxel Shop - Parts, Supplies & Interesting Finds',
  description:
    'Quality parts, supplies, and interesting finds. Electronics, tools, and more. Available on our Shopify store and eBay.',
}

const categories = [
  {
    icon: Cpu,
    title: 'Electronics & Components',
    description:
      'Electronic components, boards, connectors, and parts for makers and repair techs.',
  },
  {
    icon: Wrench,
    title: 'Tools & Supplies',
    description:
      'Practical tools and supplies for projects, repairs, and builds.',
  },
  {
    icon: Sparkles,
    title: 'Interesting Finds',
    description:
      'Occasionally we come across cool stuff. Vintage tech, unique parts, things that caught our eye.',
  },
]

const trustBadges = [
  { icon: Truck, label: 'Fast Shipping' },
  { icon: ShieldCheck, label: 'Quality Guaranteed' },
  { icon: Star, label: 'Top Rated Seller' },
]

export default function ShopPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-linear-to-b from-white to-nuvoxel-mint/10 dark:from-slate-950 dark:to-nuvoxel-forest/5 py-20 md:py-32">
        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          <div className="max-w-2xl">
            <h1 className="font-amiko text-5xl md:text-7xl text-nuvoxel-navy dark:text-white font-bold leading-tight mb-6">
              NuVoxel Shop
            </h1>
            <p className="text-2xl text-nuvoxel-ocean font-semibold mb-4">
              Parts, Supplies & Interesting Finds
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-10 leading-relaxed">
              We sell parts, supplies, and the occasional interesting find.
              Available on our Shopify store and eBay. Quality items, fair
              prices, fast shipping. It&apos;s not glamorous, but it&apos;s
              honest work.
            </p>
            <a
              href="https://shop.nuvoxel.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-nuvoxel-navy text-white font-semibold rounded-lg hover:opacity-90 transition-all active:scale-95 shadow-lg"
            >
              Browse Our Store
              <ExternalLink className="w-4 h-4 ml-2" />
            </a>
          </div>
        </div>
        <div className="absolute right-0 top-0 w-1/3 h-full opacity-20 hidden lg:block">
          <div className="w-full h-full bg-linear-to-br from-nuvoxel-mint to-transparent rounded-bl-full"></div>
        </div>
      </section>

      {/* What We Sell */}
      <section className="py-24 bg-white dark:bg-slate-950">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-amiko text-3xl md:text-4xl text-nuvoxel-navy dark:text-white font-bold mb-4">
              What You&apos;ll Find
            </h2>
            <div className="w-16 h-1 bg-nuvoxel-green mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((cat) => (
              <div
                key={cat.title}
                className="p-8 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-xl shadow-sm hover:shadow-md transition-shadow group"
              >
                <div className="w-14 h-14 bg-nuvoxel-sky/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-nuvoxel-ocean/10 transition-colors">
                  <cat.icon className="w-7 h-7 text-nuvoxel-ocean" />
                </div>
                <h3 className="text-xl font-bold text-nuvoxel-navy dark:text-white mb-3">
                  {cat.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {cat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 bg-nuvoxel-pale-green/30 dark:bg-nuvoxel-forest/5 border-y border-slate-100 dark:border-slate-800">
        <div className="max-w-[900px] mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            {trustBadges.map((badge) => (
              <div key={badge.label} className="flex items-center space-x-3">
                <badge.icon className="w-6 h-6 text-nuvoxel-navy dark:text-nuvoxel-sky" />
                <span className="font-semibold text-nuvoxel-navy dark:text-white">
                  {badge.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <h2 className="font-amiko text-3xl text-nuvoxel-navy dark:text-white font-bold mb-8">
            Ready to browse?
          </h2>
          <a
            href="https://shop.nuvoxel.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-10 py-4 bg-nuvoxel-green text-nuvoxel-navy font-bold rounded-lg hover:opacity-90 transition-all active:scale-95 shadow-lg text-lg mb-6"
          >
            Visit Store
            <ArrowRight className="w-5 h-5 ml-2" />
          </a>
          <p className="text-sm text-slate-500 dark:text-slate-400 italic">
            Also available on eBay. All transactions handled securely.
          </p>
        </div>
      </section>
    </>
  )
}
