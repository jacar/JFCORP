import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

let basicSsl: any
try {
  // Solo intentamos cargarlo si existe (en local para dev)
  basicSsl = require('@vitejs/plugin-basic-ssl').default
} catch {}

// Configuración
export default defineConfig(({ command }) => ({
  plugins: [
    react(),
    ...(command === 'serve' && basicSsl ? [basicSsl()] : [])
  ],
}))
