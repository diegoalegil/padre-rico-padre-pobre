import { motion } from 'framer-motion'
import { Check, Clock, Flame, BookOpen, BrainCircuit, ScrollText, Sparkles } from 'lucide-react'
import SectionHeader from './SectionHeader'
import { lessons } from '../data/bookData'
import { useApp } from '../context/AppContext'

const chapters = [
  {
    id: 'intro',
    title: 'Introducción',
    idea: 'La escuela enseña a ganar dinero. No enseña a usarlo.',
    icon: ScrollText,
    color: 'from-white/10 to-white/0',
    time: 4,
    difficulty: 'Fácil',
    targetId: 'comparador',
  },
  {
    id: 'cap1',
    title: 'Cap. 1 — Dos padres, dos mentalidades',
    idea: 'Mismo problema, dos formas de pensarlo. La elegida moldea tu vida.',
    icon: BrainCircuit,
    color: 'from-gold-400/15 to-transparent',
    time: 5,
    difficulty: 'Fácil',
    targetId: 'comparador',
  },
  ...lessons.map((l) => ({
    id: l.id,
    title: `Lección ${l.number} — ${l.title}`,
    idea: l.short,
    icon: BookOpen,
    color: 'from-gold-400/10 to-transparent',
    time: l.timeMin,
    difficulty: l.difficulty,
    targetId: `leccion-${l.id}`,
  })),
  {
    id: 'obs',
    title: 'Obstáculos mentales',
    idea: 'Miedo, cinismo, pereza, malos hábitos y arrogancia.',
    icon: Flame,
    color: 'from-ember-500/15 to-transparent',
    time: 6,
    difficulty: 'Media',
    targetId: 'obstaculos',
  },
  {
    id: 'start',
    title: 'Listo para empezar',
    idea: '10 pasos para despertar tu genio financiero.',
    icon: Sparkles,
    color: 'from-green-400/15 to-transparent',
    time: 7,
    difficulty: 'Media',
    targetId: 'plan',
  },
]

export default function BookMap() {
  const { completedLessons } = useApp()

  return (
    <section id="mapa" className="relative px-4 sm:px-6 py-16 sm:py-24">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="Mapa del libro"
          title="Todo el libro, en una vista"
          subtitle="Cada parada es una idea concreta. Pincha cualquiera para saltar a su explicación visual."
        />

        <div className="mt-10 relative">
          {/* Vertical line */}
          <div className="absolute left-4 sm:left-6 top-4 bottom-4 w-px bg-gradient-to-b from-transparent via-white/15 to-transparent" />

          <ol className="space-y-4">
            {chapters.map((c, i) => {
              const Icon = c.icon
              const done = completedLessons[c.id]
              return (
                <motion.li
                  key={c.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.04 }}
                >
                  <button
                    onClick={() => {
                      const el = document.getElementById(c.targetId)
                      if (el) el.scrollIntoView({ behavior: 'smooth' })
                    }}
                    className="group w-full text-left flex items-stretch gap-4 sm:gap-5 focus-ring rounded-2xl"
                  >
                    <div className="relative z-10 shrink-0">
                      <div
                        className={`w-9 h-9 sm:w-12 sm:h-12 rounded-2xl grid place-items-center border ${
                          done
                            ? 'bg-green-500/20 border-green-400/50 text-green-300'
                            : 'bg-ink-800 border-white/10 text-gold-300'
                        } group-hover:scale-110 transition-transform shadow-card`}
                      >
                        {done ? <Check size={18} /> : <Icon size={18} />}
                      </div>
                    </div>
                    <div
                      className={`card hover-lift p-4 sm:p-5 flex-1 bg-gradient-to-br ${c.color}`}
                    >
                      <div className="flex items-start gap-3 flex-wrap">
                        <h3 className="font-display font-semibold text-base sm:text-lg flex-1 min-w-0">
                          {c.title}
                        </h3>
                        <div className="flex items-center gap-2 shrink-0">
                          <span className="pill border-white/10 text-white/70 bg-white/5">
                            <Clock size={11} /> {c.time} min
                          </span>
                          <span className="pill border-white/10 text-white/60 bg-white/5">{c.difficulty}</span>
                        </div>
                      </div>
                      <p className="mt-2 text-sm text-white/65 leading-relaxed">{c.idea}</p>
                    </div>
                  </button>
                </motion.li>
              )
            })}
          </ol>
        </div>
      </div>
    </section>
  )
}
