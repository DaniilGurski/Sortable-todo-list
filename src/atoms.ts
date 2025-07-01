import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";

export const themeAtom = atomWithStorage<"light" | "dark">(
  "todo-theme",
  "light",
);

export const filterModeAtom = atom<"All" | "Active" | "Completed">("All");
