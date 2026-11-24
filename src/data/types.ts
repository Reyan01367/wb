export type PosterVariant = 'olivara' | 'humble' | 'altruist';

/** The composition drawn for a creative output (see PosterArt). */
export type Art = 'grove' | 'plaque' | 'passport' | 'tooth' | 'plate' | 'pack' | 'bottle' | 'rx' | 'shelf';

export type Ratio = '16/10' | '4/5' | '1/1' | '9/16' | '3/1';

/** A single research finding. `stat` is optional; `source` maps to a Harvard in-text citation. */
export interface ResearchPoint {
  stat?: string;
  text: string;
  source: string;
}

export interface Execution {
  title: string;
  channel: string;
  description: string;
  ratio: Ratio;
  /** Headline rendered on the generated key visual when no `image` is supplied. */
  headline: string;
  sub?: string;
  art: Art;
  /** Own photograph placed inside the layout (OLIVARA arts), e.g. '/media/olivara/tree-01.jpg'. */
  photo?: string;
  /** Finished artwork under /public. Replaces the generated visual entirely. */
  image?: string;
  /** How the visual was made, shown as a credit tag. */
  credit: string;
}

export interface Kpi {
  metric: string;
  target: string;
  method: string;
}

export interface AiLogEntry {
  tool: string;
  usage: string;
  link: string;
}

export interface Campaign {
  slug: string;
  index: string;
  brand: string;
  title: string;
  tagline: string;
  briefProject: string;
  sector: string;
  role: string;
  tools: string[];
  year: string;
  variant: PosterVariant;
  /** Optional hero image under /public; otherwise the generated key visual is used. */
  cover?: string;
  summary: string;
  challenge: string;
  research: {
    market: ResearchPoint[];
    audience: ResearchPoint[];
    trend: ResearchPoint[];
  };
  insight: string;
  comB: {
    capability: string;
    opportunity: string;
    motivation: string;
    primary: 'capability' | 'opportunity' | 'motivation';
  };
  brief: {
    behaviour: string;
    audience: string;
    barrier: string;
    trigger: string;
    idea: string;
    action: string;
    measurement: string;
  };
  idea: {
    name: string;
    line: string;
    description: string[];
  };
  executions: Execution[];
  kpis: Kpi[];
  reflection: string[];
  references: string[];
  aiLog: AiLogEntry[];
}
