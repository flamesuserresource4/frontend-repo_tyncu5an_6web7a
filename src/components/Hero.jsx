import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[92vh] pt-28 overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_40%,rgba(124,58,237,0.35),transparent_60%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[12px] text-slate-200">
                <span className="h-1.5 w-1.5 rounded-full bg-fuchsia-400 animate-pulse" />
                Next-Gen Agentur
              </span>
              <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
                Weitblick Studio
              </h1>
              <p className="mt-4 text-slate-300 text-lg leading-relaxed">
                Wir vereinen Strategie, Design und Produktion zu digitalen Erlebnissen, die Marken nachhaltig wachsen lassen.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a href="#contact" className="rounded-xl bg-gradient-to-r from-fuchsia-500 to-blue-500 px-5 py-3 text-white font-semibold shadow-[0_10px_30px_rgba(59,130,246,0.35)] hover:shadow-[0_10px_40px_rgba(168,85,247,0.45)] transition-all">
                  Projekt anfragen
                </a>
                <a href="#services" className="rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-slate-200 hover:text-white hover:bg-white/10 transition-colors">
                  Leistungen ansehen
                </a>
              </div>
              <div className="mt-6 flex items-center gap-6 text-slate-300/80">
                <div>
                  <p className="text-2xl font-semibold text-white">+180%</p>
                  <p className="text-sm">Ø Umsatzsteigerung</p>
                </div>
                <div>
                  <p className="text-2xl font-semibold text-white">100+ </p>
                  <p className="text-sm">abgeschlossene Projekte</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
