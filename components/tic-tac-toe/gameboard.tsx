"use client";
import React, { useEffect, useReducer, useState } from "react";
import { Button } from "../ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from "../ui/card";
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
    >
      <Card className="border-none shadow-none">
        <CardHeader>
          <motion.div
            initial={{ color: "white" }}
            animate={{ color: xTurn ? "black" : "white" }}
            className="text-center text-xl"
          >
            {gameOver ? "Game Over" : xTurn ? "X's Turn" : "O's Turn"}
          </motion.div>
        </CardHeader>
        <CardContent className="grid place-content-center">
          {!gameOver &&
            state.map((row, rowIndex) => (
              <div key={rowIndex} 
              className="flex">
                {row.map((cell, colIndex) => (
                  <div key={colIndex}>
                    <Button
                      onClick={() =>
                        updateValue(rowIndex, colIndex, xTurn ? "X" : "O")
                      }
                      className="border border-black w-10 h-10 md:h-16 md:w-16 rounded-none"
                      disabled={cell !== ""}
                    >
                      {cell}
                    </Button>
                  </div>
                ))}
              </div>
            ))}

          {gameOver && (
            <CardDescription>
              {gameWinner ? gameWinner + " Wins" : "Tie"}
            </CardDescription>
          )}
        </CardContent>
        <CardFooter>
          <Button onClick={replay}
          className="w-full border border-white shadow-lg shadow-gray-400 hover:scale-105 text-xl md:text-base mt-4">
            Play Again
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}

export default TicTacToe;

