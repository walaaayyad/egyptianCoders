if(!self.define){let e,i={};const n=(n,s)=>(n=new URL(n+".js",s).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(s,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let c={};const t=e=>n(e,o),l={module:{uri:o},exports:c,require:t};i[o]=Promise.all(s.map((e=>l[e]||t(e)))).then((e=>(r(...e),c)))}}define(["./workbox-5ffe50d4"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-BIUmaUw3.css",revision:null},{url:"assets/index-BL9N3BOB.js",revision:null},{url:"icomoon/style.css",revision:"e7d02ced160eca29c4c68a0e68ab07bd"},{url:"index.html",revision:"14395b10964a7b6224bf379b02422abb"},{url:"registerSW.js",revision:"82fb90e4922d1832164bc65695b9e71a"},{url:"apple-touch-icon.png",revision:"6b137071077b2e29e11c245409729464"},{url:"favicon.ico",revision:"dad6543f5e92577c4f47aa7cff1c9c6e"},{url:"maskable.png",revision:"6453a5efc8c832dfe11a687895533165"},{url:"pwa-192x192.png",revision:"d62c93269447814973837790b9ce5036"},{url:"pwa-512x512.png",revision:"6427efce6974f635fa7559736d20d4e6"},{url:"manifest.webmanifest",revision:"aaadbf9f1f3480d39d6c94e4f35b1649"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
