import { Flex } from "@/core/components/flex";
import { Loading } from "./loading";

export function TodoListFallback() {
  const skeletons = new Array(4).fill(
    <Loading shape="square" w="w-full" h="h-8" />,
  );

  return <Flex direction="col">{...skeletons}</Flex>;
}
