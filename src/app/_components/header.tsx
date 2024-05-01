"use client";

import { Flex } from "@/core/components/flex";

type Props = {
  children: React.ReactNode;
};

export function Header(props: Props) {
  return (
    <header className="border-b border-b-gray-200">
      <div className="mx-auto lg:px-36 md:px-16 px-4 py-4">
        <Flex justify="between">
          <h1 className="font-bold text-lg">yourdaily</h1>

          {props.children}
        </Flex>
      </div>
    </header>
  );
}
