import React from 'react'
import TicTactToeClient from './client'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Tic Tac Toe",
  description: "Simple and fun of tictactoe to play with a friend",
}

function TicTacToePage() {
  return (
    <TicTactToeClient/>
  )
}

export default TicTacToePage