import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, X, Trophy, RotateCcw, ArrowRight, Sparkles } from 'lucide-react'
import SectionHeader from './SectionHeader'
import { quizQuestions } from '../data/bookData'
import { useApp } from '../context/AppContext'

export default function Quiz() {
  const { quizBest, recordQuiz } = useApp()
  const [i, setI] = useState(0)
  const [picked, setPicked] = useState(null)
  const [score, setScore] = useState(0)
  const [finished, setFinished] = useState(false)

  const q = quizQuestions[i]
  const total = quizQuestions.length

  const onPick = (idx) => {
    if (picked !== null) return
    setPicked(idx)
    if (idx === q.correct) setScore((s) => s + 1)
  }

  const onNext = () => {
    if (i + 1 >= total) {
      const final = score + (picked === q.correct ? 0 : 0) // already added
      setFinished(true)
      recordQuiz(final, total)
    } else {
      setPicked(null)
      setI((v) => v + 1)
    }
  }

  const restart = () => {
    setI(0)
    setPicked(null)
    setScore(0)
    setFinished(false)
  }

  const pct = Math.round((score / total) * 100)

  let message = 'Empieza de nuevo y verás cómo subes.'
  if (pct >= 90) message = '¡Modo Padre Rico! Has entendido lo importante. Ahora aplícalo.'
  else if (pct >= 70) message = 'Muy bien. Ya tienes el marco mental. Revisa lo que falló.'
  else if (pct >= 40) message = 'Vas por buen camino. Vuelve a las lecciones de las que fallaste.'
  else message = 'Sin drama: relee el mapa y vuelve. El libro entero ataca esto.'

  return (
    <section id="quiz" className="relative px-4 sm:px-6 py-16 sm:py-24">
      <div className="max-w-3xl mx-auto">
        <SectionHeader
          align="center"
          eyebrow="Mini quiz"
          title="¿Cuánto se te quedó?"
          subtitle="8 preguntas cortas. Sin trampa. Sin nota mala. Solo feedback."
        />

        <div className="mt-10">
          <AnimatePresence mode="wait">
            {!finished ? (
              <motion.div
                key={q.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="card p-6 sm:p-8"
              >
                <div className="flex items-center justify-between mb-5">
                  <div className="text-xs uppercase tracking-widest text-white/50">
                    Pregunta {i + 1} de {total}
                  </div>
                  <div className="text-xs text-gold-300">
                    Aciertos: {score}/{total}
                  </div>
                </div>

                <div className="h-1.5 rounded-full bg-white/8 overflow-hidden mb-6">
                  <motion.div
                    className="h-full bg-gradient-to-r from-gold-400 to-ember-500"
                    initial={{ width: 0 }}
                    animate={{ width: `${((i + (picked !== null ? 1 : 0)) / total) * 100}%` }}
                  />
                </div>

                <h3 className="font-display font-semibold text-xl sm:text-2xl text-balance">{q.q}</h3>

                <div className="mt-6 grid gap-2.5">
                  {q.options.map((opt, idx) => {
                    const isPicked = picked === idx
                    const isCorrect = idx === q.correct
                    const showResult = picked !== null
                    let cls = 'border-white/10 hover:bg-white/5 text-white/90'
                    if (showResult && isCorrect) cls = 'border-green-400/50 bg-green-500/10 text-green-100'
                    else if (showResult && isPicked && !isCorrect)
                      cls = 'border-ember-500/50 bg-ember-500/10 text-ember-100'
                    else if (showResult) cls = 'border-white/5 text-white/50 opacity-60'
                    return (
                      <button
                        key={idx}
                        onClick={() => onPick(idx)}
                        disabled={picked !== null}
                        className={`w-full text-left rounded-xl border px-4 py-3 transition focus-ring flex items-center justify-between gap-3 ${cls}`}
                      >
                        <span className="leading-relaxed">{opt}</span>
                        {showResult && isCorrect && <Check size={16} className="text-green-300 shrink-0" />}
                        {showResult && isPicked && !isCorrect && (
                          <X size={16} className="text-ember-400 shrink-0" />
                        )}
                      </button>
                    )
                  })}
                </div>

                <AnimatePresence>
                  {picked !== null && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-5 p-4 rounded-xl border border-gold-400/30 bg-gold-400/5 text-white/90 text-sm leading-relaxed"
                    >
                      <span className="text-gold-300 font-semibold">¿Por qué?</span> {q.explain}
                    </motion.div>
                  )}
                </AnimatePresence>

                {picked !== null && (
                  <div className="mt-5 flex justify-end">
                    <button onClick={onNext} className="btn-primary focus-ring">
                      {i + 1 >= total ? 'Ver resultado' : 'Siguiente'} <ArrowRight size={14} />
                    </button>
                  </div>
                )}
              </motion.div>
            ) : (
              <motion.div
                key="done"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                className="card p-8 sm:p-10 text-center"
              >
                <div className="mx-auto w-20 h-20 rounded-3xl bg-gradient-to-br from-gold-300 to-ember-500 grid place-items-center text-ink-950 shadow-glow-gold">
                  <Trophy size={28} />
                </div>
                <div className="mt-5 font-display font-bold text-4xl gradient-text">{pct}%</div>
                <div className="text-white/60 mt-1">
                  {score} de {total} aciertos {quizBest && quizBest.pct > pct && (
                    <span className="text-gold-300"> · mejor marca: {quizBest.pct}%</span>
                  )}
                </div>
                <p className="mt-5 text-white/85 max-w-md mx-auto leading-relaxed">{message}</p>

                <div className="mt-6 flex flex-wrap justify-center gap-3">
                  <button onClick={restart} className="btn-ghost focus-ring">
                    <RotateCcw size={14} /> Repetir
                  </button>
                  <a href="#lecciones" className="btn-primary focus-ring">
                    <Sparkles size={14} /> Repasar lecciones
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
