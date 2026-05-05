/**
 * Per-condition identity. The shared treatment-page boilerplate (treatment
 * description, 3-step process, safety, guidelines, clinical evidence, why
 * choose Ketcare, testimonial) lives in TreatmentPage.tsx since the live
 * ketcare.com pages all share the same structure — only the program name
 * varies.
 *
 * Live H1 pattern is "Ketcare for [Name]"; we use that as the eyebrow and
 * keep brand-voice headline + subhead as the per-condition voice.
 */

export type Condition = {
  slug: string;
  name: string;
  metaTitle: string;
  metaDescription: string;
  hero: {
    /** "Ketcare for [Name]" — matches live site H1 */
    programLabel: string;
    /** Brand-voice headline; supports inline <em>...</em> */
    headline: string;
    subhead: string;
  };
};

export const CONDITIONS: Condition[] = [
  {
    slug: 'depression',
    name: 'Depression',
    metaTitle: 'Ketamine Therapy for Depression | Ketcare',
    metaDescription:
      'At-home ketamine therapy for depression, supervised by licensed clinicians.',
    hero: {
      programLabel: 'Ketcare for Depression',
      headline: 'When the weight lifts. <em>Faster than you thought possible.</em>',
      subhead:
        'Depression rewires how your brain processes emotion, motivation, and meaning. Ketamine therapy interrupts that loop and gives you a window to rebuild — at home, supervised, and tailored to you.',
    },
  },
  {
    slug: 'anxiety',
    name: 'Anxiety',
    metaTitle: 'Ketamine Therapy for Anxiety | Ketcare',
    metaDescription:
      'At-home ketamine therapy for anxiety — quiet the noise, rebuild calm.',
    hero: {
      programLabel: 'Ketcare for Anxiety',
      headline: 'Quiet the noise. <em>Rebuild calm.</em>',
      subhead:
        'Anxiety can feel like a constant background hum that never quiets. Ketamine therapy interrupts that pattern and helps your nervous system reset — at home, with clinician support throughout.',
    },
  },
  {
    slug: 'ptsd',
    name: 'PTSD',
    metaTitle: 'Ketamine Therapy for PTSD | Ketcare',
    metaDescription:
      'Ketamine therapy for PTSD: a science-backed approach to processing trauma in a safe, supervised at-home setting.',
    hero: {
      programLabel: 'Ketcare for PTSD',
      headline: 'Process the past. <em>Reclaim the present.</em>',
      subhead:
        'PTSD keeps the nervous system locked in patterns that protected you once but no longer serve you. Ketamine therapy creates space to process trauma safely, with clinical support throughout.',
    },
  },
  {
    slug: 'burnout',
    name: 'Burnout',
    metaTitle: 'Ketamine Therapy for Burnout | Ketcare',
    metaDescription:
      "Burnout isn't just exhaustion — it's a nervous-system state. Ketamine therapy helps you recover.",
    hero: {
      programLabel: 'Ketcare for Burnout',
      headline: 'When you have nothing left. <em>Find your way back.</em>',
      subhead:
        "Burnout isn't laziness or weakness. It's your nervous system telling you it's run out of capacity. Ketamine therapy supports recovery on a neurological level, not just a behavioral one.",
    },
  },
  {
    slug: 'emotional-regulation',
    name: 'Emotional Regulation',
    metaTitle: 'Ketamine Therapy for Emotional Regulation | Ketcare',
    metaDescription:
      'Build steadier emotional ground with at-home ketamine therapy.',
    hero: {
      programLabel: 'Ketcare for Emotional Regulation',
      headline: "Respond, don't react. <em>Build steadier ground.</em>",
      subhead:
        "When emotions feel like waves you can't see coming, regulation feels impossible. Ketamine therapy creates space between stimulus and response — and gives you tools to keep that space open.",
    },
  },
  {
    slug: 'getting-unstuck',
    name: 'Getting Unstuck',
    metaTitle: 'Ketamine Therapy for Getting Unstuck | Ketcare',
    metaDescription:
      'When motivation, clarity, and momentum disappear — ketamine therapy can help break the loop.',
    hero: {
      programLabel: 'Ketcare for Getting Unstuck',
      headline: "When you've hit a wall. <em>Find the door.</em>",
      subhead:
        "Stuck isn't a failure of effort — it's often a sign your brain has settled into a pattern that no longer serves you. Ketamine therapy helps loosen those patterns and creates room for movement.",
    },
  },
  {
    slug: 'grief',
    name: 'Grief',
    metaTitle: 'Ketamine Therapy for Grief | Ketcare',
    metaDescription:
      "Grief doesn't follow a timeline. Ketamine therapy can support healing.",
    hero: {
      programLabel: 'Ketcare for Grief',
      headline: 'Not to forget. <em>To move with the loss.</em>',
      subhead:
        "Grief that lasts isn't broken — it's love with nowhere to go. Ketamine therapy can help integrate the loss without erasing it, in a setting that holds space for what's real.",
    },
  },
  {
    slug: 'habit-change',
    name: 'Habit Change',
    metaTitle: 'Ketamine Therapy for Habit Change | Ketcare',
    metaDescription:
      "Patterns you've outgrown but can't shake — ketamine therapy creates the neurological window for lasting change.",
    hero: {
      programLabel: 'Ketcare for Habit Change',
      headline: 'When willpower runs out. <em>Change the wiring.</em>',
      subhead:
        'Habits live in the nervous system, not just in motivation. Ketamine therapy supports the neuroplasticity needed to break old loops and build new ones.',
    },
  },
  {
    slug: 'relationships',
    name: 'Relationships',
    metaTitle: 'Ketamine Therapy for Relationships | Ketcare',
    metaDescription:
      'Better relationships start with a steadier inner life. Ketamine therapy can help you show up differently.',
    hero: {
      programLabel: 'Ketcare for Relationships',
      headline: 'Show up differently. <em>For them, and for yourself.</em>',
      subhead:
        'How you relate to others starts with how you relate to yourself. Ketamine therapy can help shift defensive patterns, increase emotional bandwidth, and open space for real connection.',
    },
  },
  {
    slug: 'resilience',
    name: 'Resilience',
    metaTitle: 'Ketamine Therapy for Resilience | Ketcare',
    metaDescription:
      "Resilience isn't toughness. It's capacity. Ketamine therapy helps build it.",
    hero: {
      programLabel: 'Ketcare for Resilience',
      headline: 'Not toughness. <em>Capacity.</em>',
      subhead:
        "Real resilience isn't about pushing through. It's about expanding the bandwidth of what your nervous system can hold. Ketamine therapy helps build that capacity from the ground up.",
    },
  },
  {
    slug: 'self-love',
    name: 'Self-Love',
    metaTitle: 'Ketamine Therapy for Self-Love | Ketcare',
    metaDescription:
      'Move past self-criticism. Ketamine therapy can help shift the inner relationship that shapes everything else.',
    hero: {
      programLabel: 'Ketcare for Self-Love',
      headline: 'Quiet the inner critic. <em>Build something kinder.</em>',
      subhead:
        'Whether you struggle with feelings of unworthiness, self-doubt, or low self-respect, Ketcare for Self-Love provides a holistic approach to fostering self-love and acceptance.',
    },
  },
  {
    slug: 'ketcare101',
    name: 'Ketcare 101',
    metaTitle: 'Ketcare 101: How Our Treatment Works | Ketcare',
    metaDescription:
      "Everything you need to know about Ketcare's at-home ketamine therapy.",
    hero: {
      programLabel: 'Ketcare 101',
      headline: 'Everything you need to know. <em>In one place.</em>',
      subhead:
        "How our protocol works, what to expect, and why we built it this way. The complete walkthrough of Ketcare's at-home ketamine therapy.",
    },
  },
];

export function getCondition(slug: string): Condition | undefined {
  return CONDITIONS.find((c) => c.slug === slug);
}
