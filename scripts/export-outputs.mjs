/**
 * Exports every creative output (and each campaign's key visual) as a print-ready PNG.
 * Usage: npm run build && npx astro preview --port 4400, then `node scripts/export-outputs.mjs`.
 */
import { mkdir } from 'node:fs/promises';
import { createRequire } from 'node:module';

// Playwright is installed globally in this environment rather than as a project dependency.
const { chromium } = createRequire(import.meta.url)('playwright');

const BASE = process.env.BASE_URL ?? 'http://localhost:4400';
const OUT = new URL('../submission/creative-outputs/', import.meta.url);
const CAMPAIGNS = ['olivara-500-year-head-start', 'humble-the-other-40', 'altruist-shirts-off-spf-on'];

const FREEZE = `
  [data-reveal], [data-split], [data-cover] { opacity: 1 !important; transform: none !important; }
  .preloader, .cursor, .progress, .nav { display: none !important; }
  .poster { transform: none !important; border-radius: 0 !important; }
`;

const slugify = (text) => text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

await mkdir(OUT, { recursive: true });
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1600, height: 1000 }, deviceScaleFactor: 2, reducedMotion: 'reduce' });

for (const [n, slug] of CAMPAIGNS.entries()) {
  await page.goto(`${BASE}/work/${slug}/`, { waitUntil: 'networkidle' });
  await page.addStyleTag({ content: FREEZE });
  await page.evaluate(() => document.fonts.ready);

  const cover = page.locator('[data-cover] .poster');
  await cover.screenshot({ path: new URL(`${n + 1}-${slug.split('-')[0]}-0-key-visual.png`, OUT).pathname });

  const outputs = page.locator('.exec');
  for (let i = 0; i < (await outputs.count()); i++) {
    const exec = outputs.nth(i);
    const title = await exec.locator('.exec__title').innerText();
    await exec.locator('.poster').screenshot({ path: new URL(`${n + 1}-${slug.split('-')[0]}-${i + 1}-${slugify(title)}.png`, OUT).pathname });
  }
}

await browser.close();
console.log(`Saved to ${OUT.pathname}`);
