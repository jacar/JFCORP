// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Nota: No uses '@vitejs/plugin-basic-ssl' en producción (Netlify).
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    sourcemap: true
  },
})
