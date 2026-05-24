import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Calendar, Check, Sparkles, ListChecks } from 'lucide-react'
import SectionHeader from './SectionHeader'
import { actionPlanTemplates } from '../data/bookData'

export default function ActionPlan() {
  const [selected, setSelected] = useState('worker')
  const [checked, setChecked] = useState({})

  const plan = actionPlanTemplates[selected]
  const doneCount = useMemo(
    () => plan.days.filter((d) => checked[`${selected}-${d.d}`]).length,
    [checked, plan, selected],
  )

  const toggle = (key) => setChecked((c) => ({ ...c, [key]: !c[key] }))

  return (
    <section id="plan" className="relative px-4 sm:px-6 py-16 sm:py-24">
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          eyebrow="Plan de 7 días"
          title="Pasos pequeños, hechos hoy"
          subtitle="Elige tu situación y verás un plan accionable. Marca los pasos según los haces."
        />

        {/* Profile picker */}
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-2">
          {Object.entries(actionPlanTemplates).map(([id, t]) => (
            <button
              key={id}
              onClick={() => setSelected(id)}
              className={`card hover-lift p-4 text-left transition flex items-center gap-3 ${
                selected === id ? '!border-gold-400/40 shadow-glow-gold' : ''
              }`}
            >
              <div className="text-2xl">{t.icon}</div>
              <div className="font-display font-semibold text-sm leading-tight">{t.label}</div>
            </button>
          ))}
        </div>

        {/* Plan */}
        <div className="mt-8 card p-5 sm:p-8">
          <div className="flex items-baseline justify-between flex-wrap gap-3 mb-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gold-400/15 border border-gold-400/30 grid place-items-center text-gold-200">
                <Calendar size={18} />
              </div>
              <div>
                <div className="eyebrow text-gold-300">Tu plan</div>
                <div className="font-display font-semibold">{plan.label}</div>
              </div>
            </div>
            <div className="text-sm">
              <span className="text-gold-300 font-semibold">{doneCount}</span>{' '}
              <span className="text-white/60">/ {plan.days.length} hechos</span>
            </div>
          </div>

          <div className="h-2 rounded-full bg-white/8 overflow-hidden mb-6">
            <motion.div
              className="h-full bg-gradient-to-r from-gold-400 to-green-400"
              initial={{ width: 0 }}
              animate={{ width: `${(doneCount / plan.days.length) * 100}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>

          <ol className="space-y-2.5">
            <AnimatePresence initial={false}>
              {plan.days.map((d) => {
                const key = `${selected}-${d.d}`
                const isDone = !!checked[key]
                return (
                  <motion.li
                    key={key}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    layout
                  >
                    <button
                      onClick={() => toggle(key)}
                      className={`group w-full text-left rounded-xl border p-3.5 flex items-start gap-3 transition focus-ring ${
                        isDone
                          ? 'border-green-400/30 bg-green-500/5'
                          : 'border-white/10 bg-white/5 hover:border-gold-400/30 hover:bg-gold-400/5'
                      }`}
                    >
                      <div
                        className={`mt-0.5 w-7 h-7 rounded-lg grid place-items-center shrink-0 font-display font-bold text-sm ${
                          isDone
                            ? 'bg-green-500/30 text-green-200 border border-green-400/40'
                            : 'bg-white/8 text-white/80 border border-white/15 group-hover:border-gold-400/40'
                        }`}
                      >
                        {isDone ? <Check size={14} /> : d.d}
                      </div>
                      <p
                        className={`text-sm leading-relaxed ${
                          isDone ? 'text-white/60 line-through' : 'text-white/90'
                        }`}
                      >
                        {d.t}
                      </p>
                    </button>
                  </motion.li>
                )
              })}
            </AnimatePresence>
          </ol>

          {doneCount === plan.days.length && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mt-6 rounded-2xl border border-green-400/30 bg-green-500/10 p-5 text-center"
            >
              <div className="text-3xl mb-1">🎉</div>
              <div className="font-display font-semibold text-green-100">¡Semana completa!</div>
              <p className="text-sm text-white/70 mt-1">
                Ya cumpliste tu plan. Cambia de perfil y empieza otro, o repite este la próxima semana subiendo el listón.
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  )
}
