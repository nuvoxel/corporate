import { Nfc, Weight, Palette, ArrowRight, ExternalLink, Github } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Filla IQ - Smart Workshop Inventory | NuVoxel',
  description:
    'Open-source smart workshop inventory system. NFC scanning, precision weighing, and spectral color detection to automatically identify and track filament, fasteners, and shop supplies.',
}

const highlights = [
  { icon: Nfc, label: 'NFC Spool Identification' },
  { icon: Weight, label: 'Precision Weight Tracking' },
  { icon: Palette, label: 'Spectral Color Detection' },
]

export default function FillaIQPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-b from-white to-nuvoxel-pale-green/15 dark:from-slate-950 dark:to-nuvoxel-forest/5 -z-10"></div>
        <div className="max-w-[1200px] mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-amiko font-bold text-nuvoxel-navy dark:text-white mb-4 tracking-tight">
            Filla IQ
          </h1>
          <p className="text-xl md:text-2xl font-semibold text-slate-500 dark:text-slate-400 mb-6 uppercase tracking-wider">
            Smart Workshop Inventory
          </p>
          <div className="max-w-2xl mx-auto mb-10">
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              An open-source system that automatically identifies, weighs, and
              tracks filament spools, hardware bins, and workshop supplies. Scan
              a spool with NFC, get instant weight and color — everything logged
              to your catalog automatically.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://fillaiq.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-nuvoxel-forest hover:bg-nuvoxel-forest/90 text-white font-semibold rounded-lg transition-all active:scale-95 shadow-md"
            >
              Visit fillaiq.com
              <ExternalLink className="w-4 h-4 ml-2" />
            </a>
            <a
              href="https://github.com/mdeluca-nuvoxel/fillaiq"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 border-2 border-nuvoxel-forest text-nuvoxel-forest dark:text-nuvoxel-green font-semibold rounded-lg hover:bg-nuvoxel-forest/5 transition-all active:scale-95"
            >
              View on GitHub
              <Github className="w-4 h-4 ml-2" />
            </a>
          </div>
        </div>
      </section>

      {/* Quick Highlights */}
      <section className="py-16 px-6 bg-white dark:bg-slate-950">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            {highlights.map((item) => (
              <div key={item.label} className="flex flex-col items-center">
                <div className="w-16 h-16 bg-nuvoxel-mint/30 dark:bg-nuvoxel-forest/20 rounded-full flex items-center justify-center mb-4">
                  <item.icon className="w-7 h-7 text-nuvoxel-forest" />
                </div>
                <h3 className="font-amiko font-bold text-nuvoxel-navy dark:text-white text-lg">
                  {item.label}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-nuvoxel-navy py-6 px-6">
        <div className="max-w-[1200px] mx-auto flex justify-center items-center">
          <a
            href="https://fillaiq.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-nuvoxel-green transition-colors flex items-center gap-2 group"
          >
            <span className="text-base md:text-lg">
              Fully open source — hardware designs, firmware, and web dashboard
            </span>
            <ArrowRight className="w-5 h-5 text-nuvoxel-green group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>
    </>
  )
}
