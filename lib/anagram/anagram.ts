import { shortWords, mediumWords, longWords } from "@/store/anagram";

export type AnagramBoardProps = {
  difficulty: "easy" | "normal" | "hard";
};

export interface wordObj {
  id: number;
  value: string;
};

export function getRandomWord(level: string) {
  let words;
  switch (level) {
    case "easy":
      words = shortWords;
      break;
    case "normal":
      words = mediumWords;
      break;
    case "hard":
      words = longWords;
      break;
    default:
      words = longWords;
  }
  const randomIndex = Math.floor(Math.random() * words.length);
  return words[randomIndex].split("");
}

export function convertToObj(word: string[]) {
  return word.map((item, index) => {
    return { id: index, value: item } as wordObj;
  });
}

export function randomiseObj(word: wordObj[]) {
    word = structuredClone<wordObj[]>(word)
  for (let i = word.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [word[i], word[randomIndex]] = [word[randomIndex], word[i]];
  }
  return word;
}
