import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Leistungen', href: '#services' },
    { label: 'Projekte', href: '#showcase' },
    { label: 'Ablauf', href: '#process' },
    { label: 'Kontakt', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mt-6 rounded-2xl border border-white/10 bg-slate-900/70 backdrop-blur supports-[backdrop-filter]:bg-slate-900/50 shadow-lg">
          <div className="flex items-center justify-between px-5 py-4">
            <a href="#top" className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-fuchsia-500 to-blue-500 shadow-[0_0_30px_rgba(168,85,247,0.6)]" />
              <span className="text-white font-semibold tracking-tight text-lg">Weitblick Studio</span>
            </a>

            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((n) => (
                <a key={n.href} href={n.href} className="text-slate-300 hover:text-white transition-colors">
                  {n.label}
                </a>
              ))}
              <a href="#contact" className="inline-flex items-center rounded-xl bg-gradient-to-r from-fuchsia-500 to-blue-500 px-4 py-2 text-white font-medium shadow-[0_8px_30px_rgba(59,130,246,0.35)] hover:shadow-[0_8px_40px_rgba(168,85,247,0.45)] transition-shadow">
                Kostenloses Erstgespräch
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
