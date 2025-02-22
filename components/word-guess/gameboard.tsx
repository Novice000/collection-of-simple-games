import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";


function WordGuessGameBooard() {
    return (
        <Card className="border w-full border-black">
            <CardHeader>
                <CardTitle className="text-2xl">Word Guess</CardTitle>
                <CardDescription>Select Difficulty</CardDescription>
            </CardHeader>
            <CardContent>
                <CardDescription>Difficulty</CardDescription>
            </CardContent>
            <CardFooter>
                <Button>Start</Button>
            </CardFooter>
        </Card>
    );
}

export default WordGuessGameBooard