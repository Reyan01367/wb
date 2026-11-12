import type { Campaign } from './types';

const ACCESSED = 'Accessed: 12 November 2026';

const COM_B_REF =
  'Michie, S., van Stralen, M.M. and West, R. (2011) ‘The behaviour change wheel: a new method for characterising and designing behaviour change interventions’, Implementation Science, 6(1), p. 42. doi: 10.1186/1748-5908-6-42.';

const EAST_REF =
  'Service, O. et al. (2014) EAST: four simple ways to apply behavioural insights. London: The Behavioural Insights Team.';

/* ------------------------------------------------------------------ */
/* 01 — Brand campaign                                                 */
/* ------------------------------------------------------------------ */

const bupa: Campaign = {
  slug: 'bupa-body-mot',
  index: '01',
  brand: 'Bupa',
  title: 'Book Your Body’s MOT',
  tagline: 'Men service their cars every year. Their bodies? Never.',
  briefProject: 'Project 1 — Brand campaign',
  sector: 'Private healthcare',
  role: 'Strategy, concept, copy, art direction, photography',
  tools: ['Own photography', 'Lightroom', 'Photoshop', 'InDesign'],
  year: '2026',
  variant: 'bupa',
  summary:
    'A brand campaign for Bupa Health Assessments that borrows the one annual check-up British men never skip, the car MOT, and turns it on the driver.',
  challenge:
    'Bupa sells preventative health assessments, but its most at-risk audience, men aged 35–55, is the least likely to seek care until something goes wrong. The task: make proactive health feel as normal and responsible as servicing a car.',
  research: {
    market: [
      {
        stat: '7m+',
        text: 'People waiting for NHS consultant-led treatment in England, pushing working adults to consider paying for faster, preventative access.',
        source: 'NHS England, 2025',
      },
      {
        text: 'The private health category is crowded with reassurance messaging (“peace of mind”, “expert care”) that looks and sounds the same. There is space for a brand to own a concrete, everyday metaphor.',
        source: 'Competitor audit — own analysis',
      },
    ],
    audience: [
      {
        stat: '65%',
        text: 'Of UK men say they avoid going to the doctor for as long as possible.',
        source: 'London Medical Laboratory, cited in London Loves Business, n.d.',
      },
      {
        stat: '23%',
        text: 'Of UK men avoid general health check-ups because they fear discovering a condition.',
        source: 'Express & Star, 2025',
      },
      {
        stat: '61%',
        text: 'Of men report barriers to seeing a GP, with waiting times and inconvenient opening hours the main reasons.',
        source: 'Men and Boys Coalition, n.d.',
      },
    ],
    trend: [
      {
        text: 'Health optimisation culture (wearables, longevity podcasts, at-home blood tests) is making data-led, proactive health feel aspirational for men rather than anxious.',
        source: 'Trend analysis — own synthesis',
      },
      {
        text: 'Men respond to framing health as maintenance and performance rather than vulnerability; “fixing” language lowers the emotional cost of asking for help.',
        source: 'Trend analysis — own synthesis',
      },
    ],
  },
  insight:
    'He books his car in every year so a small fault never becomes a big bill, but he has never once done the same for his own body.',
  comB: {
    capability:
      'Knows check-ups exist, but doesn’t know what a health assessment involves or what it would actually tell him.',
    opportunity:
      'GP access feels slow and inconvenient; socially, “getting checked” reads as admitting something is wrong.',
    motivation:
      'Automatic: fear of bad news and “if it isn’t broken” optimism. Reflective: health feels like a problem for later.',
    primary: 'motivation',
  },
  brief: {
    behaviour: 'Book an annual Bupa Health Assessment before symptoms appear.',
    audience: 'UK men 35–55, working, car-owning, at the moment their MOT reminder lands.',
    barrier: 'Avoidance: “If nothing’s wrong, why look?” plus fear of what a test could find.',
    trigger: 'Reframing and familiarity: borrow a habit he already has (the annual MOT).',
    idea: 'Book Your Body’s MOT: the body as a vehicle with mileage, advisories and warning lights.',
    action: 'Scan, pick a date, book an assessment in under two minutes.',
    measurement: 'Assessment bookings from campaign URLs/QR, cost per booking, brand search uplift.',
  },
  idea: {
    name: 'Book Your Body’s MOT',
    line: 'No warning light doesn’t mean no fault.',
    description: [
      'Every execution speaks the language of the garage: mileage, advisories, service history, warning lights. It is a world the audience already finds reassuring and practical, so the conversation shifts from fear to maintenance.',
      'Media is placed where the metaphor lives: forecourts, garage waiting rooms, MOT reminder emails and drive-time audio. The idea reaches him at the exact moment he is already thinking about servicing something.',
    ],
  },
  executions: [
    {
      title: 'Forecourt 48-sheet',
      channel: 'OOH — petrol stations',
      description:
        'Shot on location at an independent garage. The mechanic’s inspection sheet becomes a health checklist.',
      ratio: '3/1',
      headline: 'Your car passed. Did you?',
      sub: 'Book your body’s MOT.',
      credit: 'Own photography · Lightroom · Photoshop',
    },
    {
      title: 'Mileage poster',
      channel: 'OOH — garage waiting rooms',
      description:
        'A simple calculation (≈70 bpm × 40 years) makes an invisible number feel mechanical and real.',
      ratio: '4/5',
      headline: 'At 40, your engine’s done 1.5 billion revs.',
      sub: 'When was its last service?',
      credit: 'Own photography · Photoshop · InDesign',
    },
    {
      title: 'Warning-light social',
      channel: 'Instagram / YouTube Shorts',
      description:
        'Dashboard warning-light icons redrawn as body systems. Each card ends on a one-tap booking link.',
      ratio: '9/16',
      headline: 'No warning light doesn’t mean no fault.',
      sub: 'Book a health assessment.',
      credit: 'Own photography · Photoshop',
    },
    {
      title: 'MOT reminder partnership',
      channel: 'CRM — garage partner emails',
      description:
        'A co-branded line added to garage MOT reminder emails: the most precisely timed media placement in the plan.',
      ratio: '1/1',
      headline: 'Advisory: blood pressure. Not tested.',
      sub: 'Your car’s booked. Now you.',
      credit: 'Own photography · InDesign',
    },
  ],
  kpis: [
    { metric: 'Health assessment bookings', target: '+15% vs. same period last year', method: 'Campaign-specific URL and QR attribution' },
    { metric: 'Cost per booking', target: 'Below current paid-social benchmark', method: 'Media spend ÷ attributed bookings' },
    { metric: 'Branded search', target: 'Uplift in “Bupa health check” searches', method: 'Google Trends + search console, exposed vs. control regions' },
    { metric: 'Message take-out', target: '60% correctly recall the MOT idea', method: 'Post-campaign brand tracker' },
  ],
  // TODO: rewrite reflections in your own words once the work is made — markers check these.
  reflection: [
    'This project taught me that a strong metaphor does strategic work: the MOT frame dissolved the fear barrier faster than any reassurance line I wrote in early drafts.',
    'Shooting my own photography forced better art direction decisions. Real garages and real hands made the work feel credible in a way stock imagery never did.',
    'Next time I would test the metaphor with women 35–55 as well; the insight may be broader than the audience I chose.',
  ],
  references: [
    'Binet, L. and Field, P. (2013) The long and the short of it: balancing short and long-term marketing strategies. London: Institute of Practitioners in Advertising.',
    `Express & Star (2025) ‘One in four males avoid health checks through fear of finding something wrong’, 15 April. Available at: https://expressandstar.com/your-world/2025/04/15/one-in-four-males-avoid-health-checks-through-fear-of-finding-something-wrong (${ACCESSED}).`,
    `London Loves Business (n.d.) ‘“Man up” urges health expert as it may be hard to see your doctor but 65% of men avoid them anyway’. Available at: https://londonlovesbusiness.com/man-up-urges-health-expert-as-it-may-be-hard-to-see-your-doctor-but-65-of-men-avoid-them-anyway/ (${ACCESSED}).`,
    `Men and Boys Coalition (n.d.) Men’s Health Week survey shows long waiting times and inconvenient opening hours are main reasons men do not go to the GP. Available at: https://www.menandboyscoalition.org.uk/newsevents/mens-health-week-survey-shows-long-waiting-times-and-inconvenient-opening-hours-are-main-reasons-men-do-not-go-to-the-gp (${ACCESSED}).`,
    COM_B_REF,
    `NHS England (2025) Consultant-led referral to treatment waiting times. Available at: https://www.england.nhs.uk/statistics/statistical-work-areas/rtt-waiting-times/ (${ACCESSED}).`,
  ],
  aiLog: [
    { tool: 'Microsoft Copilot', usage: 'Research assistance: summarising survey sources', link: 'https://copilot.microsoft.com' },
  ],
};

