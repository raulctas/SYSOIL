import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    // Garantiza una única copia de React (evita "Invalid hook call").
    dedupe: ['react', 'react-dom'],
    alias: {
      src: '/src',
      components: '/src/components',
      pages: '/src/pages',
      libs: '/src/libs',
      data: '/src/data',
      hooks: '/src/hooks',
      interfaces: '/src/interfaces',
    },
  },
  optimizeDeps: {
    // Pre-empaqueta las dependencias usadas dentro de las páginas cargadas de
    // forma diferida (lazy). Si no, Vite las descubre al navegar y re-optimiza,
    // provocando dos copias de React y el error de hooks inválidos.
    include: [
      'react',
      'react-dom',
      'react-dom/client',
      'react-router-dom',
      'react-i18next',
      'i18next',
      'i18next-http-backend',
      'i18next-browser-languagedetector',
      'lucide-react',
    ],
  },
});
