"use client";

import { Flex } from "@/core/components/flex";

export function ProfileLoading() {
  return (
    <div className="w-full">
      <div className="w-full h-64 rounded-br-lg rounded-bl-lg bg-gray-200 animate-pulse" />
      <div className="-translate-y-20">
        <Flex direction="col">
          <div className="w-32 h-32 rounded-full bg-gray-100 animate-pulse" />
          <div className="w-40 h-6 rounded-md bg-gray-100 animate-pulse" />
        </Flex>
      </div>
    </div>
  );
}
