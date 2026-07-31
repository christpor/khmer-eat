export type Lang = "en" | "kh";

export const t = (lang: Lang, en: string, kh: string) => (lang === "en" ? en : kh);

export const ROLE_WORDS = {
  en: ["street food", "hot", "fresh", "fast"],
  kh: ["ម្ហូបតាមផ្លូវ", "ក្តៅ", "ស្រស់", "លឿន"],
};

export const LOADING_WORDS = {
  en: ["Fresh", "Hot", "Fast", "Khmer"],
  kh: ["ស្រស់", "ក្តៅ", "លឿន", "ខ្មែរ"],
};

export const COPY = {
  nav: {
    home: { en: "Home", kh: "ទំព័រដើម" },
    work: { en: "Dishes", kh: "ម្ហូប" },
    resume: { en: "Stories", kh: "រឿងរ៉ាវ" },
    sayhi: { en: "Order now", kh: "បញ្ជាទិញឥឡូវ" },
  },
  hero: {
    eyebrow: { en: "Phnom Penh · Siem Reap · Battambang", kh: "ភ្នំពេញ · សៀមរាប · បាត់ដំបង" },
    name: { en: "Khmer Eats", kh: "ខ្មែរអ៊ីត" },
    roleLine: { en: "A {role} lives in Phnom Penh.", kh: "ម្ហូប {role} រស់នៅភ្នំពេញ។" },
    desc: {
      en: "Real Khmer hawkers. Cooked to order, packed hot, and at your door in under 30 minutes. No cold noodles. No excuses.",
      kh: "អ្នកលក់អាហារខ្មែរពិតៗ។ ធ្វើតាមការបញ្ជាទិញ វេចក្តៅៗ និងដល់ដៃអ្នកក្នុងរយៈពេលក្រោម ៣០ នាទី។ គ្មានមីត្រជាក់។ គ្មានលេស។",
    },
    seeWorks: { en: "Order now", kh: "បញ្ជាទិញឥឡូវ" },
    reachOut: { en: "How it works", kh: "របៀបបញ្ជាទិញ" },
    scroll: { en: "Scroll", kh: "រំកិល" },
  },
  works: {
    eyebrow: { en: "The menu", kh: "ម៉ឺនុយ" },
    heading1: { en: "Featured", kh: "ម្ហូប" },
    heading2: { en: "dishes", kh: "ពិសេស" },
    subtext: {
      en: "A selection of dishes from today's hawkers, from flame to doorstep.",
      kh: "ម្ហូបជ្រើសរើសពីអ្នកលក់ថ្ងៃនេះ ពីភ្លើងធ្យូង ដល់មាត់ទ្វារ។",
    },
    viewAll: { en: "View all dishes", kh: "មើលម្ហូបទាំងអស់" },
    view: { en: "View", kh: "មើល" },
  },
  journal: {
    eyebrow: { en: "The story", kh: "រឿងរ៉ាវ" },
    heading1: { en: "Recent", kh: "ថ្មីៗ" },
    heading2: { en: "stories", kh: "រឿងរ៉ាវ" },
    subtext: {
      en: "Notes from the street — hawkers, markets, and the people who feed the city.",
      kh: "កំណត់ចំណាំពីតាមផ្លូវ — អ្នកលក់ ផ្សារ និងមនុស្សដែលចិញ្ចឹមទីក្រុង។",
    },
    viewAll: { en: "View all stories", kh: "មើលរឿងទាំងអស់" },
    min: { en: "min read", kh: "នាទីអាន" },
  },
  explorations: {
    eyebrow: { en: "Gallery", kh: "វិចិត្រសាល" },
    heading1: { en: "Visual", kh: "សិល្បៈ" },
    heading2: { en: "playground", kh: "អាហារ" },
    subtext: {
      en: "Street snaps, golden hour, and food that moves.",
      kh: "រូបថតតាមផ្លូវ ពេលល្ងាច និងអាហារដែលមានចលនា។",
    },
    dribbble: { en: "See more on the street", kh: "មើលបន្ថែមតាមផ្លូវ" },
  },
  stats: {
    s1: { val: "2,400+", label: { en: "hawkers on board", kh: "អ្នកលក់ក្នុងកម្មវិធី" } },
    s2: { val: "30 min", label: { en: "avg. delivery", kh: "ការប្រគល់មធ្យម" } },
    s3: { val: "4.9", label: { en: "rating from diners", kh: "ពិន្ទុពីអតិថិជន" } },
  },
  footer: {
    cta: { en: "Hungry yet?", kh: "ឃ្លានហើយមែនទេ?" },
    email: { en: "Order now", kh: "បញ្ជាទិញឥឡូវ" },
    available: { en: "Available in Phnom Penh", kh: "មានសេវានៅភ្នំពេញ" },
    marquee: { en: "HOT FRESH FAST", kh: "ក្តៅ ស្រស់ លឿន" },
    footerNote: {
      en: "A demo landing page, built with React, Tailwind & GSAP.",
      kh: "ទំព័រសាកល្បង បង្កើតដោយ React, Tailwind និង GSAP។",
    },
    madeIn: { en: "Made in Phnom Penh", kh: "បង្កើតនៅភ្នំពេញ" },
  },
};

export interface Dish {
  name: string;
  nameKh: string;
  area: string;
  areaKh: string;
  desc: string;
  descKh: string;
  price: string;
  eta: string;
  img: string;
  alt: string;
}

