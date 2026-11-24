import type { Campaign } from './types';

/*
 * TODO before submitting: rewrite the copy in your own words (especially `reflection`),
 * and paste each source's link from your research document as the second argument of `online()`.
 */

const ACCESSED = 'Accessed: 20 November 2026';

/** Harvard (Cite Them Right) entry for an online source. */
const online = (citation: string, url = '') => (url ? `${citation} Available at: ${url} (${ACCESSED}).` : citation);

const COM_B_REF =
  'Michie, S., van Stralen, M.M. and West, R. (2011) ‘The behaviour change wheel: a new method for characterising and designing behaviour change interventions’, Implementation Science, 6(1), p. 42. doi: 10.1186/1748-5908-6-42.';

const EAST_REF =
  'Service, O. et al. (2014) EAST: four simple ways to apply behavioural insights. London: The Behavioural Insights Team.';

const CLAUDE_LOG = {
  tool: 'Claude (Anthropic)',
  usage: 'Idea development, first-draft copy and the coded key visuals; I chose, edited and rewrote the final work',
  link: 'https://claude.ai',
};

/* ------------------------------------------------------------------ */
/* 01 — Brand campaign                                                 */
/* ------------------------------------------------------------------ */

const olivara: Campaign = {
  slug: 'olivara-500-year-head-start',
  index: '01',
  brand: 'OLIVARA',
  title: 'The 500-Year Head Start',
  tagline: 'Hand over a community that already looks established.',
  briefProject: 'Project 1 — Brand campaign',
  sector: 'Landscape & real estate · wellbeing',
  role: 'Strategy, concept, copy, art direction, own photography',
  tools: ['Own photography', 'Typography & layout', 'Claude (AI-assisted)'],
  year: '2026',
  variant: 'olivara',
  summary:
    'A B2B brand campaign that sells OLIVARA’s centuries-old Spanish olive trees to UAE developers as the fastest way to make a new community feel finished, trusted and liveable.',
  challenge:
    'OLIVARA imports mature Spanish heritage olive trees, then supplies and installs them across the UAE. Its buyers are real estate developers, who usually treat trees as a landscaping line decided late and on cost. The task: move OLIVARA from supplier to sales asset, in a market where 73% of Dubai homes are sold before they are built.',
  research: {
    market: [
      {
        stat: '215,700',
        text: 'Record Dubai residential transactions in 2025, worth over Dh686.6bn and up 30.9% year on year.',
        source: 'Khaleej Times, 2026a',
      },
      {
        stat: '73%',
        text: 'Of Dubai residential sales in 2025 were off-plan: buyers commit to a render, then wait years to move in.',
        source: 'Cavendish Maxwell, 2026',
      },
      {
        stat: '$2.84bn',
        text: 'Projected UAE landscaping market by 2030, up from $1.67bn in 2024 (about 9% a year).',
        source: 'Research and Markets, 2025',
      },
    ],
    audience: [
      {
        stat: '40%',
        text: 'Higher demand for green, wellness-focused projects, along with price and rental premiums.',
        source: 'Khaleej Times, 2025b',
      },
      {
        text: 'Leading developers already compete on nature: Ghaf Woods (Majid Al Futtaim), The Wilds (Aldar) and Grand Polo (Emaar).',
        source: 'Khaleej Times, 2025b',
      },
      {
        text: 'Buyers pay a premium for biophilic, nature-led environments, and shade makes shared spaces usable for more of the year.',
        source: 'Khaleej Times, n.d.',
      },
    ],
    trend: [
      {
        stat: '3.5m',
        text: 'Trees Dubai plans to plant by 2040, alongside 187 km² of green space.',
        source: 'Khaleej Times, 2026b',
      },
      {
        stat: 'Dh1m',
        text: 'Paid per tree by developers already planting olive trees up to 2,500 years old (MAG, Keturah Reserve).',
        source: 'Khaleej Times, 2025a',
      },
      {
        stat: '2.2°C',
        text: 'Cooling from green parks in Abu Dhabi. Olive trees tolerate intense water shortage, so they suit the climate.',
        source: 'Gulf News, 2024; Connor, 2005',
      },
    ],
  },
  insight:
    'Off-plan buyers are asked to believe in a place that doesn’t exist yet. A young tree takes a decade to say “home”; a 500-year-old olive says it on day one.',
  comB: {
    capability:
      'Developers know green sells, but not that mature trees can be sourced, moved and established in UAE conditions, or what that involves.',
    opportunity:
      'Landscaping is decided late, by procurement, after the sales launch, so trees never reach the sales and marketing team.',
    motivation:
      'Reflective: trees are seen as a cost line, not a sales asset. Automatic: caution about anything that might not survive on site.',
    primary: 'motivation',
  },
  brief: {
    behaviour: 'Specify OLIVARA heritage olives at masterplan stage, and install a “Show Tree” at sales launch.',
    audience: 'Marketing directors and masterplanners at UAE developers (Dubai, Abu Dhabi), while launches are being planned.',
    barrier: '“Trees are a landscaping cost for later”, plus doubt that old trees survive the move.',
    trigger: 'Reframe the tree as proof: its age becomes a selling point, and its passport becomes reassurance.',
    idea: 'The 500-Year Head Start: give a new community a history before it has residents.',
    action: 'Book a grove visit or a Show Tree consultation.',
    measurement: 'Qualified enquiries, Cityscape meetings booked, Show Trees converted into masterplan orders.',
  },
  idea: {
    name: 'The 500-Year Head Start',
    line: 'Completed 2028. Established 1526.',
    description: [
      'Every new development in the UAE competes with the same glossy renders. OLIVARA can sell the one thing a render can’t show: time. Each heritage olive arrives with centuries behind it, so a community launching today can look, feel and photograph as established from its first day.',
      'The campaign speaks the developer’s language (handover dates, sales speed, buyer trust) and backs it with the wellbeing case. Shade, cooling and contact with nature make places healthier to live in (Ulrich, 1984), and residents now pay more for them.',
      'Every visual uses my own photography of the trees, so the bark, the scale and the age are real, not rendered.',
    ],
  },
  executions: [
    {
      title: 'Trade press double-page spread',
      channel: 'Print — Cityscape Global guide & property trade titles',
      description:
        'My own photograph of a heritage olive, with its age set against a handover date. The dates change with each tree’s passport, so the line is always true.',
      ratio: '16/10',
      headline: 'Completed 2028. Established 1526.',
      sub: 'Heritage olive trees, installed before handover.',
      art: 'grove',
      credit: 'Own photography · typography & layout',
    },
    {
      title: 'The Show Tree',
      channel: 'Experiential — sales galleries',
      description:
        'A heritage olive installed at the sales gallery on launch day, so buyers stand under the community’s first resident. The plaque does the selling.',
      ratio: '4/5',
      headline: 'This tree is 400 years old. Your home will be ready in 2028.',
      sub: 'Plant the first tree before the first brick.',
      art: 'plaque',
      credit: 'Own photography · plaque design',
    },
    {
      title: 'The Provenance Pack',
      channel: 'B2B direct mail — 50 target developers',
      description:
        'An olive-wood box for marketing directors: a tree passport (age, grove, origin coordinates), oil from the same grove and an invitation to reserve a tree. It answers the survival doubt with documentation.',
      ratio: '1/1',
      headline: 'Every tree arrives with a birth certificate older than the city.',
      sub: 'Tree passport',
      art: 'passport',
      credit: 'Pack & print design',
    },
  ],
  kpis: [
    { metric: 'Qualified developer enquiries', target: '40 in six months', method: 'Campaign landing page and QR codes on print and mailer' },
    { metric: 'Cityscape meetings', target: '20 booked meetings', method: 'Stand bookings tracked in the CRM' },
    { metric: 'Show Tree conversions', target: '3 of 5 lead to masterplan orders', method: 'Sales pipeline review' },
    { metric: 'Target-account engagement', target: '30 of 50 named developers engage', method: 'LinkedIn account-based campaign reporting' },
  ],
  reflection: [
    'My first line, “Plant a legacy”, was written for government buyers. Switching to developers meant dropping legacy for what they are measured on: how fast a community sells and how trusted it feels before it exists.',
    'Photographing the trees myself mattered. Close-ups of bark and trunk showed age better than any statistic, and they gave the campaign its look.',
    'The health benefit here is indirect (shade, cooling, nature). I kept it as support rather than the headline, because developers buy on sales first.',
  ],
  references: [
    online('Cavendish Maxwell (2026) Dubai residential sales 2025.'),
    'Connor, D.J. (2005) ‘Adaptation of olive (Olea europaea L.) to water-limited environments’, Australian Journal of Agricultural Research, 56(11), pp. 1181–1189.',
    online('Gulf News (2024) ‘Green parks cool Abu Dhabi by up to 2.2°C, MBZUAI and IBM study finds’.'),
    online('Khaleej Times (n.d.) ‘UAE’s forest living trend’.'),
    online('Khaleej Times (2025a) ‘Ancient olive trees replanted in Dubai’.'),
    online('Khaleej Times (2025b) ‘Green projects offer 40% higher ROI’.'),
    online('Khaleej Times (2026a) ‘UAE property market entering 2026’.'),
    online('Khaleej Times (2026b) ‘Dubai to plant 3.5 million trees by 2040’.'),
    online('Research and Markets (2025) UAE landscaping market.'),
    'Ulrich, R.S. (1984) ‘View through a window may influence recovery from surgery’, Science, 224(4647), pp. 420–421.',
    online('Zawya (2026) ‘Abu Dhabi residential sales hit record’.'),
  ],
  aiLog: [CLAUDE_LOG],
};

