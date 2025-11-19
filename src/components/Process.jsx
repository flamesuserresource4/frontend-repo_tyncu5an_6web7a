import { motion } from 'framer-motion'

const steps = [
  { no: '01', title: 'Analyse & Zieldefinition', text: 'Wir starten mit Klarheit: Markt, Zielgruppe und KPIs – datenbasiert und präzise.' },
  { no: '02', title: 'Konzept & Design', text: 'Struktur, Wireframes und visuelle Richtung – fokussiert auf Conversion & Brand.' },
  { no: '03', title: 'Produktion', text: 'Umsetzung in Webflow/React, Content-Produktion und technische Optimierungen.' },
  { no: '04', title: 'Launch & Skalierung', text: 'Tracking, Testing, Ads – wir messen, lernen und skalieren die Gewinner.' },
]

export default function Process() {
  return (
    <section id="process" className="relative py-28">
      <div className="pointer-events-none absolute inset-0">
        <svg className="absolute inset-x-0 -top-10 w-full" height="120" viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 60C240 0 480 120 720 60C960 0 1200 120 1440 60" stroke="url(#g)" strokeOpacity="0.25" strokeWidth="2" />
          <defs>
            <linearGradient id="g" x1="0" y1="0" x2="1440" y2="0" gradientUnits="userSpaceOnUse">
              <stop stopColor="#A855F7" />
              <stop offset="1" stopColor="#3B82F6" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[12px] text-slate-200">So arbeiten wir</span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-white tracking-tight">Klarer Prozess. Planbare Ergebnisse.</h2>
        </div>

        <div className="mt-12 grid md:grid-cols-4 gap-6">
          {steps.map((s, idx) => (
            <motion.div
              key={s.no}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60 p-6 backdrop-blur"
            >
              <div className="text-fuchsia-400/90 font-mono text-sm">{s.no}</div>
              <div className="mt-2 text-white font-semibold">{s.title}</div>
              <div className="mt-2 text-slate-300 text-sm">{s.text}</div>
              <div className="pointer-events-none absolute -inset-24 -z-10 bg-[radial-gradient(40%_40%_at_70%_0%,rgba(168,85,247,0.25),transparent_60%)]" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
