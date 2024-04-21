import { CreateTodoAction } from "./_components/create-todo-action";
import { CreateTodoContainer } from "./_components/create-todo-container";
import { Input } from "@/core/components/input";
import { CreateTodoTitle } from "./_components/create-todo-title";
import { TodoDTO } from "../_infrastructure/dto/todo.dto";
import { todoController } from "../_applications/controllers/todo.controller";
import { supabase } from "@/core/applications/services/supabase";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Todo App | Create task",
  description: "Add your new task for next hour, next day, or next month",
};

export default async function CreateTodoPage() {
  async function createTodo(form: FormData) {
    "use server";

    const todo: TodoDTO = {
      title: form.get("title") as string,
      status: false,
    };

    const { error } = await todoController.createTodo(supabase, todo);

    if (error?.message) throw new Error(error.message);
    revalidatePath("/");
    redirect("/");
  }

  return (
    <CreateTodoContainer>
      <form action={createTodo} className="w-4/12">
        <div className="bg-gray-100 p-4 rounded-tr-md rounded-tl-md">
          <CreateTodoTitle />
          <Input type="text" name="title" placeholder="task" required />
        </div>

        <CreateTodoAction />
      </form>
    </CreateTodoContainer>
  );
}
