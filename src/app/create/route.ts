import { supbaseServerClient } from "@/core/applications/services/supabase";
import { TaskPriority } from "../_domains/models/task-priority.enum";
import { TodoDTO } from "../_infrastructure/dto/todo.dto";
import { TodoController } from "../_applications/controllers/todo.controller";

export async function POST(next: Request) {
  const supabase = supbaseServerClient();
  const form = await next.formData();

  const todo = {
    title: form.get("title"),
    status: false,
    priority: form.get("priority") ?? TaskPriority.MEDIUM,
  };
  const { error } = await TodoController.createTodo(supabase, todo as TodoDTO);

  if (error?.message) throw new Error(error.message);

  return Response.json(null, { status: 200 });
}
