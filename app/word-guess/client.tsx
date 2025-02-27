"use client"
import React, { useEffect, useState } from "react";
import WordGuessGameBooard from "@/components/word-guess/gameboard";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { difficultyState } from "@/lib/word-guess/word-guess";
import { Button } from "@/components/ui/button";
import { type difficulties } from "@/lib/word-guess/word-guess";

export default function WordGuessClient() {
  const [difficulty, setDifficulty] = useState<difficulties | null >(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [tries, setTries] = useState(0);

  function handleTries(tries: number){
    setTries(tries);
  }

  useEffect(()=>{
    if(difficulty !== null) setIsPlaying(true)
    else setIsPlaying(false)
  },[difficulty])

  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Word Guess</CardTitle>
          <CardDescription>
            {difficulty ? "Playing" : "Select Difficulty"}
          </CardDescription>
          {isPlaying && <CardDescription>Tries: {tries}</CardDescription>}
        </CardHeader>
        {difficulty === null && (
          <CardContent className="flex flex-col md:flex-row gap-4">
            {difficultyState.map((difficulty, index) => (
              <Button key={index} onClick={() => setDifficulty(difficulty)}
              className="border border-white  hover:scale-105 text-xl md:text-base">
                {difficulty}
              </Button>
            ))}
          </CardContent>
        )}
        {isPlaying && difficulty !== null && (
          <CardContent>
            <WordGuessGameBooard
              difficulty={difficulty}
              handleTries={handleTries}
            />
          </CardContent>
        )}
        <CardFooter>
          { difficulty !== null &&
          <Button
            onClick={() => setDifficulty(null)}
            className="bg-black text-red-700 border border-white shadow-lg shadow-gray-400 hover:scale-105 text-xl md:text-base mt-4"
          >
            Reset
          </Button>
}
        </CardFooter>
      </Card>
    </div>
  );
}
