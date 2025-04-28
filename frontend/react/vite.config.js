import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,  // Change this to any port you prefer
    host: '0.0.0.0',  // Allow network access
  },
})

