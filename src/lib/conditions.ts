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
        body: "Standard antidepressants work on serotonin, gradually. Ketamine works on glutamate — the brain's most abundant neurotransmitter — and acts within hours instead of weeks. The window it opens is when real change becomes possible, especially when paired with structured therapeutic support. For many of our patients, that window is the first time in years they remember what 'feeling like myself' actually means.",
      },
      {
        heading: 'What treatment looks like at Ketcare',
        body: 'Treatment begins with a clinical intake to confirm fit and design a protocol around your history. Sessions take place at home in a calm environment you control, with a licensed clinician available throughout. Between sessions, integration support helps turn what surfaced during treatment into something that holds — not just a good week, but a different baseline.',
      },
      {
        heading: 'Who this is for',
        body: "Adults navigating major depression, treatment-resistant depression, or persistent low mood that hasn't responded to traditional approaches. Our intake is rigorous because Ketcare isn't right for everyone — and being honest about fit is part of how we deliver outcomes our patients trust.",
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
        body: "Anxiety isn't a single thing — it's a pattern that gets reinforced every time your nervous system rehearses the worst case. Ketamine acts on the glutamate system to soften that rehearsal, creating space between stimulus and reaction. That space is where new patterns can take root, with the right support around them.",
      },
      {
        heading: 'What treatment looks like at Ketcare',
        body: 'Sessions take place at home in a setting you control, with a clinician available throughout. The protocol is built around your specific anxiety pattern — generalized, social, panic, or post-event — and integration between sessions helps you carry the calmer baseline forward into real life.',
      },
      {
        heading: 'Who this is for',
        body: "Adults with generalized anxiety, panic, social anxiety, or anxiety that hasn't responded fully to standard medications and therapy. Our intake confirms fit before any treatment begins.",
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
        body: "Trauma lives in the nervous system, not just the memory. Standard talk therapy works on the meaning of what happened; ketamine works on the body's storage of it. Paired with trauma-informed integration, it can move what years of effort haven't been able to.",
      },
      {
        heading: 'What treatment looks like at Ketcare',
        body: 'We pace this slowly. The intake is longer for trauma work, and the early sessions are designed to build trust before depth. A trauma-informed clinician is available throughout each session and during integration. You set the pace; we provide the structure.',
      },
      {
        heading: 'Who this is for',
        body: "Adults with PTSD, complex trauma, or persistent trauma symptoms that haven't lifted despite first-line treatments. Our intake screens carefully — for some kinds of acute trauma, ketamine isn't the right next step, and we'll tell you that directly.",
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
        body: "Burnout has measurable neurological signatures — chronic stress reshapes the brain regions responsible for motivation, mood, and reward. Ketamine creates an opening for those systems to recover, which is something rest alone often can't do once the depletion has gone deep enough.",
      },
      {
        heading: 'What treatment looks like at Ketcare',
        body: 'Designed for high-functioning adults navigating burnout — flexible session scheduling, clinician check-ins between sessions, and integration that fits a real life with real obligations. Not a retreat. Not a pause. A reset.',
      },
      {
        heading: 'Who this is for',
        body: "Professionals, caregivers, parents, founders — anyone running on empty for long enough that vacations don't touch it. Adults whose burnout has crossed into territory that lifestyle changes alone can't reach.",
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
      headline: "Respond, don't react. <em>Build steadier ground.</em>",
      subhead:
        "When emotions feel like waves you can't see coming, regulation feels impossible. Ketamine therapy creates space between stimulus and response — and gives you tools to keep that space open.",
    },
    sections: [
      {
        heading: 'How ketamine helps with emotional regulation',
        body: "Regulation isn't about suppressing feelings — it's about expanding the window in which you can stay present with them. Ketamine supports that expansion by acting on the prefrontal cortex, the brain region most involved in choosing your response instead of being chosen by it.",
      },
      {
        heading: 'What treatment looks like at Ketcare',
        body: 'Sessions paired with integration coaching focused on real-world regulation skills — not theoretical insight, but specific tools you can use when the wave hits. Your clinician adjusts the protocol based on how regulation shows up in your actual life.',
      },
      {
        heading: 'Who this is for',
        body: 'Adults dealing with emotional volatility, intense reactivity, difficulty regulating after stress, or the kind of dysregulation that keeps undoing other progress.',
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
      headline: "When you've hit a wall. <em>Find the door.</em>",
      subhead:
        "Stuck isn't a failure of effort — it's often a sign your brain has settled into a pattern that no longer serves you. Ketamine therapy helps loosen those patterns and creates room for movement.",
    },
    sections: [
      {
        heading: "How ketamine helps when you're stuck",
        body: "Ketamine's effect on neuroplasticity is most pronounced when you're open to change — making it especially well-suited for the 'I know what I want, I just can't move' experience. The medicine creates the opening; the work is in stepping through it.",
      },
      {
        heading: 'What treatment looks like at Ketcare',
        body: "Sessions paired with integration work that turns insight into momentum. We focus the protocol on the specific pattern keeping you stuck — relational, professional, creative, or the quieter kind that doesn't have a name.",
      },
      {
        heading: 'Who this is for',
        body: "Adults navigating major transitions, creative blocks, or that persistent sense of running in place despite doing all the right things. Our intake confirms whether ketamine is the right next step or whether something else fits better first.",
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
        "Grief that lasts isn't broken — it's love with nowhere to go. Ketamine therapy can help integrate the loss without erasing it, in a setting that holds space for what's real.",
    },
    sections: [
      {
        heading: 'How ketamine helps with grief',
        body: "For complicated grief — grief that has fused with depression, dissociation, or the kind of stuckness that won't move — ketamine can help process the emotional weight that has become physically and cognitively stuck. It doesn't shorten grief. It makes room for it.",
      },
      {
        heading: 'What treatment looks like at Ketcare',
        body: "Trauma-informed clinicians, slower pacing when needed, integration that honors what you've lost rather than rushing past it. The goal isn't to move on. It's to find a way to move with.",
      },
      {
        heading: 'Who this is for',
        body: "Adults navigating complicated grief, anniversary loss, traumatic loss, or grief that has settled into something that traditional bereavement support hasn't been able to shift.",
      },
    ],
  },
  {
    slug: 'habit-change',
    name: 'Habit Change',
    title: 'Ketamine Therapy for Habit Change | Ketcare',
    description:
      "Patterns you've outgrown but can't shake — ketamine therapy creates the neurological window that makes lasting change possible.",
    hero: {
      eyebrow: 'Ketcare for habit change',
      headline: 'When willpower runs out. <em>Change the wiring.</em>',
      subhead:
        'Habits live in the nervous system, not just in motivation. Ketamine therapy supports the neuroplasticity needed to break old loops and build new ones — paired with integration that makes it stick.',
    },
    sections: [
      {
        heading: 'How ketamine helps with habit change',
        body: "Ketamine's neuroplastic window pairs with behavioral change in ways that traditional approaches alone can't match. Without integration, it's a temporary opening; with it, it's a real shift in how the pattern fires.",
      },
      {
        heading: 'What treatment looks like at Ketcare',
        body: "Protocol designed around the specific habit you're changing, with integration coaching focused on the moments of choice. Your clinician adjusts the cadence based on how the change is taking hold.",
      },
      {
        heading: 'Who this is for',
        body: "Adults working on substance use, repetitive emotional patterns, or behavioral loops that haven't responded to standard approaches. Our intake screens for what's appropriate — for certain substance dependencies, additional medical support is needed and we'll guide you to it.",
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
        body: "Ketamine's effect on emotional reactivity and self-perception creates room for the kind of presence relationships actually need — less defended, more available, more honest. The work is in carrying that into real interactions.",
      },
      {
        heading: 'What treatment looks like at Ketcare',
        body: "Sessions plus integration around the specific relational patterns you want to change — attachment, conflict, intimacy, or the quieter dynamics that keep replaying. Your clinician helps you connect what surfaces in session to what's happening in your actual relationships.",
      },
      {
        heading: 'Who this is for',
        body: 'Adults working through chronic relationship friction, attachment patterns, or the emotional aftermath of disconnection. Couples can each pursue treatment individually if both want this kind of work.',
      },
    ],
  },
  {
    slug: 'resilience',
    name: 'Resilience',
    title: 'Ketamine Therapy for Resilience | Ketcare',
    description:
      "Resilience isn't toughness. It's capacity. Ketamine therapy helps build the nervous-system capacity that real resilience requires.",
    hero: {
      eyebrow: 'Ketcare for resilience',
      headline: 'Not toughness. <em>Capacity.</em>',
      subhead:
        "Real resilience isn't about pushing through. It's about expanding the bandwidth of what your nervous system can hold. Ketamine therapy helps build that capacity from the ground up.",
    },
    sections: [
      {
        heading: 'How ketamine helps with resilience',
        body: "Ketamine's effect on stress response and neuroplasticity supports the kind of adaptive capacity that makes resilience real, not performed. Not armor against stress — more bandwidth to meet it.",
      },
      {
        heading: 'What treatment looks like at Ketcare',
        body: 'Sessions paired with integration work focused on the specific demands of your life. Your clinician helps you turn the neurological window into actual capacity — not just a good month, but a more durable baseline.',
      },
      {
        heading: 'Who this is for',
        body: 'High-performers, caregivers, parents, anyone navigating prolonged stress who needs more than another coping strategy. The protocol is designed for sustained change, not crisis intervention.',
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
        body: "The inner critic isn't an enemy you can argue with. It's a pattern that's been running for so long it feels like truth. Ketamine therapy can interrupt that running, which is the first step in actually changing it. The second step is what you do with the opening.",
      },
      {
        heading: 'What treatment looks like at Ketcare',
        body: 'Sessions plus integration focused specifically on inner-critic patterns and self-compassion practice — not affirmations, but real shifts in how you relate to yourself when things get hard.',
      },
      {
        heading: 'Who this is for',
        body: "Adults dealing with chronic self-criticism, perfectionism, or the inner voice that makes everything else harder. The work isn't fast. It's worth doing.",
      },
    ],
  },
  {
    slug: 'ketcare101',
    name: 'Ketcare 101',
    title: 'Ketcare 101: How Our Treatment Works | Ketcare',
    description:
      "Everything you need to know about Ketcare's at-home ketamine therapy — from intake to treatment to integration.",
    hero: {
      eyebrow: 'Ketcare 101',
      headline: 'Everything you need to know. <em>In one place.</em>',
      subhead:
        "How our protocol works, what to expect, and why we built it this way. The complete walkthrough of Ketcare's at-home ketamine therapy.",
    },
    sections: [
      {
        heading: 'The intake',
        body: "A clinical conversation to confirm fit, review your history, and design a protocol that matches your goals. We turn people away when ketamine isn't the right next step — being honest about that is part of how we deliver outcomes our patients trust. The intake takes about an hour.",
      },
      {
        heading: 'The sessions',
        body: "Structured at-home sessions in a calm environment you control, with a licensed clinician available throughout. The setting matters — research is clear that the environment around the medicine shapes the outcome. We've designed everything to support that.",
      },
      {
        heading: 'The integration',
        body: "The work between sessions. This is where Ketcare's approach differs most from less-supported alternatives. Insight that surfaces during treatment doesn't automatically become change — integration is what turns one into the other, and we don't leave it to chance.",
      },
      {
        heading: 'Who Ketcare is for',
        body: "Adults seeking a structured, supervised, evidence-backed path to mental wellness. Not for everyone — that's why we start with a clinical intake. If we're not the right fit, we'll tell you, and often point you to something that is.",
      },
    ],
  },
];

export function getCondition(slug: string): Condition | undefined {
  return CONDITIONS.find((c) => c.slug === slug);
}
