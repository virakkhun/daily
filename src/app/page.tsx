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
        <div className="p-4 flex items-center gap-4 w-full mt-4 bg-gray-100 rounded-md">
          <div className="w-fit">
            <Suspense fallback={<WeatherFallback />}>
              <AsyncWeather weather={weather} />
            </Suspense>
          </div>
          <div className="w-0.5 h-8 bg-gray-300 rounded-md" />
          <div className="w-full">
            <Suspense fallback={<QuoteFallback />}>
              <Quote qoute={quote} />
            </Suspense>
          </div>
        </div>
        <TodoContainer>
          <Suspense fallback={<TodoListFallback />}>
            <AsyncTodoList todos={resourse} />
          </Suspense>
        </TodoContainer>
      </Flex>
    </React.Fragment>
  );
}
