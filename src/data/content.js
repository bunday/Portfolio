// Everything the site renders lives here.

export const profile = {
  name: "Zadat Olayinka",
  role: "Software engineer",
  location: "Liverpool, UK",
  email: "bundayy@outlook.com",
  github: "https://github.com/bunday",
  linkedin: "https://www.linkedin.com/in/zadat-olayinka-317a98110/",
  toptalUrl: "https://www.toptal.com/developers/resume/zadat-olayinka#NRgwER",
  cvUrl:
    "https://res.cloudinary.com/bundayy/image/upload/v1789124411/Zadat_Olayinka_a86v9m.pdf",
};

export const intro = {
  lead: "I build products and put them in front of people.",
  body: [
    "I have spent over eight years building production software, across fintech and payments, health, pensions and ticketing. The part I like is staying with a thing after it ships: you only find out what a decision really costs when you are the one keeping it alive.",
    "The day job is senior software engineering with a fintech in London, on payments and the infrastructure underneath them. What I'm actually good at is the structural, unglamorous work: designing the schema before anyone needs it to change, moving a live system onto a different database without anyone noticing, replacing a stack the team has outgrown, and making deploys boring enough that nobody thinks about them.",
    "The rest of the time I build my own products, and run everything behind them myself: the servers, the deploys, and the bill at the end of the month.",
  ],
};

export const contact = {
  statement:
    "Open to the right role, and to interesting problems in payments, infrastructure, and the awkward parts in between.",
};

// Things built outside work. `href` is omitted where there's nothing live to link to.
export const building = [
  {
    title: "Story2Video",
    blurb: "Video content for people who would rather not be on camera.",
    note: "Live · SaaS",
    href: "https://story2video.app",
    hrefLabel: "story2video.app",
    detail: [
      "The world is turning into a content world very quickly, and I think every household ends up with at least one creator in it. What stops a lot of them is simple: they want to make something without putting their face on the internet, and until recently that mostly meant making nothing at all.",
      "Story2Video is for those people. Bring a story or write one in the tool, then decide the scenes yourself rather than accepting whatever came out of the model first. Generate the video and layer voiceover, word-by-word captions, transitions and music over it. Four visual styles, each steerable with your own prompts, and publishing straight out to TikTok and YouTube.",
      "Underneath, token-based billing through Stripe and a BullMQ queue doing the rendering, so nothing depends on the browser staying open while a video is built.",
    ],
    stack: ["Next.js 15", "React 19", "Bun", "FFmpeg", "BullMQ", "Stripe"],
  },
  {
    title: "VoxSieve",
    blurb: "Audio intelligence: transcription, diarization, voice cloning.",
    note: "Live · SaaS",
    href: "https://voxsieve.com",
    hrefLabel: "voxsieve.com",
    detail: [
      "Whisper v3 for transcription, Pyannote 3.1 for working out who is speaking, Demucs for stem separation, and voice cloning on top. Four different models, none of them mine, and none of them the value. The value is the pipeline between them and what happens when one of them fails.",
      "The infrastructure is the other half of it: Postgres holds only structured data, every audio object lives in Cloudflare R2 for the zero egress fees, and a Workers reverse proxy fronts a Hugging Face Space as the real domain. Built to run at roughly the cost of a coffee.",
    ],
    stack: ["FastAPI", "PyTorch", "React", "Cloudflare R2", "Neon", "Docker"],
  },
  {
    title: "StudioYou",
    blurb: "Studio-quality photographs generated from your own snapshots.",
    note: "Live",
    href: "https://studioyou.app",
    hrefLabel: "studioyou.app",
    detail:
      "Pick a template, upload a handful of your own photos, and get back images in that style with your face intact. Private S3 with presigned URLs so nothing is publicly addressable, and the whole thing is localised in English and Spanish.",
    stack: ["Next.js 15", "Google GenAI", "Replicate", "Drizzle", "S3", "Stripe"],
  },
  {
    title: "Trackkly",
    blurb: "Turning goals into things you actually do today.",
    note: "Live",
    href: "https://trackkly.app",
    hrefLabel: "trackkly.app",
    detail:
      "My partner wanted an app, so I taught myself React Native and built it for her. I'd shipped mobile before with Ionic and Capacitor, so the ground wasn't entirely new, but React Native was, and a request from someone you live with is a better deadline than most. Expo on the front, a Bun and Elysia API behind it, all of it in a workspace monorepo.",
    stack: ["React Native", "Expo", "Bun", "Elysia", "PostgreSQL"],
  },
  {
    title: "Kikki",
    blurb: "An AI assistant that adapts to whoever you are talking to.",
    note: "Live · Google Play",
    href: "https://play.google.com/store/apps/details?id=com.jarat.kikki",
    hrefLabel: "Google Play",
    detail:
      "Dating, work, research, friendships: the same assistant, reading a different room each time. React Native app, Bun API, and a self-hosted LLM container that never gets exposed to the internet directly.",
    stack: ["React Native", "Bun", "PostgreSQL", "Docker", "self-hosted LLM"],
  },
  {
    title: "Self-hosted content platform",
    blurb: "Eight services on one box, producing and publishing for my own media channels.",
    note: "Self-hosted · 8 services",
    detail: [
      "Transcription, image generation, speech, video assembly, a carousel pipeline and a dashboard over the top: eight containerised services, each with its own database and private address, which is about thirty containers once the sidecars are counted, all on a single Linux box. They share a design system I publish to a private npm registry, which is the thing that stopped it becoming eight unrelated codebases held together by copy-paste.",
      "The video side runs as a closed loop: mine demand, propose, produce, schedule, publish, read the performance back, adjust. A Telegram bot holds the approval gate, so nothing reaches an audience without me saying yes. Generation is cheap, but publishing something wrong is not.",
      "I also replaced the commercial research tool I was paying for with a self-hosted MCP server over the YouTube APIs, which does the demand mining the pipeline runs on.",
    ],
    stack: [
      "Bun",
      "TypeScript",
      "Elysia",
      "Docker",
      "PostgreSQL",
      "FFmpeg",
      "Whisper",
      "Tailscale",
    ],
  },
];

