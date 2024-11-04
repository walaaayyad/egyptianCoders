import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
    ViteComponents({
                exclude: [
                    /[\\/]node_modules[\\/](?!VITE_YOUTUBE_API_KEY)/,
                    /[\\/]\.git[\\/]/,
                ],
		})
  ],
  base: "/egyptianCoders/"
})
