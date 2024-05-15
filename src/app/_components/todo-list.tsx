import { Todo } from "../_domains/models/todo";
import { TodoItem } from "./todo-item";
import { PostgrestSingleResponse } from "@supabase/supabase-js";

type Props = {
  todos: Promise<PostgrestSingleResponse<Todo[]>>;
};

export async function AsyncTodoList(props: Props) {
  const { data: todos } = await props.todos;

  return !!todos && todos.length > 0 ? (
    <div className="flex flex-col gap-2">
      {todos.map((todo) => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </div>
  ) : (
    <p className="text-gray-500 font-thin text-center">no tasks!</p>
  );
}
