export const Constants = {
  urls: {
    prod: "https://atlas.ourkolkata.in",
    dev: "https://dev.pujo-atlas.ourkolkata.in",
  },
  routes: {
    home: "/",
    aboutUs: "/about-us",
    sponsorUs: "/sponsor-us",
  },
  launchCountdown: {
    daysTillOpenBeta: "2025-08-21",
    daysTillWeLaunchV2: "2025-09-21",
    daysTillDurgaPuja2025: "2025-09-27",
  },
  v1_stats: {
    searches: 872.49,
    journeys: 114.83,
    visitorsPerDay: 10.8,
  },
  socials: {
    gitHub: "https://github.com/Pujo-Atlas-Kolkata/PujoAtlasKol-Web",
    discord: "https://discord.com/invite/xxSXWYf6d4",
    facebook: "https://www.facebook.com/profile.php?id=61566663481562",
    instagram: "https://www.instagram.com/pujoatlas/",
    twitter: "https://twitter.com/PujoAtlas",
    sponsor: "sponsors@ourkolkata.in",
  },
  stats: {
    redditPost:
      "https://www.reddit.com/r/kolkata/comments/1g4zf8n/আসছ_বছর_আবর_হব/",
  },
  misc: {
    feedbackForm: "https://forms.gle/AsZwTvmzwR9tptGH6",
    dataIngestionForm: "https://forms.gle/n394CrQpaHzS36hF6",
    statusPage: "https://status.ourkolkata.in/",
    license:
      "https://github.com/Pujo-Atlas-Kolkata/PujoAtlasKol-Web/blob/dev/LICENSE",
  },
  sponsorsMarquee: [
    {
      src: "/sponsors/netlify.webp",
      alt: "Netlify",
      link: "https://www.netlify.com/",
      description: "Deployment & Hosting",
    },
    {
      src: "/sponsors/cloudflare.svg",
      alt: "Cloudflare",
      link: "https://www.cloudflare.com/",
      description: "CDN & Security",
    },
    {
      src: "/sponsors/sentry.svg",
      alt: "Sentry",
      link: "https://sentry.io/",
      description: "Error Monitoring",
    },
    {
      src: "/sponsors/fastly.svg",
      alt: "Fastly",
      link: "https://www.fastly.com/",
      description: "Edge Computing",
    },
    {
      src: "/sponsors/browserStack.svg",
      alt: "BrowserStack",
      link: "https://www.browserstack.com/",
      description: "Testing Platform",
    },
    {
      src: "/sponsors/posthog.svg",
      alt: "PostHog",
      link: "https://posthog.com/",
      description: "Analytics",
    },
  ],
};

export const Tech = [
  "Web",
  "Mobile",
  "Backend",
  "DevOps",
  "Data Science",
] as const;

export const NonTech = [
  "Design",
  "Content",
  "Coordinator",
  "Community",
] as const;

type MemberDetails = {
  id: string;
  avatar: string;
  name: string;
} & (
  | {
      department: (typeof Tech)[number];
      socials: {
        discord: string;
        github: string;
        linkedin?: string;
        twitter?: string;
        website?: string;
      };
    }
  | {
      department: (typeof NonTech)[number];
      socials: {
        discord: string;
        github?: string;
        linkedin?: string;
        twitter?: string;
        website?: string;
      };
    }
);