/* ------------------------------------------------------------------ */
/* 02 — Behaviour change                                               */
/* ------------------------------------------------------------------ */

const humble: Campaign = {
  slug: 'humble-the-other-40',
  index: '02',
  brand: 'The Humble Co.',
  title: 'The Other 40%',
  tagline: 'Brushing does 60%. Finish the job.',
  briefProject: 'Project 2 — Behaviour change',
  sector: 'Oral health',
  role: 'Strategy, behavioural diagnosis, concept, copy, art direction',
  tools: ['COM-B', 'Illustration & typography', 'Claude (AI-assisted)'],
  year: '2026',
  variant: 'humble',
  summary:
    'A behaviour change campaign for The Humble Co. that gets young UK adults, especially men, to clean between their teeth every day by showing them the job they leave unfinished.',
  challenge:
    '74% of UK adults don’t floss daily and only 12% follow a dentist-recommended routine. Most people believe brushing is enough. The task: make cleaning between your teeth a daily habit for the groups who skip it most, 18–24s and men.',
  research: {
    market: [
      {
        stat: '74%',
        text: 'Of UK adults don’t floss daily, and only 12% follow a dentist-recommended cleaning routine.',
        source: 'Yorkshire Post, 2026',
      },
      {
        stat: '62%',
        text: 'Clean between their teeth regularly. Interdental brushes have overtaken floss, and UK guidance favours them.',
        source: 'Oral Health Foundation, 2017',
      },
      {
        text: 'TePe already owns the topic on TV (“Little Habits That Last a Lifetime”), so a smaller brand needs a sharper, younger voice.',
        source: 'Decision Marketing, n.d.',
      },
    ],
    audience: [
      {
        stat: '18%',
        text: 'Of 18–24-year-olds floss daily, compared with 37% of over-55s.',
        source: 'Dental Nursing, n.d.',
      },
      {
        stat: '25%',
        text: 'Of men never floss, compared with 16% of women. Around 35% of adults floss daily.',
        source: 'YouGov, 2025',
      },
      {
        stat: '37%',
        text: 'Put real effort into their teeth and gums, against healthy eating (52%) and exercise (47%). 32% of Gen Z would improve their routine with more advice.',
        source: 'Yorkshire Post, 2026',
      },
    ],
    trend: [
      {
        stat: '40%',
        text: 'Of each tooth’s surface is missed by brushing alone, which cleans only about 60%.',
        source: 'Decision Marketing, n.d.',
      },
      {
        stat: '1 in 4',
        text: 'UK adults have untreated tooth decay, and 9% show signs of severe gum disease.',
        source: 'Yorkshire Post, 2026',
      },
      {
        text: 'The NHS recommends cleaning between teeth daily. A 2016 AP investigation questioned the evidence for floss alone, so this campaign says “clean between your teeth”, not “floss”.',
        source: 'Oral Health Foundation, 2016; HuffPost UK, n.d.',
      },
    ],
  },
  insight:
    'Nobody rinses 60% of a plate and calls it clean, but that is what brushing alone does to your teeth, and three in four of us stop there.',
  comB: {
    capability:
      'Psychological: people don’t know brushing misses 40%. Physical: floss feels fiddly, and few know interdental brushes exist or which size to use.',
    opportunity:
      'Physical: the toothbrush sits by the sink, the floss (if bought) is in a drawer. Social: nobody talks about it, so skipping feels normal.',
    motivation:
      'Reflective: “brushing is enough”. Automatic: brushing is a habit; cleaning between isn’t attached to anything.',
    primary: 'motivation',
  },
  brief: {
    behaviour: 'Clean between your teeth once a day, straight after brushing.',
    audience: 'UK adults 18–34 who brush but don’t clean between, with a lean towards men.',
    barrier: '“Brushing is enough”, and no cue for the extra step.',
    trigger: 'Salience (show the missing 40%), habit stacking (“After I brush, I clean between”) and ease (interdental brushes kept beside the toothbrush).',
    idea: 'The Other 40%: brushing alone leaves the job unfinished.',
    action: 'Buy the Finish the Job bundle, scan the QR and start a 30-day streak.',
    measurement: 'Interdental sales uplift, QR scans, 30-day streaks completed, pre/post daily-cleaning survey.',
  },
  idea: {
    name: 'The Other 40%',
    line: 'Brushing misses 40%.',
    description: [
      'Brushing isn’t wrong, it’s unfinished. The campaign never tells people off. It shows the gap, the other 40% of each tooth, and makes closing it the obvious last step.',
      'The new habit is tied to one people already have. Every execution repeats one plan: “After I brush, I clean between.” Plans in this if-then form make a new behaviour much more likely to happen (Gollwitzer, 1999), and repeating it in the same place makes it automatic over time (Lally et al., 2010).',
      'The Humble Co. is made by dentists, so the message carries professional trust without sounding like a lecture.',
    ],
  },
  executions: [
    {
      title: '48-sheet & bus shelter',
      channel: 'OOH — near universities and gyms',
      description:
        'A single tooth split 60/40: the brushed part bright, the rest shaded. One fact and nothing else to read.',
      ratio: '3/1',
      headline: 'Brushing misses 40%.',
      sub: 'Clean between your teeth. Every day.',
      art: 'tooth',
      credit: 'Illustration & typography',
    },
    {
      title: '“Unfinished jobs” social series',
      channel: 'Instagram / TikTok',
      description:
        'Everyday jobs left 60% done: a plate, a half-shaved beard, a car washed down one side. Each ends on the tooth. Made for young men who would never accept a half-done job anywhere else.',
      ratio: '4/5',
      headline: 'You wouldn’t wash 60% of a plate.',
      sub: 'So why brush 60% of your teeth?',
      art: 'plate',
      credit: 'Illustration & typography',
    },
    {
      title: 'Finish the Job bundle',
      channel: 'Retail pack — pharmacies & online',
      description:
        'A toothbrush and interdental brushes sold together, with a mirror cling that states the plan. One pack puts the cue and the tool in the same place.',
      ratio: '1/1',
      headline: 'Finish the job.',
      sub: 'Brush. Then between.',
      art: 'pack',
      credit: 'Pack design',
    },
  ],
  kpis: [
    { metric: 'Interdental sales', target: '+20% in campaign retailers', method: 'Retailer sales data vs. matched control stores' },
    { metric: 'Daily cleaning (self-reported)', target: '+10 pts among 18–34s', method: 'Pre/post survey' },
    { metric: '30-day streaks', target: '25% of QR sign-ups complete one', method: 'Streak tracker data' },
    { metric: 'Repeat purchase', target: 'Refill bought within 90 days', method: 'Online and loyalty data' },
  ],
  reflection: [
    'I chose The Humble Co. over TePe because TePe has already run a TV campaign on this exact behaviour. A smaller, dentist-made brand needed a sharper idea to be noticed.',
    'The research changed my wording. The evidence for floss alone is debated, so I wrote “clean between your teeth” throughout. Being accurate made the message stronger, not weaker.',
    'COM-B showed that knowledge isn’t the real problem; habit is. That is why the pack and the mirror cling matter more than the poster.',
  ],
  references: [
    online('Decision Marketing (n.d.) ‘TePe’s first TV campaign’.'),
    online('Dental Nursing (n.d.) ‘Building better habits’.'),
    'Gollwitzer, P.M. (1999) ‘Implementation intentions: strong effects of simple plans’, American Psychologist, 54(7), pp. 493–503.',
    online('HuffPost UK (n.d.) ‘Do you really need to floss every day?’.'),
    'Lally, P. et al. (2010) ‘How are habits formed: modelling habit formation in the real world’, European Journal of Social Psychology, 40(6), pp. 998–1009.',
    COM_B_REF,
    online('Oral Health Foundation (2016) Flossophy: interdental cleaning is important.'),
    online('Oral Health Foundation (2017) Interdental brushes overtake floss.'),
    online('YouGov (2025) How clean are Brits?'),
    online('Yorkshire Post (2026) Oral-B survey of 2,000 UK adults.'),
  ],
  aiLog: [CLAUDE_LOG],
};

