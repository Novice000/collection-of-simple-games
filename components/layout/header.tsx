"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Gamepad, MenuIcon, XIcon } from "lucide-react";
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
      className="fixed top-0 w-full flex justify-between items-center p-4 shadow-md shadow-gray z-50"
    >
      <div className="flex gap-4 items-center justify-between w-full">
        <div className="flex items-center gap-4">
          <Gamepad color="white" size={40} />
          <Link href="/">
            <h1 className="text-white md:text-2xl">Simple Games</h1>
          </Link>
        </div>
        {!menuVisible && (
          <MenuIcon color="white" onClick={toggleMenu} size={40} />
        )}
      </div>

      <AnimatePresence>
        {menuVisible && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 1 } }}
            className="fixed inset-0 w-full h-screen bg-black bg-opacity-50 z-50"
          >
            <XIcon
              color="white"
              size={40}
              onClick={toggleMenu}
              className="absolute top-4 right-4"
            />
            <motion.div
              initial={{ x: "-100vh" }}
              animate={{ x: 0 }}
              exit={{ x: "-100vh" }}
              transition={{ type: "tween", delay: 0.2 }}
              className="pt-10 flex flex-col gap-4 w-1/2 md:w-[20%] h-full rounded-md opacity-100 z-50 bg-white"
            >
              {gameCards.map((game, index) => (
                <Link
                  key={index}
                  className="border-b border-black w-full text-center"
                  href={game.url}
                  onClick={toggleMenu}
                >
                  {game.title}
                </Link>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default React.memo(Header);
