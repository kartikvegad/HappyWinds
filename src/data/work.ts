export type Project = {
  slug: string;
  name: string;
  logic: string;
  category: string;
  tagline: string;
  description: string;
  /** Primary visual — either a real application mockup photo or, when no
   * mockup exists, a clean presentation of the mark itself. */
  mockup: string;
  /** Whether `mockup` is a photographed application or a flat logo file. */
  heroStyle?: "photo" | "logo";
  /** Secondary "how we got here" graphic — only set when it is a genuinely
   * different asset from `mockup`, so pages never show the same image twice. */
  logicImage?: string;
  /** Isolated logo file for a clean "the mark" strip — omitted when the only
   * logo asset available is already used as `mockup` or `logicImage`. */
  logoImage?: string;
  /** Which homepage module (if any) spotlights this project. Kept mutually
   * exclusive with the logo marquee's project pool so no project's imagery
   * appears twice on the homepage. */
  homeSpotlight?: "hero" | "grid";
  accent: string;
};

export const projects: Project[] = [
  {
    slug: "footmark",
    name: "Footmark",
    logic: "Foot Print",
    category: "Healthcare",
    tagline: "Every step matters",
    description:
      "A footprint becomes an infinity of care. For a foot physio clinic, we turned the most human mark into a healing identity — toes as dots, arch as motion, brand as promise.",
    mockup: "/assets/mockups/01.jpg",
    logicImage: "/assets/logic/footmark.jpg",
    logoImage: "/assets/logos/footmark.png",
    accent: "#2B6CE0",
  },
  {
    slug: "chaibot",
    name: "ChaiBot",
    logic: "Tea Cup + C",
    category: "Technology",
    tagline: "Tea, automated",
    description:
      "A letter C becomes a cup. Steam becomes personality. ChaiBot's identity merges hospitality and machine logic into one mark you can taste — built for a tea vending machine brand.",
    mockup: "/assets/mockups/chaibot.jpg",
    logicImage: "/assets/logic/chaibot.jpg",
    logoImage: "/assets/logos/chaibot.png",
    homeSpotlight: "grid",
    accent: "#E85A24",
  },
  {
    slug: "black-diamond",
    name: "Black Diamond X",
    logic: "Window + Diamond",
    category: "Real Estate",
    tagline: "Built from light",
    description:
      "Architecture meets gemstone. A building window and a diamond facet fuse into a shield of precision for Black Diamond Development.",
    mockup: "/assets/mockups/black-diamond.jpg",
    logicImage: "/assets/logic/black-diamond.jpg",
    logoImage: "/assets/logos/black-diamond.png",
    accent: "#1A1A1A",
  },
  {
    slug: "o3",
    name: "O3",
    logic: "Orbit + Care",
    category: "Healthcare",
    tagline: "Motion that heals",
    description:
      "Two sweeping arcs form an O that never quite closes — motion, recovery, and care held in one mark for Dr. Hiren's Physioclinic.",
    mockup: "/assets/mockups/o3.jpg",
    logicImage: "/assets/logic/o3.jpg",
    logoImage: "/assets/logos/o3.png",
    homeSpotlight: "grid",
    accent: "#7CDB3A",
  },
  {
    slug: "conch-shell",
    name: "Conch Shell",
    logic: "Shell Spiral",
    category: "Real Estate",
    tagline: "Growth, spiraled",
    description:
      "A conch's spiral becomes a symbol of steady, compounding growth for Conch Shell Real Estate — gold against deep black.",
    mockup: "/assets/mockups/conch-shell.jpg",
    logicImage: "/assets/logic/conch-shell.jpg",
    logoImage: "/assets/logos/conch-shell.png",
    homeSpotlight: "grid",
    accent: "#E8C547",
  },
  {
    slug: "fibocan",
    name: "Fibocan",
    logic: "Bull + Chart",
    category: "Finance",
    tagline: "Wealth, enabled",
    description:
      "A rising chart line resolves into a bull's silhouette — market momentum made emblematic for Fibocan's wealth platform.",
    mockup: "/assets/mockups/fibocan.jpg",
    logicImage: "/assets/logic/fibocan.jpg",
    logoImage: "/assets/logos/fibocan.jpg",
    homeSpotlight: "grid",
    accent: "#0B3A6E",
  },
  {
    slug: "valence",
    name: "Valence",
    logic: "Interlocking V",
    category: "Sports",
    tagline: "Force in balance",
    description:
      "Two interlocking strokes form a circular V — tension and balance held for Valence Asta Sports.",
    mockup: "/assets/mockups/valence.jpg",
    logicImage: "/assets/logic/valence.jpg",
    logoImage: "/assets/logos/valence.png",
    homeSpotlight: "grid",
    accent: "#0A3143",
  },
  {
    slug: "mindo",
    name: "Mindo",
    logic: "Eye in the O",
    category: "Technology",
    tagline: "Look closer",
    description:
      "The final O becomes an eye — curiosity built into the wordmark for a brand that notices what others miss.",
    mockup: "/assets/mockups/mindo.jpg",
    logicImage: "/assets/logic/mindo.jpg",
    logoImage: "/assets/logos/mindo.jpg",
    homeSpotlight: "grid",
    accent: "#7EC8E3",
  },
  {
    slug: "vilambo",
    name: "Vilambo",
    logic: "Elephant in Type",
    category: "Consumer",
    tagline: "Warm strength",
    description:
      "An elephant's silhouette is drawn from the wordmark's own letters — playful, warm, and impossible to forget.",
    mockup: "/assets/mockups/vilambo.jpg",
    logicImage: "/assets/logic/vilambo.jpg",
    logoImage: "/assets/logos/vilambo.png",
    homeSpotlight: "grid",
    accent: "#E87A2F",
  },
  {
    slug: "home-in-the-city",
    name: "Home in the City",
    logic: "Nest + House",
    category: "Real Estate",
    tagline: "Nest, built",
    description:
      "A house rests in a woven nest — belonging and infrastructure drawn as one mark for urban living.",
    mockup: "/assets/mockups/home-in-the-city.jpg",
    logicImage: "/assets/logic/home-in-the-city.jpg",
    logoImage: "/assets/logos/home-in-the-city.jpg",
    homeSpotlight: "grid",
    accent: "#1A1A1A",
  },
  {
    slug: "soul-bela",
    name: "Soul Bela",
    logic: "Lotus + Meditation",
    category: "Wellness",
    tagline: "Stillness, in bloom",
    description:
      "A gold meditation figure blooms at the centre of an eight-petal mandala — practice as the mark's still point for Soul Bela yoga training.",
    mockup: "/assets/mockups/soul-bela.jpg",
    logicImage: "/assets/logic/soul-bela.jpg",
    logoImage: "/assets/logos/soul-bela.jpg",
    homeSpotlight: "grid",
    accent: "#D4AF6A",
  },
  {
    slug: "course-bridge",
    name: "Course Bridge",
    logic: "Bridge + Home",
    category: "Real Estate",
    tagline: "Home, connected",
    description:
      "A bridge arch becomes a foundation. A roof completes the story. Course Bridge is where structure and belonging meet.",
    mockup: "/assets/mockups/14.jpg",
    logicImage: "/assets/logic/course-bridge.jpg",
    logoImage: "/assets/logos/course-bridge.png",
    accent: "#8A8F98",
  },
  {
    slug: "killoff",
    name: "Killoff",
    logic: "Knife in Negative Space",
    category: "Fashion",
    tagline: "Cut with intent",
    description:
      "The sharpest idea is invisible until you see it. Between two letters, a knife blade appears — casual wear with deadly precision.",
    mockup: "/assets/mockups/killoff.jpg",
    logicImage: "/assets/logic/killoff.jpg",
    logoImage: "/assets/logos/killoff.png",
    homeSpotlight: "grid",
    accent: "#D4121A",
  },
  {
    slug: "sumukha",
    name: "Sumukha",
    logic: "Cattle Horn",
    category: "Dairy",
    tagline: "Horned into type",
    description:
      "Buffalo horns reshape the word itself. Sumukha's letterforms carry the farm — milk, motion, and heritage in one seal.",
    mockup: "/assets/mockups/smukha.jpg",
    logicImage: "/assets/logic/sumukha.jpg",
    logoImage: "/assets/logos/sumukha.png",
    accent: "#8BC34A",
  },
  {
    slug: "rich-mmoo",
    name: "Rich Mmoo",
    logic: "Cow",
    category: "Dairy",
    tagline: "From cow to carton",
    description:
      "A cow's face becomes a friendly seal. Rich Mmoo turns dairy into delight — soft pink packaging, clear logic, memorable name.",
    mockup: "/assets/mockups/rich-mmoo.jpg",
    logicImage: "/assets/logic/rich-mmoo.jpg",
    logoImage: "/assets/logos/rich-mmoo.png",
    homeSpotlight: "grid",
    accent: "#1F5C5A",
  },
  {
    slug: "rostrum",
    name: "Rostrum",
    logic: "Mike & Stands",
    category: "Audio",
    tagline: "Voice, elevated",
    description:
      "An R that holds a microphone. Rostrum is podium, presence, and sound — engineered into a single letter for a mic-stand manufacturer.",
    mockup: "/assets/mockups/10.jpg",
    logicImage: "/assets/logic/rostrum.jpg",
    logoImage: "/assets/logos/rostrum-01.png",
    accent: "#A8C400",
  },
  {
    slug: "concerto",
    name: "Concerto",
    logic: "Guitar + C + Mike",
    category: "Music",
    tagline: "Sound & stands",
    description:
      "Guitar, letter, microphone — three instruments, one composition. Concerto performs brand logic like a score for a live-sound equipment brand.",
    mockup: "/assets/mockups/12.jpg",
    logicImage: "/assets/logic/concerto.jpg",
    logoImage: "/assets/logos/Concerto Final PNG.png",
    accent: "#8B1E4A",
  },
  {
    slug: "olive-and-blonde",
    name: "Olive & Blonde",
    logic: "Olive + Ampersand",
    category: "Lifestyle Blog",
    tagline: "Two lives, one voice",
    description:
      "An olive stands in for the writer, a looping ampersand holds the story together. Olive & Blonde's mark reads like the blog itself — personal, playful, and easy to follow.",
    mockup: "/assets/mockups/02.jpg",
    logicImage: "/assets/logic/olive-and-blonde.jpg",
    logoImage: "/assets/logos/OLIVE-05.png",
    accent: "#B98A55",
  },
  {
    slug: "nirja-gruh-udhyog",
    name: "Nirja Gruh Udhyog",
    logic: "Lotus + Script",
    category: "Food & FMCG",
    tagline: "Home-made, blossomed",
    description:
      "A lotus opens beside a hand-lettered signature, carrying the warmth of a home kitchen onto a shelf-ready package for Nirja Gruh Udhyog.",
    mockup: "/assets/mockups/03.jpg",
    logicImage: "/assets/logic/nirja.jpg",
    logoImage: "/assets/logos/nirja.png",
    accent: "#C0272D",
  },
  {
    slug: "dinner-bell",
    name: "Dinner Bell",
    logic: "Bell + Serving Dome",
    category: "Restaurant",
    tagline: "Cuisine, announced",
    description:
      "The letter L curls into a service bell, ringing in every plate that leaves the kitchen. Dinner Bell's mark announces Indian cuisine before the menu even opens.",
    mockup: "/assets/mockups/04.jpg",
    logicImage: "/assets/logic/dinner-bell.jpg",
    logoImage: "/assets/logos/dinner-bell.png",
    accent: "#D9782D",
  },
  {
    slug: "unike",
    name: "Unike",
    logic: "Arrow in the K",
    category: "Apparel",
    tagline: "Uniquely ahead",
    description:
      "A hidden arrow drives through the negative space of the K, pushing the wordmark forward. Unike wears its motion — literally — into every drop.",
    mockup: "/assets/mockups/05.jpg",
    logicImage: "/assets/logic/unike.jpg",
    logoImage: "/assets/logos/unike.png",
    accent: "#E4241F",
  },
  {
    slug: "centinel",
    name: "Centinel",
    logic: "C + Keyhole",
    category: "Security",
    tagline: "Watching every entry",
    description:
      "The opening C doubles as a keyhole, standing guard over a minimal, all-caps wordmark. Centinel's logic is restraint — a mark built to feel unbreakable.",
    mockup: "/assets/mockups/06.jpg",
    logicImage: "/assets/logic/centinel.jpg",
    logoImage: "/assets/logos/CONTE-03.png",
    accent: "#171717",
  },
  {
    slug: "kumar-cards",
    name: "Kumar Cards",
    logic: "Heart + Flower Stem",
    category: "Stationery",
    tagline: "Love, hand-delivered",
    description:
      "The lettering itself blossoms into a heart, rooted by a single green stem. Kumar Cards turns a greeting-card brand into a gesture you can read at a glance.",
    mockup: "/assets/mockups/07.jpg",
    logicImage: "/assets/logic/kumar-cards.jpg",
    logoImage: "/assets/logos/kumar-cards.png",
    accent: "#D6336C",
  },
  {
    slug: "puton",
    name: "Puton",
    logic: "Hanger in Negative Space",
    category: "Apparel",
    tagline: "Ready to wear",
    description:
      "A clothes hanger hides inside the wordmark, only revealing itself on a second look. Puton's identity was built to be embossed, stitched, and stamped — never printed flat.",
    mockup: "/assets/mockups/08.jpg",
    logicImage: "/assets/logic/puton.jpg",
    logoImage: "/assets/logos/puton.png",
    accent: "#6B6B6B",
  },
  {
    slug: "amantra-investment",
    name: "Amantra Investment",
    logic: "Rupee in the R",
    category: "Finance",
    tagline: "Value, invested",
    description:
      "A rupee symbol replaces the crossbar of the R, turning a single letter into a statement of intent for Amantra Investment Pvt. Ltd.",
    mockup: "/assets/mockups/09.jpg",
    logicImage: "/assets/logic/amantra.jpg",
    logoImage: "/assets/logos/amantra-02.png",
    accent: "#C81E2D",
  },
  {
    slug: "zerozahar",
    name: "ZeroZahar",
    logic: "Silhouette in Zero",
    category: "Health Food",
    tagline: "Sweetness, without the sugar",
    description:
      "A figure in motion is carved out of a bold zero — the promise of a sugar-free lifestyle brand made visible in a single character.",
    mockup: "/assets/mockups/13.jpg",
    logicImage: "/assets/logic/zerozahar.jpg",
    logoImage: "/assets/logos/zerozaher-01.png",
    accent: "#101010",
  },
  {
    slug: "echelon-property",
    name: "Echelon Property",
    logic: "Window + Letter E",
    category: "Real Estate",
    tagline: "Property, elevated",
    description:
      "A single window sits inside the crest of an E, a quiet nod to the buildings Echelon Property Management looks after.",
    mockup: "/assets/mockups/15.jpg",
    logicImage: "/assets/logic/echelon.jpg",
    logoImage: "/assets/logos/echelon.png",
    accent: "#A98B4B",
  },
  {
    slug: "catch-aloha",
    name: "Catch Aloha Foundation",
    logic: "Hand + Heart Tree",
    category: "Non-profit",
    tagline: "Giving, grown",
    description:
      "An open hand grows into a tree of hearts — generosity rendered as something that can be planted, not just donated. Built for the Catch Aloha Foundation.",
    mockup: "/assets/mockups/catch-aloha.jpg",
    logicImage: "/assets/logic/catch-aloha.jpg",
    logoImage: "/assets/logos/aloha-01.png",
    homeSpotlight: "hero",
    accent: "#3C9A5F",
  },
  {
    slug: "digital-block-securities",
    name: "Digital Block Securities",
    logic: "Shield + Split Block",
    category: "Fintech",
    tagline: "Secured, block by block",
    description:
      "A shield splits cleanly down the middle, each half a block in a chain — trust engineered for a securities brand that lives on distributed ledgers.",
    mockup: "/assets/mockups/digital-block-securities.jpg",
    logicImage: "/assets/logic/digital-block-securities.jpg",
    logoImage: "/assets/logos/DIGILOCK-01.png",
    homeSpotlight: "hero",
    accent: "#1C6FD1",
  },
  {
    slug: "orgorbit",
    name: "OrgOrbit",
    logic: "Orbiting O",
    category: "Technology",
    tagline: "Everything, in orbit",
    description:
      "A small satellite dot circles the O, suggesting a super-app that keeps every tool for a growing business in one steady orbit.",
    mockup: "/assets/mockups/orgorbit.jpg",
    logicImage: "/assets/logic/orgorbit.jpg",
    logoImage: "/assets/logos/orbit-06.png",
    accent: "#7C3AED",
  },
  {
    slug: "taiyousom-metachem",
    name: "TaiyouSom Metachem",
    logic: "Sun + Moon Eclipse",
    category: "Chemicals",
    tagline: "Balance, refined",
    description:
      "A sun and moon eclipse inside a triangle of rays — day and night, raw and refined, held in balance for a specialty metachem manufacturer.",
    mockup: "/assets/mockups/taiyousom-metachem.jpg",
    logicImage: "/assets/logic/taiyousom-metachem.jpg",
    logoImage: "/assets/logos/TAIYOU-03.png",
    accent: "#F2B705",
  },
  {
    slug: "flytools",
    name: "Flytools",
    logic: "Wings in F + T",
    category: "Tools & Hardware",
    tagline: "Built to move fast",
    description:
      "The letters F and T unfold into a pair of wings, a distressed finish giving the mark the worn-in feel of a toolbox that's seen real work.",
    mockup: "/assets/mockups/flytools.jpg",
    logicImage: "/assets/logic/flytools.jpg",
    logoImage: "/assets/logos/flytools-03.png",
    homeSpotlight: "hero",
    accent: "#2B2B2B",
  },
  {
    slug: "brightforce-technologies",
    name: "BrightForce Technologies",
    logic: "Bulb of Dots",
    category: "Technology",
    tagline: "Ideas, powered",
    description:
      "A lightbulb built entirely from scattered, colourful dots — the moment an idea clicks, rendered as a mark for a technology consultancy.",
    mockup: "/assets/mockups/brightforce-technologies.jpg",
    logicImage: "/assets/logic/brightforce-technologies.jpg",
    logoImage: "/assets/logos/Bright Force Logo_main logo.png",
    homeSpotlight: "hero",
    accent: "#D6A419",
  },
  {
    slug: "sheshus-food-delight",
    name: "Sheshu's Food Delight",
    logic: "Monogram Seal",
    category: "Food & Catering",
    tagline: "Delight, delivered",
    description:
      "A circular monogram seal, dressed in fine linework and a single gold tone, gives Sheshu's Food Delight the air of a recipe passed down, not invented.",
    mockup: "/assets/mockups/sheshus-food-delight.jpg",
    logicImage: "/assets/logic/sheshus-food-delight.jpg",
    logoImage: "/assets/logos/SHESHU-02.png",
    accent: "#D6A419",
  },
];

