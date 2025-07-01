import { Checkbox } from "@headlessui/react";
import iconCheckmark from "../assets/icon-check.svg";
import iconCross from "../assets/icon-cross.svg";
// import { useState } from "react";

export default function TodoItem() {
  return (
    <li className="flex justify-between bg-white px-5 py-3 first:rounded-tl-sm first:rounded-tr-sm">
      <div className="flex gap-3">
        <Checkbox
          checked={true}
          className="peer grid size-6 cursor-pointer place-items-center rounded-full bg-white from-blue-400 to-purple-400 outline-1 outline-gray-300 data-checked:bg-linear-75 data-checked:not-data-focus:outline-transparent data-focus:outline-2 data-focus:outline-black"
        >
          {/* Checkmark icon */}
          <img src={iconCheckmark} alt="" />
        </Checkbox>

        <span className="text-gray-800 peer-data-checked:text-gray-400 peer-data-checked:line-through">
          Read for 1 hour
        </span>
      </div>

      <button aria-label="delete todo">
        <span className="sr-only"> Delete Todo </span>
        <img src={iconCross} alt="" />
      </button>
    </li>
  );
}
