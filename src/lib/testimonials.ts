/**
 * Curated patient testimonials for the /reviews/ page.
 *
 * NOTE FOR FUTURE CONTRIBUTORS: These are seed testimonials, written in the
 * voice and shape of authentic patient stories but not attributed to specific
 * real patients. Replace with real, attributed testimonials before launch
 * (HIPAA-compliant consent + clinical review required).
 *
 * Distribution: 20 testimonials spanning the 12 condition slugs in
 * conditions.ts. Voices vary intentionally — concise, reflective, story-arc,
 * practical. Ages span late 20s through late 50s.
 */

export type Testimonial = {
  id: string;
  firstName: string;
  /** Last initial, for de-identification */
  initial: string;
  age: number;
  /** Matches Condition.slug from lib/conditions.ts */
  condition: string;
  quote: string;
  rating: 5;
  /** ISO 8601 */
  date: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'andrew-d',
    firstName: 'Andrew',
    initial: 'D.',
    age: 38,
    condition: 'depression',
    quote:
      "Three weeks in, my wife asked what changed. I didn't have a good answer except: the loop in my head finally went quiet. First time in eight years.",
    rating: 5,
    date: '2026-01-15',
  },
  {
    id: 'maria-l',
    firstName: 'Maria',
    initial: 'L.',
    age: 42,
    condition: 'depression',
    quote:
      "I've been on five different antidepressants since college. None of them touched what ketamine did in three sessions — not less depression, but actually feeling like there's room to be a person again.",
    rating: 5,
    date: '2026-01-22',
  },
  {
    id: 'james-r',
    firstName: 'James',
    initial: 'R.',
    age: 29,
    condition: 'anxiety',
    quote:
      'I expected ketamine to numb things. What I got was the opposite. The volume on the noise dropped, but I felt more, not less. I can sit with my own thoughts now without bracing for impact.',
    rating: 5,
    date: '2026-02-03',
  },
  {
    id: 'sarah-k',
    firstName: 'Sarah',
    initial: 'K.',
    age: 51,
    condition: 'ptsd',
    quote:
      "I'd done EMDR. I'd done somatic. I'd done years of talk therapy. None of it broke through the way one carefully held session at home did. I'm not 'fixed' — but the past doesn't hijack me anymore.",
    rating: 5,
    date: '2026-02-09',
  },
  {
    id: 'david-t',
    firstName: 'David',
    initial: 'T.',
    age: 35,
    condition: 'burnout',
    quote:
      "I came to Ketcare flat. Not depressed exactly — just done. My therapist had run out of moves. The first session was strange, the second was harder. By the third, I noticed I was hungry again. I hadn't realized I'd stopped being hungry.",
    rating: 5,
    date: '2026-02-14',
  },
  {
    id: 'rachel-m',
    firstName: 'Rachel',
    initial: 'M.',
    age: 33,
    condition: 'anxiety',
    quote:
      "The clinician check-ins between sessions are what made this work. The medicine is one thing. Knowing someone was paying attention to what was happening between is what made me trust the process.",
    rating: 5,
    date: '2026-02-21',
  },
  {
    id: 'christopher-p',
    firstName: 'Christopher',
    initial: 'P.',
    age: 45,
    condition: 'depression',
    quote:
      'Skeptical going in. Read every paper. Half-expected placebo. What I got was genuinely confusing — not euphoria, just space. And in that space, real change has been possible.',
    rating: 5,
    date: '2026-03-01',
  },
  {
    id: 'emily-h',
    firstName: 'Emily',
    initial: 'H.',
    age: 28,
    condition: 'getting-unstuck',
    quote:
      "I had the relationship I wanted, the job I'd worked for, all the boxes checked. And I couldn't move. Ketcare didn't tell me what to do. It just gave me back the part of me that knew.",
    rating: 5,
    date: '2026-03-08',
  },
  {
    id: 'michael-b',
    firstName: 'Michael',
    initial: 'B.',
    age: 52,
    condition: 'depression',
    quote:
      'After my second divorce, I shut down. Friends called it depression. I called it realism. The first ketamine session showed me they were closer to right than I was.',
    rating: 5,
    date: '2026-03-15',
  },
  {
    id: 'jennifer-c',
    firstName: 'Jennifer',
    initial: 'C.',
    age: 39,
    condition: 'anxiety',
    quote:
      "I've never been someone who could 'just relax.' I still can't. But I have a different relationship to the not-relaxing now. It doesn't run the show the way it used to.",
    rating: 5,
    date: '2026-03-21',
  },
  {
    id: 'thomas-a',
    firstName: 'Thomas',
    initial: 'A.',
    age: 47,
    condition: 'ptsd',
    quote:
      "Combat trauma. Decades. I'd given up on it ever being something I could metabolize instead of just survive around. Three sessions in, a memory I'd been avoiding for years came up — and I could be with it. That's the change.",
    rating: 5,
    date: '2026-03-28',
  },
  {
    id: 'lisa-w',
    firstName: 'Lisa',
    initial: 'W.',
    age: 36,
    condition: 'burnout',
    quote:
      "Three kids and a job that doesn't end. I wasn't broken, I was just running on fumes for so long I forgot what full battery felt like. Ketcare didn't add anything — it cleared what was draining me.",
    rating: 5,
    date: '2026-04-04',
  },
  {
    id: 'robert-j',
    firstName: 'Robert',
    initial: 'J.',
    age: 58,
    condition: 'depression',
    quote:
      "I'm not a feelings guy. I told them so. They said okay, you don't have to be — let's just see what happens. What happened was I started crying in a way I hadn't since my mom died. It wasn't fun. It was overdue.",
    rating: 5,
    date: '2026-04-09',
  },
  {
    id: 'amanda-s',
    firstName: 'Amanda',
    initial: 'S.',
    age: 31,
    condition: 'emotional-regulation',
    quote:
      "I used to write reviews like this and immediately want to delete them. My nervous system was wired to second-guess everything. It's not that I don't second-guess anymore. It's that I can choose when to and when not to.",
    rating: 5,
    date: '2026-04-15',
  },
  {
    id: 'daniel-k',
    firstName: 'Daniel',
    initial: 'K.',
    age: 44,
    condition: 'habit-change',
    quote:
      "Thirteen years of patterns I knew weren't serving me, and willpower never moved them an inch. The first month after my Ketcare protocol was the first time in my adult life I felt like I had a choice instead of a compulsion.",
    rating: 5,
    date: '2026-04-21',
  },
  {
    id: 'olivia-n',
    firstName: 'Olivia',
    initial: 'N.',
    age: 26,
    condition: 'self-love',
    quote:
      "The voice that told me I was a fraud got quieter. Not gone. Quieter. That's a bigger deal than it sounds.",
    rating: 5,
    date: '2026-04-26',
  },
  {
    id: 'patricia-g',
    firstName: 'Patricia',
    initial: 'G.',
    age: 49,
    condition: 'grief',
    quote:
      "Four years after losing my husband, I thought this was just my new shape. Ketcare didn't bring him back, but it gave me back the part of me that didn't disappear with him.",
    rating: 5,
    date: '2026-05-01',
  },
  {
    id: 'kevin-l',
    firstName: 'Kevin',
    initial: 'L.',
    age: 41,
    condition: 'relationships',
    quote:
      "I came thinking the issue was my marriage. I left realizing the issue was the version of myself I was bringing to it. My wife noticed the change before I told her about treatment.",
    rating: 5,
    date: '2026-05-04',
  },
  {
    id: 'hannah-f',
    firstName: 'Hannah',
    initial: 'F.',
    age: 32,
    condition: 'depression',
    quote:
      'Postpartum depression that lasted way past postpartum. Three medications hadn\'t moved it. I could finally watch my daughter laugh and feel something instead of just performing the response.',
    rating: 5,
    date: '2026-05-04',
  },
  {
    id: 'steven-o',
    firstName: 'Steven',
    initial: 'O.',
    age: 37,
    condition: 'depression',
    quote:
      "I came to Ketcare ready for it not to work. That had been the pattern. It worked, slowly and unmistakably. Hardest part was letting myself believe it.",
    rating: 5,
    date: '2026-05-04',
  },
];
