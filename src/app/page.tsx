import { TodoContainer } from "./_components/todo-container";
import React, { Suspense } from "react";
import { AsyncTodoList } from "./_components/todo-list";
import { supbaseServerClient } from "@/core/applications/services/supabase";
import { todoController } from "./_applications/controllers/todo.controller";
import { Flex } from "@/core/components/flex";
import { TodoListFallback } from "./_components/todo-list-fallback";

export default async function Home() {
  const supabase = supbaseServerClient();
  const resourse = todoController.getTodos(supabase);

  return (
    <React.Fragment>
      <Flex gap="lg" justify="start" align="start" direction="col">
        <TodoContainer>
          <Suspense fallback={<TodoListFallback />}>
            <AsyncTodoList todos={resourse} />
          </Suspense>
        </TodoContainer>
      </Flex>
    </React.Fragment>
  );
}
