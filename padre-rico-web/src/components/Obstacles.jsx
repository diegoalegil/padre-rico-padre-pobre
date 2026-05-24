import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Shield, Cloud, Bed, Repeat, Crown, Check, AlertTriangle, Sparkles, ChevronRight } from 'lucide-react'
import SectionHeader from './SectionHeader'
import { obstacles } from '../data/bookData'
import { useApp } from '../context/AppContext'

const iconMap = { shield: Shield, cloud: Cloud, bed: Bed, repeat: Repeat, crown: Crown }

export default function Obstacles() {
  const [active, setActive] = useState('fear')
  const { understoodObstacles, toggleObstacleUnderstood } = useApp()
  const current = obstacles.find((o) => o.id === active) || obstacles[0]
  const Icon = iconMap[current.icon] || Shield

  return (
    <section id="obstaculos" className="relative px-4 sm:px-6 py-16 sm:py-24">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="Obstáculos mentales"
          title="Las 5 razones por las que la gente no avanza"
          subtitle="Aunque sepan exactamente qué hacer. Estudiados, parafraseados y con acción concreta."
        />

        <div className="mt-10 grid lg:grid-cols-12 gap-5">
          {/* Tabs */}
          <div className="lg:col-span-4 space-y-2">
            {obstacles.map((o) => {
              const OIcon = iconMap[o.icon] || Shield
              const done = !!understoodObstacles[o.id]
              const isActive = active === o.id
              return (
                <button
                  key={o.id}
                  onClick={() => setActive(o.id)}
                  className={`w-full text-left card hover-lift p-4 flex items-center gap-3 transition ${
                    isActive ? '!border-gold-400/40 shadow-glow-gold' : ''
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-xl grid place-items-center shrink-0 ${
                      isActive ? 'bg-gold-400/20 text-gold-200' : 'bg-white/5 text-white/70'
                    }`}
                  >
                    <OIcon size={18} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-display font-semibold flex items-center gap-2">
                      {o.name}
                      {done && (
                        <span className="pill border-green-400/40 text-green-300 bg-green-400/10 !px-2 !py-0.5">
                          <Check size={10} /> ok
                        </span>
                      )}
                    </div>
                    <div className="text-xs text-white/50 truncate">{o.everyday.slice(0, 60)}…</div>
                  </div>
                  <ChevronRight size={14} className="text-white/30 shrink-0" />
                </button>
              )
            })}
          </div>

          {/* Detail */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.3 }}
                className="card p-6 sm:p-8"
              >
                <div className="flex items-center gap-3">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-ember-500/20 to-gold-400/10 border border-gold-400/20 grid place-items-center text-gold-200">
                    <Icon size={22} />
                  </div>
                  <div>
                    <div className="eyebrow text-gold-300">Obstáculo</div>
                    <h3 className="font-display font-bold text-2xl">{current.name}</h3>
                  </div>
                </div>

                <div className="mt-6 grid sm:grid-cols-2 gap-4">
                  <Block title="Cómo aparece" icon={Sparkles} tone="cream">
                    {current.everyday}
                  </Block>
                  <Block title="Qué daño causa" icon={AlertTriangle} tone="red">
                    {current.damage}
                  </Block>
                </div>

                <Block title="Cómo combatirlo" icon={Shield} tone="green" className="mt-4">
                  {current.fix}
                </Block>

                <div className="mt-5 rounded-2xl border border-gold-400/30 bg-gradient-to-br from-gold-400/15 to-transparent p-5">
                  <div className="eyebrow text-gold-300 mb-1.5">Acción de hoy</div>
                  <p className="text-white/90 leading-relaxed">{current.action}</p>
                </div>

                <div className="mt-5 flex justify-end">
                  <button
                    onClick={() => toggleObstacleUnderstood(current.id)}
                    className={`btn focus-ring ${
                      understoodObstacles[current.id]
                        ? 'border border-green-400/40 bg-green-500/15 text-green-200'
                        : 'btn-primary'
                    }`}
                  >
                    <Check size={14} />
                    {understoodObstacles[current.id] ? 'Lo tengo' : 'Marcar como entendido'}
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}

function Block({ title, icon: Icon, tone, children, className = '' }) {
  const tones = {
    cream: 'border-white/10 bg-white/5 text-white/90',
    red: 'border-ember-500/30 bg-ember-500/5 text-white/90',
    green: 'border-green-400/30 bg-green-500/5 text-white/90',
  }
  const iconColor = {
    cream: 'text-gold-300',
    red: 'text-ember-400',
    green: 'text-green-300',
  }[tone]
  return (
    <div className={`rounded-2xl border p-5 ${tones[tone]} ${className}`}>
      <div className={`flex items-center gap-2 mb-2 ${iconColor}`}>
        <Icon size={14} />
        <div className="text-xs uppercase tracking-widest font-semibold">{title}</div>
      </div>
      <p className="text-sm leading-relaxed">{children}</p>
    </div>
  )
}
