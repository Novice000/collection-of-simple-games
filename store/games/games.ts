import { routes } from "@/lib/routes";

export const gameCards = [
    {title: "Tic Tac Toe",
     url: routes.ticTacToe,
     description: "A classic game of Tic Tac Toe. Simple yet challenging. The game is played on a grid, with two players, X and O. The first player to get three of their symbols in a row (horizontally, vertically, or diagonally) wins the game. If all of the squares are filled and no player has won, the game is a draw."
    },
    {title: "Anagram",
     url: routes.anagram,
     description: "An engaging game where you are given a randomized set of letters and your task is to rearrange them to form the correct word."
    },
    {
        title : "word guess",
        url: routes.wordGuess,
        description: "A simple game where you are given a word and your task is to guess the correct word within 5 tries. The game ends when you either guess the correct word or run out of tries. You are only allowed to guess words with the number of words of the the right word"
    }

]