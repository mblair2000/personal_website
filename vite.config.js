import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import sitemap from 'vite-plugin-sitemap'
import path from 'path'

const routes = ['/', '/about', '/projects', '/blog', '/contact']

export default defineConfig({
  plugins: [
    react(),
    sitemap({
      hostname: 'https://blair0.com',
      dynamicRoutes: routes,
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    outDir: 'dist',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
        },
      },
    },
  },
})
