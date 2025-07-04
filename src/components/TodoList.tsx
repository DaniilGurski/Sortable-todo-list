import {
  closestCenter,
  DndContext,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { type DragEndEvent } from "@dnd-kit/core";
import { useAtom, useAtomValue } from "jotai";
import { filteredTodosAtom, todosAtom } from "../atoms";
import {
  arrayMove,
  verticalListSortingStrategy,
  SortableContext,
  sortableKeyboardCoordinates,
} from "@dnd-kit/sortable";
import TodoItem from "./TodoItem";
import {
  restrictToParentElement,
  restrictToVerticalAxis,
} from "@dnd-kit/modifiers";

export default function TodoList() {
  const [todos, setTodos] = useAtom(todosAtom);
  const filteredTodos = useAtomValue(filteredTodosAtom);
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  );

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;
    if (!over) return;

    // Active draggable not on its original position
    if (active.id !== over.id) {
      // Move this todo to different position in the array
      setTodos((prev) => {
        const oldIndex = prev.findIndex((todo) => todo.id === active.id);
        const newIndex = prev.findIndex((todo) => todo.id === over.id);

        return arrayMove(prev, oldIndex, newIndex);
      });
    }
  }

  return (
    <ul className="min-h-32 divide-y-2 divide-gray-200 dark:divide-gray-700 dark:bg-gray-800">
      <DndContext
        onDragEnd={handleDragEnd}
        collisionDetection={closestCenter}
        sensors={sensors}
        modifiers={[restrictToVerticalAxis, restrictToParentElement]}
      >
        <SortableContext items={todos} strategy={verticalListSortingStrategy}>
          {filteredTodos.map(({ id, task, completed }) => {
            return (
              <TodoItem key={id} id={id} task={task} completed={completed} />
            );
          })}
        </SortableContext>
      </DndContext>
    </ul>
  );
}
