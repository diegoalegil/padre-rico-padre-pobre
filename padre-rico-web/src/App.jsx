import { lazy, Suspense, useEffect } from 'react'
import { AppProvider } from './context/AppContext'
import Navigation from './components/Navigation'
import Hero from './components/Hero'

const BookMap = lazy(() => import('./components/BookMap'))
const Comparator = lazy(() => import('./components/Comparator'))
const RatRaceSimulator = lazy(() => import('./components/RatRaceSimulator'))
const AssetLiabilityClassifier = lazy(() => import('./components/AssetLiabilityClassifier'))
const Lessons = lazy(() => import('./components/Lessons'))
const Obstacles = lazy(() => import('./components/Obstacles'))
const Quiz = lazy(() => import('./components/Quiz'))
const ActionPlan = lazy(() => import('./components/ActionPlan'))
const Glossary = lazy(() => import('./components/Glossary'))
const Closing = lazy(() => import('./components/Closing'))

export default function App() {
  return (
    <AppProvider>
      <div className="relative min-h-screen lg:pl-20">
        <Navigation />
        <HashScrollRestorer />
        <main>
          <Hero />
          <Divider />
          <LazySection><BookMap /></LazySection>
          <Divider />
          <LazySection><Comparator /></LazySection>
          <Divider />
          <LazySection><RatRaceSimulator /></LazySection>
          <Divider />
          <LazySection><AssetLiabilityClassifier /></LazySection>
          <Divider />
          <LazySection><Lessons /></LazySection>
          <Divider />
          <LazySection><Obstacles /></LazySection>
          <Divider />
          <LazySection><Quiz /></LazySection>
          <Divider />
          <LazySection><ActionPlan /></LazySection>
          <Divider />
          <LazySection><Glossary /></LazySection>
          <Divider />
          <LazySection><Closing /></LazySection>
        </main>
        <Footer />
      </div>
    </AppProvider>
  )
}

function HashScrollRestorer() {
  useEffect(() => {
    const scrollToHash = () => {
      if (!window.location.hash) return
      const id = window.location.hash.slice(1)
      const el = document.getElementById(id)
      if (el) el.scrollIntoView({ block: 'start' })
    }

    const timers = [120, 500, 1000].map((delay) => window.setTimeout(scrollToHash, delay))
    window.addEventListener('hashchange', scrollToHash)

    return () => {
      timers.forEach((timer) => window.clearTimeout(timer))
      window.removeEventListener('hashchange', scrollToHash)
    }
  }, [])

  return null
}

function LazySection({ children }) {
  return (
    <Suspense fallback={<SectionFallback />}>
      {children}
    </Suspense>
  )
}

function SectionFallback() {
  return (
    <div className="px-4 sm:px-6 py-16 sm:py-24 focus-hide" aria-hidden="true">
      <div className="max-w-6xl mx-auto">
        <div className="section-loader">
          <div className="section-loader-line w-24" />
          <div className="section-loader-line w-2/3 h-8" />
          <div className="section-loader-line w-full" />
          <div className="section-loader-line w-5/6" />
        </div>
      </div>
    </div>
  )
}

function Divider() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 focus-hide">
      <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </div>
  )
}

function Footer() {
  return (
    <footer className="py-10 px-4 sm:px-6 text-center text-xs text-white/40 focus-hide">
      <div className="max-w-4xl mx-auto">
        Hecho con cariño para quien tiene mil pestañas abiertas y poca paciencia.
        <br />
        Basado en el libro de Robert Kiyosaki. Educación, no asesoramiento.
      </div>
    </footer>
  )
}
