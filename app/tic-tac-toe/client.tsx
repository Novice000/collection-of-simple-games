"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import TicTacToe from "@/components/tic-tac-toe/gameboard";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { difficultyState } from "@/store/tictactoe";




function TicTactToeClient(){
    const [gameVisible, setGameVisible] = useState(false)
    const [NOS, setNOS] = useState(0)


    return (
      <motion.div className=" h-full flex flex-col justify-center items-center max-h-full">
        <Card className="w-4/5 flex flex-col space-y-2 justify-center items-center text-white">
          <CardHeader className="text-white">
            <CardTitle className="text-white text-4xl">Tic Tac Toe</CardTitle>
            <CardDescription className="text-2xl w-full text-center">
              {gameVisible ? "Playing" : "Select Difficulty"}
            </CardDescription>
          </CardHeader>

          {!gameVisible && (
            <CardContent className="flex space-x-5">
              {difficultyState.map((difficulty, index) => (
                <Button
                  key={index}
                  className="border border-white shadow-lg hover:scale-105 text-xl"
                  size={"lg"}
                  onClick={() => {
                    setNOS(difficulty.N);
                    setGameVisible(true);
                  }}
                >
                  {difficulty.difficulty}
                </Button>
              ))}
            </CardContent>
          )}
          {gameVisible && (
            <CardFooter className="flex flex-col items-center justify-center space-x-5 w-full p-[0px]">
              <Button
                className="border border-white shadow-lg hover:scale-105 text-xl text-white"
                onClick={() => {
                  setGameVisible(false);
                  setNOS(0);
                }}
              >
                RESET
              </Button>
              {gameVisible && NOS !== 0 && <TicTacToe numberOfSquares={NOS} />}
            </CardFooter>
          )}
        </Card>
      </motion.div>
    );
}

export default TicTactToeClient