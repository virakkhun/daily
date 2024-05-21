import { Flex } from "@/core/components/flex";
import { Quote as Q } from "../_domains/models/quoute";
import { Loading } from "./loading";

type Props = {
  qoute: Promise<Q>;
};

export async function Quote(props: Props) {
  const data = await props.qoute;

  return (
    <div className="mt-4 w-full px-4 py-6 bg-gray-100 rounded-md">
      <h2 className="text-base font-semibold">{data.quote}</h2>
      <p className="text-sm text-gray-500">{data.author}</p>
    </div>
  );
}

export function QuoteFallback() {
  return (
    <div className="mt-4 w-3/4 px-4 py-6">
      <Flex justify="start" align="start" direction="col">
        <Loading w="w-full" h="h-8" />
        <Loading w="w-20" h="h-6" />
      </Flex>
    </div>
  );
}
