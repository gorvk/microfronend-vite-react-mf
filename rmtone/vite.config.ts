import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import federation from "@originjs/vite-plugin-federation";

// https://vite.dev/config/
export default defineConfig({
  build: {
    target: 'esnext',
    cssCodeSplit: false
  },
  plugins: [react(),
  tailwindcss(),
  federation({
    name: 'remote-app-one',
    filename: 'remoteEntry.js',
    exposes: {
      "./App": "./src/App",
    },
    shared: ['react', 'react-dom'],
  }),
  ],
})
