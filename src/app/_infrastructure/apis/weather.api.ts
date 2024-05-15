import { WeatherDTO } from "../dto/weather.dto";

export const WeatherAPI = {
  get: async (): Promise<WeatherDTO> => {
    const endpoint = `${process.env.HOST}/api`;
    const res = await fetch(endpoint);
    return await res.json();
  },
};
