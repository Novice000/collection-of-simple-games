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
        <Card className="border w-full border-black">
            <CardHeader>
                <CardTitle className="text-2xl">{GameCardProps.title}</CardTitle>
            </CardHeader>
            <CardContent>
                <CardDescription>{GameCardProps.description}</CardDescription>
            </CardContent>
            <CardFooter>
                <Button size={"lg"} onClick={() => {handleClick(GameCardProps.url)}}
                    className="border border-black hover:scale-105">Play</Button>
            </CardFooter>
        </Card>
    )
}

export default GameCard