import { motion } from 'framer-motion'
import { Eye, EyeOff, Moon, Sun, Menu, X, Map, BookOpen, Scale, Brain, Trophy, Compass, Sparkles, Target, Layers, GraduationCap } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useApp } from '../context/AppContext'

const sections = [
  { id: 'inicio', label: 'Inicio', icon: Sparkles },
  { id: 'mapa', label: 'Mapa del libro', icon: Map },
  { id: 'comparador', label: 'Padre rico vs pobre', icon: Scale },
  { id: 'carrera', label: 'Carrera de ratas', icon: Compass },
  { id: 'clasificador', label: 'Activos vs pasivos', icon: Layers },
  { id: 'lecciones', label: 'Las 6 lecciones', icon: BookOpen },
  { id: 'obstaculos', label: 'Obstáculos', icon: Brain },
  { id: 'quiz', label: 'Mini quiz', icon: Trophy },
  { id: 'plan', label: 'Plan de 7 días', icon: Target },
  { id: 'glosario', label: 'Glosario', icon: GraduationCap },
]

export default function Navigation() {
  const { theme, toggleTheme, focusMode, toggleFocus, progressPct } = useApp()
  const [activeId, setActiveId] = useState('inicio')
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveId(e.target.id)
        })
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 },
    )
    sections.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    setMobileOpen(false)
  }

  return (
    <>
      {/* Top bar */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled ? 'backdrop-blur-xl bg-ink-950/70 border-b border-white/5' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-14 flex items-center gap-3">
          <button
            onClick={() => scrollTo('inicio')}
            className="flex items-center gap-2 group focus-ring rounded-lg pr-2"
            aria-label="Inicio"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-gold-400 to-ember-500 grid place-items-center font-display font-bold text-ink-950 shadow-glow-gold">
              $
            </div>
            <div className="hidden sm:block">
              <div className="font-display font-semibold text-sm leading-none">Padre Rico, Padre Pobre</div>
              <div className="text-[10px] uppercase tracking-widest text-white/40 leading-none mt-1">explicado visualmente</div>
            </div>
          </button>

          <div className="flex-1" />

          {/* Progress chip */}
          <div className="hidden md:flex items-center gap-2 pr-2">
            <div className="text-xs text-white/50">Progreso</div>
            <div className="w-32 h-2 rounded-full bg-white/10 overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-gold-400 to-green-400"
                initial={{ width: 0 }}
                animate={{ width: `${progressPct}%` }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
              />
            </div>
            <div className="text-xs font-medium text-gold-300 w-9 text-right">{progressPct}%</div>
          </div>

          <button
            onClick={toggleFocus}
            className="btn-ghost !px-2.5 !py-2 focus-ring"
            aria-label={focusMode ? 'Salir de modo enfoque' : 'Activar modo enfoque'}
            title="Modo enfoque"
          >
            {focusMode ? <EyeOff size={16} /> : <Eye size={16} />}
            <span className="hidden lg:inline text-xs">Enfoque</span>
          </button>
          <button
            onClick={toggleTheme}
            className="btn-ghost !px-2.5 !py-2 focus-ring"
            aria-label="Cambiar tema"
            title="Tema"
          >
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button
            className="md:hidden btn-ghost !px-2.5 !py-2 focus-ring"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Menú"
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden border-t border-white/5 bg-ink-900/95 backdrop-blur-xl"
          >
            <ul className="px-3 py-3 grid grid-cols-2 gap-1.5">
              {sections.map(({ id, label, icon: Icon }) => (
                <li key={id}>
                  <button
                    onClick={() => scrollTo(id)}
                    className={`w-full flex items-center gap-2 text-left text-sm rounded-lg px-3 py-2 ${
                      activeId === id ? 'bg-gold-400/10 text-gold-200' : 'text-white/70 hover:bg-white/5'
                    }`}
                  >
                    <Icon size={14} />
                    <span className="truncate">{label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </header>

      {/* Desktop sidebar */}
      <aside className="hidden lg:flex fixed top-1/2 -translate-y-1/2 left-3 z-30 focus-hide">
        <nav className="card !bg-ink-900/80 !border-white/5 !p-2 flex flex-col gap-1" aria-label="Secciones">
          {sections.map(({ id, label, icon: Icon }) => {
            const active = activeId === id
            return (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                title={label}
                aria-label={label}
                className={`group relative grid place-items-center w-10 h-10 rounded-lg transition-all focus-ring ${
                  active ? 'bg-gold-400/15 text-gold-200' : 'text-white/50 hover:text-white hover:bg-white/5'
                }`}
              >
                <Icon size={16} />
                <span className="absolute left-full ml-3 px-2 py-1 rounded-md bg-ink-900 border border-white/10 text-xs whitespace-nowrap opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all pointer-events-none">
                  {label}
                </span>
                {active && (
                  <motion.div
                    layoutId="nav-dot"
                    className="absolute -right-1 top-1/2 -translate-y-1/2 w-1 h-6 rounded-full bg-gold-300"
                  />
                )}
              </button>
            )
          })}
        </nav>
      </aside>
    </>
  )
}
