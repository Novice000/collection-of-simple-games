const shortWords: string[] = [
  "apple",
  "brave",
  "chair",
  "dream",
  "flame",
  "grace",
  "happy",
  "ideal",
  "jolly",
  "light",
  "magic",
  "noted",
  "ocean",
  "peace",
  "quick",
  "river",
  "smart",
  "truth",
  "unite",
  "valor",
  "youth",
  "zebra",
  "forest",
  "honest",
  "impact",
  "journey",
  "lively",
  "mirror",
  "savior",
  "wisdom",
];

const mediumWords: string[] = [
  "adventurous",
  "agreement",
  "backstory",
  "breakthrough",
  "determined",
  "expression",
  "foundation",
  "gratitude",
  "landscaper",
  "leadership",
  "motivation",
  "meaningful",
  "judgmental",
  "economical",
  "recreation",
  "compassion",
  "creativity",
  "reliability",
  "impossible",
  "conclusion",
  "vulnerable",
  "connection",
  "teamwork",
  "perfection",
];

const longWords: string[] = [
  "extraordinary",
  "revolutionary",
  "unbelievable",
  "understanding",
  "inconceivable",
  "unquestionable",
  "unconditional",
  "unforgettable",
  "comprehensive",
  "uncompromising",
  "unmistakable",
  "unintelligible",
  "untraditional",
  "unpredictable",
  "unquestionably",
  "unrestrained",
  "uninterrupted",
  "developmental",
  "disorientation",
  "acknowledgment",
  "misinterpretation",
];


export const difficulty: {difficulty: "easy" | "normal" | "hard"; title: string}[] = [
  {
    difficulty: "easy",
    title: "easy"
  },
  {
    difficulty: "normal",
    title: "normal"
  },
  {
    difficulty: "hard",
    title: "hard"
  }
]

export { shortWords, mediumWords, longWords };