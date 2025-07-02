import { Checkbox } from "@headlessui/react";
import iconCheckmark from "../assets/icon-check.svg";
import iconCross from "../assets/icon-cross.svg";
import { useEffect, useState } from "react";
import type { Todo } from "../types";
import { useSetAtom } from "jotai";
import { todosAtom } from "../atoms";
// import { useState } from "react";

type TodoItemProps = Todo;

export default function TodoItem({ id, task, completed }: TodoItemProps) {
  const setTodos = useSetAtom(todosAtom);

  const handleChange = () => {
    // update completed prop for this todo
    setTodos((prev) =>
      // if todo with this id, change its completed prop
      prev.map((item) =>
        item.id === id ? { ...item, completed: !completed } : item,
      ),
    );
  };

  return (
    <li className="flex justify-between bg-white px-5 py-3">
      <div className="flex gap-3">
        <Checkbox
          checked={completed}
          defaultChecked={completed}
          onChange={handleChange}
          className="peer grid size-6 cursor-pointer place-items-center rounded-full bg-white from-blue-400 to-purple-400 outline-1 outline-gray-300 data-checked:bg-linear-75 data-checked:not-data-focus:outline-transparent data-focus:outline-2 data-focus:outline-black"
        >
          {/* Checkmark icon */}
          <img src={iconCheckmark} alt="" />
        </Checkbox>

        <span className="text-gray-800 peer-data-checked:text-gray-400 peer-data-checked:line-through">
          {task}
        </span>
      </div>

      <button aria-label="delete todo">
        <span className="sr-only"> Delete Todo </span>
        <img src={iconCross} alt="" />
      </button>
    </li>
  );
}
