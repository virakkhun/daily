import { TodoContainer } from "./_components/todo-container";
import React, { Suspense } from "react";
import { AsyncTodoList } from "./_components/todo-list";
import { supbaseServerClient } from "@/core/applications/services/supabase";
import { TodoController } from "./_applications/controllers/todo.controller";
import { Flex } from "@/core/components/flex";
import { TodoListFallback } from "./_components/todo-list-fallback";
import { Quote, QuoteFallback } from "./_components/qoute";
import { QuoteController } from "./_applications/controllers/quote.controller";

export default async function Home() {
  const supabase = supbaseServerClient();
  const resourse = TodoController.getTodos(supabase);
  const quote = QuoteController.get();

  return (
    <React.Fragment>
      <Flex gap="lg" justify="start" align="start" direction="col">
        <Suspense fallback={<QuoteFallback />}>
          <Quote qoute={quote} />
        </Suspense>
        <TodoContainer>
          <Suspense fallback={<TodoListFallback />}>
            <AsyncTodoList todos={resourse} />
          </Suspense>
        </TodoContainer>
      </Flex>
    </React.Fragment>
  );
}
