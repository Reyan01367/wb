import 'lenis/dist/lenis.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

import { reducedMotion } from './env';
import { initSmoothScroll } from './scroll';
import { runPreloader } from './preloader';
import { initPageTransitions, pageEnter } from './transition';
import { initCursor, initMagnetic } from './cursor';
import { initNav, initFooter } from './chrome';
import { initReveals } from './reveal';
import { initSections } from './sections';

gsap.registerPlugin(ScrollTrigger, SplitText);

async function boot() {
  const lenis = initSmoothScroll();

  initPageTransitions();
  initCursor();
  initMagnetic();
  initNav();
  initFooter(lenis);

  // Fonts must be ready before splitting text into lines.
  await Promise.all([runPreloader(), document.fonts.ready]);

  if (!reducedMotion()) {
    initReveals();
    initSections();
  }

  await pageEnter();
  ScrollTrigger.refresh();
}

boot();
