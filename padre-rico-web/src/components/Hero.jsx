import { motion } from 'framer-motion'
import { ArrowDown, Map, Focus, Sparkles } from 'lucide-react'
import { useApp } from '../context/AppContext'

const stat = (n, l) => (
  <div className="text-center min-w-0">
    <div className="font-display font-bold text-2xl sm:text-3xl gradient-text">{n}</div>
    <div className="text-[10px] sm:text-[11px] uppercase tracking-widest text-white/50 mt-1 truncate">{l}</div>
  </div>
)

const scrollTo = (id) => {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export default function Hero() {
  const { toggleFocus, focusMode } = useApp()

  return (
    <section id="inicio" className="relative pt-24 sm:pt-28 pb-12 sm:pb-20 px-4 sm:px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto relative">
        {/* Floating coin / shapes */}
        <div className="absolute -top-10 right-0 hidden md:block focus-hide">
          <motion.div
            animate={{ y: [0, -12, 0], rotate: [0, 4, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="w-20 h-20 rounded-full bg-gradient-to-br from-gold-300 to-gold-600 grid place-items-center font-display font-bold text-3xl text-ink-950 shadow-glow-gold border-2 border-gold-200/40"
          >
            $
          </motion.div>
        </div>
        <div className="absolute top-20 left-1 sm:left-10 hidden md:block focus-hide">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
            className="w-14 h-14 rounded-2xl bg-gradient-to-br from-green-400 to-green-600 grid place-items-center text-2xl shadow-glow-green border border-green-300/30 rotate-6"
          >
            🏠
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="pill border-gold-400/30 bg-gold-400/5 text-gold-200">
            <Sparkles size={12} />
            Guía interactiva del libro
          </span>
          <h1 className="mt-5 font-display font-bold text-balance text-4xl sm:text-6xl lg:text-7xl leading-[1.05]">
            Padre Rico,
            <br />
            Padre Pobre
            <span className="inline-block ml-2 align-middle">
              <span className="gradient-text">— explicado visualmente</span>
            </span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-white/70 leading-relaxed text-balance">
            Una guía para entender dinero, activos, pasivos y libertad financiera{' '}
            <span className="text-gold-200">sin tragarte bloques eternos de texto</span>. Lecturas cortas, módulos interactivos y progreso visible.
          </p>

          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            <button onClick={() => scrollTo('mapa')} className="btn-primary focus-ring">
              <ArrowDown size={16} />
              Empezar recorrido
            </button>
            <button onClick={() => scrollTo('mapa')} className="btn-ghost focus-ring">
              <Map size={16} />
              Ver mapa del libro
            </button>
            <button onClick={toggleFocus} className="btn-ghost focus-ring">
              <Focus size={16} />
              {focusMode ? 'Salir del modo enfoque' : 'Modo enfoque'}
            </button>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-2 sm:gap-4 max-w-md mx-auto">
            {stat('6', 'Lecciones')}
            {stat('5', 'Obstáculos')}
            {stat('7', 'Días')}
          </div>
        </motion.div>

        {/* Disclaimer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-12 max-w-2xl mx-auto text-center text-xs text-white/40 px-4"
        >
          Contenido educativo basado en el libro de Robert Kiyosaki. No es asesoramiento financiero, fiscal ni legal.
        </motion.div>
      </div>
    </section>
  )
}
