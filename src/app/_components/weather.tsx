import { Flex } from "@/core/components/flex";
import { Loading } from "./loading";
import { Weather } from "../_domains/models/weather";

type Props = {
  weather: Promise<Weather>;
};

export async function AsyncWeather(props: Props) {
  const { temp } = await props.weather;

  return (
    <Flex align="center" justify="center">
      &#176;<span className="font-semibold">{temp}</span>
    </Flex>
  );
}

export function WeatherFallback() {
  return (
    <Flex align="center" justify="center">
      <Loading w="w-10" h="h-4" />
    </Flex>
  );
}
