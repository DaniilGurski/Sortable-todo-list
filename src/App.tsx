import { useAtom } from "jotai";
import Container from "./components/Container";
import ListFilter from "./components/ListFilter";
import ThemeSwitch from "./components/ThemeSwitch";
import TodoForm from "./components/TodoForm";
import { todosAtom } from "./atoms";
import { useEffect } from "react";
import TodoList from "./components/TodoList";

// TODO: Add alias import
// TODO: Dark theme styling
// TODO: Default check "All" filter
export default function App() {
  const [todos, setTodos] = useAtom(todosAtom);
  const itemsLeft = todos.filter((todo) => !todo.completed).length;

  const handleClearCompleted = () => {
    setTodos((prev) => prev.filter((todo) => !todo.completed));
  };

  useEffect(() => console.log(todos), [todos]);

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

          <div className="mb-4 overflow-hidden rounded-lg bg-white shadow-sm shadow-gray-500/15">
            <TodoList />

            <footer className="flex justify-between bg-white px-5 py-3 text-gray-500">
              <span> {itemsLeft} items left </span>

              {/* Desktop Button list */}
              <ListFilter className="hidden md:flex" />

              <button onClick={handleClearCompleted}> Clear Completed</button>
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
