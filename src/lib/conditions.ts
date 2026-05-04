/**
 * Single source of truth for the 12 treatment-area pages under /why-ketcare/.
 *
 * Each entry powers:
 *   - The dynamic page at /why-ketcare/[condition]/
 *   - The hub at /why-ketcare/ (cards linking to each)
 *   - The footer "Treatments" links
 *   - The ItemList schema on /why-ketcare/
 *
 * Hero `headline` supports an inline <em>...</em> wrapper for the italic-serif
 * accent on trailing words (the section header pattern from the brief).
 *
 * Body `sections` are seeded with brand-aligned placeholders flagged TODO.
 * Real content goes here when copywriter delivers (or AI-drafted from
 * .crawl/pages/why-ketcare_*.html).
 */

export type Condition = {
  slug: string;
  name: string;
  title: string;
  description: string;
  hero: {
    eyebrow: string;
    headline: string; // supports inline <em>...</em>
    subhead: string;
  };
  sections: {
    heading: string;
    body: string;
  }[];
  imageUrl?: string;
};

export const CONDITIONS: Condition[] = [
  {
    slug: 'depression',
    name: 'Depression',
    title: 'Ketamine Therapy for Depression | Ketcare',
    description:
      "At-home ketamine therapy for depression, supervised by licensed clinicians. Learn how Ketcare's protocol delivers rapid, lasting relief for treatment-resistant depression.",
    hero: {
      eyebrow: 'Ketcare for depression',
      headline: 'When the weight lifts. <em>Faster than you thought possible.</em>',
      subhead:
        'Depression rewires how your brain processes emotion, motivation, and meaning. Ketamine therapy interrupts that loop and gives you a window to rebuild — at home, supervised, and tailored to you.',
    },
    sections: [
      {
        heading: 'How ketamine helps with depression',
        body: 'TODO: replace with real copy. Ketamine works on the glutamate system, which regulates neuroplasticity. Many patients see improvement within hours — not weeks like traditional antidepressants.',
      },
      {
        heading: 'What treatment looks like at Ketcare',
        body: 'TODO: replace with real copy. Your journey starts with a clinical intake to confirm fit, then a structured series of at-home sessions with a clinician available throughout. Integration support continues between sessions.',
      },
      {
        heading: 'Who this is for',
        body: 'TODO: replace with real copy. Ketcare for depression is built for adults who haven\'t found relief in standard therapy or medication, or who want a faster path to feeling like themselves again.',
      },
    ],
  },
  {
    slug: 'anxiety',
    name: 'Anxiety',
    title: 'Ketamine Therapy for Anxiety | Ketcare',
    description:
      'At-home ketamine therapy for anxiety — quiet the noise, rebuild calm, and reset your nervous system under licensed clinical supervision.',
    hero: {
      eyebrow: 'Ketcare for anxiety',
      headline: 'Quiet the noise. <em>Rebuild calm.</em>',
      subhead:
        'Anxiety can feel like a constant background hum that never quiets. Ketamine therapy interrupts that pattern and helps your nervous system reset — at home, with clinician support throughout.',
    },
    sections: [
      {
        heading: 'How ketamine helps with anxiety',
        body: 'TODO: replace with real copy. Beyond symptom management, ketamine therapy creates an opening for your nervous system to recalibrate — addressing the root patterns instead of just dampening them.',
      },
      {
        heading: 'What treatment looks like at Ketcare',
        body: 'TODO: replace with real copy. Structured sessions in a calm at-home environment, supervised by licensed clinicians, with integration support between sessions.',
      },
      {
        heading: 'Who this is for',
        body: 'TODO: replace with real copy. Adults with generalized anxiety, social anxiety, or anxiety that hasn\'t responded fully to standard treatments.',
      },
    ],
  },
  {
    slug: 'ptsd',
    name: 'PTSD',
    title: 'Ketamine Therapy for PTSD | Ketcare',
    description:
      'Ketamine therapy for PTSD: a science-backed approach to processing trauma in a safe, supervised at-home setting.',
    hero: {
      eyebrow: 'Ketcare for PTSD',
      headline: 'Process the past. <em>Reclaim the present.</em>',
      subhead:
        'PTSD keeps the nervous system locked in patterns that protected you once but no longer serve you. Ketamine therapy creates space to process trauma safely, with clinical support throughout.',
    },
    sections: [
      {
        heading: 'How ketamine helps with PTSD',
        body: 'TODO: replace with real copy. Ketamine\'s effects on memory reconsolidation and neuroplasticity offer a window for therapy and integration that traditional approaches don\'t open as quickly.',
      },
      {
        heading: 'What treatment looks like at Ketcare',
        body: 'TODO: replace with real copy. Carefully paced sessions, trauma-informed clinicians, and integration support tailored to your history.',
      },
      {
        heading: 'Who this is for',
        body: 'TODO: replace with real copy. Adults with PTSD or complex trauma who haven\'t found full relief through first-line treatments and want a structured, supervised approach.',
      },
    ],
  },
  {
    slug: 'burnout',
    name: 'Burnout',
    title: 'Ketamine Therapy for Burnout | Ketcare',
    description:
      "Burnout isn't just exhaustion — it's a nervous-system state. Ketamine therapy helps you recover energy, focus, and emotional balance.",
    hero: {
      eyebrow: 'Ketcare for burnout',
      headline: 'When you have nothing left. <em>Find your way back.</em>',
      subhead:
        "Burnout isn't laziness or weakness. It's your nervous system telling you it's run out of capacity. Ketamine therapy supports recovery on a neurological level, not just a behavioral one.",
    },
    sections: [
      {
        heading: 'How ketamine helps with burnout',
        body: 'TODO: replace with real copy. Burnout has measurable neurological signatures. Ketamine helps reset stress response patterns and rebuild emotional reserves.',
      },
      {
        heading: 'What treatment looks like at Ketcare',
        body: 'TODO: replace with real copy. A protocol designed for high-functioning adults navigating burnout — flexible scheduling, clinician check-ins, integration that fits a real life.',
      },
      {
        heading: 'Who this is for',
        body: 'TODO: replace with real copy. Professionals, caregivers, and anyone running on fumes who needs more than a vacation can fix.',
      },
    ],
  },
  {
    slug: 'emotional-regulation',
    name: 'Emotional Regulation',
    title: 'Ketamine Therapy for Emotional Regulation | Ketcare',
    description:
      'Build steadier emotional ground. Ketamine therapy helps you respond rather than react — supervised, at-home, evidence-backed.',
    hero: {
      eyebrow: 'Ketcare for emotional regulation',
      headline: 'Respond, don\'t react. <em>Build steadier ground.</em>',
      subhead:
        'When emotions feel like waves you can\'t see coming, regulation feels impossible. Ketamine therapy creates space between stimulus and response — and gives you tools to keep that space open.',
    },
    sections: [
      {
        heading: 'How ketamine helps with emotional regulation',
        body: 'TODO: replace with real copy. Ketamine\'s effect on the prefrontal cortex supports the executive function involved in emotional regulation, paired with integration practice.',
      },
      {
        heading: 'What treatment looks like at Ketcare',
        body: 'TODO: replace with real copy. Structured sessions with integration coaching focused on real-world regulation skills.',
      },
      {
        heading: 'Who this is for',
        body: 'TODO: replace with real copy. Adults dealing with emotional volatility, intense reactivity, or difficulty regulating after stress.',
      },
    ],
  },
  {
    slug: 'getting-unstuck',
    name: 'Getting Unstuck',
    title: 'Ketamine Therapy for Getting Unstuck | Ketcare',
    description:
      'When motivation, clarity, and momentum disappear — ketamine therapy can help break the loop and rediscover your direction.',
    hero: {
      eyebrow: 'Ketcare for getting unstuck',
      headline: 'When you\'ve hit a wall. <em>Find the door.</em>',
      subhead:
        'Stuck isn\'t a failure of effort — it\'s often a sign your brain has settled into a pattern that no longer serves you. Ketamine therapy helps loosen those patterns and creates room for movement.',
    },
    sections: [
      {
        heading: 'How ketamine helps when you\'re stuck',
        body: 'TODO: replace with real copy. Ketamine\'s effect on neuroplasticity is most pronounced when you\'re open to change — making it well-suited for the "I know what I want, I just can\'t move" experience.',
      },
      {
        heading: 'What treatment looks like at Ketcare',
        body: 'TODO: replace with real copy. Sessions paired with integration work that turns insight into momentum.',
      },
      {
        heading: 'Who this is for',
        body: 'TODO: replace with real copy. Adults navigating major transitions, creative blocks, or that persistent sense of running in place.',
      },
    ],
  },
  {
    slug: 'grief',
    name: 'Grief',
    title: 'Ketamine Therapy for Grief | Ketcare',
    description:
      "Grief doesn't follow a timeline. Ketamine therapy can support healing when grief has settled into something that won't lift on its own.",
    hero: {
      eyebrow: 'Ketcare for grief',
      headline: 'Not to forget. <em>To move with the loss.</em>',
      subhead:
        'Grief that lasts isn\'t broken — it\'s love with nowhere to go. Ketamine therapy can help integrate the loss without erasing it, in a setting that holds space for what\'s real.',
    },
    sections: [
      {
        heading: 'How ketamine helps with grief',
        body: 'TODO: replace with real copy. For complicated grief, ketamine can help process the emotional weight that has become physically and cognitively stuck.',
      },
      {
        heading: 'What treatment looks like at Ketcare',
        body: 'TODO: replace with real copy. Trauma-informed clinicians, slower pacing when needed, integration that honors what you\'ve lost.',
      },
      {
        heading: 'Who this is for',
        body: 'TODO: replace with real copy. Adults navigating complicated grief, anniversary loss, or grief that has settled into depression or anxiety.',
      },
    ],
  },
  {
    slug: 'habit-change',
    name: 'Habit Change',
    title: 'Ketamine Therapy for Habit Change | Ketcare',
    description:
      'Patterns you\'ve outgrown but can\'t shake — ketamine therapy creates the neurological window that makes lasting change possible.',
    hero: {
      eyebrow: 'Ketcare for habit change',
      headline: 'When willpower runs out. <em>Change the wiring.</em>',
      subhead:
        'Habits live in the nervous system, not just in motivation. Ketamine therapy supports the neuroplasticity needed to break old loops and build new ones — paired with integration that makes it stick.',
    },
    sections: [
      {
        heading: 'How ketamine helps with habit change',
        body: 'TODO: replace with real copy. Ketamine\'s neuroplastic window pairs with behavioral change in ways that traditional approaches alone can\'t match.',
      },
      {
        heading: 'What treatment looks like at Ketcare',
        body: 'TODO: replace with real copy. Sessions plus integration coaching focused on the specific habits you want to change.',
      },
      {
        heading: 'Who this is for',
        body: 'TODO: replace with real copy. Adults working on substance use, repetitive emotional patterns, or behavioral loops that haven\'t responded to standard approaches.',
      },
    ],
  },
  {
    slug: 'relationships',
    name: 'Relationships',
    title: 'Ketamine Therapy for Relationships | Ketcare',
    description:
      'Better relationships start with a steadier inner life. Ketamine therapy can help you show up differently — with yourself, your partner, and the people who matter.',
    hero: {
      eyebrow: 'Ketcare for relationships',
      headline: 'Show up differently. <em>For them, and for yourself.</em>',
      subhead:
        'How you relate to others starts with how you relate to yourself. Ketamine therapy can help shift defensive patterns, increase emotional bandwidth, and open space for real connection.',
    },
    sections: [
      {
        heading: 'How ketamine helps with relationships',
        body: 'TODO: replace with real copy. By easing reactivity and increasing emotional regulation, ketamine therapy creates room for the kind of presence relationships actually need.',
      },
      {
        heading: 'What treatment looks like at Ketcare',
        body: 'TODO: replace with real copy. Sessions plus integration around the specific relational patterns you want to change.',
      },
      {
        heading: 'Who this is for',
        body: 'TODO: replace with real copy. Adults working through chronic relationship friction, attachment patterns, or the emotional aftermath of disconnection.',
      },
    ],
  },
  {
    slug: 'resilience',
    name: 'Resilience',
    title: 'Ketamine Therapy for Resilience | Ketcare',
    description:
      'Resilience isn\'t toughness. It\'s capacity. Ketamine therapy helps build the nervous-system capacity that real resilience requires.',
    hero: {
      eyebrow: 'Ketcare for resilience',
      headline: 'Not toughness. <em>Capacity.</em>',
      subhead:
        'Real resilience isn\'t about pushing through. It\'s about expanding the bandwidth of what your nervous system can hold. Ketamine therapy helps build that capacity from the ground up.',
    },
    sections: [
      {
        heading: 'How ketamine helps with resilience',
        body: 'TODO: replace with real copy. Ketamine\'s effect on stress response and neuroplasticity supports the kind of adaptive capacity that makes resilience real, not performed.',
      },
      {
        heading: 'What treatment looks like at Ketcare',
        body: 'TODO: replace with real copy. Sessions paired with integration work focused on the specific demands of your life.',
      },
      {
        heading: 'Who this is for',
        body: 'TODO: replace with real copy. High-performers, caregivers, and anyone navigating prolonged stress who needs more than a coping strategy.',
      },
    ],
  },
  {
    slug: 'self-love',
    name: 'Self-Love',
    title: 'Ketamine Therapy for Self-Love | Ketcare',
    description:
      'Move past self-criticism. Ketamine therapy can help shift the inner relationship that shapes everything else.',
    hero: {
      eyebrow: 'Ketcare for self-love',
      headline: 'Quiet the inner critic. <em>Build something kinder.</em>',
      subhead:
        'The voice in your head shapes everything. Ketamine therapy can interrupt long-running self-critical patterns and create space for a more honest, more compassionate inner relationship.',
    },
    sections: [
      {
        heading: 'How ketamine helps with self-love',
        body: 'TODO: replace with real copy. Ketamine therapy helps decouple identity from self-criticism, creating room for the kind of inner relationship that supports lasting change.',
      },
      {
        heading: 'What treatment looks like at Ketcare',
        body: 'TODO: replace with real copy. Sessions plus integration focused specifically on inner-critic patterns and self-compassion practice.',
      },
      {
        heading: 'Who this is for',
        body: 'TODO: replace with real copy. Adults dealing with chronic self-criticism, perfectionism, or the inner voice that makes everything else harder.',
      },
    ],
  },
  {
    slug: 'ketcare101',
    name: 'Ketcare 101',
    title: 'Ketcare 101: How Our Treatment Works | Ketcare',
    description:
      'Everything you need to know about Ketcare\'s at-home ketamine therapy — from intake to treatment to integration.',
    hero: {
      eyebrow: 'Ketcare 101',
      headline: 'Everything you need to know. <em>In one place.</em>',
      subhead:
        'How our protocol works, what to expect, and why we built it this way. The complete walkthrough of Ketcare\'s at-home ketamine therapy.',
    },
    sections: [
      {
        heading: 'The intake',
        body: 'TODO: replace with real copy. A clinical conversation to confirm fit, review your history, and design a protocol that matches your goals.',
      },
      {
        heading: 'The sessions',
        body: 'TODO: replace with real copy. Structured at-home sessions with clinician availability throughout. Calm environment, clear protocol, no surprises.',
      },
      {
        heading: 'The integration',
        body: 'TODO: replace with real copy. The work between sessions — turning insight into change. This is where Ketcare\'s approach differs most from less-supported alternatives.',
      },
      {
        heading: 'Who Ketcare is for',
        body: 'TODO: replace with real copy. Adults seeking a structured, supervised, evidence-backed path to mental wellness. Not for everyone — that\'s why we start with a clinical intake.',
      },
    ],
  },
];

export function getCondition(slug: string): Condition | undefined {
  return CONDITIONS.find((c) => c.slug === slug);
}
