import { getWeatherAPI } from "@/app/_infrastructure/apis/weather.api";

export const WeatherController = {
  get: getWeatherAPI,
};
