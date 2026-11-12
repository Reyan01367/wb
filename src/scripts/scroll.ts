import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { reducedMotion } from './env';

/** Smooth scrolling driven by GSAP's ticker so ScrollTrigger stays in sync. */
export function initSmoothScroll(): Lenis | null {
  if (reducedMotion()) return null;

  const lenis = new Lenis({ lerp: 0.1, anchors: { offset: -40 } });

  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((time) => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);

  return lenis;
}

export function scrollToTop(lenis: Lenis | null) {
  if (lenis) lenis.scrollTo(0, { duration: 1.6 });
  else window.scrollTo({ top: 0 });
}
