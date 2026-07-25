import { TimelineMilestone, GearItem, ScaleGuide } from '../types';

export const AEMRO_BIO = {
  name: 'Aemro',
  tagline: '32 Years of Guitar Craftsmanship, Ethio-Jazz & Acoustic Soul',
  yearsExperience: 32,
  startYear: 1994,
  location: 'Addis Ababa & Global Stages',
  quote: "The guitar isn't just an instrument; it's a 6-string voice that speaks the quietest truths of the heart.",
  biographyParagraphs: [
    "Aemro's musical journey began 32 years ago when he first picked up a warm acoustic guitar. Driven by a deep passion for rhythmic harmony and vocal-like lead lines, he spent decades mastering fingerstyle technique, traditional Ethiopian pentatonic scales (Tizita, Bati, Anchihoye, Ambassel), and modern jazz blues fusion.",
    "Over three decades, Aemro has performed on international concert stages, collaborated with master percussionists and vocalists, and composed original scores that bridge ancient East African heritage with contemporary guitar artistry.",
    "Known for his expressive dynamics, crystalline harmonics, and signature string-bending nuances, Aemro continues to inspire fellow musicians and music lovers worldwide through live performances, video recordings, and masterclass sessions."
  ],
  stats: [
    { label: 'Years Playing', value: '32+' },
    { label: 'Original Works', value: '120+' },
    { label: 'Stage Performances', value: '450+' },
    { label: 'Students Mentored', value: '200+' }
  ]
};

export const MILESTONES: TimelineMilestone[] = [
  {
    year: '1994',
    title: 'First String & Pure Passion',
    subtitle: 'The Beginning of a Lifelong Musical Odyssey',
    description: 'Acquired his first acoustic guitar and spent endless hours self-studying chord voicing, ear training, and folk rhythm structures.',
    iconName: 'Guitar'
  },
  {
    year: '2002',
    title: 'Ethio-Jazz Scale Deep Dive',
    subtitle: 'Blending Ethiopian Heritage with Blues & Jazz',
    description: 'Pioneered signature modal guitar arrangements integrating Tizita and Bati microtonal nuances with acoustic jazz chords.',
    iconName: 'Music'
  },
  {
    year: '2012',
    title: 'Concert Stages & Studio Collaborations',
    subtitle: 'Touring & High-Profile Collaborations',
    description: 'Headlined regional music festivals, recorded guitar sessions for celebrated albums, and established a distinct live guitar tone.',
    iconName: 'Radio'
  },
  {
    year: '2020 - Present',
    title: 'Global Digital Showcase & Masterclasses',
    subtitle: 'Sharing the Craft with the World',
    description: 'Launched YouTube video showcases, online guitar workshops, and intimate solo concerts enjoyed by thousands across the globe.',
    iconName: 'Award'
  }
];

export const GEAR_LIST: GearItem[] = [
  {
    id: 'gear-0',
    name: 'Compact Headless Travel Electric Guitar',
    brand: 'Steinberger / Custom Headless',
    category: 'Guitar',
    description: 'Aemro’s signature lightweight headless electric guitar, featuring ultra-precise tuning stability, high output pickups, and ergonomically balanced body for touring and intimate studio sessions.',
    yearsInUse: 12,
    imageSeed: 'headless-guitar'
  },
  {
    id: 'gear-1',
    name: 'Custom Solid Spruce Acoustic-Electric',
    brand: 'Handcrafted Luthier Custom',
    category: 'Guitar',
    description: 'Warm mahogany back and sides with custom bone saddle, tuned for crystalline clarity in fingerstyle arrangements.',
    yearsInUse: 18,
    imageSeed: 'acoustic-guitar'
  },
  {
    id: 'gear-2',
    name: 'Vintage Sunburst Electric',
    brand: 'Gibson Les Paul Standard',
    category: 'Guitar',
    description: 'Dual humbucker warmth delivering rich sustain for Ethio-Jazz modal improvisations and blues bends.',
    yearsInUse: 22,
    imageSeed: 'electric-guitar'
  },
  {
    id: 'gear-3',
    name: 'Tube Amplifier 40W',
    brand: 'Fender Deluxe Reverb',
    category: 'Amplifier',
    description: 'Pure analog vacuum tube warmth with lush spring reverb for pristine clean guitar articulation.',
    yearsInUse: 15,
    imageSeed: 'guitar-amp'
  },
  {
    id: 'gear-4',
    name: 'Analog Delay & Modulation Rig',
    brand: 'Strymon & Boss Custom Board',
    category: 'Pedalboard',
    description: 'Features ambient tape delays, subtle pitch chorusing, and transparent overdrive for lush soundscapes.',
    yearsInUse: 10,
    imageSeed: 'pedalboard'
  }
];

export const ETHIOPIAN_SCALES: ScaleGuide[] = [
  {
    id: 'scale-tizita',
    name: 'Tizita Major (ትዝታ)',
    region: 'Ethiopia / Horn of Africa',
    notes: ['C', 'D', 'E', 'G', 'A'],
    description: 'Evokes deep nostalgia, longing, and bittersweet memories. The cornerstone scale of Ethiopian acoustic guitar storytelling.',
    frequencies: [261.63, 293.66, 329.63, 392.00, 440.00, 523.25]
  },
  {
    id: 'scale-bati',
    name: 'Bati Major (ባቲ)',
    region: 'Ethiopia / Horn of Africa',
    notes: ['C', 'E', 'F#', 'G', 'B'],
    description: 'Lively, bright, and mystical mode with a raised 4th interval. Ideal for intricate fingerstyle picking and improvisations.',
    frequencies: [261.63, 329.63, 369.99, 392.00, 493.88, 523.25]
  },
  {
    id: 'scale-anchihoye',
    name: 'Anchihoye (አንቺሆዬ)',
    region: 'Ethiopia / Horn of Africa',
    notes: ['C', 'Db', 'F', 'Gb', 'Bb'],
    description: 'Unique micro-step tension and festive joy. Used in celebration, wedding rhythms, and expressive solo riffs.',
    frequencies: [261.63, 277.18, 349.23, 369.99, 466.16, 523.25]
  },
  {
    id: 'scale-ambassel',
    name: 'Ambassel (አምባሰል)',
    region: 'Ethiopia / Horn of Africa',
    notes: ['C', 'Db', 'F', 'G', 'Bb'],
    description: 'Majestic, contemplative modal structure reminiscent of mountain echoes and meditative guitar solos.',
    frequencies: [261.63, 277.18, 349.23, 392.00, 466.16, 523.25]
  }
];
