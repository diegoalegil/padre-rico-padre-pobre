import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ChevronDown,
  Clock,
  Sparkles,
  Lightbulb,
  Target,
  Quote,
  Check,
  AlertTriangle,
  Wand2,
} from 'lucide-react'
import SectionHeader from './SectionHeader'
import { lessons } from '../data/bookData'
import { useApp } from '../context/AppContext'

const lifeContexts = [
  { id: 'student', label: 'Soy estudiante', emoji: '📚' },
  { id: 'firstjob', label: 'Primer sueldo', emoji: '💼' },
  { id: 'wantcar', label: 'Quiero comprar coche', emoji: '🚗' },
  { id: 'spending', label: 'Gasto todo lo que gano', emoji: '💸' },
  { id: 'biz', label: 'Quiero montar negocio', emoji: '🚀' },
]

const examplesByLesson = {
  l1: {
    student: 'Trabajar en becas o prácticas que paguen menos pero te enseñen ventas, programación o gestión gana a un trabajo de verano que solo paga.',
    firstjob: 'No subas tu nivel de vida al ritmo del primer sueldo. Mantén tu vida de estudiante 6 meses y verás el bucle desde fuera.',
    wantcar: 'Antes de financiar el coche, pregúntate: ¿qué activo me podría comprar con esa misma cuota mensual?',
    spending: 'No es que ganes poco. Es que el bucle "gano → gasto" está activo. Empieza por mirar adónde se va, sin tocar nada todavía.',
    biz: 'Tu primer negocio no es para forrarte. Es para entender el bucle desde el otro lado de la mesa.',
  },
  l2: {
    student: 'Un curso técnico que te haga cobrar 5€/h más es un activo. Una suscripción cool que no usas es un pasivo.',
    firstjob: 'Tu coche, tu casa con hipoteca y tu armario nuevo son pasivos. Tu fondo indexado mensual es un activo.',
    wantcar: 'Si necesitas el coche para trabajar y subir tus ingresos → puede valer la pena. Si es por estatus → pasivo puro.',
    spending: 'Identifica tus 3 pasivos más grandes. Probablemente 1 puede irse esta semana sin que lo notes.',
    biz: 'Una herramienta de 800€ que te hace facturar 200€/mes = activo. Una oficina cara solo para impresionar = pasivo.',
  },
  l3: {
    student: 'Sigue estudiando. Pero usa parte de tus ingresos extra (becas, trabajos) para empezar a invertir aunque sea 10€/mes.',
    firstjob: 'No esperes a "ganar suficiente". Empieza pequeño. El hábito vale más que la cantidad inicial.',
    wantcar: 'Compra el coche que necesites, no el que quieres exhibir. Esa diferencia, invertida, paga el siguiente coche solo.',
    spending: 'Págate primero. Aparta un % apenas cobras, antes de que llegue la nómina a la cuenta corriente.',
    biz: 'Mantén tu trabajo mientras montas tu negocio. Saltar al vacío no es valentía, es presión innecesaria.',
  },
  l4: {
    student: 'Aprende sobre IRPF antes de tu primer empleo. Te ahorrará dinero el primer año.',
    firstjob: 'Estudia las deducciones que aplican a ti (transporte, formación...). Pocas personas las usan.',
    wantcar: 'Si lo usas para trabajar como autónomo, parte del coste puede ser deducible. Infórmate.',
    spending: 'No es solo gastar menos. Es saber qué gastos pueden hacerse desde la estructura correcta.',
    biz: 'Antes de facturar mucho, decide qué forma jurídica usar. El orden importa más que la velocidad.',
  },
  l5: {
    student: 'En tu campus hay oportunidades que nadie ve: tutorías, intermediación, organización de eventos. Ojo entrenado.',
    firstjob: 'Habla con compañeros y clientes. La mejor info de inversiones está en pasillos, no en titulares.',
    wantcar: 'Compra el coche en privado tras buscar 2 semanas en vez de en concesionario. Ahorro fácil: 1500–3000€.',
    spending: 'Cada mes mira si hay 1 cosa fácil de revender por más de lo que te costó. Empieza por ahí.',
    biz: 'No esperes "la idea perfecta". Las mejores oportunidades aparecen al ejecutar otras malas.',
  },
  l6: {
    student: 'Vende algo. Lo que sea. Aprenderás más en una temporada de comercial que en muchos meses de teoría.',
    firstjob: 'Si te ofrecen 2 empleos, no elijas por sueldo. Elige por qué vas a saber en 2 años.',
    wantcar: 'Aprende a negociar el coche. Esa habilidad te dará miles de € en otras decisiones grandes.',
    spending: 'Aprende ventas o copy. Probablemente puedas multiplicar tus ingresos antes que dividir tus gastos.',
    biz: 'Antes de montarlo, trabaja gratis para alguien que ya lo hace bien. 3 meses ahí > 1 año leyendo.',
  },
}

