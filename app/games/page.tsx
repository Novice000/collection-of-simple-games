import React from "react";
import GamePageClient from "./clients";
import { Metadata } from "next";


export const metadate: Metadata = {
    title: "Games",
    description: "Simple and fun games to play",
}

function GamePage() {
    return <GamePageClient />;
}

export default GamePage;