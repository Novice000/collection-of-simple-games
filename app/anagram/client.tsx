"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { difficulty as difficultyLevels } from "@/store/anagram";
import { Button } from "@/components/ui/button";
import { Anagram } from "@/components/anagram/game-board";

function AnagramClient() {
  const [difficulty, setDifficulty] = useState<"easy" | "normal" | "hard" | null>(null);

    useEffect(()=>console.log("anagram client mounted"))
  return (
    <motion.div
      className="h-screen w-full flex justify-center items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Card className=" border border-black w-full md:w-1/2">
        <CardHeader>
          <CardDescription className="text-3xl font-bold text-center">
            Anagram
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-5">
          {difficulty === null && (
            <div className="flex space-x-5">
              {difficultyLevels.map((item, index) => (
                <Button
                  key={index}
                  onClick={() => setDifficulty(item.difficulty)}
                >
                  {item.title}
                </Button>
              ))}
            </div>
          )}
          {difficulty !== null && <Anagram difficulty={difficulty} />}
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default AnagramClient;

