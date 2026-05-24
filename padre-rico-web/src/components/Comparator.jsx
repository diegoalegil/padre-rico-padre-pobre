import { motion } from 'framer-motion'
import { Briefcase, Crown } from 'lucide-react'
import SectionHeader from './SectionHeader'
import { mindsetCompare } from '../data/bookData'

export default function Comparator() {
  return (
    <section id="comparador" className="relative px-4 sm:px-6 py-16 sm:py-24">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="Capítulo 1"
          title="Padre rico vs Padre pobre"
          subtitle="Misma realidad, dos formas de pensarla. Aquí van las que más cambian el resultado a largo plazo."
        />

        <div className="mt-10 grid lg:grid-cols-2 gap-4 sm:gap-6 sticky-top">
          <Side
            tag="Padre pobre"
            icon={Briefcase}
            tone="cool"
            tagline="Seguridad, empleo, estudios tradicionales"
            items={mindsetCompare.map((m) => ({ title: m.topic, body: m.poor }))}
          />
          <Side
            tag="Padre rico"
            icon={Crown}
            tone="warm"
            tagline="Activos, pensamiento financiero, independencia"
            items={mindsetCompare.map((m) => ({ title: m.topic, body: m.rich }))}
          />
        </div>

        {/* Notes */}
        <div className="mt-8 grid sm:grid-cols-2 gap-3">
          {mindsetCompare.slice(0, 6).map((m) => (
            <motion.div
              key={m.topic}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="card p-4 text-sm"
            >
              <div className="eyebrow text-gold-300 mb-1.5">{m.topic}</div>
              <div className="text-white/80 leading-relaxed">{m.note}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Side({ tag, icon: Icon, tone, tagline, items }) {
  const warm = tone === 'warm'
  return (
    <div className="card overflow-hidden">
      <div
        className={`p-5 border-b border-white/5 ${
          warm
            ? 'bg-gradient-to-br from-gold-400/15 via-ember-500/10 to-transparent'
            : 'bg-gradient-to-br from-white/8 via-white/3 to-transparent'
        }`}
      >
        <div className="flex items-center gap-3">
          <div
            className={`w-10 h-10 rounded-xl grid place-items-center ${
              warm ? 'bg-gold-400/20 text-gold-200' : 'bg-white/10 text-white/80'
            }`}
          >
            <Icon size={18} />
          </div>
          <div>
            <div className={`text-xs uppercase tracking-widest ${warm ? 'text-gold-300' : 'text-white/50'}`}>
              {tag}
            </div>
            <div className="font-display font-semibold text-lg">{tagline}</div>
          </div>
        </div>
      </div>
      <ul className="divide-y divide-white/5">
        {items.map((it, i) => (
          <motion.li
            key={it.title}
            initial={{ opacity: 0, x: warm ? 10 : -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.04, duration: 0.35 }}
            className="px-5 py-3.5 flex items-start gap-3"
          >
            <div className={`text-[10px] uppercase tracking-widest mt-1 w-20 shrink-0 ${warm ? 'text-gold-300/80' : 'text-white/40'}`}>
              {it.title}
            </div>
            <div className="text-sm text-white/85 leading-relaxed">{it.body}</div>
          </motion.li>
        ))}
      </ul>
    </div>
  )
}
