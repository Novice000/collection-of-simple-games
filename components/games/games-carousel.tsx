import React from "react";
import {
    Carousel,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    CarouselContent,

} from "@/components/ui/carousel";
import { gameCards } from "@/store/games/games";
import GameCard from "./game-card";


function GamesCarousel(){
    return (
      <Carousel
        opts={{
          loop: true,
          axis: "x",
          align: "center", 
          slidesToScroll: 1, 
        }}
        orientation="horizontal"
        className="w-[280px] grid place-content-center"
      >
        <CarouselContent>
          {gameCards.map((gameCard) => (
            <CarouselItem key={gameCard.title}>
              <GameCard GameCardProps={gameCard} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    );
}


export default GamesCarousel

