import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import ViteComponents from 'vite-plugin-components';

export default defineConfig({
  plugins: [
    react(),
    ViteComponents({
      exclude: [
        /[\\/]node_modules[\\/]/,
        /[\\/]\.git[\\/]/,
      ],
    })
  ],
  base: "/egyptianCoders/"
});
