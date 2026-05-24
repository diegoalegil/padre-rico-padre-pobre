import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/padre-rico-padre-pobre/',
  plugins: [react()],
  server: {
    port: 5173,
    open: false,
  },
})
