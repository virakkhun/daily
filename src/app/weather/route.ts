export async function GET(req: Request) {
  const apiKey = process.env.NINJA_API_KEY;
  const lat = req.headers.get("x-vercel-ip-latitude") || 11.568042;
  const lon = req.headers.get("x-vercel-ip-longitude") || 104.910841;
  const q = `?lat=${lat}&lon=${lon}`;
  const url = "https://api.api-ninjas.com/v1/weather";
  const res = await fetch(`${url}${q}`, {
    headers: {
      "X-Api-Key": apiKey!,
    },
  });
  const data = await res.json();
  return new Response(JSON.stringify(data), { status: 200 });
}
