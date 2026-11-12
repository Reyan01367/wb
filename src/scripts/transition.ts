import { gsap } from 'gsap';
import { $, reducedMotion, storage } from './env';

const ENTER_KEY = 'pt:entering';
const SKIP_EXT = /\.(pdf|jpe?g|png|webp|gif|mp4|zip)$/i;

/** Lifts the overlay that covered the previous page's exit. */
export function pageEnter(): Promise<void> {
  const root = document.documentElement;
  const overlay = $('[data-pt]');
  storage.remove(ENTER_KEY);

  if (!overlay || !root.classList.contains('is-entering')) return Promise.resolve();

  gsap.set(overlay, { yPercent: 0 });
  root.classList.remove('is-entering');

  return new Promise((resolve) => {
    gsap.to(overlay, {
      yPercent: -100,
      duration: 0.9,
      ease: 'expo.inOut',
      onComplete: () => {
        gsap.set(overlay, { yPercent: 100 });
        resolve();
      },
    });
  });
}

function isTransitionLink(event: MouseEvent, link: HTMLAnchorElement): URL | null {
  if (event.defaultPrevented || event.button !== 0) return null;
  if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return null;
  if ((link.target && link.target !== '_self') || link.hasAttribute('download')) return null;

  const url = new URL(link.href, window.location.href);
  if (url.origin !== window.location.origin) return null;
  if (url.pathname === window.location.pathname) return null; // same-page anchors are handled by Lenis
  if (SKIP_EXT.test(url.pathname)) return null;

  return url;
}

/** Covers the screen before navigating to another internal page. */
export function initPageTransitions() {
  const overlay = $('[data-pt]');
  if (!overlay || reducedMotion()) return;

  document.addEventListener('click', (event) => {
    const link = (event.target as Element).closest<HTMLAnchorElement>('a[href]');
    const url = link && isTransitionLink(event, link);
    if (!url) return;

    event.preventDefault();
    gsap.fromTo(
      overlay,
      { yPercent: 100 },
      {
        yPercent: 0,
        duration: 0.7,
        ease: 'expo.inOut',
        onComplete: () => {
          storage.set(ENTER_KEY, '1');
          window.location.href = url.href;
        },
      },
    );
  });

  // Restore state when returning via the back/forward cache.
  window.addEventListener('pageshow', (event) => {
    if (event.persisted) gsap.set(overlay, { yPercent: 100 });
  });
}
