import { WeatherDTO } from "../dto/weather.dto";

export const WeatherAPI = {
  get: async (): Promise<WeatherDTO> => {
    const endpoint = `${process.env.HOST}/weather`;
    const res = await fetch(endpoint, { method: "GET" });
    return await res.json();
  },
};
