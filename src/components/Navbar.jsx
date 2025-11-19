import { useState, useEffect } from 'react'
import { Menu, X, Sparkles } from 'lucide-react'
import { motion, useScroll, useSpring } from 'framer-motion'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  // Scroll progress bar
  const { scrollYProgress } = useScroll()
  const width = useSpring(scrollYProgress, { stiffness: 120, damping: 20 })

  const navItems = [
    { label: 'Leistungen', href: '#services' },
    { label: 'Projekte', href: '#showcase' },
    { label: 'Ablauf', href: '#process' },
    { label: 'Kontakt', href: '#contact' },
  ]

  // lock body when mobile nav open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* progress bar */}
      <motion.div style={{ scaleX: width }} className="origin-left h-0.5 bg-gradient-to-r from-fuchsia-500 via-purple-500 to-blue-500" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="mt-6 rounded-2xl border border-white/10 bg-slate-900/70 backdrop-blur supports-[backdrop-filter]:bg-slate-900/50 shadow-[0_10px_40px_rgba(0,0,0,0.35)]">
          <div className="flex items-center justify-between px-5 py-4">
            <a href="#top" className="group relative flex items-center gap-3">
              <div className="relative h-8 w-8">
                <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-fuchsia-500 to-blue-500" />
                <div className="absolute -inset-2 rounded-xl bg-fuchsia-500/30 blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <span className="text-white font-semibold tracking-tight text-lg flex items-center gap-2">
                Weitblick Studio
                <Sparkles size={16} className="text-fuchsia-300/80" />
              </span>
            </a>

            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((n) => (
                <a key={n.href} href={n.href} className="relative text-slate-300 hover:text-white transition-colors">
                  <span>{n.label}</span>
                  <span className="pointer-events-none absolute -bottom-1 left-0 h-px w-0 bg-gradient-to-r from-fuchsia-400 to-blue-400 transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
              <a href="#contact" className="relative inline-flex items-center rounded-xl bg-gradient-to-r from-fuchsia-500 to-blue-500 px-4 py-2 text-white font-medium">
                <span className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-fuchsia-500 to-blue-500 blur opacity-30" />
                <span className="relative">Kostenloses Erstgespräch</span>
              </a>
            </nav>

            <button onClick={() => setOpen(!open)} className="md:hidden text-white p-2">
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

          {open && (
            <div className="md:hidden border-t border-white/10 px-5 py-4">
              <div className="flex flex-col gap-4">
                {navItems.map((n) => (
                  <a key={n.href} href={n.href} className="text-slate-300 hover:text-white transition-colors" onClick={() => setOpen(false)}>
                    {n.label}
                  </a>
                ))}
                <a href="#contact" onClick={() => setOpen(false)} className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-fuchsia-500 to-blue-500 px-4 py-2 text-white font-medium">
                  Erstgespräch buchen
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
