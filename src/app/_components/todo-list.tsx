import { Todo } from "../_domains/models/todo";
import { TodoItem } from "./todo-item";

type Props = {
  todos: Todo[] | null;
};

export function TodoList(props: Props) {
  return !!props.todos ? (
    <div className="flex flex-col gap-2">
      {props.todos.map((todo) => (
        <TodoItem key={todo.title} {...todo} />
      ))}
    </div>
  ) : (
    <p className="text-gray-500 font-thin">no tasks!</p>
  );
}
