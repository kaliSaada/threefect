import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      threeffect: path.resolve(__dirname, '../dist/threeffect.es.js')
    }
  }
});
