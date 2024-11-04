import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import ViteComponents from 'vite-plugin-components';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
    ViteComponents()
  ],
  base: "/egyptianCoders/"
})
