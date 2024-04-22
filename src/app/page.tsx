import { todoController } from "./_applications/controllers/todo.controller";
import { TodoContainer } from "./_components/todo-container";
import { Suspense } from "react";
import { TodoList } from "./_components/todo-list";
import { Button } from "@/core/components/button";
import Link from "next/link";
import { createClient } from "@/core/applications/services/supabase";
import { cookies } from "next/headers";

export default async function Home() {
  const supabase = createClient(cookies());
  const { data: todos } = await todoController.getTodos(supabase);

  return (
    <main className="w-full h-svh flex justify-center items-center">
      <TodoContainer>
        <Suspense fallback="loading...">
          <TodoList todos={todos} />
        </Suspense>

        <Link href="/create-todo">
          <Button size="full">Add</Button>
        </Link>
      </TodoContainer>
    </main>
  );
}
