import { gsap } from 'gsap';
import { $, storage } from './env';

const SEEN_KEY = 'preloader:seen';

/** Plays once per session. Resolves while the curtain lifts so the hero can animate in underneath. */
export function runPreloader(): Promise<void> {
  const el = $('[data-preloader]');
  if (!el || getComputedStyle(el).display === 'none') {
    el?.remove();
    return Promise.resolve();
  }

  const count = $('[data-preloader-count]', el)!;
  const path = $<SVGPathElement>('path', el)!;
  const progress = { value: 0 };

  return new Promise((resolve) => {
    gsap
      .timeline({
        onComplete: () => {
          el.remove();
          storage.set(SEEN_KEY, '1');
        },
      })
      .fromTo(path, { strokeDasharray: 1, strokeDashoffset: 1 }, { strokeDashoffset: 0, duration: 2, ease: 'power2.inOut' }, 0)
      .to(
        progress,
        {
          value: 100,
          duration: 2,
          ease: 'power2.inOut',
          onUpdate: () => {
            count.textContent = String(Math.round(progress.value));
          },
        },
        0,
      )
      .to(el, { yPercent: -100, duration: 1.1, ease: 'expo.inOut' }, '+=0.15')
      .call(resolve, [], '-=0.6');
  });
}
