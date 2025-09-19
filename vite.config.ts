import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

let basicSsl: any
try {
  // Solo disponible en desarrollo local si está instalado
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  basicSsl = require('@vitejs/plugin-basic-ssl').default
} catch {}

export default defineConfig(({ command }) => ({
  plugins: [
    react(),
    ...(command === 'serve' && basicSsl ? [basicSsl()] : [])
  ],
}))
