import { normalWords, easyWords, hardWords } from "@/store/word-guess";

export type difficulties = "easy" | "normal" | "hard";
export const difficultyState: difficulties[] = ["easy", "normal", "hard"]


function getWord(level: string) {
    let words;
    switch (level) {
        case "easy":
            words = easyWords;
            break;
        case "normal":
            words = normalWords;
            break;
        case "hard":
            words = hardWords;
            break;
        default:
            words = easyWords;
    }
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
}

export {getWord}