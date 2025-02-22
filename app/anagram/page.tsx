import React from "react";
import AnagramClient from "./client";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Anagram",
    description: "Simple and fun anagram game to play",
}

function AnagramPage(){
    return <AnagramClient />
}


export default AnagramPage