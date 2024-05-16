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
import { WeatherDTO } from "./_infrastructure/dto/weather.dto";

async function weather() {
  const lat = 11.556374;
  const long = 104.928207;
  const url = `https://ai-weather-by-meteosource.p.rapidapi.com/current?lat=${lat}&lon=${long}&timezone=auto&language=en&units=auto`;
  const host = process.env.RAPID_HOST!;
  const key = process.env.RAPID_API_KEY!;

  const response = await fetch(url, {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": key,
      "X-RapidAPI-Host": host,
    },
  });

  const data = await response.json();
  return data as Promise<WeatherDTO>;
}

export default async function Home() {
  const supabase = createClient(cookies());
  const resourse = todoController.getTodos(supabase);
  const weatherResource = weather();

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
