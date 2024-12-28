import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
    build: {
        lib: {
            entry: path.resolve(__dirname, 'src/ThreeEffect.jsx'),
            name: 'Threeffect',
            fileName: (format) => `threeffect.${format}.js`,
            formats: ['es', 'umd']
        },
        rollupOptions: {
            // NÃO marque 'three' como externa
            external: ['react', 'react-dom'],
            output: {
                globals: {
                    react: 'React',
                    'react-dom': 'ReactDOM'
                }
            }
        }
    }
});