/* ------------------------------------------------------------------ */
/* 02 — Behaviour change / social impact                               */
/* ------------------------------------------------------------------ */

const nhs: Campaign = {
  slug: 'nhs-number-two-priority',
  index: '02',
  brand: 'NHS Bowel Cancer Screening',
  title: 'Number Two Priority',
  tagline: 'The kit’s in the drawer. The idea gets it out.',
  briefProject: 'Project 2 — Behaviour change for society',
  sector: 'Public health',
  role: 'Behavioural strategy, concept, copy, design, motion',
  tools: ['Illustrator', 'InDesign', 'After Effects', 'Photoshop'],
  year: '2026',
  variant: 'nhs',
  summary:
    'A behaviour change campaign that uses humour, prompts and friction-removal to get more people to complete the NHS bowel screening kit that is already sitting in their home.',
  challenge:
    'The NHS posts a free, simple home test to everyone eligible. Awareness isn’t the problem: the kit arrives. Yet around a third are never returned, and uptake is lowest in the communities with the worst outcomes. This is a textbook intention–action gap.',
  research: {
    market: [
      {
        stat: '67.6%',
        text: 'Bowel screening uptake in England in 2023–24 — 4.7 million of 6.97 million people invited.',
        source: 'Cancer Research UK, 2025',
      },
      {
        stat: '65.2%',
        text: 'Uptake in 2024–25, a fall linked partly to newly eligible younger age groups being less likely to take part.',
        source: 'Bowel Cancer UK, 2025',
      },
    ],
    audience: [
      {
        stat: '20pts',
        text: 'The deprivation gap: 55.8% uptake in the most deprived fifth of areas vs. 75.8% in the least deprived.',
        source: 'Cancer Research UK, 2025',
      },
      {
        text: 'Men, people in deprived areas and some ethnic groups are consistently less likely to participate.',
        source: 'Cancer Research UK, 2025',
      },
    ],
    trend: [
      {
        text: 'Humour is increasingly used in health communication to reduce stigma around “embarrassing” conditions, following the logic of campaigns such as Dumb Ways to Die.',
        source: 'Case study analysis — own synthesis',
      },
      {
        text: 'Digital nudges (NHS App notifications, SMS) make it possible to place a prompt at the exact moment of action rather than weeks before it.',
        source: 'Service et al., 2014',
      },
    ],
  },
  insight:
    'Nobody decides not to do the test. They just decide not to do it today, and the kit slides into the bathroom drawer for good.',
  comB: {
    capability:
      'Psychological: unsure how to take the sample, worried about “doing it wrong”.',
    opportunity:
      'Physical: no cue at the right moment, so the kit gets forgotten. Social: talking about poo is taboo, especially among men.',
    motivation:
      'Automatic: disgust and embarrassment. Reflective: “I feel fine, so I don’t need it.”',
    primary: 'motivation',
  },
  brief: {
    behaviour: 'Complete and post back the bowel screening (FIT) kit within 14 days of it arriving.',
    audience: 'Men 50–74 in England, especially newly eligible 50–54s and those in the most deprived areas.',
    barrier: 'Disgust and embarrassment, plus no prompt at the moment of action.',
    trigger: 'Humour (salience), ease (one tiny sample), and an implementation intention prompt.',
    idea: 'Number Two Priority: own the joke so the embarrassment has nowhere to hide.',
    action: '“Next time you go, do the kit.” Return in the free envelope.',
    measurement: 'Kit return rate and time-to-return vs. matched control areas.',
  },
  idea: {
    name: 'Number Two Priority',
    line: 'Next time you go, do the kit.',
    description: [
      'Embarrassment survives on silence. Number Two Priority says the awkward part out loud, with a wink, so the audience laughs instead of looking away. Humour is used to defuse disgust, never to make light of cancer.',
      'Every touchpoint carries the same implementation intention: “next time you go”. It links the action to a moment that is guaranteed to happen, and the most important placements sit exactly where that moment is.',
    ],
  },
  executions: [
    {
      title: 'Mirror cling',
      channel: 'In-kit prompt',
      description:
        'A removable sticker inside the kit for the bathroom mirror: the prompt lives where the behaviour happens.',
      ratio: '4/5',
      headline: 'Tomorrow morning: Number Two Priority.',
      sub: 'One tiny sample. Free envelope. Done.',
      credit: 'Illustrator · InDesign',
    },
    {
      title: 'Stadium washroom poster',
      channel: 'OOH — football grounds & pubs',
      description:
        'Eye-level panels in men’s washrooms reach the core audience in the one place the topic is already on their mind.',
      ratio: '4/5',
      headline: 'You’re already here.',
      sub: 'Next time, bring the kit.',
      credit: 'Illustrator · Photoshop',
    },
    {
      title: 'NHS App nudge',
      channel: 'Push notification / SMS',
      description:
        'Day-7 reminder triggered when the kit hasn’t been returned: the right prompt at the right time.',
      ratio: '9/16',
      headline: 'Your kit’s been home for a week.',
      sub: 'Number two priority?',
      credit: 'Figma · After Effects',
    },
    {
      title: 'Barber shop partnership',
      channel: 'Community — trusted messengers',
      description:
        'Barbers in low-uptake postcodes hand out conversation cards, making the topic socially normal where reach is lowest.',
      ratio: '1/1',
      headline: '2 in 3 people do the kit.',
      sub: 'Ask your barber about it.',
      credit: 'InDesign · Illustrator',
    },
  ],
  kpis: [
    { metric: 'Kit return rate', target: '+5 percentage points in campaign areas', method: 'NHS screening hub returns, campaign vs. matched control areas' },
    { metric: 'Time to return', target: 'Median under 14 days', method: 'Date posted vs. date received at the lab' },
    { metric: 'Deprivation gap', target: 'Narrow the gap in pilot areas', method: 'Uptake by IMD quintile, pre vs. post' },
    { metric: 'Embarrassment score', target: 'Significant reduction', method: 'Pre/post survey with the target audience' },
  ],
  // TODO: rewrite reflections in your own words once the work is made — markers check these.
  reflection: [
    'COM-B stopped me from writing yet another awareness campaign. Once I saw that the kit was already in people’s homes, the brief became about prompts and feelings, not information.',
    'The hardest judgement was tone. The lines I kept joke about the situation, never the disease, because humour that trivialises risk can backfire.',
    'If I took this further I would design it as a randomised trial with the screening hubs, because attribution is the weakest part of most behaviour change work.',
  ],
  references: [
    `Bowel Cancer UK (2025) People in their 50s urged to complete bowel cancer screening. Available at: https://www.bowelcanceruk.org.uk/news-and-blogs/news/people-in-their-50s-urged-to-complete-bowel-cancer-screening/ (${ACCESSED}).`,
    `Cancer Research UK (2025) Bowel cancer screening: access and inequalities. Available at: https://www.cancerresearchuk.org/health-professional/cancer-screening/bowel-cancer-screening/access-and-inequalities (${ACCESSED}).`,
    'Gollwitzer, P.M. (1999) ‘Implementation intentions: strong effects of simple plans’, American Psychologist, 54(7), pp. 493–503.',
    COM_B_REF,
    EAST_REF,
    'Witte, K. (1992) ‘Putting the fear back into fear appeals: the extended parallel process model’, Communication Monographs, 59(4), pp. 329–349.',
  ],
  aiLog: [
    { tool: 'Microsoft Copilot', usage: 'Research assistance: locating screening statistics', link: 'https://copilot.microsoft.com' },
  ],
};

