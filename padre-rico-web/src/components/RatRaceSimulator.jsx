import { useState } from 'react'
import { motion } from 'framer-motion'
import { TrendingDown, TrendingUp, RotateCcw, Sparkles, AlertTriangle } from 'lucide-react'
import SectionHeader from './SectionHeader'

const defaults = {
  income: 1800,
  expenses: 1200,
  debtPayment: 150,
  passiveIncome: 0,
}

const fmt = (n) => `${Math.round(n).toLocaleString('es-ES')}€`

const Slider = ({ label, value, min, max, step, onChange, hint, color = 'gold' }) => {
  const pct = ((value - min) / (max - min)) * 100
  const colorClass = {
    gold: '[--c:theme(colors.gold.400)]',
    red: '[--c:theme(colors.ember.500)]',
    green: '[--c:theme(colors.green.400)]',
  }[color]
  return (
    <label className={`block ${colorClass}`}>
      <div className="flex items-baseline justify-between gap-3 mb-2">
        <span className="text-sm font-medium text-white/90">{label}</span>
        <span className="font-mono text-sm text-gold-200">{fmt(value)}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full h-2 appearance-none rounded-full outline-none cursor-pointer bg-white/10 accent-gold-400"
        style={{
          background: `linear-gradient(to right, var(--c) 0%, var(--c) ${pct}%, rgba(255,255,255,0.08) ${pct}%, rgba(255,255,255,0.08) 100%)`,
        }}
      />
      {hint && <p className="mt-1.5 text-xs text-white/45">{hint}</p>}
    </label>
  )
}

