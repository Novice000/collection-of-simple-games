"use client";
import React, { useEffect, useReducer, useState } from "react";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "../ui/card";
import { motion } from "framer-motion";
import tictactoeReducer from "@/lib/tictactoe/reducer";
import {
  checkColumn,
  checkDiagonal,
  checkReverseDiagonal,
  checkRow,
} from "@/lib/tictactoe/tictactoe";

type TicTacToeProps = {
  numberOfSquares: number;
};

function TicTacToe({ numberOfSquares }: TicTacToeProps) {
  const NOS = numberOfSquares;
  const board = Array.from({ length: NOS }, () =>
    Array.from({ length: NOS }, () => "")
  );
  const [state, dispatch] = useReducer(tictactoeReducer, board);
  const [numberOfPlays, setNumberOfPlays] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [xTurn, setXTurn] = useState(true);
  const [gameWinner, setGameWinner] = useState<string | null>(null);

  useEffect(() => {
    const winner = checkWinner(state);
    if (winner) {
      setGameOver(true);
      setGameWinner(xTurn ? "O" : "X");
    }
    if (numberOfPlays === NOS * NOS) setGameOver(true);
    console.log(numberOfPlays);
  }, [NOS, numberOfPlays, state, xTurn]);

  function updateValue(row: number, col: number, value: string) {
    dispatch({ type: "UPDATE_VALUE", payload: { row, col, value } });
    setNumberOfPlays(numberOfPlays + 1);
    setXTurn(!xTurn);
  }

  function replay() {
    dispatch({ type: "RESET" });
    setGameWinner(null);
    setNumberOfPlays(0);
    setGameOver(false);
    setXTurn(true);
  }

  function checkWinner(state: string[][]) {
    const winner =
      checkDiagonal(state) ||
      checkReverseDiagonal(state) ||
      checkRow(state) ||
      checkColumn(state);
    return winner;
  }

  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: "tween", delay: 0.2, duration: 1 }}
      className=" flex items-center justify-center h-full"
    >
      <Card className="flex flex-col items-center justify-center w-full md:w-3/5 border-[0px]">
        <CardHeader className="text-2xl">
          <motion.div
            initial={{ scale: 1 }}
            animate={{ scale: 1.5 }}
            transition={{
              duration: 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              repeatDelay: 0.2,
            }}
            className="w-full"
          >
            {gameOver ? "Game Over" : xTurn ? "X's Turn" : "O's Turn"}
          </motion.div>
        </CardHeader>
        <CardContent className="w-full flex flex-col justify-center items-center">
          {!gameOver &&
            state.map((row, rowIndex) => (
              <div key={rowIndex} className="flex">
                {row.map((cell, colIndex) => (
                  <div key={colIndex} className="w-16 h-16">
                    <Button
                      size={"lg"}
                      onClick={() =>
                        updateValue(rowIndex, colIndex, xTurn ? "X" : "O")
                      }
                      disabled={cell !== ""}
                      className="border-2 border-white w-full h-full text-xl text-black"
                    >
                      {cell}
                    </Button>
                  </div>
                ))}
              </div>
            ))}

          {gameOver && (
            <CardDescription className="text-2xl ">
              {gameWinner ? gameWinner + " Wins" : "Tie"}
            </CardDescription>
          )}
        </CardContent>
        <CardFooter>
          <Button
            className="replay-button"
            onClick={replay}
          >
            Play Again
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}

export default TicTacToe;
