import { createContext, useContext, useEffect, useMemo, useState, useCallback } from 'react'

const AppContext = createContext(null)

const STORAGE_KEY = 'prpp:state:v1'
const THEME_KEY = 'prpp:theme'

const defaultState = {
  completedLessons: {},
  understoodObstacles: {},
  quizBest: null,
  classifierAnswered: {},
  focusMode: false,
}

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return defaultState
    return { ...defaultState, ...JSON.parse(raw) }
  } catch {
    return defaultState
  }
}

export function AppProvider({ children }) {
  const [state, setState] = useState(loadState)
  const [theme, setTheme] = useState(() => localStorage.getItem(THEME_KEY) || 'dark')

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
  }, [state])

  useEffect(() => {
    localStorage.setItem(THEME_KEY, theme)
    document.documentElement.classList.toggle('light', theme === 'light')
  }, [theme])

  useEffect(() => {
    document.documentElement.classList.toggle('focus-mode', state.focusMode)
  }, [state.focusMode])

  const toggleLessonComplete = useCallback((id) => {
    setState((s) => ({ ...s, completedLessons: { ...s.completedLessons, [id]: !s.completedLessons[id] } }))
  }, [])

  const toggleObstacleUnderstood = useCallback((id) => {
    setState((s) => ({ ...s, understoodObstacles: { ...s.understoodObstacles, [id]: !s.understoodObstacles[id] } }))
  }, [])

  const recordClassifier = useCallback((id, correct) => {
    setState((s) => ({ ...s, classifierAnswered: { ...s.classifierAnswered, [id]: correct } }))
  }, [])

  const recordQuiz = useCallback((score, total) => {
    setState((s) => {
      const pct = Math.round((score / total) * 100)
      const next = !s.quizBest || pct > s.quizBest.pct ? { score, total, pct } : s.quizBest
      return { ...s, quizBest: next }
    })
  }, [])

  const toggleFocus = useCallback(() => {
    setState((s) => ({ ...s, focusMode: !s.focusMode }))
  }, [])

  const toggleTheme = useCallback(() => {
    setTheme((t) => (t === 'dark' ? 'light' : 'dark'))
  }, [])

  const resetProgress = useCallback(() => {
    setState(defaultState)
  }, [])

  const progressPct = useMemo(() => {
    // Lessons (6), Obstacles (5), Classifier (12), Quiz (1)
    const lessonsDone = Object.values(state.completedLessons).filter(Boolean).length
    const obstaclesDone = Object.values(state.understoodObstacles).filter(Boolean).length
    const classifierDone = Object.values(state.classifierAnswered).filter(Boolean).length
    const quizDone = state.quizBest ? 1 : 0
    const total = 6 + 5 + 12 + 1
    return Math.round(((lessonsDone + obstaclesDone + classifierDone + quizDone) / total) * 100)
  }, [state])

  const value = useMemo(
    () => ({
      ...state,
      theme,
      progressPct,
      toggleLessonComplete,
      toggleObstacleUnderstood,
      recordClassifier,
      recordQuiz,
      toggleFocus,
      toggleTheme,
      resetProgress,
    }),
    [state, theme, progressPct, toggleLessonComplete, toggleObstacleUnderstood, recordClassifier, recordQuiz, toggleFocus, toggleTheme, resetProgress],
  )

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export function useApp() {
  const ctx = useContext(AppContext)
  if (!ctx) throw new Error('useApp must be used within AppProvider')
  return ctx
}
