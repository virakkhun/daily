import { todoController } from "./_applications/controllers/todo.controller";
import { TodoContainer } from "./_components/todo-container";
import React, { Suspense } from "react";
import { TodoList } from "./_components/todo-list";
import { Button } from "@/core/components/button";
import Link from "next/link";
import { createClient } from "@/core/applications/services/supabase";
import { cookies } from "next/headers";
import { Header } from "./_components/header";

export default async function Home() {
  const supabase = createClient(cookies());
  const { data: todos } = await todoController.getTodos(supabase);

  return (
    <React.Fragment>
      <Header />
      <main className="container lg:px-36 md:px-16 px-4 mt-8 w-full flex justify-start items-center">
        <TodoContainer>
          <Suspense fallback="loading...">
            <TodoList todos={todos} />
          </Suspense>

          <Link href="/create-todo">
            <Button size="full">Add</Button>
          </Link>
        </TodoContainer>
      </main>
    </React.Fragment>
  );
}
