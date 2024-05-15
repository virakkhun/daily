"use client";

import { Flex } from "@/core/components/flex";
import Link from "next/link";

type Props = {
  children: React.ReactNode;
};

export function Header(props: Props) {
  return (
    <header className="border-b border-b-gray-200 ">
      <div className="mx-auto lg:px-36 md:px-16 px-4 h-20 flex justify-center items-center">
        <Flex justify="between">
          <h1 className="font-bold text-lg">
            <Link href="/">yourdaily</Link>
          </h1>
          {props.children}
        </Flex>
      </div>
    </header>
  );
}
