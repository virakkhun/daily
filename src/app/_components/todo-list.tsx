"use client";

import { createClient } from "@/core/applications/services/supabase";
import { Todo } from "../_domains/models/todo";
import { TodoItem } from "./todo-item";
import { todoController } from "../_applications/controllers/todo.controller";
import { useRouter } from "next/navigation";
import { PostgrestSingleResponse } from "@supabase/supabase-js";

type Props = {
  todos: Promise<PostgrestSingleResponse<Todo[]>>;
};

export async function AsyncTodoList(props: Props) {
  const supabase = createClient();
  const router = useRouter();
  const { data: todos } = await props.todos;

  async function update(todo: Todo) {
    const { error } = await todoController.update(supabase, {
      ...todo,
      status: !todo.status,
    });

    if (error?.message) throw new Error(error.message);
    router.refresh();
  }

  async function remove(id: number) {
    const { error } = await todoController.delete(supabase, id);

    if (error?.message) throw new Error(error.message);
    router.refresh();
  }

  return !!todos && todos.length > 0 ? (
    <div className="flex flex-col gap-2">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          {...todo}
          onToggle={() => update(todo)}
          onDelete={() => remove(todo.id!)}
        />
      ))}
    </div>
  ) : (
    <p className="text-gray-500 font-thin text-center">no tasks!</p>
  );
}
