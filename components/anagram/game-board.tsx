import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { wordObj } from "@/lib/anagram/anagram";
import {
  randomiseObj,
  convertToObj,
  AnagramBoardProps,
  getRandomWord,
} from "@/lib/anagram/anagram";
import {
  DndContext,
  DragEndEvent,
  KeyboardSensor,
  PointerSensor,
  TouchSensor,
  closestCorners,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  SortableContext,
  horizontalListSortingStrategy,
  arrayMove,
  sortableKeyboardCoordinates,
} from "@dnd-kit/sortable";
import { Sortables } from "./sortables";
import { Button } from "@/components/ui/button";

export function Anagram({ difficulty }: AnagramBoardProps) {
  const [word, setWord] = useState(getRandomWord(difficulty));
  const [wordObj, setWordObj] = useState(convertToObj(word));
  const [randomised, setRandomised] = useState<wordObj[] | null>(null);
  const [isSolved, setIsSolved] = useState(false);

  useEffect(() => {
    setWordObj(convertToObj(word));
  }, [word]);

  useEffect(() => {
    setRandomised(randomiseObj(wordObj));
  }, [wordObj]);

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;
    console.log(randomised);
    if (over && active) {
      if (active.id !== over.id) {
        setRandomised((prev) => {
          if (prev !== null) {
            const activeIndex = prev.findIndex((item) => item.id === active.id);
            const overIndex = prev.findIndex((item) => item.id === over.id);
            return arrayMove(prev, activeIndex, overIndex);
          } else {
            return prev;
          }
        });
      }
    } else return;
  }

  function validate() {
    // console.log(randomised, wordObj)
    let validity;
    if (randomised !== null) {
      validity = randomised.every((item, index) => {
        return item.value === wordObj[index].value;
      });
    } else validity = false;
    setIsSolved(validity);
  }

  function replay(){
    setWord(getRandomWord(difficulty))
    setIsSolved(false)
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        exit={{ x: "-200vw" }}
        className="h-full grid place-items-center"
      >
        <DndContext
          sensors={useSensors(
            useSensor(PointerSensor, {
              activationConstraint: { distance: 10 },
            }),
            useSensor(TouchSensor, {
              activationConstraint: { delay: 250, tolerance: 5 },
            }),
            useSensor(KeyboardSensor, {
              coordinateGetter: sortableKeyboardCoordinates,
            })
          )}
          collisionDetection={closestCorners}
          onDragEnd={handleDragEnd}
        >
          {randomised !== null && !isSolved && (
            <SortableContext
              items={randomised}
              strategy={horizontalListSortingStrategy}
            >
              <div className="flex justify-start gap-4 border border-dashed border-black p-4 rounded-xl">
                {randomised?.map((item) => (
                  <Sortables key={item.id} wordObj={item} />
                ))}
              </div>
              <Button onClick={validate}>Submit</Button>
            </SortableContext>
          )}
          {isSolved && (
            <Button
              className="border border-white shadow-lg shadow-gray hover:scale-105 text-xl"
              onClick={replay}
            >
              Play Again
            </Button>
          )}
        </DndContext>
      </motion.div>
    </AnimatePresence>
  );
}
