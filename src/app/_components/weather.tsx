import { Weather } from "../_domains/models/weather";
import { Loading } from "./loading";

type Props = {
  weather: Promise<Weather>;
};

export async function AsyncWeather(props: Props) {
  const { temp } = await props.weather;
  return (
    <div className="h-full w-20 text-center font-semibold">{temp} &#176;</div>
  );
}

export function WeatherFallback() {
  return (
    <div className="h-full w-20 text-center font-semibold">
      <Loading w="w-4" h="h-4" />
    </div>
  );
}
