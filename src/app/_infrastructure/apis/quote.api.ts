"use server";

import { Quote } from "@/app/_domains/models/quoute";

export async function getQuoteAPI(): Promise<Quote> {
  const url = "https://worker-broken-bird-bb78.rakmanoban.workers.dev/quote";
  const res = await fetch(url);
  const data = await res.json();

  return data;
}