/* ------------------------------------------------------------------ */
/* 03 — FMCG                                                           */
/* ------------------------------------------------------------------ */

const altruist: Campaign = {
  slug: 'altruist-shirts-off-spf-on',
  index: '03',
  brand: 'Altruist',
  title: 'Shirts Off, SPF On.',
  tagline: 'Made by a skin cancer surgeon. About the price of a pint.',
  briefProject: 'Project 3 — FMCG campaign',
  sector: 'Sun care · skin cancer prevention',
  role: 'Strategy, concept, copy, art direction',
  tools: ['Illustration & typography', 'Pack & retail design', 'Claude (AI-assisted)'],
  year: '2026',
  variant: 'altruist',
  summary:
    'An FMCG campaign that puts Altruist’s £5.75 dermatologist-made SPF50 in front of British men at the moment the shirt comes off: parks, beer gardens and the BBQ aisle.',
  challenge:
    'Men are 69% more likely to die from melanoma than women, and 41% never use sunscreen in a UK summer. Altruist is made by a skin cancer surgeon and costs about the same as a pint, yet sun care advertising rarely talks to men. The task: grow Altruist in Tesco by making SPF part of a British man’s summer, not just his holiday.',
  research: {
    market: [
      {
        stat: '250',
        text: 'Tesco stores have stocked Altruist since February 2025. SPF50 100ml costs £5.75, kept low by small margins and little marketing.',
        source: 'Altruist, 2025; Fundraising, n.d.',
      },
      {
        stat: '48%',
        text: 'Of UK adults now use SPF daily, up from 22% in 2024, as sun care moves from seasonal to daily. The global category is worth $17.2bn.',
        source: 'Croda Beauty, 2025; Cosmetics Business, 2026',
      },
      {
        text: 'Fewer than 6 in 10 UK adults have bought any sunscreen in the last two years.',
        source: 'Cancer Research UK, 2026b',
      },
    ],
    audience: [
      {
        stat: '41%',
        text: 'Of men never use sunscreen in a UK summer (35% of all adults).',
        source: 'Melanoma Focus, 2026',
      },
      {
        stat: '69%',
        text: 'More likely to die from melanoma if you are a man. Women’s death rates are falling; men’s are not.',
        source: 'Cancer Research UK, n.d.',
      },
      {
        stat: '2 in 5',
        text: 'Of men’s melanomas are on the torso, possibly linked to going shirtless.',
        source: 'Cancer Research UK, n.d.',
      },
    ],
    trend: [
      {
        stat: '20,000+',
        text: 'UK melanoma cases in 2022, a record, rising to 26,500 a year by 2040. Almost 9 in 10 are caused by UV.',
        source: 'Cancer Research UK, 2026a',
      },
      {
        stat: '36%',
        text: 'Of Gen Z apply SPF daily, against 24% of all adults, yet tanning and sunbeds are coming back.',
        source: 'Croda Beauty, 2025',
      },
      {
        stat: '25%',
        text: 'Of UK adults have never heard of the UV index.',
        source: 'Melanoma Focus, 2026',
      },
    ],
  },
  insight:
    'Men think sunscreen is for holidays, but their melanomas start at home: two in five are on the torso they bare on the first warm Saturday.',
  comB: {
    capability:
      'Psychological: they underestimate British sun (a quarter of adults have never heard of the UV index) and don’t link a pink back with cancer.',
    opportunity:
      'Social: SPF reads as a beauty or holiday product, not something mates use at the park. Physical: sunscreen isn’t there when the shirt comes off.',
    motivation:
      'Reflective: “I don’t burn in England.” Automatic: going shirtless is spontaneous, so nobody plans for it.',
    primary: 'opportunity',
  },
  brief: {
    behaviour: 'Put on SPF50 before taking the shirt off on warm UK days.',
    audience: 'UK men 20–45 who rarely or never use sunscreen at home; Tesco shoppers.',
    barrier: 'SPF is seen as a holiday or beauty product, and nobody around them uses it.',
    trigger: 'Social norms and timely prompts: put the message, and the product, where the shirt comes off.',
    idea: 'Shirts Off, SPF On: a simple rule for the British summer, backed by a skin cancer surgeon.',
    action: 'Pick up Altruist SPF50 in the Tesco BBQ aisle with the rest of the weekend shop.',
    measurement: 'Sales in BBQ-aisle placements, male buyer share (Clubcard), pre/post “used SPF last weekend” survey, QR scans.',
  },
  idea: {
    name: 'Shirts Off, SPF On.',
    line: 'Shirts off? SPF on.',
    description: [
      'The campaign gives men a rule, not a lecture. “Shirts off, SPF on” is short enough to shout across a park, and it links sunscreen to a moment they already know.',
      'Authority does the persuading. Altruist was founded by consultant dermatologist and skin cancer surgeon Dr Andrew Birnie, who treats skin cancer patients every day. At £5.75, price is no excuse.',
      'Media goes where the behaviour happens (parks, beer gardens, Sunday-league pitches and the Tesco BBQ aisle), so the prompt arrives at the moment of action (Service et al., 2014).',
    ],
  },
  executions: [
    {
      title: 'Park & beer-garden 48-sheet',
      channel: 'OOH — parks, beer gardens, seaside routes',
      description:
        'Big, bright and readable from a picnic blanket. The torso fact gives the warning; the price takes away the excuse.',
      ratio: '3/1',
      headline: 'Shirts off? SPF on.',
      sub: '2 in 5 men’s melanomas are on the torso.',
      art: 'bottle',
      credit: 'Illustration & typography',
    },
    {
      title: '“Doctor’s Note” limited pack',
      channel: 'Pack — limited summer edition',
      description:
        'The bottle wears a prescription label from the brand’s founder, turning a doctor-made brand into doctor’s orders. (Wording to be approved by Dr Birnie.)',
      ratio: '4/5',
      headline: 'Apply before the shirt comes off.',
      sub: 'Dr Andrew Birnie, skin cancer surgeon',
      art: 'rx',
      credit: 'Pack design',
    },
    {
      title: 'BBQ-aisle shelf barker & bundle',
      channel: 'Retail — Tesco, May to August',
      description:
        'Altruist placed next to the burgers and buns, with a shelf barker that makes SPF part of the weekend shop.',
      ratio: '1/1',
      headline: 'Burgers. Buns. SPF50.',
      sub: 'Altruist SPF50 100ml',
      art: 'shelf',
      credit: 'Retail design',
    },
  ],
  kpis: [
    { metric: 'Sales in BBQ placements', target: '+25% vs. stores without', method: 'Tesco sales data, test vs. control stores' },
    { metric: 'Male buyer share', target: '+10 pts among men 20–45', method: 'Tesco Clubcard data' },
    { metric: 'Behaviour', target: '+15 pts “used SPF last weekend”', method: 'Pre/post survey of men 20–45' },
    { metric: 'Engagement', target: 'QR sign-ups to UV-index alerts', method: 'QR and sign-up analytics' },
  ],
  reflection: [
    'I chose men because the research kept pointing there: they use sunscreen least and die from melanoma most. Talking to everyone would have hidden the people most at risk.',
    'Altruist barely advertises, which keeps the price low. So I designed media that works hard for little money: the pack, the shelf and a few well-placed outdoor sites.',
    'The Doctor’s Note pack borrows the founder’s authority. On a live brief I would get his approval for every word and check the claims against the ASA’s rules on health claims.',
  ],
  references: [
    online('Altruist (2025) Launch into Tesco.'),
    online('Cancer Research UK (n.d.) Melanoma death rates in men, via inkl.'),
    online('Cancer Research UK (2026a) Skin cancer cases hit record high.'),
    online('Cancer Research UK (2026b) Most people haven’t bought sunscreen.'),
    online('Cosmetics Business (2026) Top 5 sun care trends.'),
    online('Croda Beauty (2025) Trends shaping sun protection.'),
    EAST_REF,
    online('Fundraising (n.d.) Altruist founders.'),
    online('Melanoma Focus (2026) 1 in 9 UK adults deliberately burnt.'),
    COM_B_REF,
  ],
  aiLog: [CLAUDE_LOG],
};

export const campaigns: Campaign[] = [olivara, humble, altruist];

export const getCampaign = (slug: string) => campaigns.find((c) => c.slug === slug);

export const getNextCampaign = (slug: string) => {
  const i = campaigns.findIndex((c) => c.slug === slug);
  return campaigns[(i + 1) % campaigns.length];
};
