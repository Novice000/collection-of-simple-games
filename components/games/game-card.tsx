"use client";
import React from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

type GameCardProps = {
    title: string,
    description: string,
    url: string
}

function GameCard({ GameCardProps }: { GameCardProps: GameCardProps }) {

    const router = useRouter()
    function handleClick(url: string){
        router.push(url)
    }
    return (
        <Card className="w-full border border-black shadow-lg shadow-gray" >
            <CardHeader className="border-b-2 border-white mb-4">
                <CardTitle className="text-center text-2xl">{GameCardProps.title}</CardTitle>
            </CardHeader>
            <CardContent>
                <CardDescription>{GameCardProps.description}</CardDescription>
            </CardContent>
            <CardFooter
            className="border-t border-white mt-4">
                <Button 
                className="w-full border border-white shadow-lg shadow-gray-400 hover:scale-105 text-xl md:text-base mt-4"
                size={"lg"} onClick={() => {handleClick(GameCardProps.url)}}
                >Play</Button>
            </CardFooter>
        </Card>
    )
}

export default GameCard