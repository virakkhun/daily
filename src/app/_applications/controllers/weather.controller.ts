import { WeatherAPI } from "@/app/_infrastructure/apis/weather.api";

export const WeatherController = {
  get: () => WeatherAPI.get(),
};
