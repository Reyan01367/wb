/**
 * Everything personal lives here. Replace every value marked TODO before submitting.
 */
export const site = {
  name: 'Adam Joumma',
  firstName: 'Adam', // used in the giant footer wordmark
  initials: 'AJ',
  role: 'Health Communications Strategist',
  location: 'London, UK',
  email: 'hello@yourname.com', // TODO
  phone: '', // optional
  url: 'https://your-portfolio.vercel.app', // TODO — your Vercel URL

  description:
    'Creative strategist using behavioural science to make the healthy choice the easy one. Portfolio of health-sector advertising campaigns.',

  socials: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/your-handle' }, // TODO
    { label: 'Behance', href: 'https://www.behance.net/your-handle' }, // TODO or remove
    { label: 'Instagram', href: 'https://www.instagram.com/your-handle' }, // TODO or remove
  ],

  /** Career pack files go in /public/docs. */
  documents: [
    { label: 'CV', href: '/docs/cv.pdf' },
    { label: 'Career Pack', href: '/docs/career-pack.pdf' },
  ],

  /**
   * Professional expertise video (1.5–2 min).
   * Use ONE of: a YouTube ID, a Vimeo ID, or a file in /public/media.
   */
  video: {
    youtubeId: '', // e.g. 'dQw4w9WgXcQ'
    vimeoId: '',
    file: '', // e.g. '/media/intro.mp4'
    poster: '', // e.g. '/media/intro-poster.jpg'
    duration: '1:45',
  },

  /** Optional portrait under /public/media — falls back to an initials block. */
  portrait: '',

  hero: {
    kicker: 'Portfolio — 2026',
    tag: 'Health comms strategist',
    lines: ['Healthier', 'behaviour,', 'by design.'],
    intro:
      'I’m a creative strategist who uses behavioural science to close the gap between knowing what’s healthy and actually doing it.',
  },

  manifesto:
    'Most health advertising tries to change what people think. I design for what they do — finding the friction between intention and action, then building ideas that make the healthy choice the easy one.',

  bio: [
    'I’m a final-year BA (Hons) Advertising student at Regent’s University London with one focus: communication that measurably improves people’s health.',
    'Health is where advertising matters most and where it most often fails. Everyone knows they should wear sunscreen or clean between their teeth; the gap is behavioural, not informational. My work starts from that gap, using the COM-B model to diagnose the real barrier before a single headline is written.',
    'Next, I’m moving into healthcare management, carrying a communicator’s understanding of people into how health services are designed, delivered and adopted.',
  ],

  expertise: [
    'Behaviour change strategy (COM-B, EAST)',
    'Health & social marketing',
    'Audience & trend research',
    'Campaign concepting & copywriting',
    'Art direction & photography',
    'AI-assisted image making',
  ],

  toolkit: [
    'Photoshop',
    'Illustrator',
    'InDesign',
    'Premiere Pro',
    'After Effects',
    'Lightroom',
    'Figma',
    'Firefly',
  ],

  education: [
    { years: '2023 — 2026', title: 'BA (Hons) Advertising', place: 'Regent’s University London' },
    { years: 'Next', title: 'Healthcare Management', place: 'Postgraduate study — TODO: programme' },
  ],

  /** Real awards only, e.g. { year: '2026', title: 'Shortlist', org: 'D&AD New Blood' }. Sections hide while empty. */
  awards: [] as { year: string; title: string; org: string }[],
} as const;

export type Site = typeof site;
