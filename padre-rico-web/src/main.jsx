import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Persisted theme initialization (avoid FOUC)
const savedTheme = localStorage.getItem('prpp:theme')
if (savedTheme === 'light') {
  document.documentElement.classList.add('light')
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
