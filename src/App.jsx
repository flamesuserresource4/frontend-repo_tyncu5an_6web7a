import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Showcase from './components/Showcase'
import Process from './components/Process'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-fuchsia-500/30 selection:text-white relative overflow-x-clip">
      {/* Global ambient background */}
      <div className="pointer-events-none fixed inset-0 -z-20">
        {/* Aurora beams */}
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[60rem] w-[60rem] bg-[conic-gradient(from_90deg_at_50%_50%,rgba(168,85,247,0.15),rgba(59,130,246,0.08),transparent_60%)] blur-3xl" />
        {/* Grid overlay */}
        <svg className="absolute inset-0 h-full w-full opacity-[0.08]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
        {/* Noise texture */}
        <div className="absolute inset-0 [background-image:radial-gradient(transparent,rgba(2,6,23,0.6)),url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.15] mix-blend-soft-light" />
      </div>

      <Navbar />

      <main>
        <Hero />
        <Services />
        <Showcase />
        <Process />
        <CTA />
      </main>

      <footer className="relative border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400">
          <div className="text-sm">© {new Date().getFullYear()} Weitblick Studio • Crafted with strategy, design & motion</div>
          <div className="text-sm">Impressum • Datenschutz</div>
        </div>
      </footer>
    </div>
  )
}

export default App
