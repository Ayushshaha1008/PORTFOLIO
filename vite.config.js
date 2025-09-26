import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/PORTFOLIO/',  // <-- important for GitHub Pages
  plugins: [react()],
  server: {
    port: 5173,
  },
})
