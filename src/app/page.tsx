import { TodoContainer } from "./_components/todo-container";
import React, { Suspense } from "react";
import { AsyncTodoList } from "./_components/todo-list";
import { supbaseServerClient } from "@/core/applications/services/supabase";
import { TodoController } from "./_applications/controllers/todo.controller";
import { Flex } from "@/core/components/flex";
import { TodoListFallback } from "./_components/todo-list-fallback";
import { Quote, QuoteFallback } from "./_components/qoute";
import { QuoteController } from "./_applications/controllers/quote.controller";
import { AsyncWeather, WeatherFallback } from "./_components/weather";
import { WeatherController } from "./_applications/controllers/weather.controller";

export default async function Home() {
  const supabase = supbaseServerClient();
  const resourse = TodoController.getTodos(supabase);
  const quote = QuoteController.get();
  const weather = WeatherController.get();

  return (
    <React.Fragment>
      <Flex gap="lg" justify="start" align="start" direction="col">
        <Flex>
          <Suspense fallback={<WeatherFallback />}>
            <AsyncWeather weather={weather} />
          </Suspense>
          <div className="w-0.5 h-full bg-gray-500/20 rounded-lg" />
          <Suspense fallback={<QuoteFallback />}>
            <Quote qoute={quote} />
          </Suspense>
        </Flex>
        <TodoContainer>
          <Suspense fallback={<TodoListFallback />}>
            <AsyncTodoList todos={resourse} />
          </Suspense>
        </TodoContainer>
      </Flex>
    </React.Fragment>
  );
}
