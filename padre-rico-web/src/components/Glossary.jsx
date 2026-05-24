import { useState } from 'react'
import { motion } from 'framer-motion'
import { Search } from 'lucide-react'
import SectionHeader from './SectionHeader'
import { glossary } from '../data/bookData'

export default function Glossary() {
  const [q, setQ] = useState('')
  const filtered = glossary.filter(
    (g) =>
      g.term.toLowerCase().includes(q.toLowerCase()) ||
      g.short.toLowerCase().includes(q.toLowerCase()) ||
      g.long.toLowerCase().includes(q.toLowerCase()),
  )

  return (
    <section id="glosario" className="relative px-4 sm:px-6 py-16 sm:py-24">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="Glosario visual"
          title="Los términos del libro, sin tecnicismos"
          subtitle="Cada concepto con una versión rápida y otra completa. Para repasar antes del quiz."
        />

        <div className="mt-8 max-w-md">
          <div className="relative">
            <Search
              size={16}
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none"
            />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Busca un término..."
              className="w-full rounded-xl bg-white/5 border border-white/10 pl-10 pr-3 py-2.5 text-sm focus:outline-none focus:border-gold-400/50 focus:bg-white/8 transition"
            />
          </div>
        </div>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((g, i) => (
            <motion.div
              key={g.term}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.02, duration: 0.35 }}
              className="card p-5 hover-lift"
            >
              <div className="flex items-start gap-3">
                <div className="text-3xl">{g.emoji}</div>
                <div className="flex-1">
                  <div className="font-display font-semibold">{g.term}</div>
                  <div className="text-xs text-gold-300 mt-0.5">{g.short}</div>
                </div>
              </div>
              <p className="mt-3 text-sm text-white/75 leading-relaxed">{g.long}</p>
            </motion.div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="mt-10 text-center text-white/50">
            Nada con "{q}". Prueba otra palabra.
          </div>
        )}
      </div>
    </section>
  )
}
