import { motion, useScroll, useTransform } from 'framer-motion'

const projects = [
  { tag: 'E‑Commerce', title: 'Skincare D2C Launch', result: '+2.4x ROAS' },
  { tag: 'B2B SaaS', title: 'Website Relaunch & SEO', result: '+120% Org. Traffic' },
  { tag: 'Brand', title: 'Content Kampagnen Q4', result: '+65% CTR' },
]

export default function Showcase() {
  const { scrollYProgress } = useScroll()
  const tilt = useTransform(scrollYProgress, [0, 1], [0, -8])

  return (
    <section id="showcase" className="relative py-28">
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[12px] text-slate-200">Ausgewählte Arbeiten</span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-white tracking-tight">Impact, der sichtbar wird</h2>
          <p className="mt-3 text-slate-300">Ein kurzer Einblick in Projekte, die wir in Strategie, Design und Produktion umgesetzt haben.</p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {projects.map((p, idx) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] p-4 backdrop-blur"
            >
              <motion.div style={{ rotateX: tilt }} className="relative">
                <div className="aspect-[4/3] rounded-xl bg-[radial-gradient(60%_60%_at_50%_50%,rgba(168,85,247,0.25),rgba(59,130,246,0.2))] border border-white/10" />
              </motion.div>
              <div className="mt-4">
                <div className="text-[12px] uppercase tracking-wider text-slate-300/80">{p.tag}</div>
                <div className="mt-1 text-white font-semibold">{p.title}</div>
                <div className="mt-2 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[12px] text-slate-200">{p.result}</div>
              </div>
              <div className="pointer-events-none absolute -inset-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(40%_40%_at_30%_20%,rgba(168,85,247,0.25),transparent_60%)]" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
