import { AppProvider } from './context/AppContext'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import BookMap from './components/BookMap'
import Comparator from './components/Comparator'
import RatRaceSimulator from './components/RatRaceSimulator'
import AssetLiabilityClassifier from './components/AssetLiabilityClassifier'
import Lessons from './components/Lessons'
import Obstacles from './components/Obstacles'
import Quiz from './components/Quiz'
import ActionPlan from './components/ActionPlan'
import Glossary from './components/Glossary'
import Closing from './components/Closing'

export default function App() {
  return (
    <AppProvider>
      <div className="relative min-h-screen lg:pl-20">
        <Navigation />
        <main>
          <Hero />
          <Divider />
          <BookMap />
          <Divider />
          <Comparator />
          <Divider />
          <RatRaceSimulator />
          <Divider />
          <AssetLiabilityClassifier />
          <Divider />
          <Lessons />
          <Divider />
          <Obstacles />
          <Divider />
          <Quiz />
          <Divider />
          <ActionPlan />
          <Divider />
          <Glossary />
          <Divider />
          <Closing />
        </main>
        <Footer />
      </div>
    </AppProvider>
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
