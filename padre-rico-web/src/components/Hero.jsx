import { motion } from 'framer-motion'
import { ArrowDown, ArrowUpRight, CircleDollarSign, Focus, Home, Map, ShieldCheck, Sparkles, TrendingUp, Wallet } from 'lucide-react'
import { useApp } from '../context/AppContext'

const stat = (n, l) => (
  <div className="min-w-0 rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-center shadow-inner-soft">
    <div className="font-display font-bold text-2xl sm:text-3xl gradient-text">{n}</div>
    <div className="mt-1 truncate text-[10px] uppercase tracking-widest text-white/50 sm:text-[11px]">{l}</div>
  </div>
)

const cashflowBars = [36, 52, 44, 68, 58, 82]

const routeItems = [
  { label: 'Mentalidad', value: '2 enfoques', icon: Sparkles },
  { label: 'Activos', value: '+ingreso', icon: TrendingUp },
  { label: 'Riesgo', value: 'controlado', icon: ShieldCheck },
]

const scrollTo = (id) => {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export default function Hero() {
  const { toggleFocus, focusMode } = useApp()

  return (
    <section id="inicio" className="relative overflow-hidden px-4 pb-10 pt-20 sm:px-6 sm:pb-14 sm:pt-24">
      <div className="hero-grid focus-hide" aria-hidden="true" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[minmax(0,1fr)_430px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center lg:mx-0 lg:text-left"
        >
          <span className="pill border-gold-400/30 bg-gold-400/5 text-gold-200 shadow-inner-soft">
            <Sparkles size={12} />
            Guía interactiva del libro
          </span>
          <h1 className="mt-5 font-display text-4xl font-bold leading-[1.04] text-balance sm:text-6xl lg:text-7xl">
            <span className="block">Padre Rico, Padre Pobre</span>
            <span className="gradient-text block">explicado visualmente</span>
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-white/70 text-balance sm:text-xl">
            Una guía para entender dinero, activos, pasivos y libertad financiera{' '}
            <span className="text-gold-200">sin tragarte bloques eternos de texto</span>. Lecturas cortas, módulos interactivos y progreso visible.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
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

          <div className="mx-auto mt-8 grid max-w-md grid-cols-3 gap-2 sm:gap-3 lg:mx-0">
            {stat('6', 'Lecciones')}
            {stat('5', 'Obstáculos')}
            {stat('7', 'Días')}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mx-auto mt-8 max-w-2xl text-center text-xs text-white/40 lg:mx-0 lg:text-left"
          >
            Contenido educativo basado en el libro de Robert Kiyosaki. No es asesoramiento financiero, fiscal ni legal.
          </motion.div>
        </motion.div>

        <motion.aside
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="hero-board focus-hide"
          aria-label="Resumen visual del recorrido"
        >
          <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-4">
            <div>
              <div className="text-xs uppercase tracking-[0.18em] text-white/45">Mapa mental</div>
              <div className="mt-1 font-display text-xl font-semibold">De salario a activos</div>
            </div>
            <div className="grid h-12 w-12 place-items-center rounded-lg bg-gradient-to-br from-gold-300 to-gold-500 text-ink-950 shadow-glow-gold">
              <CircleDollarSign size={26} />
            </div>
          </div>

          <div className="mt-5 grid grid-cols-3 gap-3">
            {routeItems.map(({ label, value, icon: Icon }) => (
              <div key={label} className="rounded-lg border border-white/10 bg-white/[0.04] p-3">
                <Icon className="text-gold-300" size={16} />
                <div className="mt-3 text-[10px] uppercase tracking-widest text-white/45">{label}</div>
                <div className="mt-1 truncate text-sm font-semibold text-white/90">{value}</div>
              </div>
            ))}
          </div>

          <div className="mt-5 rounded-lg border border-white/10 bg-ink-950/45 p-4">
            <div className="mb-4 flex items-center justify-between gap-3">
              <div>
                <div className="text-xs uppercase tracking-[0.18em] text-white/45">Flujo mensual</div>
                <div className="mt-1 text-sm text-white/70">Cuando los activos empiezan a empujar.</div>
              </div>
              <div className="flex items-center gap-1.5 rounded-full border border-green-400/30 bg-green-400/10 px-2.5 py-1 text-xs font-medium text-green-300">
                <ArrowUpRight size={13} />
                +18%
              </div>
            </div>
            <div className="flex h-28 items-end gap-2">
              {cashflowBars.map((height, index) => (
                <motion.div
                  key={height}
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{ duration: 0.65, delay: 0.2 + index * 0.06, ease: 'easeOut' }}
                  className="flex-1 origin-bottom rounded-t-md bg-gradient-to-t from-gold-500 to-gold-200 shadow-soft"
                  style={{ height: `${height}%` }}
                />
              ))}
            </div>
          </div>

          <div className="mt-5 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-white/10 bg-white/10">
            <div className="bg-green-400/10 p-4">
              <div className="flex items-center gap-2 text-green-300">
                <TrendingUp size={16} />
                <span className="text-xs uppercase tracking-widest">Activo</span>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-white/80">Mete dinero en tu bolsillo.</p>
            </div>
            <div className="bg-ember-500/10 p-4">
              <div className="flex items-center gap-2 text-ember-400">
                <Wallet size={16} />
                <span className="text-xs uppercase tracking-widest">Pasivo</span>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-white/80">Saca dinero de tu bolsillo.</p>
            </div>
          </div>

          <div className="mt-5 flex items-center justify-between gap-4 rounded-lg border border-gold-400/20 bg-gold-400/10 p-4">
            <div className="flex items-center gap-3">
              <div className="grid h-9 w-9 place-items-center rounded-lg bg-gold-400/15 text-gold-200">
                <Home size={18} />
              </div>
              <div>
                <div className="text-sm font-semibold text-white/90">Siguiente parada</div>
                <div className="text-xs text-white/55">Mapa del libro</div>
              </div>
            </div>
            <button onClick={() => scrollTo('mapa')} className="focus-ring rounded-lg p-2 text-gold-200 hover:bg-gold-400/10" aria-label="Ir al mapa del libro">
              <ArrowDown size={18} />
            </button>
          </div>
        </motion.aside>
      </div>
    </section>
  )
}
