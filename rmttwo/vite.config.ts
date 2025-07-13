import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import federation from "@originjs/vite-plugin-federation"

// https://vite.dev/config/
export default defineConfig({
  build: {
    target: 'esnext',
    cssCodeSplit: false
  },
  plugins: [react(),
  tailwindcss(),
  federation({
    name: "remote-app-two",
    filename: 'remoteEntry.js',
    exposes: {
      './App': './src/App',
      './useCounterStore': './src/store/counterStore'
    },
    shared: ['react', 'react-dom'],
  })
  ],
})
