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
    >
      <Button onClick={handleWelcome}
      >Welcome, Click to Choose Game</Button>
    </motion.div>
    </AnimatePresence>
  );
}

export default Home