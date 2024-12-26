import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from "vite-plugin-pwa";

const manifestForPlugIn = {
  registerType:'prompt',
  includeAssests:['favicon.ico', "apple-touc-icon.png", "masked-icon.svg"],
  manifest:{
    name:"Egyptian Coders",
    short_name:"Egyptian Coders",
    description:"Egyptian Coders App",
    icons:[{
      src: '/pwa-192x192.png',
      sizes:'192x192',
      type:'image/png',
      purpose:'favicon'
    },
    {
      src:'/pwa-512x512.png',
      sizes:'512x512',
      type:'image/png',
      purpose:'favicon'
    },
    {
      src: '/apple-touch-icon.png',
      sizes:'180x180',
      type:'image/png',
      purpose:'apple touch icon',
    },
    {
      src: '/maskable.png',
      sizes:'192x192',
      type:'image/png',
      purpose:'any maskable',
    }
  ],
  theme_color:'#ffffff',
  background_color:'#ffffff',
  display:"standalone",
  scope:'/',
  start_url:"/",
  orientation:'portrait'
  }
}
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), VitePWA(manifestForPlugIn)],
  base: "/egyptianCoders/",
});
  // plugins: [
  //   react(),
  //   VitePWA({
  //     registerType: 'autoUpdate',
  //     workbox: {
  //       globPatterns: ['**/*.{html,js,css,png,jpg,svg}'],
  //     },
  //     manifest: {
  //       name: 'Egyptian Coders',
  //       short_name: 'React PWA',
  //       description: 'An Egyptian Coders React Progressive Web App',
  //       theme_color: '#ffffff',
  //       background_color: '#ffffff',
  //       display: 'standalone',
  //       icons: [
  //         {
  //           src: 'maskable.png',
  //           sizes: '192x192',
  //           type: 'image/png',
  //           purpose: 'any maskable'
  //         },
  //         {
  //           src: 'pwa-192x192.png',
  //           sizes: '192x192',
  //           type: 'image/png',
  //         },
  //         {
  //           src: 'pwa-512x512.png',
  //           sizes: '512x512',
  //           type: 'image/png',
  //         },
  //       ],
  //     },
  //   }),
  // ],
//   base: "/egyptianCoders/",
// });
