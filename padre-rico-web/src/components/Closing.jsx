import { motion } from 'framer-motion'
import { Quote, RotateCcw, Download } from 'lucide-react'
import { useApp } from '../context/AppContext'
import { finalGuidelines } from '../data/bookData'

export default function Closing() {
  const { resetProgress, progressPct, quizBest, completedLessons, understoodObstacles, classifierAnswered } = useApp()

  const downloadSummary = () => {
    const lessonsDone = Object.entries(completedLessons).filter(([, v]) => v).map(([k]) => k).join(', ') || 'ninguna'
    const obsDone = Object.entries(understoodObstacles).filter(([, v]) => v).map(([k]) => k).join(', ') || 'ninguno'
    const classCorrect = Object.values(classifierAnswered).filter(Boolean).length
    const text = `Padre Rico, Padre Pobre — Resumen personal
========================================

Progreso global: ${progressPct}%
Lecciones marcadas como entendidas: ${lessonsDone}
Obstáculos marcados como entendidos: ${obsDone}
Aciertos en Activo/Pasivo: ${classCorrect}/12
Mejor marca en quiz: ${quizBest ? quizBest.pct + '%' : '—'}

Las 6 lecciones clave
- L1 Los ricos no trabajan por dinero — sal del bucle gano/gasto
- L2 Activo vs Pasivo — define lo que mete dinero, no lo que parece caro
- L3 Ocúpate de tu propio negocio — construye una columna de activos
- L4 Estructuras e impuestos — aprende las reglas que casi nadie aprende
- L5 Los ricos inventan el dinero — entrena el ojo para ver oportunidades
- L6 Trabaja para aprender — habilidades > sueldo en los primeros años

5 obstáculos
- Miedo, cinismo, pereza, malos hábitos, arrogancia

Frase para llevar
"No se trata de hacerte rico mañana. Se trata de dejar de ir a ciegas."

Nota: este contenido es educativo. No es asesoramiento financiero, fiscal ni legal.`
    const blob = new Blob([text], { type: 'text/plain;charset=utf-8' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'padre-rico-resumen.txt'
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  return (
    <section id="cierre" className="relative px-4 sm:px-6 py-20 sm:py-28">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Quote className="mx-auto text-gold-400" />
          <h2 className="mt-5 font-display font-bold text-3xl sm:text-5xl text-balance leading-tight">
            No se trata de hacerte rico mañana.
            <br />
            <span className="gradient-text">Se trata de dejar de ir a ciegas.</span>
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-white/70 text-balance leading-relaxed">
            El libro no promete riqueza rápida. Promete claridad mental, hábitos sostenibles y responsabilidad financiera. Cada decisión pequeña construye una dirección.
          </p>
        </motion.div>

        {/* Final guidelines */}
        <div className="mt-12 grid sm:grid-cols-2 gap-3 text-left">
          {finalGuidelines.map((g, i) => (
            <motion.div
              key={g.t}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.04, duration: 0.35 }}
              className="card p-4"
            >
              <div className="flex items-baseline gap-2">
                <span className="font-display font-bold text-gold-300 text-sm">{String(i + 1).padStart(2, '0')}</span>
                <div className="font-display font-semibold">{g.t}</div>
              </div>
              <p className="text-sm text-white/70 mt-1 leading-relaxed">{g.d}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap gap-3 justify-center">
          <button onClick={downloadSummary} className="btn-primary focus-ring">
            <Download size={14} /> Descargar mi resumen
          </button>
          <button
            onClick={() => {
              if (confirm('¿Reiniciar todo tu progreso (lecciones, quiz, plan)?')) {
                resetProgress()
                document.getElementById('inicio')?.scrollIntoView({ behavior: 'smooth' })
              }
            }}
            className="btn-ghost focus-ring"
          >
            <RotateCcw size={14} /> Reiniciar recorrido
          </button>
        </div>

        <p className="mt-10 text-xs text-white/35 max-w-md mx-auto">
          Esta web es una guía visual basada en "Padre Rico, Padre Pobre" de Robert Kiyosaki. Contenido educativo, no asesoramiento financiero, fiscal ni legal.
        </p>
      </div>
    </section>
  )
}
