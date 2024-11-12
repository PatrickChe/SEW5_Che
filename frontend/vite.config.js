import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8080',  // Target Spring Boot backend
        changeOrigin: true,  // Change the origin to backend
      },
    },
  },
});
