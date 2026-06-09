export const siteConfig = {
  name: "Two Guys Media",
  shortName: "Two Guys",
  coverImage: "/cover-photo.png",
  founders: [
    {
      name: "Seb",
      handle: "@sebsidequest",
      instagram: "https://www.instagram.com/sebsidequest/",
    },
    {
      name: "Tobi",
      handle: "@tobes38_",
      instagram: "https://www.instagram.com/tobes38_/",
    },
  ],
  tagline: "Social content, no filter.",
  description:
    "We make vlog-style reels for local businesses: restaurants, bike shops, retail, and anyone with a story worth telling. Street trivia, product unboxings, challenge series, and content people actually send to their friends.",
  origin: "Whistler, BC",
  email: "hello@twoguysmedia.co",
  social: {
    instagram: "https://instagram.com",
    tiktok: "https://tiktok.com",
    youtube: "https://youtube.com",
  },
  clients: [
    {
      name: "Chubby Ducks",
      handle: "@chubby.ducks",
      url: "https://instagram.com/chubby.ducks",
      image: "/clients/chubby-ducks.png",
      tagline: "Kebabs · Poutine · Whistler",
      type: "Food & Drink",
    },
    {
      name: "Fat Tony's Pizza",
      handle: "@fattonyswhistler",
      url: "https://instagram.com/fattonyswhistler",
      image: "/clients/fat-tonys.png",
      tagline: "Live by the slice, die by the slice",
      type: "Food & Drink",
    },
    {
      name: "Fanatyk Co",
      handle: "@fanatykco",
      url: "https://instagram.com/fanatykco",
      image: "/clients/fanatyk-co.png",
      tagline: "Ski & Cycle · Whistler since 1996",
      type: "Retail",
    },
  ],
  services: [
    {
      title: "Vlog-Style Reels",
      description:
        "Fast-paced, personality-driven short-form for any business: restaurants, retail, hospitality, you name it.",
      icon: "video",
    },
    {
      title: "Series & Episodes",
      description:
        "Street trivia, product demos, challenge formats: branded episodic content that builds a loyal audience.",
      icon: "mic",
    },
    {
      title: "Strategy & Posting",
      description:
        "Platform-native edits, bold graphics, captions, and a posting cadence tuned to what actually performs.",
      icon: "chart",
    },
  ],
  stats: [
    { label: "Local businesses", value: "15+" },
    { label: "Reels produced", value: "500+" },
    { label: "Series episodes", value: "26+" },
    { label: "Avg. engagement", value: "8%+" },
  ],
} as const;
