import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import { $$ } from './env';

const EASE = 'expo.out';

function heroIntro() {
  const lines = $$('[data-hero-line]');
  if (lines.length) {
    gsap.to(lines, { y: 0, duration: 1.5, stagger: 0.12, ease: EASE });
  }
}

function splitHeadings() {
  $$('[data-split]').forEach((el) => {
    gsap.set(el, { opacity: 1 });
    SplitText.create(el, {
      type: 'lines',
      mask: 'lines',
      linesClass: 'split-line',
      autoSplit: true,
      onSplit: (self) =>
        gsap.from(self.lines, {
          yPercent: 110,
          duration: 1.2,
          stagger: 0.08,
          ease: EASE,
          scrollTrigger: { trigger: el, start: 'top 88%', once: true },
        }),
    });
  });
}

function fadeUps() {
  const items = $$('[data-reveal]');
  gsap.set(items, { y: 40 });
  ScrollTrigger.batch(items, {
    start: 'top 92%',
    once: true,
    onEnter: (batch) =>
      gsap.to(batch, { autoAlpha: 1, y: 0, duration: 1.1, stagger: 0.08, ease: EASE, overwrite: true }),
  });
}

/** ECG lines draw themselves as they scroll through the viewport. */
function drawLines() {
  $$<SVGSVGElement>('[data-draw]')
    .filter((svg) => !svg.closest('[data-preloader]'))
    .forEach((svg) => {
      const path = svg.querySelector('path');
      gsap.fromTo(
        path,
        { strokeDasharray: 1, strokeDashoffset: 1 },
        {
          strokeDashoffset: 0,
          ease: 'none',
          scrollTrigger: { trigger: svg, start: 'top 95%', end: 'bottom 45%', scrub: 1 },
        },
      );
    });
}

/** Counts up stats like "67.6%", "7m+", "17.5k" while keeping their suffix. */
function counters() {
  $$('[data-count]').forEach((el) => {
    const match = el.dataset.count?.match(/^([\d.]+)(.*)$/);
    if (!match) return;

    const [, num, suffix] = match;
    const target = parseFloat(num);
    const decimals = num.split('.')[1]?.length ?? 0;
    const state = { value: 0 };

    gsap.to(state, {
      value: target,
      duration: 1.8,
      ease: 'power3.out',
      scrollTrigger: { trigger: el, start: 'top 90%', once: true },
      onUpdate: () => {
        el.textContent = `${state.value.toFixed(decimals)}${suffix}`;
      },
    });
  });
}

function parallax() {
  $$('[data-speed]').forEach((el) => {
    const speed = parseFloat(el.dataset.speed ?? '0');
    gsap.to(el, {
      yPercent: speed * 100,
      ease: 'none',
      scrollTrigger: { trigger: el, start: 'top bottom', end: 'bottom top', scrub: true },
    });
  });
}

function manifesto() {
  $$('[data-manifesto]').forEach((el) => {
    gsap.to(el.children, {
      opacity: 1,
      stagger: 0.1,
      ease: 'none',
      scrollTrigger: { trigger: el, start: 'top 80%', end: 'bottom 50%', scrub: true },
    });
  });
}

function wordmark() {
  $$('[data-wordmark]').forEach((el) => {
    const split = SplitText.create(el, { type: 'chars', mask: 'chars' });
    gsap.from(split.chars, {
      yPercent: 100,
      duration: 1.4,
      stagger: 0.05,
      ease: EASE,
      scrollTrigger: { trigger: el, start: 'top 95%', once: true },
    });
  });
}

export function initReveals() {
  heroIntro();
  splitHeadings();
  fadeUps();
  drawLines();
  counters();
  parallax();
  manifesto();
  wordmark();
}