export default function Lessons() {
  return (
    <section id="lecciones" className="relative px-4 sm:px-6 py-16 sm:py-24">
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          eyebrow="Las 6 lecciones"
          title="El núcleo del libro"
          subtitle="Cada lección incluye resumen express, explicación fácil, ejemplo, error típico, mini reto y frase clave."
        />

        <div className="mt-10 space-y-5">
          {lessons.map((l) => (
            <LessonCard key={l.id} lesson={l} />
          ))}
        </div>
      </div>
    </section>
  )
}

function LessonCard({ lesson }) {
  const { completedLessons, toggleLessonComplete } = useApp()
  const isDone = !!completedLessons[lesson.id]
  const [open, setOpen] = useState(false)
  const [mode, setMode] = useState('normal') // normal | ultra
  const [ctx, setCtx] = useState(null)

  return (
    <motion.article
      id={`leccion-${lesson.id}`}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className={`card overflow-hidden transition-all ${
        isDone ? 'border-green-400/30 shadow-glow-green' : ''
      }`}
    >
      {/* Header */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full text-left p-5 sm:p-6 focus-ring flex items-start gap-4"
      >
        <div
          className={`shrink-0 w-12 h-12 rounded-2xl grid place-items-center font-display font-bold text-lg ${
            isDone
              ? 'bg-green-500/20 text-green-300 border border-green-400/40'
              : 'bg-gradient-to-br from-gold-400/20 to-ember-500/10 text-gold-200 border border-gold-400/20'
          }`}
        >
          {lesson.number}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-baseline gap-2 flex-wrap">
            <h3 className="font-display font-semibold text-lg sm:text-xl">{lesson.title}</h3>
            <span className="pill border-white/10 text-white/60 bg-white/5">
              <Clock size={11} /> {lesson.timeMin} min
            </span>
            <span className="pill border-white/10 text-white/60 bg-white/5">{lesson.difficulty}</span>
            {isDone && (
              <span className="pill border-green-400/40 text-green-300 bg-green-400/10">
                <Check size={11} /> entendida
              </span>
            )}
          </div>
          <p className="mt-2 text-white/70 text-sm sm:text-base leading-relaxed">{lesson.short}</p>
        </div>
        <motion.div animate={{ rotate: open ? 180 : 0 }} className="text-white/40 shrink-0 mt-1">
          <ChevronDown />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="body"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="border-t border-white/5 overflow-hidden"
          >
            <div className="p-5 sm:p-7 space-y-6">
              {/* Mode switch */}
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="eyebrow text-gold-300">Resumen express</div>
                <div className="flex items-center gap-2 text-xs">
                  <button
                    onClick={() => setMode('normal')}
                    className={`px-3 py-1.5 rounded-lg border transition ${
                      mode === 'normal' ? 'bg-gold-400/15 border-gold-400/40 text-gold-200' : 'border-white/10 text-white/60 hover:bg-white/5'
                    }`}
                  >
                    Explícamelo fácil
                  </button>
                  <button
                    onClick={() => setMode('ultra')}
                    className={`px-3 py-1.5 rounded-lg border transition ${
                      mode === 'ultra' ? 'bg-gold-400/15 border-gold-400/40 text-gold-200' : 'border-white/10 text-white/60 hover:bg-white/5'
                    }`}
                  >
                    Modo ultra simple
                  </button>
                </div>
              </div>

              {/* Summary */}
              <ul className="space-y-2">
                {lesson.summary.map((s, i) => (
                  <li key={i} className="flex gap-3 text-white/85">
                    <span className="text-gold-300 mt-1.5 w-1 h-1 rounded-full bg-current shrink-0" />
                    <span className="leading-relaxed">{s}</span>
                  </li>
                ))}
              </ul>

              {/* Easy / Ultra */}
              <div className="rounded-2xl bg-gradient-to-br from-gold-400/10 to-transparent border border-gold-400/20 p-5">
                <div className="flex items-center gap-2 mb-2 text-gold-200">
                  <Lightbulb size={16} />
                  <div className="text-xs uppercase tracking-widest font-semibold">
                    {mode === 'normal' ? 'Explicación fácil' : 'Modo ultra simple'}
                  </div>
                </div>
                <p className="text-white/90 leading-relaxed">
                  {mode === 'normal' ? lesson.easy : lesson.ultraSimple}
                </p>
              </div>

              {/* Cotidian example */}
              <div className="grid sm:grid-cols-2 gap-3">
                <Block icon={Sparkles} title="Dame un ejemplo" tone="cream">
                  {lesson.example}
                </Block>
                <Block icon={AlertTriangle} title="Error típico" tone="red">
                  {lesson.mistake}
                </Block>
              </div>

              {/* Mini reto */}
              <div className="rounded-2xl border border-green-400/30 bg-green-500/5 p-5">
                <div className="flex items-center gap-2 text-green-200 mb-2">
                  <Target size={16} />
                  <div className="text-xs uppercase tracking-widest font-semibold">Mini reto</div>
                </div>
                <p className="text-white/90 leading-relaxed">{lesson.challenge}</p>
              </div>

              {/* Apply to my life */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Wand2 className="text-gold-300" size={16} />
                  <div className="eyebrow text-gold-300">Ejemplo aplicado a mi vida</div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {lifeContexts.map((lc) => (
                    <button
                      key={lc.id}
                      onClick={() => setCtx((c) => (c === lc.id ? null : lc.id))}
                      className={`pill border transition ${
                        ctx === lc.id
                          ? 'border-gold-400/50 bg-gold-400/15 text-gold-200'
                          : 'border-white/10 text-white/70 hover:bg-white/5'
                      }`}
                    >
                      <span>{lc.emoji}</span>
                      {lc.label}
                    </button>
                  ))}
                </div>
                <AnimatePresence>
                  {ctx && (
                    <motion.p
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      className="mt-3 text-white/85 leading-relaxed p-4 rounded-xl border border-white/8 bg-white/5"
                    >
                      {examplesByLesson[lesson.id]?.[ctx]}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>

              {/* Key phrase */}
              <blockquote className="relative pl-5 border-l-2 border-gold-400/50">
                <Quote size={14} className="absolute -left-2 -top-1 text-gold-400" />
                <p className="font-display text-lg text-gold-100 italic">"{lesson.keyPhrase}"</p>
              </blockquote>

              {/* Mark as done */}
              <div className="pt-2 flex flex-wrap items-center justify-between gap-3">
                <p className="text-xs text-white/40 max-w-md">
                  Marca la lección cuando sientas que la entiendes. Esto guarda tu progreso localmente.
                </p>
                <button
                  onClick={() => toggleLessonComplete(lesson.id)}
                  className={`btn focus-ring ${
                    isDone
                      ? 'border border-green-400/40 bg-green-500/15 text-green-200'
                      : 'btn-primary'
                  }`}
                >
                  <Check size={14} />
                  {isDone ? 'Lección entendida' : 'Marcar como entendida'}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  )
}

function Block({ icon: Icon, title, tone, children }) {
  const tones = {
    cream: 'border-white/10 bg-white/5 text-white/90',
    red: 'border-ember-500/30 bg-ember-500/5 text-ember-100',
  }
  const iconColor = tone === 'red' ? 'text-ember-400' : 'text-gold-300'
  return (
    <div className={`rounded-2xl border p-5 ${tones[tone]}`}>
      <div className={`flex items-center gap-2 mb-2 ${iconColor}`}>
        <Icon size={16} />
        <div className="text-xs uppercase tracking-widest font-semibold">{title}</div>
      </div>
      <p className="text-sm leading-relaxed">{children}</p>
    </div>
  )
}
