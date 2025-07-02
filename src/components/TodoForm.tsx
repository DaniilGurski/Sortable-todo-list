import { useSetAtom } from "jotai";
import { useState } from "react";
import { todosAtom } from "../atoms";

export default function TodoForm() {
  const [task, setTask] = useState("");
  const setTodos = useSetAtom(todosAtom);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newTodo = {
      id: Date.now(),
      task,
      completed: false,
    };
    setTodos((prev) => [...prev, newTodo]);
  };

  return (
    <form
      className="mb-4 flex gap-3 rounded-sm bg-white px-5 py-3"
      onSubmit={handleSubmit}
    >
      <div
        className="size-6 rounded-full outline-1 outline-gray-300"
        aria-hidden="true"
      ></div>
      <input
        onChange={(e) => setTask(e.currentTarget.value)}
        className="caret-blue-500 outline-none"
        placeholder="Create a new todo..."
      />
    </form>
  );
}