export const DISHES: Dish[] = [
  {
    name: "Fish Amok",
    nameKh: "អាម៉ុកត្រី",
    area: "Sokun's Stall · Riverside",
    areaKh: "តូបសុខន · មាត់ទន្លេ",
    desc: "Steamed coconut fish curry, wrapped in banana leaf. The national dish, done right.",
    descKh: "ត្រីចំហុយក្នុងទឹកដូង រុំស្លឹកចេក។ ម្ហូបជាតិខ្មែរ ធ្វើតាមរូបមន្តពិតប្រាកដ។",
    price: "$4.50",
    eta: "26",
    img: "/images/amok.jpg",
    alt: "Steamed coconut fish curry bowl",
  },
  {
    name: "Beef Lok Lak",
    nameKh: "ឡុកឡាក់",
    area: "Dara's Grill · BKK1",
    areaKh: "អាំងដារ៉ា · បឹងកេងកង ១",
    desc: "Wok-tossed beef with lime-pepper dip and a fresh salad. Sizzling at your door.",
    descKh: "សាច់គោឆាជាមួយទឹកម្រេចក្រូចឆ្មារ និងសាឡាត់ស្រស់ៗ។",
    price: "$5.00",
    eta: "24",
    img: "/images/loklak.jpg",
    alt: "Sliced grilled beef with pepper sauce",
  },
  {
    name: "Nom Banh Chok",
    nameKh: "នំបញ្ចុក",
    area: "Bopha's Morning · K. Krom",
    areaKh: "ព្រឹកភព្វា · កម្ពុជាក្រោម",
    desc: "Cold rice noodles in a rich fermented-fish green curry, fresh herbs on top.",
    descKh: "នំបញ្ចុកជាមួយទឹកប្រហុកបៃតង និងបន្លែស្រស់ៗនៅពីលើ។",
    price: "$2.50",
    eta: "20",
    img: "/images/nombanhchok.jpg",
    alt: "Rice noodle bowl with green curry",
  },
  {
    name: "Kuy Teav",
    nameKh: "គុយទាវ",
    area: "Vibol's Cart · Olympic",
    areaKh: "រទេះវិបុល · អូឡាំពិក",
    desc: "Pork bone broth, rice noodles, tender pork, and a squeeze of lime. Hangover cure.",
    descKh: "ទំពាំងឆ្អឹងជ្រូក មីស្រស់ សាច់ជ្រូកទន់ៗ និងក្រូចឆ្មារ។",
    price: "$3.00",
    eta: "22",
    img: "/images/kuyteav.jpg",
    alt: "Pork noodle soup bowl",
  },
  {
    name: "Num Pang",
    nameKh: "នំប៉័ង",
    area: "Malis · Psar Thmei",
    areaKh: "ម៉ាលីស · ផ្សារថ្មី",
    desc: "Grilled baguette, pâté, pickled papaya, and house chilli. Phnom Penh's street sandwich.",
    descKh: "នំប៉័ងអាំងជាមួយប៉ាទេ បន្លែជ្រក់ និងម្ទេសប្រហុក។ សាំងវិចតាមផ្លូវភ្នំពេញ។",
    price: "$2.00",
    eta: "18",
    img: "/images/numpang.jpg",
    alt: "Baguette sandwich with fillings",
  },
  {
    name: "Grilled Platter",
    nameKh: "សាច់អាំងចម្រុះ",
    area: "Rith's Fire · Toul Kork",
    areaKh: "ភ្លើងរិទ្ធ · ទួលគោក",
    desc: "Skewers of lemongrass beef and pork belly, charred over charcoal. One for the table.",
    descKh: "សាច់គោក្រូចឆ្មារ និងសាច់ជ្រូកដុតលើធ្យូង។ មួយសម្រាប់ទាំងតុ។",
    price: "$7.00",
    eta: "28",
    img: "/images/grill.jpg",
    alt: "Charcoal grilled meat platter",
  },
];

export interface Story {
  title: string;
  titleKh: string;
  img: string;
  time: string;
  date: string;
}

export const STORIES: Story[] = [
  {
    title: "The 4am noodle run with Vibol",
    titleKh: "រត់រកគុយទាវម៉ោង៤ព្រឹក ជាមួយវិបុល",
    img: "/images/kuyteav.jpg",
    time: "5",
    date: "Jul 28",
  },
  {
    title: "Bopha's 20-year green curry",
    titleKh: "ប្រហុកបៃតង២០ឆ្នាំរបស់ភព្វា",
    img: "/images/nombanhchok.jpg",
    time: "4",
    date: "Jul 21",
  },
  {
    title: "Charcoal, smoke, and Rith's platter",
    titleKh: "ធ្យូង ផ្សែង និងសាច់អាំងរិទ្ធ",
    img: "/images/grill.jpg",
    time: "6",
    date: "Jul 14",
  },
  {
    title: "Num Pang at the Psar Thmei rush",
    titleKh: "នំប៉័ងពេលកំពុងពេញនៅផ្សារថ្មី",
    img: "/images/numpang.jpg",
    time: "3",
    date: "Jul 07",
  },
];

export const GALLERY: Dish[] = [
  DISHES[0],
  DISHES[1],
  DISHES[2],
  DISHES[3],
  DISHES[4],
  DISHES[5],
];
