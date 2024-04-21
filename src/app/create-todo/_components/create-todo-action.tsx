import { Button } from "@/core/components/button";
import { Flex } from "@/core/components/flex";
import Link from "next/link";

export function CreateTodoAction() {
  return (
    <div className="px-2 py-4 bg-gray-50 rounded-br-md rounded-bl-md">
      <Flex justify="end">
        <Link href="/">
          <Button type="button" intent="secondary" padding="sm" size="fit">
            Cancel
          </Button>
        </Link>
        <Button type="submit" size="fit" padding="sm">
          Submit
        </Button>
      </Flex>
    </div>
  );
}
