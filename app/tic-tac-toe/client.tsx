"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import TicTacToe from "@/components/tic-tac-toe/gameboard";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { difficultyState } from "@/store/tictactoe";

function TicTactToeClient() {
  const [gameVisible, setGameVisible] = useState(false);
  const [NOS, setNOS] = useState(0);

  return (
    <motion.div>
      <Card>
        <CardHeader>
          <CardTitle className="text-center text-2xl" >Tic Tac Toe</CardTitle>
          <CardDescription className="text-center text-gray-500">
            {gameVisible ? "Playing" : "Select Difficulty"}
            {gameVisible && ` ${NOS}x${NOS}`}
          </CardDescription>
        </CardHeader>

        {!gameVisible && (
          <CardContent>
            <motion.div
            className="flex flex-col md:flex-row gap-4">
              {difficultyState.map((difficulty, index) => (
                <Button
                  key={index}
                  onClick={() => {
                    setNOS(difficulty.N);
                    setGameVisible(true);
                  }}
                  className="border border-white  hover:scale-105 text-xl md:text-base"
                >
                  {difficulty.difficulty}
                </Button>
              ))}
            </motion.div>
          </CardContent>
        )}
        {gameVisible && (
          <CardContent>
            <TicTacToe numberOfSquares={NOS} />
          </CardContent>
        )}
        {gameVisible && (
          <CardFooter>
            <Button
              onClick={() => {
                setGameVisible(false);
                setNOS(0);
              }}
              className="w-full bg-black text-red-700 border border-white shadow-lg shadow-gray-400 hover:scale-105 text-xl md:text-base mt-4"
            >
              RESET
            </Button>
          </CardFooter>
        )}
      </Card>
    </motion.div>
  );
}

export default TicTactToeClient;

