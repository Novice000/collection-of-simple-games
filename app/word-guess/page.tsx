import React from "react";
import WordGuessClient from "./client";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Word Guess",
    description: "Simple and fun games to play",
}

export default function WordGuessPage(){
    return (
        <WordGuessClient />
    )
}