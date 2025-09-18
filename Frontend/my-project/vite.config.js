// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: [
      '@ionic/react',
      '@ionic/react-router',
      '@ionic/core',
      'ionicons',
    ],
  },
});
