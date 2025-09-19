import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import basicSsl from '@vitejs/plugin-basic-ssl'
export default defineConfig(async ({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  const plugins = [react()]

  // Importa basic-ssl SOLO en dev y si está instalado
  if (mode === 'development') {
    try {
      const { default: basicSsl } = await import('@vitejs/plugin-basic-ssl')
      plugins.push(basicSsl())
    } catch {
      // No instalado -> no pasa nada en CI/Netlify
    }
  }

  return {
    plugins,
    server: {
      // https solo si lo activas en local y tienes el plugin
      https: false
    },
    build: {
      outDir: 'dist',
      sourcemap: false
    }
  }
})
