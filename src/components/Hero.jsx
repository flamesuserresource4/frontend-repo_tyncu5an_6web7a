import Spline from '@splinetool/react-spline'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  // parallax layers driven by scroll
  const { scrollY } = useScroll()
  const yBack = useTransform(scrollY, [0, 600], [0, 80])
  const yMid = useTransform(scrollY, [0, 600], [0, 120])
  const yFront = useTransform(scrollY, [0, 600], [0, 160])

  return (
    <section id="top" className="relative min-h-[100vh] pt-28 overflow-hidden">
      {/* 3D background */}
      <motion.div style={{ y: yBack }} className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_40%,rgba(124,58,237,0.25),transparent_60%)]" />
      </motion.div>

      {/* floating glass cards */}
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[12px] text-slate-200">
                <span className="h-1.5 w-1.5 rounded-full bg-fuchsia-400 animate-pulse" />
                Next‑Gen Agentur
              </span>
              <h1 className="mt-5 text-4xl sm:text-6xl xl:text-7xl font-black leading-[0.95] tracking-tight text-white">
                Einzigartige Marken erfordern einzigartige Erlebnisse.
              </h1>
              <p className="mt-5 text-slate-300 text-lg leading-relaxed max-w-2xl">
                Wir verbinden Strategie, 3D und Motion zu klaren Digitalprodukten, die begeistern und performen.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a href="#contact" className="relative inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-fuchsia-500 to-blue-500 px-5 py-3 text-white font-semibold">
                  <span className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-fuchsia-500 to-blue-500 blur opacity-30" />
                  <span className="relative">Projekt anfragen</span>
                  <ArrowRight size={18} className="relative" />
                </a>
                <a href="#showcase" className="rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-slate-200 hover:text-white hover:bg-white/10 transition-colors">
                  Arbeiten ansehen
                </a>
              </div>

              <div className="mt-8 grid grid-cols-3 gap-6 text-slate-300/90">
                {[
                  ['+180%', 'Ø Umsatzsteigerung'],
                  ['100+', 'Projekte'],
                  ['<2.5s', 'Largest Contentful Paint'],
                ].map(([k, v]) => (
                  <div key={k} className="">
                    <p className="text-2xl font-semibold text-white">{k}</p>
                    <p className="text-sm">{v}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-5 hidden lg:block">
            <motion.div style={{ y: yMid }} className="relative">
              <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-fuchsia-500/20 to-blue-500/20 blur-2xl" />
              <div className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-4">
                <div className="aspect-[9/12] rounded-2xl border border-white/10 bg-[radial-gradient(60%_60%_at_50%_50%,rgba(168,85,247,0.25),rgba(59,130,246,0.2))]" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* parallax foreground shapes */}
      <motion.div style={{ y: yFront }} className="pointer-events-none absolute -bottom-32 left-1/2 -translate-x-1/2 h-72 w-[60rem] rounded-[100%] bg-gradient-to-r from-fuchsia-500/15 to-blue-500/15 blur-3xl" />
    </section>
  )
}
