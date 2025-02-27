const easyWords: { word: string; description: string }[] = [
  { word: "apple", description: "a type of fruit" },
  { word: "chair", description: "a piece of furniture for sitting" },
  {
    word: "dream",
    description: "a series of thoughts or images in the mind during sleep",
  },
  { word: "grace", description: "elegance and refinement of movement" },
  { word: "happy", description: "feeling or showing pleasure or contentment" },
  { word: "light", description: "a source of illumination" },
  {
    word: "ocean",
    description:
      "a vast body of saltwater that covers a significant portion of the Earth",
  },
  { word: "peace", description: "a state of quiet or tranquility" },
  { word: "quick", description: "moving or able to move rapidly and easily" },
  { word: "river", description: "a natural flowing body of water" },
  {
    word: "smart",
    description: "having or showing a quick and inventive mind",
  },
  { word: "truth", description: "the quality or state of being true" },
  { word: "valor", description: "great courage in the face of danger" },
  {
    word: "zebra",
    description: "a wild or domesticated mammal with black and white stripes",
  },
  { word: "jolly", description: "good-humored and cheerful" },
  { word: "noted", description: "well-known or famous" },
  { word: "unity", description: "the state of being united or joined" },
  { word: "flame", description: "a stream of hot, glowing gas" },
  {
    word: "ideal",
    description: "a person or thing that is considered perfect or excellent",
  },
  { word: "sunny", description: "having plenty of sunshine" },
];

const normalWords: { word: string; description: string }[] = [
  {
    word: "brisk",
    description: "done or occurring quickly and with a lot of energy",
  },
  {
    word: "crypt",
    description: "a chamber or vault beneath the level of the ground",
  },
  {
    word: "fjord",
    description: "a long, narrow inlet of the sea between high cliffs",
  },
  {
    word: "glyph",
    description:
      "a symbol or character, especially one from an ancient writing system",
  },
  { word: "jumpy", description: "nervously excited or anxious" },
  { word: "knack", description: "a natural talent or ability" },
  { word: "mirth", description: "amusement, entertainment, or enjoyment" },
  {
    word: "nudge",
    description: "to push or bump someone gently, typically with one's elbow",
  },
  {
    word: "plumb",
    description: "to make something vertical or to find the depth of something",
  },
  {
    word: "quirk",
    description: "a peculiar or unexpected feature or behavior",
  },
  { word: "spite", description: "a feeling of ill will or resentment" },
  { word: "throb", description: "a strong, rhythmic beat" },
  {
    word: "vexed",
    description: "causing or showing great annoyance or frustration",
  },
  {
    word: "wharf",
    description:
      "a structure built on the shore of a sea, lake, or river where ships may dock to load and unload cargo",
  },
  { word: "zeal", description: "enthusiastic and dedicated support or effort" },
  {
    word: "cloud",
    description: "a visible mass of water droplets suspended in the air",
  },
  {
    word: "dwarf",
    description: "a person or thing that is much smaller than normal",
  },
  {
    word: "feral",
    description:
      "existing in a wild state, especially after being domesticated",
  },
  {
    word: "lapse",
    description:
      "a period of time during which something is not done or is not happening",
  },
  { word: "wryly", description: "in a dryly humorous or ironic way" },
];

const hardWords: { word: string; description: string }[] = [
  {
    word: "axiom",
    description:
      "a statement or proposition that is regarded as being established, accepted, or self-evidently true",
  },
  { word: "baneful", description: "causing harm or evil" },
  {
    word: "cynosure",
    description:
      "a person or thing that serves as a focal point of attention or interest",
  },
  {
    word: "dilemma",
    description:
      "a situation in which a difficult choice has to be made between two or more alternatives",
  },
  {
    word: "effigy",
    description: "a model or representation of a person or animal",
  },
  {
    word: "epitome",
    description: "a person or thing that is a perfect example of something",
  },
  {
    word: "facade",
    description:
      "the front of a building, especially one that is decorative or impressive",
  },
  {
    word: "gnarled",
    description: "twisted or distorted, especially in an unnatural way",
  },
  {
    word: "influx",
    description: "a flow of people, things, or ideas into a place or area",
  },
  { word: "opaque", description: "not transparent or clear" },
  {
    word: "quorum",
    description:
      "the minimum number of people required to be present at a meeting before official business can be conducted",
  },
  {
    word: "seraph",
    description:
      "a high-ranking angel in the three-tiered hierarchy of angels described in the Bible",
  },
  {
    word: "sphinx",
    description:
      "a mythological creature with the body of a lion, the head of a human, and an enigmatic smile",
  },
  {
    word: "thwart",
    description:
      "to prevent someone from doing something or to hinder the progress of something",
  },
  {
    word: "unduly",
    description: "to a degree that is greater than is necessary or reasonable",
  },
  {
    word: "vortex",
    description:
      "a whirling mass of water or air that sucks everything near it towards its center",
  },
  {
    word: "wraith",
    description: "a ghostly or spectral appearance of someone or something",
  },
  { word: "zephyr", description: "a gentle, mild breeze" },
  {
    word: "yonder",
    description: "at a distance, either physically or metaphorically",
  },
  {
    word: "oblique",
    description:
      "neither parallel nor at right angles to a given line or surface",
  },
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
