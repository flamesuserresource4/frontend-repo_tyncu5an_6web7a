import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Showcase from './components/Showcase'
import Process from './components/Process'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <div className="fixed inset-0 -z-0 bg-[radial-gradient(80%_60%_at_50%_0%,rgba(99,102,241,0.15),transparent_60%)]" />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Showcase />
        <Process />
        <CTA />
      </main>
      <footer className="relative border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-slate-400 text-sm">© {new Date().getFullYear()} Weitblick Studio. Alle Rechte vorbehalten.</div>
          <div className="text-slate-400 text-sm">Impressum • Datenschutz</div>
        </div>
      </footer>
    </div>
  )
}

export default App
