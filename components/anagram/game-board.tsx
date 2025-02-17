import React, { useState } from "react";
import { shortWords, mediumWords, longWords } from "@/store/anagram";
import { type AnagramBoardProps } from "@/lib/anagram/anagram";
// import { DndContext, closestCenter } from "@dnd-kit/core";


function Anagram( { difficulty }: AnagramBoardProps){
    function getRandomWord( level: string ) {
        let words;
        switch(level){
            case "easy":
                words = shortWords
                break;
            case "normal":
                words = mediumWords
                break;
            case "hard":
                words = longWords
                break;
            default:
                words = longWords
        }
        const randomIndex = Math.floor(Math.random() * words.length);
        return words[randomIndex].split("");
    }

    // const [word, setWord] = useState(getRandomWord(difficulty))

    return (
        <div>

        </div>
    )
}


export default Anagram