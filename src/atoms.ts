import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import type { Todo } from "./types";

export const themeAtom = atomWithStorage<"light" | "dark">(
  "todo-theme",
  "light",
);
export const todosAtom = atomWithStorage<Todo[]>("todos", []);

export const filterModeAtom = atom<"All" | "Active" | "Completed">("All");
