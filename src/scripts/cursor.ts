import { gsap } from 'gsap';
import { $, $$, finePointer, reducedMotion } from './env';

const INTERACTIVE = 'a, button, summary, [data-cursor]';

export function initCursor() {
  const cursor = $('[data-cursor-el]');
  const label = $('[data-cursor-label]');
  if (!cursor || !label || !finePointer()) return;

  const xTo = gsap.quickTo(cursor, 'x', { duration: 0.45, ease: 'power3' });
  const yTo = gsap.quickTo(cursor, 'y', { duration: 0.45, ease: 'power3' });
  let current: Element | null = null;

  window.addEventListener('pointermove', (event) => {
    xTo(event.clientX);
    yTo(event.clientY);
    cursor.classList.remove('is-hidden');

    const target = (event.target as Element).closest(INTERACTIVE);
    if (target === current) return;
    current = target;

    const text = target?.getAttribute('data-cursor') ?? '';
    label.textContent = text;
    cursor.classList.toggle('is-label', Boolean(text));
    cursor.classList.toggle('is-hover', Boolean(target));
  });

  document.documentElement.addEventListener('pointerleave', () => cursor.classList.add('is-hidden'));
}

/** Elements drift toward the pointer, then spring back. */
export function initMagnetic() {
  if (!finePointer() || reducedMotion()) return;

  $$('[data-magnetic]').forEach((el) => {
    const xTo = gsap.quickTo(el, 'x', { duration: 0.6, ease: 'power3' });
    const yTo = gsap.quickTo(el, 'y', { duration: 0.6, ease: 'power3' });

    el.addEventListener('pointermove', (event) => {
      const rect = el.getBoundingClientRect();
      xTo((event.clientX - (rect.left + rect.width / 2)) * 0.3);
      yTo((event.clientY - (rect.top + rect.height / 2)) * 0.3);
    });

    el.addEventListener('pointerleave', () => {
      gsap.to(el, { x: 0, y: 0, duration: 1, ease: 'elastic.out(1, 0.4)' });
    });
  });
}
