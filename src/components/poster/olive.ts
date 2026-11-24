/** Seeded pseudo-random numbers, so the tree renders identically on every build. */
const seeded = (seed: number) => () => {
  seed = (seed * 16807) % 2147483647;
  return (seed - 1) / 2147483646;
};

export interface Leaf {
  x: number;
  y: number;
  angle: number;
  tone: number;
}

/** A cluster of foliage: centre x, centre y and spread, in the tree's 400 × 360 viewBox. */
export type Cluster = readonly [number, number, number];

export const CLUSTERS: Cluster[] = [
  [115, 128, 48],
  [198, 84, 52],
  [292, 112, 50],
  [334, 170, 38],
  [78, 180, 38],
  [205, 148, 44],
  [150, 96, 40],
  [252, 84, 40],
];

/** Scatters narrow olive leaves around each cluster, denser towards the centre. */
export const leaves = (clusters: Cluster[], perCluster = 60, seed = 7): Leaf[] => {
  const random = seeded(seed);
  return clusters.flatMap(([cx, cy, spread]) =>
    Array.from({ length: perCluster }, () => {
      const angle = random() * Math.PI * 2;
      const distance = Math.sqrt(random()) * spread;
      return {
        x: cx + Math.cos(angle) * distance * 1.35,
        y: cy + Math.sin(angle) * distance * 0.8,
        angle: Math.round(random() * 180),
        tone: Math.floor(random() * 3),
      };
    }),
  );
};
