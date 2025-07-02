import { useAtomValue, useAtom } from "jotai";
import Container from "./components/Container";
import ListFilter from "./components/ListFilter";
import ThemeSwitch from "./components/ThemeSwitch";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";
import { filteredTodosAtom, todosAtom } from "./atoms";

// TODO: Add alias import
// TODO: Drag and drop
// TODO: Dark theme styling
export default function App() {
  const [todos, setTodos] = useAtom(todosAtom);
  const filteredTodos = useAtomValue(filteredTodosAtom);
  const itemsLeft = todos.filter((todo) => !todo.completed).length;

  const handleClearCompleted = () => {
    setTodos((prev) => prev.filter((todo) => !todo.completed));
  };

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
            <ul className="min-h-32 divide-y-2 divide-gray-200">
              {filteredTodos.map(({ id, task, completed }) => {
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
