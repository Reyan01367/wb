import type Lenis from 'lenis';
import { $, $$ } from './env';
import { scrollToTop } from './scroll';

/** Hide the nav while scrolling down, reveal it on the way up. */
export function initNav() {
  const nav = $('[data-nav]');
  if (!nav) return;

  let lastY = window.scrollY;
  window.addEventListener(
    'scroll',
    () => {
      const y = window.scrollY;
      nav.classList.toggle('is-hidden', y > lastY && y > 200);
      nav.classList.toggle('is-scrolled', y > 40);
      lastY = y;
    },
    { passive: true },
  );
}

export function initFooter(lenis: Lenis | null) {
  $$('[data-scroll-top]').forEach((btn) => btn.addEventListener('click', () => scrollToTop(lenis)));

  const clock = $('[data-clock]');
  if (!clock) return;

  const format = new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Europe/London',
    hour: '2-digit',
    minute: '2-digit',
  });
  const tick = () => (clock.textContent = format.format(new Date()));
  tick();
  setInterval(tick, 30_000);
}
