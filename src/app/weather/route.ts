import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const lat = req.geo?.latitude || 11.556374;
  const long = req.geo?.longitude || 104.928207;
  const url = `https://ai-weather-by-meteosource.p.rapidapi.com/current?lat=${lat}&lon=${long}&timezone=auto&language=en&units=auto`;
  const host = process.env.RAPID_HOST!;
  const key = process.env.RAPID_API_KEY!;

  const response = await fetch(url, {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": key,
      "X-RapidAPI-Host": host,
    },
  });

  const data = await response.json();
  return Response.json(data, { status: 200 });
}
