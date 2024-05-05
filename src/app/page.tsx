import { TodoContainer } from "./_components/todo-container";
import React, { Suspense } from "react";
import { AsyncTodoList } from "./_components/todo-list";
import { Button } from "@/core/components/button";
import Link from "next/link";
import { Header } from "./_components/header";
import { cookies } from "next/headers";
import { createClient } from "@/core/applications/services/supabase";
import { todoController } from "./_applications/controllers/todo.controller";
import { AsyncLoggedInUserProfile } from "./_components/logged-in-user-profile";
import { ProfileController } from "./profile/_applications/controllers/profile.controller";

export default async function Home() {
  const supabase = createClient(cookies());
  const resourse = todoController.getTodos(supabase);
  const loggedInProfile = ProfileController.get(supabase);

  return (
    <React.Fragment>
      <Header>
        <Suspense fallback={<p>loading...</p>}>
          <AsyncLoggedInUserProfile profile={loggedInProfile} />
        </Suspense>
      </Header>
      <main className="container lg:px-36 md:px-16 px-4 mt-8 w-full flex justify-start items-center">
        <TodoContainer>
          <Suspense fallback="loading...">
            <AsyncTodoList todos={resourse} />
          </Suspense>

          <Link href="/create-todo">
            <Button size="full">Add</Button>
          </Link>
        </TodoContainer>
      </main>
    </React.Fragment>
  );
}
