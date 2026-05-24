import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, X, RotateCcw, ArrowRight, TrendingUp, TrendingDown } from 'lucide-react'
import SectionHeader from './SectionHeader'
import { assetLiabilityItems } from '../data/bookData'
import { useApp } from '../context/AppContext'

export default function AssetLiabilityClassifier() {
  const { classifierAnswered, recordClassifier } = useApp()
  const [index, setIndex] = useState(0)
  const [feedback, setFeedback] = useState(null)

  const current = assetLiabilityItems[index]
  const allCount = assetLiabilityItems.length
  const correctCount = useMemo(
    () => Object.values(classifierAnswered).filter(Boolean).length,
    [classifierAnswered],
  )

  const answer = (choice) => {
    if (feedback) return
    const correct = choice === current.truth
    recordClassifier(current.id, correct)
    setFeedback({ correct, your: choice })
  }

  const next = () => {
    setFeedback(null)
    setIndex((i) => (i + 1) % allCount)
  }

  const reset = () => {
    setFeedback(null)
    setIndex(0)
    // Note: don't wipe classifierAnswered to preserve progress; user can revisit
  }

  return (
    <section id="clasificador" className="relative px-4 sm:px-6 py-16 sm:py-24">
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          eyebrow="Activos vs Pasivos"
          title="Clasifícalos tú"
          subtitle="Una idea, un caso. ¿Mete dinero en tu bolsillo o lo saca? Recibirás explicación al instante."
        />

        <div className="mt-10 grid sm:grid-cols-3 gap-3">
          <Stat icon={TrendingUp} label="Activo" desc="Te genera dinero" tone="green" />
          <Stat icon={TrendingDown} label="Pasivo" desc="Te cuesta dinero" tone="red" />
          <Stat label="Tu progreso" desc={`${correctCount} / ${allCount} aciertos`} tone="gold" />
        </div>

        <div className="mt-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.3 }}
              className="card p-6 sm:p-10 text-center"
            >
              <div className="text-7xl sm:text-8xl mb-4">{current.emoji}</div>
              <h3 className="font-display font-semibold text-2xl sm:text-3xl">{current.label}</h3>
              <p className="mt-2 text-white/50 text-sm">¿Mete o saca dinero de tu bolsillo?</p>

              {!feedback ? (
                <div className="mt-6 flex flex-wrap gap-3 justify-center">
                  <button
                    onClick={() => answer('asset')}
                    className="btn focus-ring bg-green-500/15 border border-green-400/40 text-green-200 hover:bg-green-500/25"
                  >
                    <TrendingUp size={16} /> Activo
                  </button>
                  <button
                    onClick={() => answer('liability')}
                    className="btn focus-ring bg-ember-500/15 border border-ember-500/40 text-ember-400 hover:bg-ember-500/25"
                  >
                    <TrendingDown size={16} /> Pasivo
                  </button>
                </div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-6 max-w-xl mx-auto text-left"
                >
                  <div
                    className={`pill border-2 mb-3 ${
                      feedback.correct
                        ? 'border-green-400/50 bg-green-400/10 text-green-200'
                        : 'border-ember-500/50 bg-ember-500/10 text-ember-400'
                    }`}
                  >
                    {feedback.correct ? <Check size={12} /> : <X size={12} />}
                    {feedback.correct ? '¡Correcto!' : `Era ${current.truth === 'asset' ? 'activo' : 'pasivo'}`}
                  </div>
                  <p className="text-white/85 leading-relaxed">{current.explain}</p>

                  <div className="mt-5 flex flex-wrap gap-2 justify-between">
                    <button onClick={reset} className="btn-ghost focus-ring">
                      <RotateCcw size={14} /> Empezar de nuevo
                    </button>
                    <button onClick={next} className="btn-primary focus-ring">
                      Siguiente <ArrowRight size={14} />
                    </button>
                  </div>
                </motion.div>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Mini progress dots */}
          <div className="mt-5 flex flex-wrap justify-center gap-1.5">
            {assetLiabilityItems.map((it, i) => {
              const answered = it.id in classifierAnswered
              const correct = classifierAnswered[it.id]
              const isCurrent = i === index
              return (
                <button
                  key={it.id}
                  onClick={() => {
                    setIndex(i)
                    setFeedback(null)
                  }}
                  aria-label={`Ir a ${it.label}`}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    isCurrent
                      ? 'bg-gold-300 scale-125'
                      : answered
                      ? correct
                        ? 'bg-green-400/70'
                        : 'bg-ember-500/70'
                      : 'bg-white/15 hover:bg-white/30'
                  }`}
                />
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

function Stat({ icon: Icon, label, desc, tone }) {
  const tones = {
    green: 'border-green-400/30 bg-green-500/5 text-green-300',
    red: 'border-ember-500/30 bg-ember-500/5 text-ember-400',
    gold: 'border-gold-400/30 bg-gold-400/5 text-gold-200',
  }
  return (
    <div className={`card p-4 border ${tones[tone]} flex items-center gap-3`}>
      {Icon && (
        <div className="w-10 h-10 rounded-xl bg-white/10 grid place-items-center">
          <Icon size={18} />
        </div>
      )}
      <div>
        <div className="font-display font-semibold">{label}</div>
        <div className="text-xs text-white/60">{desc}</div>
      </div>
    </div>
  )
}
