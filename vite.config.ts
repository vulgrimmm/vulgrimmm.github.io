import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/vulgrimmm.github.io/', // Add this line - should match your repository name
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
})
