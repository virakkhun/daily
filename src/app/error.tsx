"use client";

import { Button } from "@/core/components/button";
import { Flex } from "@/core/components/flex";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="w-full h-svh flex justify-center items-center">
      <Flex direction="col">
        <h2 className="text-2xl font-semibold">Something went wrong!</h2>
        <p className="text-gray-500 mb-4">{error.message}</p>
        <Button intent="secondary" onClick={() => reset()}>
          reset
        </Button>
      </Flex>
    </div>
  );
}