export type Package = {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  image: string;
  timeline: string;
  idealFor: string;
  includes: string[];
  matrix: {
    concepts: string;
    revisions: string;
    logoFiles: string;
    stationery: string;
    guidelines: string;
    support: string;
  };
};

export const packages: Package[] = [
  {
    id: "startup",
    name: "Startup",
    subtitle: "First mark. Clear logic.",
    description:
      "A focused logo system for founders who need a sharp identity fast — concept, mark, and essential files.",
    image: "/assets/packages/startup.jpg",
    timeline: "10–14 days",
    idealFor: "New businesses and solo founders launching their first mark.",
    includes: [
      "2–3 logic-led concepts",
      "Primary logo + variations",
      "Color & type guidance",
      "Print + digital files",
    ],
    matrix: {
      concepts: "2–3 directions",
      revisions: "2 rounds",
      logoFiles: "Primary + 2 variations",
      stationery: "—",
      guidelines: "1-page usage note",
      support: "14 days post-delivery",
    },
  },
  {
    id: "silver",
    name: "Silver",
    subtitle: "Identity with room to grow.",
    description:
      "Deeper exploration and a fuller brand toolkit for businesses ready to look established.",
    image: "/assets/packages/silver.jpg",
    timeline: "3–4 weeks",
    idealFor: "Growing brands that need stationery and a documented system.",
    includes: [
      "Expanded concept exploration",
      "Full logo suite",
      "Stationery basics",
      "Brand usage notes",
    ],
    matrix: {
      concepts: "4–5 directions",
      revisions: "3 rounds",
      logoFiles: "Full suite (lockups, icon, monogram)",
      stationery: "Card, letterhead, email signature",
      guidelines: "Short usage guide",
      support: "30 days post-delivery",
    },
  },
  {
    id: "gold",
    name: "Gold",
    subtitle: "The complete brand face.",
    description:
      "Our most thorough package — multiple directions, mockups, and a system built to scale across every touchpoint.",
    image: "/assets/packages/gold.jpg",
    timeline: "5–7 weeks",
    idealFor: "Brands taking on packaging, signage, or multi-touchpoint launches.",
    includes: [
      "Premium concept set",
      "Extensive logo options",
      "Application mockups",
      "Priority refinements",
    ],
    matrix: {
      concepts: "6+ directions",
      revisions: "Unlimited within scope",
      logoFiles: "Full suite + application mockups",
      stationery: "Full stationery + packaging/signage",
      guidelines: "Complete brand guidelines document",
      support: "90 days + priority turnaround",
    },
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

/** Clean logo PNG for cards / grids — never a mockup photo. */
export function getProjectLogo(project: Project) {
  return project.logoImage ?? project.mockup;
}

function hashSeed(value: string) {
  let hash = 0;
  for (let i = 0; i < value.length; i += 1) {
    hash = (hash * 31 + value.charCodeAt(i)) >>> 0;
  }
  return hash;
}

/** Related projects for a case study — varies by slug, prefers same category,
 * then fills with a stable shuffled mix so every page isn't Footmark / ChaiBot /
 * Black Diamond. */
export function getRelatedProjects(slug: string, count = 3): Project[] {
  const current = getProject(slug);
  if (!current) return [];

  const others = projects.filter((p) => p.slug !== slug);
  const seed = hashSeed(slug);

  const ranked = [...others].sort((a, b) => {
    const aSame = a.category === current.category ? 0 : 1;
    const bSame = b.category === current.category ? 0 : 1;
    if (aSame !== bSame) return aSame - bSame;

    const aScore = hashSeed(`${slug}:${a.slug}`) ^ seed;
    const bScore = hashSeed(`${slug}:${b.slug}`) ^ seed;
    return aScore - bScore;
  });

  return ranked.slice(0, count);
}

/** Rotating hero carousel — disjoint from `getHomeGridProjects` and from the
 * logo-marquee pool, so no project's imagery repeats on the homepage. */
export function getHomeHeroProjects() {
  return projects.filter((p) => p.homeSpotlight === "hero");
}

/** Preferred order for homepage Selected work. */
const GRID_ORDER = [
  "o3",
  "conch-shell",
  "fibocan",
  "valence",
  "mindo",
  "vilambo",
  "home-in-the-city",
  "soul-bela",
] as const;

/** "Selected work" grid on the homepage — disjoint from the hero carousel
 * and the logo marquee. */
export function getHomeGridProjects() {
  const grid = projects.filter((p) => p.homeSpotlight === "grid");
  const ordered = GRID_ORDER.map((slug) =>
    grid.find((p) => p.slug === slug),
  ).filter((p): p is Project => Boolean(p));
  const orderedSlugs = new Set(ordered.map((p) => p.slug));
  const rest = grid.filter((p) => !orderedSlugs.has(p.slug));
  return [...ordered, ...rest];
}

/** Brands featured first in the homepage identity marquee. */
const MARQUEE_FEATURED = ["black-diamond"] as const;

/** Logo marquee pool — every project not already spotlighted in the homepage
 * hero or grid, so no project appears twice on the homepage. Featured brands
 * lead the strip so they appear immediately in the showcase. */
export function getMarqueeProjects() {
  const pool = projects.filter((p) => !p.homeSpotlight);
  const featured = MARQUEE_FEATURED.map((slug) =>
    pool.find((p) => p.slug === slug),
  ).filter((p): p is Project => Boolean(p));
  const featuredSlugs = new Set(featured.map((p) => p.slug));
  const rest = pool.filter((p) => !featuredSlugs.has(p.slug));
  return [...featured, ...rest];
}
