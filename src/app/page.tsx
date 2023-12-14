import { getAllTodos } from "@/data-access/todos";
import { deleteTodoAction, toggleTodoAction } from "./action";
import { unstable_noStore } from "next/cache";
import { CreateTodoForm } from "./create-todo-form";
import { CheckSquareIcon, SquareIcon } from "lucide-react";

export default async function Home() {
  unstable_noStore();

  const todos = await getAllTodos();

  return (
    <main className="container mx-auto mt-12">
      <ul className="list-disc">
        {todos.map((todo) => (
          <li className="flex gap-2 items-center" key={todo.id}>
            <form action={toggleTodoAction.bind(null, todo.id)}>
              <button>
                {todo.completed ? <CheckSquareIcon /> : <SquareIcon />}
              </button>
            </form>
            {todo.text}
            <form action={deleteTodoAction.bind(null, todo.id)}>
              <button className="text-red-400">delete</button>
            </form>
          </li>
        ))}
      </ul>
      <CreateTodoForm />
    </main>
  );
}
