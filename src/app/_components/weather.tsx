import { Flex } from "@/core/components/flex";
import { Weather } from "../_domains/models/weather";
import { Loading } from "./loading";

type Props = {
  weather: Promise<Weather>;
};

export async function AsyncWeather(props: Props) {
  const { temp } = await props.weather;
  return (
    <Flex align="center" justify="center">
      <span>{temp}</span> &#176;
    </Flex>
  );
}

export function WeatherFallback() {
  return (
    <Flex align="center" justify="center">
      <Loading w="w-4" h="h-4" />
    </Flex>
  );
}
