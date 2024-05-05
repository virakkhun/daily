import { Flex } from "@/core/components/flex";

export function AuthContainerHeader() {
  return (
    <Flex direction="col">
      <h1 className="md:text-3xl text-2xl font-semibold">
        Welcome to yourdaily
      </h1>
      <p className="text-gray-500">easily manage your daily basis</p>
    </Flex>
  );
}
