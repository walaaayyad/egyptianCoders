import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

const manifestForPlugIn = {
  registerType: 'autoUpdate', 
  includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'masked-icon.svg'],
  manifest: {
    name: 'Egyptian Coders',
    short_name: 'Egyptian Coders',
    description: 'Egyptian Coders App',
    icons: [
      {
        src: '/pwa-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/pwa-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: '/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
      {
        src: '/maskable.png',
        sizes: '192x192',
        type: 'image/png',
      }
    ],
    theme_color: '#ffffff',
    background_color: '#ffffff',
    display: 'standalone',
    scope: '/',
    start_url: '/egyptianCoders/',
    orientation: 'portrait',
    screenshots: [
    {
      src: '/screenshots/screenshot1.png', // Add this path
      sizes: '1280x800', // Specify dimensions of the screenshot
      type: 'image/png',
      form_factor: 'wide', // Use 'wide' for desktop and other form factors for mobile
    },
    {
      src: '/screenshots/screenshot2.png', // Another screenshot for mobile devices
      sizes: '400x600',
      type: 'image/png',
      form_factor: 'mobile',
    }
  ]
  }
}

export default defineConfig({
  plugins: [react(), VitePWA(manifestForPlugIn)],
  base: '/egyptianCoders/',  
})
