"use server";

import { Weather } from "@/app/_domains/models/weather";

export async function getWeatherAPI(): Promise<Weather> {
  const res = await fetch("http://localhost:3000/weather");
  const data = await res.json();
  return data;
}
