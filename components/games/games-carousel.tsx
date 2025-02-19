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
      <div className="flex flex-col justify-center items-center h-screen w-full">
        <Carousel
          opts={{
            loop: true,
            axis: "x",
            align: "center", // center each card in the carousel
            slidesToScroll: 1, // show one card at a time
            // snap: true, // snap to the center of the card
          }}
          orientation="horizontal"
          className="w-3/5 md:w-full max-w-sm md:max-w-lg"
        >
          <CarouselContent>
            {gameCards.map((gameCard) => (
              <CarouselItem key={gameCard.title} className="grid place-content-center">
                <div className="w-full nax-w-sm md:max-w-md">
                  <GameCard GameCardProps={gameCard} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    );
}


export default GamesCarousel

