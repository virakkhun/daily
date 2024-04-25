"use client";

import { Flex } from "@/core/components/flex";
import { SignUpButton } from "./sign-up-button";

export function Header() {
  return (
    <header className="border-b border-b-gray-200">
      <div className="mx-auto lg:px-36 md:px-16 px-4 py-4">
        <Flex justify="between">
          <h1>yourdaily</h1>
          <form action="/auth/signout" method="POST">
            <SignUpButton />
          </form>
        </Flex>
      </div>
    </header>
  );
}