export const shipping = [
  {
    title: "It isn't real until someone else can reach it",
    body: "A project on my laptop is a hobby. A project with a domain, a deploy pipeline and a stranger using it is a product. I'd rather put something small in front of people than keep something large in a branch.",
  },
  {
    title: "Own the whole line",
    body: "Schema, API, frontend, the pipeline that ships it, the machine it lands on. I don't think you can debug quickly across a boundary you've never crossed, and almost every hard bug lives on one of those boundaries.",
  },
  {
    title: "Infrastructure cost is a design constraint",
    body: "When the bill is yours, you design differently. Object storage with no egress fees. Databases that suspend when idle. Batching charges weekly instead of firing them daily. None of that is an optimisation bolted on afterwards, it is the reason the architecture looks the way it does. Running thirty-odd containers on a box I own has taught me more about cost and blast radius than any amount of managed hosting would have.",
  },
  {
    title: "Boring deploys",
    body: "Merging to production should be short, unremarkable and something you'd happily do on a Friday. If it isn't, that's the thing worth fixing before anything else on the list.",
  },
];

export const ai = [
  {
    title: "It will agree with you, and that is worthless",
    body: "Ask whether your approach is sound and it will tell you it is. Agreement from something that agrees with everybody carries no information at all. If there is a flaw in what you are about to do, you have to go looking for it yourself, because nothing in the conversation is going to volunteer it.",
  },
  {
    title: "It will take the easy way out",
    body: "Left to itself it will chicken out: take the simpler path, stub the hard case, quietly narrow the problem until it becomes an easy one. So read what it intends to do before it does it, not after. The shortcut is usually obvious in the plan and almost invisible in the diff.",
  },
  {
    title: "You are only as good as what you check",
    body: "AI is how I ship more in the hours I have, not an excuse to ship worse. The bar did not move, the time to clear it did, and the only thing holding it there is validation. Checking that something is actually correct is the engineering. Producing it never was the hard part.",
  },
  {
    title: "Get a second opinion when you are out of your depth",
    body: "In a domain I know well I can smell a bad suggestion straight away. In one I do not, I cannot, and that is exactly where I am most likely to accept something confident and wrong. So I go and check: upstream docs, a second model, a person who has done it before. The danger was never being given a bad answer. It is not being able to tell.",
  },
  {
    title: "You committed it, you own it",
    body: "“The AI wrote that bit” is not a defence in code review and it will not be a defence in a postmortem. Whatever goes in under my name is mine: I have to be able to explain it, debug it, and justify why it is there at all.",
  },
  {
    title: "When every model fails the same way, the model isn't the problem",
    body: "I once chased bad audio output through three different voice models before accepting the obvious: when independent components share a defect, the cause is the thing they share. It's the most useful debugging habit I've picked up from working with these systems, and it applies well beyond them.",
  },
  {
    title: "Keep a human where the stakes are",
    body: "My content pipeline generates, edits and assembles on its own, then stops and asks me before anything is published. Generation is cheap now. Judgement isn't, and pretending otherwise is how you end up apologising publicly.",
  },
];

export const teaching = [
  {
    title: "CodeYourFuture",
    detail:
      "I teach software development to under-represented and refugee learners as a volunteer. Most of them are changing career under harder conditions than I ever had to, and they're some of the most motivated people I've taught.",
  },
  {
    title: "Ontime",
    detail:
      "Open source contributor to a TypeScript and React event scheduling tool used by broadcasters and theatres. I take features and bugs off the issue tracker and ship them.",
    href: "https://github.com/cpvalente/ontime",
    hrefLabel: "github.com/cpvalente/ontime",
  },
  {
    title: "Mentoring",
    detail:
      "At work I mentor mid-level engineers and sit on both engineering and product hiring. Most of what I try to pass on isn't syntax. It's how to scope something honestly and how to disagree with a decision usefully.",
  },
];

export const otherwise = [
  {
    title: "Streaming and gaming",
    detail:
      "I stream, mostly gaming, and I run my own EA FC Pro Club. It is the least serious thing I do and about the most consistent.",
  },
  {
    title: "Match days",
    detail:
      "I vlog match days. The trip, the ground, the walk back afterwards. It is the one kind of content where I am perfectly happy to be on camera.",
  },
  {
    title: "It feeds the work",
    detail:
      "Nearly everything I know about video, audio and publishing came from doing this rather than from a job. The pipeline behind my channels started as a tool I needed for myself, which is usually the surest sign a thing is worth building at all.",
  },
];
