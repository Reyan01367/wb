/** Splits a headline into sentences so each can sit on its own line. */
export const sentences = (text: string) => text.split(/(?<=[.?!])\s+/);

/** Splits text around percentages, so "Brushing misses 40%." can highlight "40%". */
export const percentParts = (text: string) =>
  text.split(/(\d+%)/).filter(Boolean).map((part) => ({ part, isPercent: /^\d+%$/.test(part) }));

let counter = 0;

/** A unique id for SVG defs, so several posters can share a page. */
export const uid = (prefix: string) => `${prefix}-${++counter}`;
