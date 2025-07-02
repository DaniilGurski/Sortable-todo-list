import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import type { Todo } from "./types";

export const themeAtom = atomWithStorage<"light" | "dark">(
  "todo-theme",
  "light",
);
export const todosAtom = atomWithStorage<Todo[]>("todos", []);

export const filteredTodosAtom = atom<Todo[]>((get) => {
  const filterMode = get(filterModeAtom);
  const todos = get(todosAtom);

  switch (filterMode) {
    case "All":
      return todos;
    case "Active":
      return todos.filter((todo) => !todo.completed);
    case "Completed":
      return todos.filter((todo) => todo.completed);
    default:
      return todos;
  }
});

export const filterModeAtom = atom<"All" | "Active" | "Completed">("All");
