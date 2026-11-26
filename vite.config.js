import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    // GitHub Pages deployment note: if deploying to https://<USERNAME>.github.io/<REPO>/,
    // change base to '/<REPO>/' (e.g. '/Souradeep-portfolio3.0/').
    // For Vercel / Netlify root domain, leave as '/'.
    base: './',
    build: {
        outDir: 'dist',
        sourcemap: false,
    },
});
