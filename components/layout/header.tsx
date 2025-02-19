"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Gamepad, MenuIcon } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { gameCards } from "@/store/games/games";
function Header() {
  const [menuVisible, setMenuVisible] = useState(false);

  function toggleMenu() {
    setMenuVisible(!menuVisible);
  }

  return (
    <motion.div
      initial={{ y: "-100vh" }}
      animate={{ y: 0 }}
      transition={{ type: "spring", delay: 0.2, duration: 0.5 }}
      className="flex flex-col top-0 w-full fixed backdrop-blur-md"
    >
      <div className="w-full flex justify-between px-2 md:px-20 py-2 border-b-2 border-white text-3xl z-40">
        <div className="flex space-x-10 items-center">
          <Gamepad color="white" size={40} />
          <Link href="/">
            <h1 className=" text-xl text-white">Simple Games</h1>
          </Link>
        </div>
        <MenuIcon color="white" onClick={toggleMenu} size={40} />
      </div>
      <AnimatePresence>
        {menuVisible && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ x: "200vh" }}
            transition={{ type: "tween", delay: 0.2 }}
            className="flex flex-col w-full bg-white justify-center items-center space-y-2 py-5 text-lg shadow-black shadow-md"
          >
            {gameCards.map((game, index) => (
              <Link
                key={index}
                className="border-b w-full text-center"
                href={game.url}
                onClick={toggleMenu}
              >
                {game.title}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default React.memo(Header);
