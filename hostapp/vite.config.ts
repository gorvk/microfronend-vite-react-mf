import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import federation from '@originjs/vite-plugin-federation';

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 5000,
    strictPort: true,
  },
  plugins: [react(),
  tailwindcss(),
  federation({
    name: 'hostapp',
    remotes: {
      'remoteone': 'http://localhost:5001/assets/remoteEntry.js',
      'remotetwo': 'http://localhost:5002/assets/remoteEntry.js'
    },
    shared: ['react', 'react-dom'],
  }),
  ]
})
