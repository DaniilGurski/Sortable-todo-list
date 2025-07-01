export default function TodoForm() {
  return (
    <form className="mb-4 flex gap-3 rounded-sm bg-white px-5 py-3">
      <div
        className="size-6 rounded-full outline-1 outline-gray-300"
        aria-hidden="true"
      ></div>
      <input
        className="caret-blue-500 outline-none"
        placeholder="Create a new todo..."
      />
    </form>
  );
}
