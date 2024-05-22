"use server";

import { Weather } from "@/app/_domains/models/weather";

export async function getWeatherAPI(): Promise<Weather> {
  const host = process.env.HOST;
  const res = await fetch(`${host}/weather`);
  const data = await res.json();
  return data;
}
