export const reducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export const finePointer = () => window.matchMedia('(pointer: fine)').matches;

export const $ = <T extends Element = HTMLElement>(selector: string, root: ParentNode = document) =>
  root.querySelector<T>(selector);

export const $$ = <T extends Element = HTMLElement>(selector: string, root: ParentNode = document) =>
  Array.from(root.querySelectorAll<T>(selector));

export const storage = {
  get: (key: string) => {
    try {
      return sessionStorage.getItem(key);
    } catch {
      return null;
    }
  },
  set: (key: string, value: string) => {
    try {
      sessionStorage.setItem(key, value);
    } catch {
      /* storage unavailable (private mode) — feature degrades gracefully */
    }
  },
  remove: (key: string) => {
    try {
      sessionStorage.removeItem(key);
    } catch {
      /* noop */
    }
  },
};
