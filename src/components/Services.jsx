import { motion, useScroll, useTransform } from 'framer-motion'
import { Palette, Megaphone, FileText, Sparkles } from 'lucide-react'

const services = [
  {
    icon: Megaphone,
    title: 'Marketing',
    desc: 'Ganzheitliche Performance-Strategien mit messbaren Zielen – von Kampagnen bis Automationen.',
    points: ['Performance & Growth', 'Paid Social & SEA', 'Funnel & Automationen'],
    glow: 'from-pink-500/20 to-yellow-500/20',
  },
  {
    icon: Palette,
    title: 'Webdesign',
    desc: 'High-End Websites, die überzeugen – schnell, barrierefrei und Suchmaschinen-optimiert.',
    points: ['UX/UI Design', 'Webflow / React', 'SEO & Speed'],
    glow: 'from-fuchsia-500/20 to-blue-500/20',
  },
  {
    icon: FileText,
    title: 'Content Erstellung',
    desc: 'Foto- und Videoproduktion, die Emotionen weckt und Produkte inszeniert – für Social & Web.',
    points: ['Brand-Story', 'UGC & Ads', 'Postproduktion'],
    glow: 'from-emerald-500/20 to-cyan-500/20',
  },
]

export default function Services() {
  const { scrollYProgress } = useScroll()
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 12])

  return (
    <section id="services" className="relative py-28">
      {/* orbit outline */}
      <motion.div style={{ rotate }} className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[44rem] w-[44rem] rounded-full border border-fuchsia-500/10" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[60rem] w-[60rem] rounded-full border border-blue-500/10" />
      </motion.div>

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[12px] text-slate-200">
            <Sparkles size={14} /> Unser Angebot
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-white tracking-tight">Leistungen, die Ergebnisse liefern</h2>
          <p className="mt-3 text-slate-300">Wir bauen Systeme, die Marken sichtbar machen und Wachstum messbar steigern.</p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, desc, points, glow }, idx) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60 p-6 backdrop-blur group"
            >
              <div className={`pointer-events-none absolute -inset-20 bg-gradient-to-br ${glow} blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              <div className="relative z-10">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-white">
                  <Icon size={22} />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-white">{title}</h3>
                <p className="mt-2 text-slate-300 text-sm">{desc}</p>
                <ul className="mt-4 space-y-2 text-slate-300/90 text-sm">
                  {points.map((p) => (
                    <li key={p} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-fuchsia-500 to-blue-500" /> {p}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
