import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Em produção no GitHub Pages o site fica em /nome-do-repo/; localmente use "/" (padrão).
// Teste: BASE_PATH=/cruzeiroagropecuaria-landingpage/ npm run build && npm run preview
const base = process.env.BASE_PATH || '/'

// https://vite.dev/config/
export default defineConfig({
  base,
  plugins: [react()],
})
