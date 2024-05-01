import { CreateTodoTitle } from "./create-todo-title";
import { TaskPriority } from "@/app/_domains/models/task-priority.enum";
import { CreateTodoAction } from "./create-todo-action";
import { createClient } from "@/core/applications/services/supabase";
import { cookies } from "next/headers";
import { todoController } from "@/app/_applications/controllers/todo.controller";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { CreateTodoFormField } from "./create-todo-form-field";
import { TodoDTO } from "@/app/_infrastructure/dto/todo.dto";

export function CreateTodoForm() {
  async function createTodo(form: FormData) {
    "use server";
    const supabase = createClient(cookies());

    const todo = {
      title: form.get("title"),
      status: false,
      priority: form.get("priority") ?? TaskPriority.MEDIUM,
    };

    const { error } = await todoController.createTodo(
      supabase,
      todo as TodoDTO,
    );

    if (error?.message) throw new Error(error.message);
    revalidatePath("/");
    redirect("/");
  }

  return (
    <form action={createTodo} className="lg:w-1/4 md:w-1/2 w-4/5">
      <div className="bg-gray-100 p-4 rounded-tr-md rounded-tl-md">
        <CreateTodoTitle />
        <CreateTodoFormField />
      </div>

      <CreateTodoAction />
    </form>
  );
}
