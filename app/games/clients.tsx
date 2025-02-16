import React from "react";
import GameCard from "@/components/games/game-card";
import { gameCards } from "@/lib/games/games";

function GamePageClient() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4  pt-20 px-10">
            {gameCards.map((gameCard) => (
                <GameCard key={gameCard.title} GameCardProps={gameCard} />
            ))}
        </div>
    );
}

export default GamePageClient