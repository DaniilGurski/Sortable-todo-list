import { Checkbox } from "@headlessui/react";
import iconCheckmark from "../assets/icon-check.svg";
import iconCross from "../assets/icon-cross.svg";
import type { Todo } from "../types";
import { useSetAtom } from "jotai";
import { todosAtom } from "../atoms";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import iconDraggable from "../assets/icon-draggable.svg";

type TodoItemProps = Todo;

export default function TodoItem({ id, task, completed }: TodoItemProps) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const setTodos = useSetAtom(todosAtom);

  const handleCheckboxChange = () => {
    // update completed prop for this todo
    setTodos((prev) =>
      // if todo with this id, change its completed prop
      prev.map((item) =>
        item.id === id ? { ...item, completed: !completed } : item,
      ),
    );
  };

  const handleRemoveClick = () => {
    setTodos((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <li
      className="flex items-center justify-between bg-white px-5 py-3"
      ref={setNodeRef}
      style={style}
    >
      <div className="flex gap-3">
        <Checkbox
          checked={completed}
          defaultChecked={completed}
          onChange={handleCheckboxChange}
          className="peer grid size-6 cursor-pointer place-items-center rounded-full bg-white from-blue-400 to-purple-400 outline-1 outline-gray-300 data-checked:bg-linear-75 data-checked:not-data-focus:outline-transparent data-focus:outline-2 data-focus:outline-black"
        >
          {/* Checkmark icon */}
          <img src={iconCheckmark} alt="" />
        </Checkbox>

        <span className="text-gray-800 peer-data-checked:text-gray-400 peer-data-checked:line-through">
          {task}
        </span>
      </div>

      <ul className="flex items-center gap-x-2">
        <li>
          <button
            className="cursor-pointer"
            aria-label="drag and drop todo"
            onClick={handleRemoveClick}
            {...listeners}
            {...attributes}
          >
            <span className="sr-only"> Drag and drop todo </span>
            <img src={iconDraggable} alt="" />
          </button>
        </li>
        <li>
          <button
            className="cursor-pointer"
            aria-label="delete todo"
            onClick={handleRemoveClick}
          >
            <span className="sr-only"> Delete Todo </span>
            <img src={iconCross} alt="" />
          </button>
        </li>
      </ul>
    </li>
  );
}
