export default function SectionHeader({ eyebrow, title, subtitle, align = 'left' }) {
  return (
    <header className={align === 'center' ? 'text-center' : ''}>
      {eyebrow && <div className="eyebrow mb-3">{eyebrow}</div>}
      <h2 className="section-title text-balance">{title}</h2>
      {subtitle && <p className="mt-3 text-white/70 max-w-2xl text-balance leading-relaxed">{subtitle}</p>}
    </header>
  )
}
