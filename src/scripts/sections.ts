import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { $, $$ } from './env';

const DESKTOP = '(min-width: 900px)';

/** Infinite marquee that speeds up and reverses with scroll velocity. */
function marquee() {
  const track = $('[data-marquee-track]');
  if (!track) return;

  const loop = gsap.to(track, { xPercent: -50, duration: 40, ease: 'none', repeat: -1 });
  const skew = gsap.quickTo(track, 'skewX', { duration: 0.4, ease: 'power3' });

  ScrollTrigger.create({
    trigger: track,
    start: 'top bottom',
    end: 'bottom top',
    onUpdate: (self) => {
      const velocity = self.getVelocity();
      const boost = 1 + Math.min(Math.abs(velocity) / 250, 6);
      gsap.to(loop, { timeScale: self.direction * boost, duration: 0.2, overwrite: true });
      gsap.to(loop, { timeScale: self.direction, duration: 1.2, delay: 0.2 });
      skew(gsap.utils.clamp(-8, 8, velocity / -300));
    },
    onLeave: () => skew(0),
  });
}

/** Sticky project cards recede as the next one slides over them. */
function workStack(mm: gsap.MatchMedia) {
  const cards = $$('[data-stack-card]');
  if (cards.length < 2) return;

  mm.add(DESKTOP, () => {
    cards.slice(0, -1).forEach((card, i) => {
      gsap.to(card, {
        scale: 0.9,
        opacity: 0.4,
        ease: 'none',
        scrollTrigger: { trigger: cards[i + 1], start: 'top bottom', end: 'top 9%', scrub: true },
      });
    });
  });
}

/** Pinned horizontal scroll through the 7-step method. */
function method(mm: gsap.MatchMedia) {
  const section = $('[data-method]');
  const track = $('[data-method-track]');
  const bar = $('[data-method-progress]');
  if (!section || !track) return;

  mm.add(`${DESKTOP} and (prefers-reduced-motion: no-preference)`, () => {
    const distance = () => Math.max(0, track.scrollWidth - window.innerWidth);

    gsap.to(track, {
      x: () => -distance(),
      ease: 'none',
      scrollTrigger: {
        trigger: section,
        pin: true,
        start: 'top top',
        end: () => `+=${distance()}`,
        scrub: 1,
        invalidateOnRefresh: true,
        onUpdate: (self) => bar && gsap.set(bar, { scaleX: self.progress }),
      },
    });
  });
}

/** Video frame opens up from a letterbox as it enters. */
function film() {
  const frame = $('[data-film]');
  if (!frame) return;

  gsap.fromTo(
    frame,
    { clipPath: 'inset(10% 16% round 28px)' },
    {
      clipPath: 'inset(0% 0% round 28px)',
      ease: 'none',
      scrollTrigger: { trigger: frame, start: 'top 95%', end: 'top 20%', scrub: true },
    },
  );
}

/** Case study: reading progress + cover that grows into place. */
function caseStudy() {
  const bar = $('[data-case-progress]');
  if (bar) {
    gsap.to(bar, {
      scaleX: 1,
      ease: 'none',
      scrollTrigger: { trigger: document.body, start: 'top top', end: 'bottom bottom', scrub: true },
    });
  }

  const cover = $('[data-cover] .poster');
  if (cover) {
    gsap.fromTo(
      cover,
      { scale: 0.88 },
      { scale: 1, ease: 'none', scrollTrigger: { trigger: cover, start: 'top 85%', end: 'top 15%', scrub: true } },
    );
  }
}

export function initSections() {
  const mm = gsap.matchMedia();
  marquee();
  workStack(mm);
  method(mm);
  film();
  caseStudy();
}
