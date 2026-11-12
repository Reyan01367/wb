import { defineConfig } from 'astro/config';

export default defineConfig({
  // Change to your real Vercel URL once deployed (used for canonical + social tags).
  site: 'https://your-portfolio.vercel.app',
  prefetch: { prefetchAll: true },
});
