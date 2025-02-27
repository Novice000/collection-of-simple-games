"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
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
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.5 }}
        transition={{ duration: 0.5 }}
      >
        <Card>
          <CardHeader>
            <CardTitle className="text-center text-2xl">Anagram</CardTitle>
            <CardDescription className="text-center text-gray-500">
              {difficulty ? "Playing" : "Select Difficulty"}
            </CardDescription>
          </CardHeader>
          <CardContent>
            {difficulty === null && (
              <div className="flex flex-col md:flex-row gap-4">
                {difficultyLevels.map((item, index) => (
                  <Button
                    key={index}
                    onClick={() => setDifficulty(item.difficulty)}
                    className="border border-white  hover:scale-105 text-xl md:text-base"
                  >
                    {item.title}
                  </Button>
                ))}
              </div>
            )}
            {difficulty !== null && (
              <AnagramGameBoard difficulty={difficulty} />
            )}
          </CardContent>
          {difficulty !== null && (
            <CardFooter>
              <Button
                onClick={() => setDifficulty(null)}
                className="w-full
                bg-black
                text-red-700
                border
                border-white
                shadow-lg
                shadow-gray-400
                hover:scale-105
                text-xl
                md:text-base
                mt-4"
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

