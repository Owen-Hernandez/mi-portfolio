import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/NOMBRE-DE-TU-REPOSITORIO/'  // 👈 IMPORTANTE: cámbialo por el nombre de tu repo
})