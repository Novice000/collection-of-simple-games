import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { wordObj } from "@/lib/anagram/anagram";
import { CSS } from "@dnd-kit/utilities";

export function Sortables({ wordObj }: { wordObj: wordObj }) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: wordObj.id });

  const styles = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
      <div
        ref={setNodeRef}
        {...listeners}
        {...attributes}
        style={styles}
        className="border border-white grid flex justify-center items-center rounded-xl py-4 px-6 text-3xl"
      >
        {wordObj.value}
      </div>
  );
}
