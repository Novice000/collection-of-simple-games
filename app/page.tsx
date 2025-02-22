"use client";
import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/navigation";
import React from "react";

function Home() {
  const router = useRouter()
  function handleWelcome(){
    router.push("/games")
  }
  return (
    <AnimatePresence>
    <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 , delay: 0.5 }}
    exit={{ x: "-200vw" }}
    className="h-full grid place-items-center">
      <Button onClick={handleWelcome}
      className="px-y py-10 border-2 text:2xl md:text-3xl text-white border-white hover:bg-white hover:text-primary hover:border-black shadow-lg"
      >Welcome, Click to Choose Game</Button>
    </motion.div>
    </AnimatePresence>
  );
}

export default Home