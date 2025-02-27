import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";
import { getWord } from "@/lib/word-guess/word-guess";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";

function WordGuessGameBooard({
  difficulty,
  handleTries,
}: {
  difficulty: "easy" | "normal" | "hard";
  handleTries: (tries: number) => void;
}) {
  const [wordDict, setWord] = useState(getWord(difficulty));
  const [tries, setTries] = useState(0);
  const [isSolved, setIsSolved] = useState(false);
  const [currentGuess, setCurrentGuess] = useState("");
  const [guesses, setGuesses] = useState<string[]>([]);

  useEffect(() => {
    function checkGuess() {
      if (guesses.length > 0) {
        return guesses[guesses.length - 1].split("").every((letter, index) => {
          return letter === wordDict.word.toUpperCase()[index];
        });
      }
    }
    if (checkGuess() || tries >= 5) {
      setIsSolved(true);
    }
  }, [guesses, wordDict, tries]);

  function handleGuessClick() {
    if (
      currentGuess.length <= 3 ||
      currentGuess.length > wordDict.word.length
    ) {
      return;
    }
    setGuesses((guesses) => [...guesses, currentGuess]);
    setTries((tries) => tries + 1);
    setCurrentGuess("");
    handleTries(tries + 1);
  }

  function replay() {
    setWord(getWord(difficulty));
    setCurrentGuess("");
    setGuesses([]);
    setIsSolved(false);
    handleTries(0);
    setTries(0);
  }

  return (
    <Card className="border-none shadow-none">
      <CardHeader>
        {!isSolved && (
          <div>
            <CardTitle className="text-2xl text-center font-bold">
              Guess the word
            </CardTitle>
            <CardDescription className="text-gray-400 text-sm mb-10">
              Hint: {wordDict.description}
            </CardDescription>
            <CardDescription className="flex gap-2">
              <Input
                type="text"
                placeholder="Enter your guess"
                maxLength={wordDict.word.length}
                onChange={(e) => setCurrentGuess(e.target.value.toUpperCase())}
                value={currentGuess}
                className="border border-white shadow-lg shadow-gray-400 hover:scale-105 md:text-base"
              />
              <Button
                className="border border-white shadow-lg shadow-gray-400 hover:scale-105 md:text-base"
                onClick={handleGuessClick}
                disabled={
                  currentGuess.length <= 3 ||
                  currentGuess.length > wordDict.word.length
                }
              >
                Guess
              </Button>
            </CardDescription>
          </div>
        )}
      </CardHeader>
      {!isSolved && (
        <CardContent className="flex flex-col gap-2">
          {guesses.map((guess, index) => (
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              key={index}
              className="flex gap-1"
            >
              {guess.split("").map((letter, index) => (
                <div
                  key={index}
                  style={{
                    color:
                      wordDict.word.toUpperCase()[index] === letter
                        ? "green"
                        : wordDict.word.toUpperCase().includes(letter)
                        ? "yellow"
                        : "white",
                  }}
                  className="flex items-center justify-center border border-black w-10 h-10 rounded-md bg-black"
                >
                  {letter}
                </div>
              ))}
            </motion.div>
          ))}
        </CardContent>
      )}
      {isSolved && (
        <CardContent>
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{ color: guesses[guesses.length - 1] === wordDict.word.toUpperCase() ? "green" : "red" }}
          >
            Correct Word: {wordDict.word}
          </motion.div>
        </CardContent>
      )}

      {isSolved && (
        <CardFooter>
          <Button
            onClick={replay}
            className="w-full border border-white shadow-lg shadow-gray-400 hover:scale-105 text-xl md:text-base mt-4"
          >
            Play Again
          </Button>
        </CardFooter>
      )}
    </Card>
  );
}

export default WordGuessGameBooard;
