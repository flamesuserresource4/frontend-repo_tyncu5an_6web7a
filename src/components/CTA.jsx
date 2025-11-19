import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section id="contact" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(40%_40%_at_80%_20%,rgba(59,130,246,0.18),transparent_60%)]" />
      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Bereit für Wachstum mit Weitblick?</h2>
          <p className="mt-3 text-slate-300 max-w-2xl mx-auto">Buchen Sie ein unverbindliches Erstgespräch. Wir prüfen Ihr Potenzial und entwickeln eine klare Roadmap zu mehr Sichtbarkeit und Umsatz.</p>

          <form onSubmit={(e) => e.preventDefault()} className="mt-8 grid sm:grid-cols-3 gap-3">
            <input placeholder="Ihr Name" className="col-span-1 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/40" />
            <input type="email" placeholder="E-Mail" className="col-span-1 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/40" />
            <button className="col-span-1 rounded-xl bg-gradient-to-r from-fuchsia-500 to-blue-500 px-5 py-3 text-white font-semibold shadow-[0_10px_30px_rgba(59,130,246,0.35)] hover:shadow-[0_10px_40px_rgba(168,85,247,0.45)] transition-all">
              Erstgespräch sichern
            </button>
          </form>

          <div className="mt-6 text-slate-400 text-sm">Antwort innerhalb von 24 Stunden • Begrenzte Projektplätze/Monat</div>
        </motion.div>
      </div>
    </section>
  )
}
