"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { difficulty as difficultyLevels } from "@/store/anagram";
import { Button } from "@/components/ui/button";
import  AnagramGameBoard from "@/components/anagram/game-board";

function AnagramClient() {
  const [difficulty, setDifficulty] = useState<
    "easy" | "normal" | "hard" | null
  >(null);

  useEffect(() => console.log("anagram client mounted"));

  return (
    <AnimatePresence>
      <motion.div
        className="flex-1 w-screen p-4 flex justify-center items-center"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.5 }}
        transition={{ duration: 0.5 }}
      >
        <Card className=" border border-black m-20">
          <CardHeader>
            <CardDescription className="text-4xl text-center">
              Anagram
            </CardDescription>
            <CardDescription className="text-xl text-center">
              {difficulty ? "Playing" : "Select Difficulty"}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-5">
            {difficulty === null && (
              <div className="flex flex-col justify-center items-center space-y-5">
                {difficultyLevels.map((item, index) => (
                  <Button
                    key={index}
                    onClick={() => setDifficulty(item.difficulty)}
                    className="difficulty-button"
                  >
                    {item.title}
                  </Button>
                ))}
              </div>
            )}
            {difficulty !== null && <AnagramGameBoard difficulty={difficulty} />}
          </CardContent>
          {difficulty !== null && (
            <CardFooter className="flex flex-col items-center justify-center space-x-5 w-full p-[0px]">
              <Button
                className="border w-1/3 mb-4 bg-black border-white shadow-lg hover:scale-105 text-xl text-primary hover:text-white"
                onClick={() => setDifficulty(null)}
              >
                RESET
              </Button>
            </CardFooter>
          )}
        </Card>
      </motion.div>
    </AnimatePresence>
  );
}

export default AnagramClient;

