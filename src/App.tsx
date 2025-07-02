import { useAtomValue } from "jotai";
import Container from "./components/Container";
import ListFilter from "./components/ListFilter";
import ThemeSwitch from "./components/ThemeSwitch";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";
import { todosAtom } from "./atoms";
import { useEffect } from "react";

// TODO: Add alias import
// TODO: Add colors from style guide
export default function App() {
  const todos = useAtomValue(todosAtom);

  return (
    <>
      <Container>
        <div className="w-[90%] max-w-2xl">
          <header className="mb-6 flex justify-between">
            <h1 className="text-2xl font-bold tracking-[1rem] text-white md:text-3xl">
              TODO
            </h1>

            <ThemeSwitch />
          </header>

          <TodoForm />

          <div className="mb-4 overflow-hidden rounded-lg shadow-sm shadow-gray-500/15">
            <ul className="min-h-32 divide-y-2 divide-gray-200">
              {todos.map(({ id, task, completed }) => {
                return (
                  <TodoItem
                    key={id}
                    id={id}
                    task={task}
                    completed={completed}
                  />
                );
              })}
            </ul>

            <footer className="flex justify-between border-t-2 border-gray-200 bg-white px-5 py-3 text-gray-500">
              <span> n items left </span>

              {/* Desktop Button list */}
              <ListFilter className="hidden md:flex" />

              <button> Clear Completed</button>
            </footer>
          </div>

          {/* Mobile Button list*/}
          <ListFilter className="flex justify-center rounded-br-sm rounded-bl-sm bg-white px-5 py-3 text-gray-500 shadow-lg shadow-gray-500/15 md:hidden" />

          <p className="mt-12 text-center text-gray-500">
            Drag and drop to reorder list
          </p>
        </div>
      </Container>
    </>
  );
}
