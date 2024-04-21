"use client";

import { ReactNode } from "react";

type Props = Readonly<{
  children: ReactNode;
}>;

export function TodoContainer(props: Props) {
  return (
    <div className="flex flex-col gap-6 p-8 rounded-lg bg-gray-100">
      <h1 className="text-3xl font-bold">Todo</h1>
      {props.children}
    </div>
  );
}
