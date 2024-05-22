"use server";

import { Weather } from "@/app/_domains/models/weather";

export async function getWeatherAPI(): Promise<Weather> {
  const url = "https://worker-broken-bird-bb78.rakmanoban.workers.dev/weather";
  const res = await fetch(url);
  const data = await res.json();
  return data;
}
