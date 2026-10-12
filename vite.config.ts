import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      workbox: {
        globPatterns: ['**/*.{js,css,html,svg,png,woff2}'],
        maximumFileSizeToCacheInBytes: 6 * 1024 * 1024
      },
      manifest: {
        name: 'Financial Dashboard Pro',
        short_name: 'FinancePro',
        description: '100% Offline Privacy-First Financial Dashboard with Exact Math Engine',
        theme_color: '#141518',
        background_color: '#141518',
        display: 'standalone',
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          }
        ]
      }
    })
  ],
  server: {
    port: 4200,
    host: '0.0.0.0'
  },
  preview: {
    port: 4200,
    host: '0.0.0.0'
  }
});
