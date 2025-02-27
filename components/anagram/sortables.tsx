import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { wordObj } from "@/lib/anagram/anagram";
import { CSS } from "@dnd-kit/utilities";

function Sortables({ wordObj }: { wordObj: wordObj }) {
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
        className="border border-white rounded-md w-10 h-10 flex items-center justify-center touch-none bg-black"

      >
        {wordObj.value}
      </div>
  );
}

export { Sortables }
