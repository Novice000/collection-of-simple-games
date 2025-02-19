const easyWords: string[] = [
  "apple",
  "chair",
  "dream",
  "grace",
  "happy",
  "light",
  "ocean",
  "peace",
  "quick",
  "river",
  "smart",
  "truth",
  "valor",
  "zebra",
  "jolly",
  "noted",
  "unity",
  "flame",
  "ideal",
  "sunny",
];

const normalWords: string[] = [
  "brisk",
  "crypt",
  "fjord",
  "glyph",
  "jumpy",
  "knack",
  "mirth",
  "nudge",
  "plumb",
  "quirk",
  "spite",
  "throb",
  "vexed",
  "wharf",
  "zeal",
  "cloud",
  "dwarf",
  "feral",
  "lapse",
  "wryly",
];


const hardWords: string[] = [
  "axiom",
  "baneful",
  "cynosure",
  "dilemma",
  "effigy",
  "epitome",
  "facade",
  "gnarled",
  "influx",
  "opaque",
  "quorum",
  "seraph",
  "sphinx",
  "thwart",
  "unduly",
  "vortex",
  "wraith",
  "zephyr",
  "yonder",
  "oblique",
];


export const difficulty: {
  difficulty: "easy" | "normal" | "hard";
  title: string;
}[] = [
  {
    difficulty: "easy",
    title: "easy",
  },
  {
    difficulty: "normal",
    title: "normal",
  },
  {
    difficulty: "hard",
    title: "hard",
  },
];

export { easyWords, normalWords, hardWords };
