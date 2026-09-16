import { defineConfig } from 'vite';
import fs from 'node:fs';
import path from 'node:path';

export default defineConfig({
  server: {
    port: 5173,
    host: true
  },
  plugins: [
    {
      name: 'serve-product-frames',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          const url = req.url ? decodeURIComponent(req.url.split('?')[0]) : '';
          
          let targetPath = null;
          if (url.startsWith('/ezgif-39a9c26c1ccad29f-jpg/')) {
            // First check if ezgif exists, otherwise serve from Headphones
            const filename = path.basename(url);
            const direct = path.join(process.cwd(), 'Headphones', filename);
            const legacy = path.join(process.cwd(), url.slice(1));
            targetPath = fs.existsSync(direct) ? direct : legacy;
          } else if (url.startsWith('/Headphones/')) {
            targetPath = path.join(process.cwd(), url.slice(1));
          } else if (url.startsWith('/Phones/')) {
            targetPath = path.join(process.cwd(), url.slice(1));
          } else if (url.startsWith('/Camera/')) {
            targetPath = path.join(process.cwd(), url.slice(1));
          }

          if (targetPath && fs.existsSync(targetPath)) {
            res.setHeader('Content-Type', 'image/jpeg');
            res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
            return fs.createReadStream(targetPath).pipe(res);
          }
          next();
        });
      },
      closeBundle() {
        const dirs = ['Headphones', 'Phones', 'Camera'];
        dirs.forEach((d) => {
          const srcDir = path.join(process.cwd(), d);
          const destDir = path.join(process.cwd(), 'dist', d);
          if (fs.existsSync(srcDir) && !fs.existsSync(destDir)) {
            fs.cpSync(srcDir, destDir, { recursive: true });
          }
        });
      }
    }
  ]
});