export const team: Record<string, MemberDetails[]> = {
  Founder: [
    {
      id: "Leofossilis",
      name: "Leofossilis",
      avatar: "https://api.dicebear.com/9.x/lorelei/svg?seed=fossils",
      socials: {
        discord: "https://discord.com/users/1082731230916788336",
      },
      department: "Coordinator",
    },
  ],
  Leads: [
    {
      id: "rabbitz",
      name: "rabbitz",
      avatar:
        "https://api.dicebear.com/9.x/lorelei/svg?glassesProbability=100&seed=rabbitz&glasses=variant04",
      socials: {
        discord: "https://discord.com/users/1033076736973361192",
        linkedin: "https://www.linkedin.com/in/ayanava-karmakar",
        github: "https://github.com/AyanavaKarmakar",
        website: "https://rbbtz.in",
      },
      department: "Web",
    },
    {
      id: "nox",
      name: "nox",
      avatar:
        "https://api.dicebear.com/9.x/lorelei/svg?glassesProbability=100&seed=thor&glasses=variant01",
      socials: {
        discord: "https://discord.com/users/464333825137180672",
        github: "https://github.com/wriddhi",
        linkedin: "https://www.linkedin.com/in/wriddhi-hazra",
        website: "https://wriddhi.com",
      },
      department: "Web",
    },
    {
      id: "heisenberg",
      name: "Heisenberg",
      avatar: "https://api.dicebear.com/9.x/lorelei/svg?seed=heisenberg",
      socials: {
        website: "https://iamrishi-dev.vercel.app",
        discord: "https://discord.com/users/758731279625093138",
        github: "https://github.com/Heisen47",
      },
      department: "Web",
    },
    {
      id: "inceptor",
      name: "Sbasu",
      avatar:
        "https://api.dicebear.com/9.x/lorelei/svg?seed=inceptor&eyes=variant18",
      socials: {
        website: "https://sayantan-basu.vercel.app/",
        discord: "https://discord.com/users/798395088593354762",
        linkedin: "https://www.linkedin.com/in/sayantan-basu-73ab4a92/",
        github: "https://github.com/Sbasu2512",
      },
      department: "Backend",
    },
    {
      id: "indranil",
      name: "Indranil Chakraborty ",
      avatar: "https://api.dicebear.com/9.x/lorelei/svg?seed=nightcrwlrr",
      socials: {
        discord: "https://discord.com/users/629236605936205835",
        linkedin: "https://www.linkedin.com/in/indranil-chakraborty-91ba60217",
        github: "https://github.com/Andrew99xx",
      },
      department: "Backend",
    },
    {
      id: "thehappybaloney",
      name: "TheHappyBaloney",
      avatar:
        "https://api.dicebear.com/9.x/lorelei/svg?seed=baloon&glassesProbability=0",
      socials: {
        website: "https://thehappybaloney.fyi",
        discord: "https://discord.com/users/1232913986689962078",
        github: "https://github.com/TheHappyBaloney",
        twitter: "https://x.com/TheHappyBaloney",
        linkedin: "https://www.linkedin.com/in/thehappybaloney",
      },
      department: "Mobile",
    },
    {
      id: "babumosai",
      name: "babumosai",
      avatar: "https://api.dicebear.com/9.x/lorelei/svg?seed=babumosai",
      socials: {
        discord: "https://discord.com/users/1265190463456022550",
        github: "https://github.com/thebabumosai",
      },
      department: "DevOps",
    },
    {
      id: "WhiteTiger",
      name: "WhiteTiger",
      avatar:
        "https://api.dicebear.com/9.x/lorelei/svg?seed=Aidan&beard=variant02&beardProbability=100&earrings[]&earringsProbability=100&eyebrows=variant12&eyes=variant02&frecklesProbability=0&glasses[]&glassesProbability=0&hair=variant05&hairAccessoriesProbability=0&head=variant03&mouth=happy02,sad08&nose=variant05",
      socials: {
        discord: "https://discord.com/users/751361976369807370",
        linkedin: "https://www.linkedin.com/in/sayan-naskar-1714a6330",
        github: "https://github.com/sayannnaskarrr",
        twitter: "https://x.com/sayannnaskarrr",
      },
      department: "Community",
    },
    {
      id: "rishi",
      name: "rishi",
      avatar: "https://api.dicebear.com/9.x/lorelei/svg?seed=rishi",
      socials: {
        discord: "https://discord.com/users/283499137977024513",
        github: "https://github.com/saptarshichakrabarti",
      },
      department: "Coordinator",
    },
  ],
  ["Content Creators"]: [
    {
      id: "Nghtcrwlrr",
      name: "Nghtcrwlrr",
      avatar:
        "https://api.dicebear.com/9.x/lorelei/svg?seed=nghtcrwlrr&glassesProbability=100&glasses=variant04",
      socials: {
        discord: "https://discord.com/users/324413042639241226",
      },
      department: "Content",
    },
    {
      id: "Suzi",
      name: "Suzi",
      avatar:
        "https://api.dicebear.com/9.x/lorelei/svg?seed=baloon&eyes=variant23&frecklesProbability=0&glassesProbability=0&hair=variant18&eyebrows=variant09",
      socials: {
        discord: "https://discord.com/users/750464448044597269",
        twitter: "https://x.com/itsssarkar",
      },
      department: "Content",
    },
    {
      id: "Melancholic Sobdokar",
      name: "Melancholic Sobdokar",
      avatar:
        "https://api.dicebear.com/9.x/lorelei/svg?seed=nightcrwlrr&beardProbability=0&glassesProbability=0",
      socials: {
        discord: "https://discord.com/users/1090698750068002877",
      },
      department: "Content",
    },
    {
      id: "Achakita",
      name: "Achakita",
      avatar: "https://api.dicebear.com/9.x/lorelei/svg?seed=reddit",
      socials: {
        discord: "https://discord.com/users/903722676084949063",
        twitter: "https://x.com/Achakita_TRUTH",
      },
      department: "Content",
    },
  ],
  "Web Team": [
    {
      id: "aizaysi",
      name: "aizaysi",
      avatar: "https://api.dicebear.com/9.x/lorelei/svg?seed=serbi",
      socials: {
        discord: "https://discord.com/users/1224812991262884033",
        github: "https://github.com/aizaysi",
      },
      department: "Web",
    },
    {
      id: "ritesh",
      name: "Ritesh Das",
      avatar: "https://api.dicebear.com/9.x/lorelei/svg?seed=john",
      socials: {
        discord: "https://discord.com/users/1257600086331101260",
        github: "https://github.com/Dyslex7c",
        linkedin: "https://www.linkedin.com/in/ritesh-das-066205288/",
      },
      department: "Web",
    },
    {
      id: "yash",
      name: "Yash Chaurasia",
      avatar: "https://api.dicebear.com/9.x/lorelei/svg?seed=yash",
      socials: {
        discord: "https://discord.com/users/615100553122414592",
        github: "https://github.com/yashchaurasia667",
        linkedin: "https://www.linkedin.com/in/yash-chaurasia-259553196/",
      },
      department: "Web",
    },
    {
      id: "yaroteburu",
      name: "Yaroteburu",
      avatar:
        "https://api.dicebear.com/9.x/lorelei/svg?seed=liam&eyes=variant02&frecklesProbability=0&glassesProbability=100&hair=variant07&eyebrows=variant07&glasses=variant04&nose=variant04",
      socials: {
        discord: "https://discord.com/users/422747998657839116",
        linkedin:
          "https://www.linkedin.com/in/soumyadeep-bhattacharya-65b74b170/",
        github: "https://github.com/SBhattacharya45",
        website: "https://www.soumyadeep.info/",
      },
      department: "Web",
    },
  ],
  "Backend Team": [
    {
      id: "Jethanand",
      name: "Jethanand",
      avatar: "https://api.dicebear.com/9.x/lorelei/svg?seed=Jethanand",
      socials: {
        discord: "https://discord.com/users/775623707011448852",
        github: "https://github.com/pnaskardev",
      },
      department: "Backend",
    },
    {
      id: "akshay",
      name: "Akshay A Parmar",
      avatar: "https://api.dicebear.com/9.x/lorelei/svg?seed=aksha",
      socials: {
        discord: "https://discord.com/users/892804617128251452",
        github: "https://github.com/vitaminncpp",
      },
      department: "Backend",
    },
  ],
  "DevOps Team": [
    {
      id: "Hackermanprith",
      name: "Hackermanprith",
      avatar: "https://api.dicebear.com/9.x/lorelei/svg?seed=prith",
      socials: {
        discord: "https://discord.com/users/761157873140367382",
        github: "https://github.com/Hackermanprith",
      },
      department: "DevOps",
    },
  ],
};