export default function RatRaceSimulator() {
  const [state, setState] = useState(defaults)

  const cashflow = state.income + state.passiveIncome - state.expenses - state.debtPayment
  const passiveCoverage = state.expenses > 0 ? state.passiveIncome / state.expenses : 0

  const computeVerdict = () => {
    if (passiveCoverage >= 1) {
      return {
        kind: 'free',
        emoji: '🏆',
        title: 'Libertad financiera (técnica)',
        body: 'Tus ingresos pasivos cubren todos tus gastos. Trabajar es opcional. Sigue construyendo activos para vivir holgadamente.',
      }
    }
    if (cashflow < 0) {
      return {
        kind: 'trapped',
        emoji: '🐀',
        title: 'Atrapado en la carrera de ratas',
        body: 'Cada mes gastas más de lo que ingresas. La deuda crece. Reduce un gasto fijo, renegocia la deuda o aumenta ingresos.',
      }
    }
    if (passiveCoverage >= 0.5) {
      return {
        kind: 'near',
        emoji: '🚀',
        title: 'Casi fuera',
        body: 'Tus activos ya cubren la mitad o más de tus gastos. Mantén el rumbo: cada euro nuevo en activos te acerca al objetivo.',
      }
    }
    if (cashflow >= 0 && state.passiveIncome > 0) {
      return {
        kind: 'building',
        emoji: '🌱',
        title: 'Construyendo libertad',
        body: 'Cash flow positivo y empezando a generar ingreso pasivo. Vas en la dirección correcta.',
      }
    }
    return {
      kind: 'breathing',
      emoji: '😮‍💨',
      title: 'Respirando, sin avanzar',
      body: 'No vas mal mes a mes, pero no creas activos. Aparta aunque sea poco cada mes hacia algo que produzca dinero.',
    }
  }
  const verdict = computeVerdict()

  const verdictColor = {
    free: 'from-green-400/20 to-green-500/5 border-green-400/30',
    near: 'from-gold-400/20 to-ember-500/5 border-gold-400/30',
    building: 'from-green-400/15 to-gold-400/5 border-white/10',
    breathing: 'from-white/8 to-white/3 border-white/10',
    trapped: 'from-ember-500/20 to-ember-600/5 border-ember-500/30',
  }[verdict.kind]

  return (
    <section id="carrera" className="relative px-4 sm:px-6 py-16 sm:py-24">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="Simulador"
          title="¿Estás en la carrera de ratas?"
          subtitle="Mueve los deslizadores y mira al instante si construyes libertad o solo corres en la rueda. Es educativo, no contable."
        />

        <div className="mt-10 grid lg:grid-cols-5 gap-6">
          {/* Controls */}
          <div className="card p-5 sm:p-6 lg:col-span-3 space-y-5">
            <Slider
              label="💼 Ingresos del trabajo (mes)"
              value={state.income}
              min={0}
              max={6000}
              step={50}
              onChange={(v) => setState((s) => ({ ...s, income: v }))}
              hint="Tu sueldo neto al mes."
              color="gold"
            />
            <Slider
              label="🛒 Gastos fijos (mes)"
              value={state.expenses}
              min={0}
              max={5000}
              step={50}
              onChange={(v) => setState((s) => ({ ...s, expenses: v }))}
              hint="Vivienda, comida, transporte, suscripciones, etc."
              color="red"
            />
            <Slider
              label="💳 Cuota de deudas (mes)"
              value={state.debtPayment}
              min={0}
              max={2000}
              step={25}
              onChange={(v) => setState((s) => ({ ...s, debtPayment: v }))}
              hint="Préstamos, tarjetas, financiaciones."
              color="red"
            />
            <Slider
              label="🌱 Ingreso pasivo de tus activos (mes)"
              value={state.passiveIncome}
              min={0}
              max={5000}
              step={50}
              onChange={(v) => setState((s) => ({ ...s, passiveIncome: v }))}
              hint="Alquileres, dividendos, regalías... dinero que entra sin que trabajes."
              color="green"
            />

            <div className="flex flex-wrap gap-2 pt-2">
              <button onClick={() => setState(defaults)} className="btn-ghost focus-ring">
                <RotateCcw size={14} /> Reiniciar
              </button>
              <button
                onClick={() => setState({ income: 2500, expenses: 1100, debtPayment: 50, passiveIncome: 1300 })}
                className="btn-ghost focus-ring text-green-300"
              >
                <Sparkles size={14} /> Probar perfil "en camino"
              </button>
              <button
                onClick={() => setState({ income: 2200, expenses: 2400, debtPayment: 400, passiveIncome: 0 })}
                className="btn-ghost focus-ring text-ember-400"
              >
                <AlertTriangle size={14} /> Probar perfil "atrapado"
              </button>
            </div>
          </div>

          {/* Outcome */}
          <div className="lg:col-span-2 space-y-4">
            <div className="card p-5">
              <div className="text-xs uppercase tracking-widest text-white/50 mb-2">Tu mes</div>
              <div className="flex items-end gap-3">
                <div
                  className={`font-display font-bold text-3xl ${
                    cashflow >= 0 ? 'text-green-300' : 'text-ember-400'
                  }`}
                >
                  {cashflow >= 0 ? '+' : ''}{fmt(cashflow)}
                </div>
                {cashflow >= 0 ? (
                  <TrendingUp className="text-green-300" />
                ) : (
                  <TrendingDown className="text-ember-400" />
                )}
              </div>
              <div className="text-xs text-white/50 mt-1">Cash flow (entra menos sale)</div>

              <div className="mt-5">
                <div className="flex justify-between text-xs text-white/60 mb-1.5">
                  <span>Cobertura de tus gastos con ingreso pasivo</span>
                  <span className="font-mono text-gold-200">
                    {Math.min(100, Math.round(passiveCoverage * 100))}%
                  </span>
                </div>
                <div className="h-3 rounded-full bg-white/8 overflow-hidden relative">
                  <motion.div
                    className={`h-full ${
                      passiveCoverage >= 1
                        ? 'bg-gradient-to-r from-green-400 to-gold-300'
                        : 'bg-gradient-to-r from-gold-500 to-gold-300'
                    }`}
                    initial={{ width: 0 }}
                    animate={{ width: `${Math.min(100, passiveCoverage * 100)}%` }}
                    transition={{ type: 'spring', stiffness: 80, damping: 14 }}
                  />
                </div>
                <div className="mt-2 text-[11px] text-white/45">
                  100% = ya no necesitas tu sueldo para cubrir tu vida.
                </div>
              </div>
            </div>

            <motion.div
              key={verdict.kind}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className={`card border bg-gradient-to-br ${verdictColor} p-5`}
            >
              <div className="flex items-start gap-3">
                <div className="text-3xl leading-none">{verdict.emoji}</div>
                <div>
                  <div className="font-display font-semibold text-lg">{verdict.title}</div>
                  <p className="mt-1.5 text-sm text-white/80 leading-relaxed">{verdict.body}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
