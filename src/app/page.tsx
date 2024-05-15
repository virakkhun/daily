import { TodoContainer } from "./_components/todo-container";
import React, { Suspense } from "react";
import { AsyncTodoList } from "./_components/todo-list";
import { cookies } from "next/headers";
import { createClient } from "@/core/applications/services/supabase";
import { todoController } from "./_applications/controllers/todo.controller";
import { WeatherController } from "./_applications/controllers/weather.controller";
import { WeatherWidget } from "./_components/weather-widget";
import { Flex } from "@/core/components/flex";
import { TodoListFallback } from "./_components/todo-list-fallback";

export default async function Home() {
  const supabase = createClient(cookies());
  const resourse = todoController.getTodos(supabase);
  const weatherResource = WeatherController.get();

  return (
    <React.Fragment>
      <Flex gap="lg" justify="start" align="start" direction="col">
        <Suspense fallback="loading weather...">
          <WeatherWidget weather={weatherResource} />
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
