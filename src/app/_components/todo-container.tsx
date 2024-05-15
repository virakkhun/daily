"use client";

import { ReactNode } from "react";
import { CreateTodoDialog } from "./create-todo-dialog";

type Props = Readonly<{
  children: ReactNode;
}>;

export function TodoContainer(props: Props) {
  return (
    <div className="lg:w-1/3 md:w-2/4 w-full flex flex-col gap-6 my-4">
      <h1 className="text-3xl font-bold">Todo</h1>
      {props.children}
      <CreateTodoDialog />
    </div>
  );
}
