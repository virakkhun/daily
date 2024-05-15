import { Flex } from "@/core/components/flex";
import { WeatherDTO } from "../_infrastructure/dto/weather.dto";
import Image from "next/image";

type Props = {
  weather: Promise<WeatherDTO>;
};

export async function WeatherWidget(props: Props) {
  const data = await props.weather;
  const { current } = data;

  return (
    <div className="my-4">
      <Flex direction="col">
        <Image
          src={`https://www.meteosource.com/static/img/ico/weather/${current.icon_num}.svg`}
          alt="weather icon condition"
          width={40}
          height={40}
        />
        <p className="text-lg font-bold">{current.temperature}&deg;</p>
        <p className="text-sm text-gray-500">{current.summary}</p>
      </Flex>
    </div>
  );
}
