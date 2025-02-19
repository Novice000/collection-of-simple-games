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
      <motion.div className="mt-20 w-screen flex-1  px-20 grid place-content-center max-h-screen">
        <Card className=" flex flex-col space-y-2 justify-center items-center text-white py-2">
          <CardHeader className="text-white">
            <CardTitle className="text-white text-4xl">Tic Tac Toe</CardTitle>
            <CardDescription className="text-2xl w-full text-center">
              {gameVisible ? "Playing" : "Select Difficulty"}
              {gameVisible && ` ${NOS}x${NOS}`}
            </CardDescription>
          </CardHeader>

          {!gameVisible && (
            <CardContent className="w-full h-full flex space-x-5 justify-center items-center flex flex-col">
              <motion.div 
              initial = {{ scale: 0 }}
              animate = {{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-col space-y-5 justify-center items-center">
                  {difficultyState.map((difficulty, index) => (
                    <Button
                      key={index}
                      className="difficulty-button"
                      size={"lg"}
                      onClick={() => {
                        setNOS(difficulty.N);
                        setGameVisible(true);
                      }}
                    >
                      {difficulty.difficulty}
                    </Button>
                  ))}
              </motion.div>
            </CardContent>
          )}
          {
            gameVisible && (
              <CardContent className="w-full h-full">
                <TicTacToe numberOfSquares={NOS} />
              </CardContent>
            )
          }
          {gameVisible && (
            <CardFooter className="flex flex-col items-center justify-center space-x-5 w-full p-[0px]">
              <Button
                className="border w-1/3 mb-4 bg-black border-white shadow-lg hover:scale-105 text-xl text-primary hover:text-white"
                onClick={() => {
                  setGameVisible(false);
                  setNOS(0);
                }}
              >
                RESET
              </Button>
            </CardFooter>
          )}
        </Card>
      </motion.div>
    );
}

export default TicTactToeClient

