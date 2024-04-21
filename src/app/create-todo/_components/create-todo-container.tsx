"use client";

import React from "react";

type Props = {
  children: React.ReactNode;
};

export function CreateTodoContainer(props: Props) {
  return (
    <main className="w-full h-svh flex justify-center items-center">
      {props.children}
    </main>
  );
}