/* ------------------------------------------------------------------ */
/* 03 — FMCG                                                           */
/* ------------------------------------------------------------------ */

const nivea: Campaign = {
  slug: 'nivea-sun-chance-of-uv',
  index: '03',
  brand: 'NIVEA SUN',
  title: 'Cloudy With a Chance of UV',
  tagline: 'Sunscreen isn’t a souvenir.',
  briefProject: 'Project 3 — FMCG',
  sector: 'FMCG — suncare & skin health',
  role: 'Strategy, concept, copy, AI image direction',
  tools: ['Figma Weave', 'Photoshop', 'Illustrator', 'After Effects'],
  year: '2026',
  variant: 'nivea',
  summary:
    'An always-on FMCG campaign for NIVEA SUN UV Face that turns the British weather forecast into a daily reason to apply SPF, growing sales outside the holiday season.',
  challenge:
    'In the UK, sunscreen is packed for Spain and forgotten at home. For NIVEA SUN that means a short, holiday-driven sales window; for public health it means avoidable skin damage on grey days. One behaviour solves both: daily SPF as the last step of a morning routine.',
  research: {
    market: [
      {
        stat: '17.5k',
        text: 'New melanoma skin cancer cases in the UK each year.',
        source: 'Cancer Research UK, n.d.',
      },
      {
        stat: '86%',
        text: 'Of melanoma skin cancer cases in the UK are preventable.',
        source: 'Cancer Research UK, n.d.',
      },
    ],
    audience: [
      {
        stat: '56%',
        text: 'Of 18–34 year-olds in Great Britain were sunburnt at least once in 2022 (vs. 40% of all adults).',
        source: 'British Association of Dermatologists, 2022',
      },
      {
        stat: '35%',
        text: 'Of UK adults don’t wear sunscreen from May to September at home.',
        source: 'Melanoma Focus, 2026',
      },
    ],
    trend: [
      {
        stat: '80%',
        text: 'Up to 80% of UV radiation can pass through light cloud: the grey-sky myth is the problem.',
        source: 'World Health Organization, 2017',
      },
      {
        text: '“Skinification”: Gen Z and millennials treat skincare as a daily ritual, and SPF is increasingly framed online as the best anti-ageing step. The habit slot already exists.',
        source: 'Trend analysis — own synthesis',
      },
    ],
  },
  insight:
    'Brits check the weather every morning to decide what to wear, and use it as proof they don’t need sunscreen.',
  comB: {
    capability:
      'Psychological: believes UV is about heat and sunshine, not daylight. Doesn’t know the UV index.',
    opportunity:
      'Physical: SPF lives in the holiday bag, not the bathroom shelf. Social: daily SPF is seen as a “skincare person” thing.',
    motivation:
      'Automatic: no habit cue. Reflective: “It’s cloudy, I’ll be fine.”',
    primary: 'capability',
  },
  brief: {
    behaviour: 'Apply face SPF every morning as the final step of a skincare routine, all year round.',
    audience: 'UK 18–34s with a basic skincare routine, at the moment they check the weather.',
    barrier: 'The grey-sky myth, plus no habit cue outside the holidays.',
    trigger: 'Salience (make invisible UV visible) and prompts (attach SPF to the weather check).',
    idea: 'Cloudy With a Chance of UV: rewrite the British forecast so it always ends with SPF.',
    action: 'Make NIVEA SUN UV Face step three of your morning routine.',
    measurement: 'Off-season (Oct–Apr) sales, repeat purchase rate, and household penetration.',
  },
  idea: {
    name: 'Cloudy With a Chance of UV',
    line: 'Every day is an SPF day.',
    description: [
      'The forecast is the most-checked piece of British content every morning, so the campaign hijacks it. Weather-app style visuals show the live UV index on grey days and always end with the same advice: apply anyway.',
      'All key visuals were generated and art-directed in Figma Weave, then retouched in Photoshop: overcast British streets lit with an unexpected UV glow, making an invisible risk visible.',
    ],
  },
  executions: [
    {
      title: 'Live UV forecast DOOH',
      channel: 'Digital OOH — commuter stations',
      description:
        'Screens pull the real UV index by location each morning. Copy updates automatically, so grey days get the strongest message.',
      ratio: '9/16',
      headline: 'Manchester. 14°. Cloudy. UV 5.',
      sub: 'Apply anyway.',
      credit: 'AI-generated — Figma Weave · Photoshop',
    },
    {
      title: 'Weather-triggered programmatic',
      channel: 'Mobile — weather apps',
      description:
        'Ads served only when the UV index is 3+ and cloud cover is high: the exact moment the myth is strongest.',
      ratio: '1/1',
      headline: 'Feels like 14°. UV says otherwise.',
      sub: 'Every day is an SPF day.',
      credit: 'AI-generated — Figma Weave · Illustrator',
    },
    {
      title: 'Step Three pack sleeve',
      channel: 'Retail — Boots & Superdrug',
      description:
        'A limited-edition sleeve positions UV Face as “Step 3” of a morning routine, building a habit cue into the product itself.',
      ratio: '4/5',
      headline: 'Cleanse. Moisturise. Forecast.',
      sub: 'Step three, every morning.',
      credit: 'AI-generated — Figma Weave · Photoshop',
    },
    {
      title: 'Grey-day 48-sheet',
      channel: 'OOH — roadside',
      description:
        'A heavy, overcast street scene with skin glowing in UV light: the invisible made visible.',
      ratio: '3/1',
      headline: 'Cloudy with a chance of UV.',
      sub: 'NIVEA SUN UV Face SPF50.',
      credit: 'AI-generated — Figma Weave · Photoshop',
    },
  ],
  kpis: [
    { metric: 'Off-season sales', target: '+20% Oct–Apr vs. prior year', method: 'Retailer EPOS data (Boots, Superdrug)' },
    { metric: 'Repeat purchase', target: 'Second purchase within 60 days', method: 'Loyalty card panel data' },
    { metric: 'Household penetration', target: 'Growth among 18–34s', method: 'Kantar-style consumer panel' },
    { metric: 'Belief shift', target: '“UV passes through cloud”: +25pts', method: 'Pre/post awareness survey' },
  ],
  // TODO: rewrite reflections in your own words once the work is made — markers check these.
  reflection: [
    'Byron Sharp’s argument that growth comes from penetration changed my objective: instead of a summer burst, I designed an always-on habit cue to win more buyers more often.',
    'Figma Weave was a steep learning curve. My first generations looked generic; the breakthrough came from prompting with light and weather references rather than describing the product.',
    'I am conscious that the brand benefits commercially from a health message. I kept every claim tied to published evidence so the campaign informs rather than scares.',
  ],
  references: [
    `British Association of Dermatologists (2022) 40% of Brits sunburnt in 2022’s extreme heatwave. Available at: https://www.skinhealthinfo.org.uk/40-of-brits-sunburnt-in-2022s-extreme-heatwave (${ACCESSED}).`,
    `Cancer Research UK (n.d.) Melanoma skin cancer statistics. Available at: https://www.cancerresearchuk.org/health-professional/cancer-statistics/statistics-by-cancer-type/melanoma-skin-cancer (${ACCESSED}).`,
    `Melanoma Focus (2026) 1 in 9 Scottish adults have deliberately burnt their skin. Available at: https://melanomafocus.org/news-blog/1-in-9-scottish-adults-have-deliberately-burnt-their-skin/ (${ACCESSED}).`,
    COM_B_REF,
    'Sharp, B. (2010) How brands grow: what marketers don’t know. Oxford: Oxford University Press.',
    `World Health Organization (2017) Radiation: ultraviolet (UV) radiation and skin cancer. Available at: https://www.who.int/news-room/questions-and-answers/item/radiation-ultraviolet-(uv)-radiation-and-skin-cancer (${ACCESSED}).`,
  ],
  aiLog: [
    { tool: 'Figma Weave', usage: 'Visual content: all key visuals generated and art-directed', link: 'https://weave.figma.com/' },
    { tool: 'Adobe Firefly (Photoshop Generative Fill)', usage: 'Visual content: retouching and extending backgrounds', link: 'https://firefly.adobe.com/' },
    { tool: 'Microsoft Copilot', usage: 'Research assistance: summarising suncare survey sources', link: 'https://copilot.microsoft.com' },
  ],
};

export const campaigns: Campaign[] = [bupa, nhs, nivea];

export const getCampaign = (slug: string) => campaigns.find((c) => c.slug === slug);

export const getNextCampaign = (slug: string) => {
  const i = campaigns.findIndex((c) => c.slug === slug);
  return campaigns[(i + 1) % campaigns.length];
};
